'use client';

import { InputProps } from "./Input.props";
import s from "./input.module.scss";
import cn from "classnames";

export const Input = ({
    placeholder,
    name,
    type,
    label,
    error,
    options,
    colSpan,
    className,
    ...props
}: InputProps) => {
    const listId = `${name}-opts`;

    return (
        <label className={cn(
            s.form_content_container,
            colSpan === 2 && "col-span-2",
            colSpan === 1 && "col-span-1"
        )}>
            <div className="flex gap-3 items-center-safe">
                {label && <span className={s.label}>{label}</span>}
                {error &&
                    <span className="text-sm text-red-600">
                        {error}
                    </span>
                }
            </div>

            <input
                {...props}
                type={type}
                placeholder={placeholder}
                name={name}
                list={options ? listId : undefined}
                
                className={cn(
                    s.input_container,
                    className,
                    "focus:ring-2 focus:ring-blue-500",
                    "focus:outline-0 focus:ring-offset-2 focus:ring-offset-white"
                )}
            />

            {options && (
                <datalist id={listId}>
                    {options.map(v=> <option key={`opt-${v}`}>{v}</option>)}
                </datalist>
            )}
        </label>
    );
};
