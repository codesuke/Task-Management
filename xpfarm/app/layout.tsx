import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DedSec Task Management | Watch Dogs Style",
  description: "Secure task management system with Watch Dogs aesthetics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
