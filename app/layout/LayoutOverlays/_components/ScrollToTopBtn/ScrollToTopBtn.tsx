"use client";

import { useContext, useState } from 'react';
import s from './styles.module.scss';
import { ChevronUp } from "lucide-react";
import { SmoothScrollContext } from '@/app/layout/SmoothScroll';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { cn } from '@/lib/utils';

export const ScrollToTopBtn = () => {
    const { scrollToTop } = useContext(SmoothScrollContext);
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    return (
        <button
            type="button"
            className={cn(
                s.scrollTopBtn,
                !isVisible && "opacity-0 pointer-events-none"
            )}
            onClick={scrollToTop}
        >
            <ChevronUp 
                className="text-white"
            />
        </button>
    )
}
