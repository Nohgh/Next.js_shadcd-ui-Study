import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import SideNavigation from "@/components/common/navigation/SideNavigation";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Gihooh next",
  description: "std next js !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SideNavigation />
        {children}
      </body>
    </html>
  );
}
