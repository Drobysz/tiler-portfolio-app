"use client";

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { useContext } from "react";
import cn from 'classnames';
import { GlobalContext } from "@/app/context/global.context";
import { useWindowWidth } from "@/hooks";

interface BWInterface 
extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>, 
    HTMLDivElement
>{
    children: ReactNode
}

export const BlurWrapper = ({
    children, 
    className, 
    ...props
}: BWInterface)=> {
    const { isMenuWindowOpen } = useContext(GlobalContext);
    const isDesktop = useWindowWidth(660) as boolean;

    return (
        <div 
            {...props}
            className={cn(className, { 
                [
                    'pointer-events-none blur-sm bg-black/20'
                ]: isMenuWindowOpen && !isDesktop
            })}
        >
            {children}
        </div>
    );
};
