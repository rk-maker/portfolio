import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Raffay",
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
        {/* Universal border */}
        <div className="fixed inset-0 border-[20px] border-white pointer-events-none z-50"></div>

        {/* Outer container */}
        <div
          className="bg-primary"
          style={{
            padding: "20px",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <main className="relative">{children}</main>
        </div>
      </body>
    </html>
  );
}
