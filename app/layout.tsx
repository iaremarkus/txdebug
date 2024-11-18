import "./globals.css";

import classNames from "classnames";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { Form } from "@/components/Form";
import { ThemeProvider } from "@/components/ThemeProvider";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={classNames(
          dmsans.variable,
          "antialiased bg-slate-100 dark:bg-black min-h-screen"
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            <Form />

            <div
              suppressHydrationWarning
              className="w-full col-span-1 md:col-span-2"
            >
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
