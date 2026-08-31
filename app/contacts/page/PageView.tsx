"use client";

import AscendingImagesBackground from "@/components/Backgrounds/AscendingImagesBackground/AscendingImagesBackground"
import s from "./style.module.scss";
import { useActionState, useContext, useEffect } from "react";
import { FormError, FormState } from "@/form_checker/FormScheme";
import { contactAction } from "@/form_checker/contactAction";
import forms from "@/json/contact_form.json";
import { Input, MainBtn } from "@/components";
import { CircularProgress } from "@mui/material";
import { GlobalContext } from "@/app/context/global.context";
import { useWindowWidth } from "@/hooks";

export const PageView = ()=> {
    const { setNotification } = useContext(GlobalContext);
    const isFormExtended = useWindowWidth(590) as boolean;

    const [state, action, pending] = 
        useActionState<FormState, FormData>(
            contactAction, 
            { errors: {} }
        );
    
    useEffect(()=> {
        if (state.message) {
            setNotification({
                status: state.success ? "success" : "error",
                text: state.message ?? "unknown"
            });
        }

        if (state.success && state.redirectLink) {
            window.open(state.redirectLink, "_blank");
        }
    }, [
        state.success, 
        state.message, 
        state.redirectLink,
        setNotification
    ])

    return (
         <div className={s.centralize}>
            <AscendingImagesBackground />
            <article
                className={s.contact_form_window}
            >
                <h1 className={s.title}>
                    Contact via Whatsapp
                </h1>
                <form 
                    action={action}
                    className={s.form_container}
                >
                    {forms.map(form=>
                        <Input
                            key={form.name}
                            name={form.name}
                            label={form.label}
                            placeholder={form.placeholder}
                            options={form.options}
                            error={
                                state.errors 
                                && 
                                state.errors[form.name as keyof FormError]
                                &&
                                state.errors[form.name as keyof FormError]
                            }
                            colSpan={
                                form.name == "description"
                                ||
                                !isFormExtended
                                ? 2 : 1
                            }
                        />
                    )}
                    <div className="col-span-2 flex justify-center">
                        <MainBtn
                            withArrow
                            icon="link"
                            size="lg"
                            type="submit"
                        >
                            {pending 
                                ? <CircularProgress 
                                    color="inherit"
                                    size={30}  
                                />
                                : "Contacter"}
                        </MainBtn>
                    </div>
                </form>
            </article>
        </div>
    )
}
