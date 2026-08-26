// This component was taken from the Reactbits Team
// https://reactbits.dev/animations/pixel-swap

"use client";

import {
  CSSProperties,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from 'react';

export type PixelSwapPattern =
  | 'random'
  | 'center'
  | 'edges'
  | 'left-to-right'
  | 'right-to-left'
  | 'top-to-bottom'
  | 'bottom-to-top'
  | 'diagonal'
  | 'spiral';

export type PixelSwapTrigger = 'hover' | 'click' | 'manual' | 'viewport';

export interface PixelSwapProps {
  firstContent: ReactNode;
  secondContent: ReactNode;
  pixelSize?: number;
  gap?: number;
  pixelRadius?: number;
  pixelSpin?: number;
  pixelScale?: number;
  fade?: boolean;
  duration?: number;
  pixelDuration?: number;
  pattern?: PixelSwapPattern;
  randomness?: number;
  easing?: string;
  trigger?: PixelSwapTrigger;
  viewportThreshold?: number;
  maxPixels?: number;
  initialActive?: boolean;
  active?: boolean;
  onActiveChange?: (active: boolean) => void;
  onComplete?: (active: boolean) => void;
  aspectRatio?: string;
  className?: string;
  style?: CSSProperties;
}

interface Pixel {
  id: number;
  left: number;
  top: number;
  offset: number;
}

interface Grid {
  pixels: Pixel[];
  size: number;
  gap: number;
  width: number;
  height: number;
}

interface Transition {
  to: boolean;
  grid: Grid;
}
const DEFAULT_MAX_PIXELS = 160;

const PATTERNS: Record<PixelSwapPattern, (x: number, y: number) => number | null> = {
  random: () => null,
  center: (x, y) => Math.hypot(x - 0.5, y - 0.5) / Math.SQRT1_2,
  edges: (x, y) => Math.min(x, 1 - x, y, 1 - y) * 2,
  'left-to-right': x => x,
  'right-to-left': x => 1 - x,
  'top-to-bottom': (_x, y) => y,
  'bottom-to-top': (_x, y) => 1 - y,
  diagonal: (x, y) => (x + y) / 2,
  spiral: (x, y) => {
    const angle = (Math.atan2(y - 0.5, x - 0.5) + Math.PI) / (Math.PI * 2);
    const radius = Math.hypot(x - 0.5, y - 0.5) / Math.SQRT1_2;
    return (angle + radius) % 1;
  }
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const finiteOr = (value: number, fallback: number): number =>
  Number.isFinite(value) ? value : fallback;

const noise = (seed: number): number => {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
};

const safeEasing = (value: string): string =>
  typeof CSS !== 'undefined' && CSS.supports('animation-timing-function', value)
    ? value
    : 'ease';

// Pixels grow slightly past their own box so gaps and rounded corners close
// completely by the end. Overlap is invisible because every pixel shows the
// same content locked to the same origin.
const coverScale = (size: number, gap: number, radius: number): number => {
  const p = clamp(radius, 0, 50) / 100;
  const corner = Math.SQRT1_2 / (Math.SQRT2 * (0.5 - p) + p);
  return ((size + gap) / size) * Math.max(1, corner);
};

const buildGrid = ({
  width,
  height,
  pixelSize,
  gap,
  pattern,
  randomness,
  maxPixels
}: {
  width: number;
  height: number;
  pixelSize: number;
  gap: number;
  pattern: PixelSwapPattern;
  randomness: number;
  maxPixels: number;
}): Grid => {
  if (width <= 0 || height <= 0) {
    return { pixels: [], size: pixelSize, gap, width, height };
  }

  let size = pixelSize;
  let columns = Math.max(1, Math.ceil((width + gap) / (size + gap)));
  let rows = Math.max(1, Math.ceil((height + gap) / (size + gap)));

  if (columns * rows > maxPixels) {
    size = Math.ceil(size * Math.sqrt((columns * rows) / maxPixels));
    columns = Math.max(1, Math.ceil((width + gap) / (size + gap)));
    rows = Math.max(1, Math.ceil((height + gap) / (size + gap)));
  }

  // Overhang the box so edge pixels stay square instead of being cut short.
  const stride = size + gap;
  const originX = (width - (columns * stride - gap)) / 2;
  const originY = (height - (rows * stride - gap)) / 2;
  const order = PATTERNS[pattern] ?? PATTERNS.random;
  const mix = clamp(randomness, 0, 1);
  const pixels: Pixel[] = [];

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const index = row * columns + column;
      const x = columns <= 1 ? 0.5 : column / (columns - 1);
      const y = rows <= 1 ? 0.5 : row / (rows - 1);
      const base = order(x, y);
      const random = noise(index + 1);

      pixels.push({
        id: index,
        left: originX + column * stride,
        top: originY + row * stride,
        offset: base === null ? random : base * (1 - mix) + random * mix
      });
    }
  }

  return { pixels, size, gap, width, height };
};

