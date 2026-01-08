import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maham Fatima | Senior Software Engineer & Technical Lead",
  description: "Senior Software Engineer and Technical Lead with 8+ years of experience designing and delivering scalable, full-stack solutions across healthcare, telecom, and e-commerce sectors.",
  keywords: ["Software Engineer", "Technical Lead", "Full Stack Developer","Node.js", "AWS", "React", "Next.js"],
  authors: [{ name: "Maham Fatima" }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: "Maham Fatima | Senior Software Engineer & Technical Lead",
    description: "7+ years of experience in full-stack development and AI integration",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
