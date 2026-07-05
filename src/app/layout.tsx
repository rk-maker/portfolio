import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/app-shell";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Raffay's portfolio",
  description: "Raffay khan portfolio",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-dmsans text-font">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