function PixelSwap({
  firstContent,
  secondContent,
  pixelSize = 64,
  gap = 0,
  pixelRadius = 0,
  pixelSpin = 0,
  pixelScale = 0.35,
  fade = true,
  duration = 1400,
  pixelDuration = 450,
  pattern = 'random',
  randomness = 0,
  easing = 'cubic-bezier(0.22, 1, 0.36, 1)',
  trigger = 'hover',
  viewportThreshold = 0.25,
  maxPixels = DEFAULT_MAX_PIXELS,
  initialActive = false,
  active,
  onActiveChange,
  onComplete,
  aspectRatio = '16 / 10',
  className = '',
  style
}: PixelSwapProps) {
  const [internalActive, setInternalActive] = useState(initialActive);
  const [shownActive, setShownActive] = useState(active ?? initialActive);
  const [transition, setTransition] = useState<Transition | null>(null);
  const [box, setBox] = useState({ width: 0, height: 0 });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const maskRectRefs = useRef<(SVGRectElement | null)[]>([]);
  const animationsRef = useRef<Animation[]>([]);
  const timerRef = useRef(0);
  const viewportTriggeredRef = useRef(false);
  const reactId = useId();
  const maskId = `pixel-swap-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  const desiredActive = active ?? internalActive;
  const incomingIndex = transition?.to ? 1 : 0;

  const grid = useMemo(
    () =>
      buildGrid({
        width: box.width,
        height: box.height,
        pixelSize: Math.max(8, Math.round(finiteOr(pixelSize, 64))),
        gap: Math.max(0, Math.round(finiteOr(gap, 0))),
        pattern,
        randomness: finiteOr(randomness, 0),
        maxPixels: clamp(
          Math.round(finiteOr(maxPixels, DEFAULT_MAX_PIXELS)),
          16,
          256
        )
      }),
    [box.width, box.height, gap, maxPixels, pattern, pixelSize, randomness]
  );

  // Snapshot the animation inputs so a transition already in flight is never
  // rebuilt halfway through by an unrelated prop change.
  const config = useMemo(
    () => ({ duration, pixelDuration, pixelSpin, pixelScale, pixelRadius, fade, easing, onComplete }),
    [duration, easing, fade, onComplete, pixelDuration, pixelRadius, pixelScale, pixelSpin]
  );
  const configRef = useRef(config);
  const gridRef = useRef(grid);

  useEffect(() => {
    configRef.current = config;
  }, [config]);

  useEffect(() => {
    gridRef.current = grid;
  }, [grid]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Measure the padding box, which is the coordinate space the absolutely
    // positioned layers and pixel grid actually live in.
    const measure = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;
      setBox(current => (current.width === width && current.height === height ? current : { width, height }));
    };

    measure();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }

    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const stopAnimations = useCallback(() => {
    animationsRef.current.forEach(animation => animation.cancel());
    animationsRef.current = [];
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = 0;
  }, []);

  useEffect(() => stopAnimations, [stopAnimations]);

  useEffect(() => {
    if (transition || desiredActive === shownActive) return;
    setTransition({ to: desiredActive, grid: gridRef.current });
  }, [desiredActive, shownActive, transition]);

  useEffect(() => {
    if (!transition) return;
    const settings = configRef.current;
    const { grid: frozenGrid, to } = transition;

    const finish = () => {
      stopAnimations();
      setShownActive(to);
      setTransition(null);
      settings.onComplete?.(to);
    };

    const maskRects = maskRectRefs.current.slice(0, frozenGrid.pixels.length);
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const canAnimate =
      maskRects.length === frozenGrid.pixels.length &&
      maskRects.every((rect): rect is SVGRectElement => Boolean(rect && typeof rect.animate === 'function'));

    if (!frozenGrid.pixels.length || prefersReducedMotion || !canAnimate) {
      finish();
      return;
    }

    const total = Math.max(200, finiteOr(settings.duration, 1400));
    const pixelMs = clamp(finiteOr(settings.pixelDuration, 450), 60, total);
    const spread = Math.max(0, total - pixelMs);
    const safeRadius = finiteOr(settings.pixelRadius, 0);
    const endScale = coverScale(frozenGrid.size, frozenGrid.gap, safeRadius);
    const startScale = clamp(finiteOr(settings.pixelScale, 0.35), 0.05, 1) * endScale;
    const spin = finiteOr(settings.pixelSpin, 0);
    const animationEasing = safeEasing(settings.easing);

    frozenGrid.pixels.forEach((pixel, index) => {
      const rect = maskRects[index];

      const timing: KeyframeAnimationOptions = {
        duration: pixelMs,
        delay: pixel.offset * spread,
        easing: animationEasing,
        fill: 'both'
      };
      animationsRef.current.push(rect.animate(
        [
          {
            opacity: settings.fade ? 0 : 1,
            transform: `rotate(${spin}deg) scale(${startScale})`
          },
          {
            opacity: 1,
            transform: `rotate(0deg) scale(${endScale})`
          }
        ],
        timing
      ));
    });

    timerRef.current = window.setTimeout(finish, total);
    return stopAnimations;
  }, [stopAnimations, transition]);

  const requestActive = useCallback(
    (next: boolean) => {
      if (active === undefined) setInternalActive(next);
      onActiveChange?.(next);
    },
    [active, onActiveChange]
  );

  useEffect(() => {
    if (trigger !== 'viewport' || viewportTriggeredRef.current) return;

    const container = containerRef.current;
    if (!container) return;

    const activateOnce = () => {
      if (viewportTriggeredRef.current) return;
      viewportTriggeredRef.current = true;
      requestActive(true);
    };

    if (typeof IntersectionObserver === 'undefined') {
      activateOnce();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        activateOnce();
        observer.disconnect();
      },
      {
        threshold: clamp(finiteOr(viewportThreshold, 0.25), 0, 1)
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [requestActive, trigger, viewportThreshold]);

  const interactionProps = useMemo(() => {
    if (trigger === 'hover') {
      return {
        onMouseEnter: () => requestActive(true),
        onMouseLeave: () => requestActive(false),
        onFocus: () => requestActive(true),
        onBlur: () => requestActive(false),
        tabIndex: 0
      };
    }

    if (trigger === 'click') {
      return {
        onClick: () => requestActive(!desiredActive),
        onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            requestActive(!desiredActive);
          }
        },
        role: 'button',
        'aria-pressed': desiredActive,
        tabIndex: 0
      };
    }

    return {};
  }, [desiredActive, requestActive, trigger]);

  const renderLayer = (content: ReactNode, index: number) => {
    const isCurrent = index === (shownActive ? 1 : 0);
    const isIncoming = Boolean(transition && index === incomingIndex);
    const isVisible = isCurrent || isIncoming;
    const maskReference = `url(#${maskId})`;

    return (
      <div
        key={index}
        className="absolute inset-0 h-full w-full"
        data-visible={isVisible}
        style={{
          visibility: isVisible ? 'visible' : 'hidden',
          zIndex: isIncoming ? 2 : isCurrent ? 1 : 0,
          ...(isIncoming
            ? {
                mask: maskReference,
                WebkitMask: maskReference
              }
            : {})
        }}
        aria-hidden={!isCurrent}
      >
        {content}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`relative isolate w-full overflow-hidden outline-none ${className}`.trim()}
      style={{ aspectRatio, ...style }}
      data-active={shownActive}
      data-transitioning={!!transition}
      {...interactionProps}
    >
      {transition && (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute h-0 w-0 overflow-hidden"
          focusable="false"
        >
          <defs>
            <mask
              id={maskId}
              x={0}
              y={0}
              width={transition.grid.width}
              height={transition.grid.height}
              maskUnits="userSpaceOnUse"
              maskContentUnits="userSpaceOnUse"
              style={{ maskType: 'alpha' }}
            >
              {transition.grid.pixels.map((pixel, index) => {
                const radius = transition.grid.size * clamp(finiteOr(pixelRadius, 0), 0, 50) / 100;

                return (
                  <rect
                    key={pixel.id}
                    ref={element => {
                      maskRectRefs.current[index] = element;
                    }}
                    x={pixel.left}
                    y={pixel.top}
                    width={transition.grid.size}
                    height={transition.grid.size}
                    rx={radius}
                    ry={radius}
                    fill="white"
                    opacity={0}
                    style={{
                      transformBox: 'fill-box',
                      transformOrigin: 'center',
                      willChange: 'transform, opacity'
                    }}
                  />
                );
              })}
            </mask>
          </defs>
        </svg>
      )}

      {renderLayer(firstContent, 0)}
      {renderLayer(secondContent, 1)}
    </div>
  );
}

export default PixelSwap;
