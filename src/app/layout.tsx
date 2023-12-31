import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PizzaProvider } from "@/contexts/PizzaContext";
import Header from "@/components/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Pizza Joint",
  description: "A Framer Motion + Next.js project.",
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <PizzaProvider>
          {children}
        </PizzaProvider>
      </body>
    </html>
  );
}
