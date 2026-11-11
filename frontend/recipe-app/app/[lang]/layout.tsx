import { Tajawal } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toast";
import { Suspense } from "react";
import AuthReasonToast from "@/components/AuthReasonToast";
import AuthExpiryWatcher from "@/components/AuthExpiryWatcher";
import { Metadata } from "next";
import logo from "@/assets/Orange Chef Hat App Icon.png";
import AnimationLayout from "@/components/shared/AnimationLayout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { isLocale, routing } from "@/i18n/routing";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  icons: {
    icon: logo.src,
  },
};

export function generateStaticParams() {
  return routing.locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  setRequestLocale(lang);
  const messages = await getMessages({ locale: lang });
  const direction = lang === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={lang}
      dir={direction}
      className={cn("h-full")}
      suppressHydrationWarning
    >
      <body className={`${tajawal.variable} font-sans antialiased bg-primary/5`}>
        <AnimationLayout>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <NextIntlClientProvider locale={lang} messages={messages}>
              <Toaster limit={5} />
              <Suspense>
                <AuthReasonToast />
                <AuthExpiryWatcher />
              </Suspense>
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </AnimationLayout>
      </body>
    </html>
  );
}
