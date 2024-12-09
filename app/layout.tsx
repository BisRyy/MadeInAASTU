import type { Metadata } from "next";
import "./globals.css";
import LogLib from "@loglib/tracker/react";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/Layout/themeprovider";

export const metadata: Metadata = {
  title: "Made In AASTU | Connecting Ideas with Opportunity",
  description: "Where you find all the best resources to excel your project",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="absolute inset-0 -z-10 min-h-screen w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-YLFT1NCPY2" />
        <LogLib
          config={{
            id: "built-iota_vercel",
          }}
        />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
