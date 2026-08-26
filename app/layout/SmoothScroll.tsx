'use client';

import { createContext, useCallback, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useWindowWidth } from '@/hooks';

export const SmoothScrollContext = createContext<{scrollToTop: () => void}>({
    scrollToTop: () => {},
});

export function SmoothScrollContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const scrollRef = useRef<LocomotiveScroll | null>(null);
    const isDesktop = useWindowWidth(850) as boolean;

    const scrollToTop = useCallback(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo("top");
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    useEffect(() => {
        if (!isDesktop) {
            scrollRef.current?.destroy();
            scrollRef.current = null;
            return;
        }

        scrollToTop(); // Scroll to top when switching to desktop view

        scrollRef.current = new LocomotiveScroll({
            lenisOptions: {
                duration: 1.6,
                lerp: 0.07,
                wheelMultiplier: 0.9,
                touchMultiplier: 1,
                smoothWheel: true,
                syncTouch: true,
            }
        })

        return () => {
            scrollRef.current?.destroy();
            scrollRef.current = null;
        }
    }, [isDesktop, scrollToTop]);

    return (
        <SmoothScrollContext.Provider value={{ scrollToTop }}>
            {children}
        </SmoothScrollContext.Provider>
    )
}
