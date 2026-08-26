import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tushar Kumar | Backend Developer & Distributed Systems",
  description:
    "Portfolio of Tushar Kumar — Backend Developer with hands-on experience architecting low-latency microservices, monorepo codebases, and distributed systems using Node.js, Java (Spring Boot), and TypeScript.",
  keywords: [
    "Tushar Kumar",
    "Backend Developer",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Node.js",
    "TypeScript",
    "Microservices",
    "Distributed Systems",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
  ],
  authors: [{ name: "Tushar Kumar", url: "https://github.com/tusharXO" }],
  creator: "Tushar Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/tusharXO",
    title: "Tushar Kumar | Backend Developer & Distributed Systems",
    description:
      "Backend Developer with hands-on experience architecting low-latency microservices, monorepo codebases, and distributed systems using Node.js, Java (Spring Boot), and TypeScript.",
    siteName: "Tushar Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Kumar | Backend Developer & Distributed Systems",
    description:
      "Backend Developer with hands-on experience architecting low-latency microservices, monorepo codebases, and distributed systems using Node.js, Java (Spring Boot), and TypeScript.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f3ef",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#f4f3ef] text-[#11110f] font-sans antialiased overflow-x-hidden selection:bg-[#2f5bff] selection:text-white">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
