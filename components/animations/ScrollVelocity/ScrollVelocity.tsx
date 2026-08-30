// This component was taken from the Reactbits Team
// https://reactbits.dev/text-animations/scroll-velocity

"use client";

import clsx from "clsx";
import {
  motion,
  type MotionValue,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import {
  type CSSProperties,
  type ReactNode,
  type RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

type FrameUpdate = (delta: number) => void;
type RegisterFrameUpdate = (update: FrameUpdate) => () => void;

interface VelocityTextProps {
  children: ReactNode;
  baseVelocity: number;
  className?: string;
  numCopies?: number;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: CSSProperties;
  scrollerStyle?: CSSProperties;
  velocityFactor: MotionValue<number>;
  isActive: boolean;
  registerFrameUpdate: RegisterFrameUpdate;
}

interface ScrollVelocityProps {
  scrollContainerRef?: RefObject<HTMLElement | null>;
  texts: ReactNode[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: CSSProperties;
  scrollerStyle?: CSSProperties;
}

interface MarqueeMeasurements {
  containerWidth: number;
  copyWidth: number;
}

const DEFAULT_VELOCITY_MAPPING: VelocityMapping = {
  input: [0, 1000],
  output: [0, 5],
};

const MIN_COPY_COUNT = 2;
const IN_VIEW_MARGIN = "200px 0px";

function wrap(min: number, max: number, value: number): number {
  const range = max - min;
  const mod = (((value - min) % range) + range) % range;

  return mod + min;
}

function useMarqueeMeasurements(
  containerRef: RefObject<HTMLDivElement | null>,
  copyRef: RefObject<HTMLSpanElement | null>,
): MarqueeMeasurements {
  const [measurements, setMeasurements] = useState<MarqueeMeasurements>({
    containerWidth: 0,
    copyWidth: 0,
  });

  useLayoutEffect(() => {
    const container = containerRef.current;
    const copy = copyRef.current;

    if (!container || !copy) return;

    const updateMeasurements = () => {
      const nextMeasurements = {
        containerWidth: container.clientWidth,
        copyWidth: copy.offsetWidth,
      };

      setMeasurements((currentMeasurements) => {
        if (
          currentMeasurements.containerWidth === nextMeasurements.containerWidth &&
          currentMeasurements.copyWidth === nextMeasurements.copyWidth
        ) {
          return currentMeasurements;
        }

        return nextMeasurements;
      });
    };

    updateMeasurements();

    const resizeObserver = new ResizeObserver(updateMeasurements);
    resizeObserver.observe(container);
    resizeObserver.observe(copy);

    return () => resizeObserver.disconnect();
  }, [containerRef, copyRef]);

  return measurements;
}

function VelocityText({
  children,
  baseVelocity,
  className = "",
  numCopies,
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
  velocityFactor,
  isActive,
  registerFrameUpdate,
}: VelocityTextProps) {
  const baseX = useMotionValue(0);
  const directionFactor = useRef(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLSpanElement>(null);
  const { containerWidth, copyWidth } = useMarqueeMeasurements(
    containerRef,
    copyRef,
  );

  const automaticCopyCount =
    copyWidth > 0
      ? Math.ceil(containerWidth / copyWidth) + 1
      : MIN_COPY_COUNT;
  const copyCount = Math.max(
    MIN_COPY_COUNT,
    Math.ceil(numCopies ?? automaticCopyCount),
  );

  const x = useTransform(baseX, (value) => {
    if (copyWidth === 0) return "0px";

    return `${wrap(-copyWidth, 0, value)}px`;
  });

  const updatePosition = useCallback(
    (delta: number) => {
      if (baseVelocity === 0) return;

      const currentVelocityFactor = velocityFactor.get();

      if (currentVelocityFactor < 0) {
        directionFactor.current = -1;
      } else if (currentVelocityFactor > 0) {
        directionFactor.current = 1;
      }

      const baseMove =
        directionFactor.current * baseVelocity * (delta / 1000);
      const moveBy =
        baseMove +
        directionFactor.current * baseMove * currentVelocityFactor;

      baseX.set(baseX.get() + moveBy);
    },
    [baseVelocity, baseX, velocityFactor],
  );

  useEffect(
    () => registerFrameUpdate(updatePosition),
    [registerFrameUpdate, updatePosition],
  );

  return (
    <div
      ref={containerRef}
      className={clsx(parallaxClassName, "relative overflow-hidden")}
      style={parallaxStyle}
    >
      <motion.div
        className={clsx(
          scrollerClassName,
          "flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] md:text-[5rem] md:leading-[5rem]",
        )}
        style={{
          x,
          willChange: isActive ? "transform" : "auto",
          ...scrollerStyle,
        }}
      >
        {Array.from({ length: copyCount }, (_, index) => (
          <span
            aria-hidden={index > 0}
            className={clsx("flex-shrink-0", className)}
            key={index}
            ref={index === 0 ? copyRef : null}
          >
            {children}&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ScrollVelocity({
  scrollContainerRef,
  texts = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies,
  velocityMapping = DEFAULT_VELOCITY_MAPPING,
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}: ScrollVelocityProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const frameUpdatesRef = useRef(new Set<FrameUpdate>());
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(sectionRef, {
    margin: IN_VIEW_MARGIN,
    root: scrollContainerRef,
  });
  const isActive = isInView && !shouldReduceMotion;

  const { scrollY } = useScroll(
    scrollContainerRef ? { container: scrollContainerRef } : undefined,
  );
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping,
    stiffness,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping.input,
    velocityMapping.output,
    { clamp: false },
  );

  const registerFrameUpdate = useCallback<RegisterFrameUpdate>((update) => {
    frameUpdatesRef.current.add(update);

    return () => {
      frameUpdatesRef.current.delete(update);
    };
  }, []);

  useEffect(() => {
    if (!isActive) return;

    let animationFrameId = 0;
    let previousTimestamp: number | null = null;

    const updateRows = (timestamp: number) => {
      if (previousTimestamp !== null) {
        const delta = Math.max(
          1,
          Math.min(timestamp - previousTimestamp, 40),
        );

        frameUpdatesRef.current.forEach((update) => update(delta));
      }

      previousTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(updateRows);
    };

    animationFrameId = requestAnimationFrame(updateRows);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isActive]);

  return (
    <section ref={sectionRef}>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          numCopies={numCopies}
          velocityFactor={velocityFactor}
          isActive={isActive}
          registerFrameUpdate={registerFrameUpdate}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}
        </VelocityText>
      ))}
    </section>
  );
}

export default ScrollVelocity;
