import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";

const font = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "the-vault",
    description: "Reproductor de música",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
              className={font.className}
            >
                <SupabaseProvider>
                    <UserProvider>
                        <ModalProvider/>
                        {children}
                    </UserProvider> 
                </SupabaseProvider>
            </body>
        </html>
    );
}
