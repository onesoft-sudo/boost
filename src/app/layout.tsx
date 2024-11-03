import MainLayout from "@/layouts/MainLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Boost | Set up your new Debian-based GNU/Linux machine in minutes",
    description:
        "Boost is a CLI tool to automatically install your favorite apps and tools on a new Debian-based GNU/Linux machine.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
