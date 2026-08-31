import type { Metadata } from "next";
import "./globals.css";
import s from "./layout/layout.module.scss";
import { GlobalContextProvider } from "./context/global.context";
import { SmoothScrollContextProvider } from "./layout/SmoothScroll/SmoothScroll";
import { LayoutOverlays } from "./layout/LayoutOverlays/LayoutOverlays";
import { cn } from "@/lib/utils";
import { prime_regular } from "@/fonts/fonts";
import {
  Header,
  Footer,
  BlurWrapper,
  MenuWindow,
} from "./layout/index";

export const metadata: Metadata = {
  title: {
    default: "DP Carrelage | Carreleur à Étalans",
    template: "%s | DP Carrelage",
  },
  description:
    "Carreleur à Étalans, DP Carrelage réalise vos poses de carrelage, faïence, parquet et panneaux décoratifs en Franche-Comté.",
  applicationName: "DP Carrelage",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
    >
      <body 
        className={cn(
          "min-h-full flex flex-col",
          prime_regular.className,
        )}
      >
        <GlobalContextProvider>
          <SmoothScrollContextProvider>
            <MenuWindow />
            <BlurWrapper className={s.wrapper}>
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
            </BlurWrapper>
            <LayoutOverlays />
          </SmoothScrollContextProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
