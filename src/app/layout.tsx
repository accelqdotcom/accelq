import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  title: {
    default: "ACCELQ — AI-Native Test Automation for the Modern Dev Era",
    template: "%s | ACCELQ",
  },
  description:
    "ACCELQ is the no-code, AI-native continuous testing platform. Generate tests from specs, self-heal as your app evolves, and govern quality across web, API, mobile, desktop, and business systems.",
  keywords: ["test automation", "no-code testing", "AI test automation", "self-healing tests", "continuous testing", "ACCELQ"],
  openGraph: {
    title: "ACCELQ — Quality at AI Velocity",
    description: "The AI-native quality platform that closes the testing gap created by AI development tools.",
    url: "https://www.accelq.com",
    siteName: "ACCELQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACCELQ — Quality at AI Velocity",
    description: "The AI-native quality platform for the modern software development era.",
    site: "@accelqtest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: "#0d1117", color: "#e6edf3", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navigation />
        <main style={{ flex: 1, paddingTop: 64 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
