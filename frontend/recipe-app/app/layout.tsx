import { Tajawal } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toast";
import { Suspense } from "react";
import AuthReasonToast from "@/components/AuthReasonToast";
import AuthExpiryWatcher from "@/components/AuthExpiryWatcher";
import { Metadata } from "next";
import logo from "@/assets/Orange Chef Hat App Icon.png"

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
});


export const metadata: Metadata = {
  icons: {
    icon: logo.src,
  },
}


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cn("h-full")}
      suppressHydrationWarning
    >
      <body className={`${tajawal.variable} font-sans antialiased bg-primary/5 `}>
        <Toaster limit={5} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <AuthReasonToast />
          </Suspense>
          <AuthExpiryWatcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
