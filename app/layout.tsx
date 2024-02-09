import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

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
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <main className="mainContainer">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
