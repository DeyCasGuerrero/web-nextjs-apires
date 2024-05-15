import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/Context/Providers";
import "../globals.css"
import Button from "@/components/common/Button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Form",
    description: "Generated by create next app",
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body className={inter.className}>

                <div className="min-h-screen w-full bg-white flex items-center justify-center flex-col">
                    <Link href="/">
                        <Button buttonText="Volver" color="bg-black"></Button>
                    </Link>
                    <Providers> {children}</Providers>
                </div>
            </body>
        </html>)
}