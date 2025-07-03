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
  title: "I Ching Balance Way | Κατερίνα Δημητρακοπούλου",
  description: "Ανακαλύψτε την αρχαία κινεζική σοφία του I Ching και την ολιστική προσέγγιση στην υγεία. Βελονισμός, μασάζ και εναλλακτικές θεραπείες στον Άλιμο.",
  keywords: "I Ching, Ισορροπία, Βελονισμός, Κινέζικη Ιατρική, Άλιμος, Κατερίνα Δημητρακοπούλου",
  openGraph: {
    title: "I Ching Balance Way",
    description: "Ολιστική προσέγγιση στην υγεία με βάση την αρχαία κινεζική σοφία",
    locale: "el_GR",
    type: "website",
    siteName: "I Ching Balance Way",
  },
  alternates: {
    canonical: "https://ichingbalance.gr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
