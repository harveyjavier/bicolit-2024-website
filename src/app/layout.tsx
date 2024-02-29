import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
