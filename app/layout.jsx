import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Cirjeu Dumitru | Full-Stack Developer",
  description: "Portfolio and CV of Cirjeu Dumitru, Full-Stack Developer from Cahul, Moldova.",
  icons: {
    icon: "/CvIcon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
