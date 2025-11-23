import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hyro - Immersive Virtual Reality Experiences",
  description: "Discover limitless possibilities in virtual reality with Hyro. Explore immersive worlds, play interactive games, and connect with people worldwide. Experience smooth, realistic, and engaging VR whether you're a beginner or an expert. Step into a new dimension and see how we're shaping the future of VR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
