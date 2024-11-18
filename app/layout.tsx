import type { Metadata } from "next";
import "./globals.css";
import {roboto} from "@/app/ui/fonts";


export const metadata: Metadata = {
  title: {
      "template": "%s | Clinic Dashboard",
        "default": "Clinic Dashboard",
  },
  description: "Dashboard built for clinic patient management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
