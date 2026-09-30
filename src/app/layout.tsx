import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SettingsProvider, settingsBootstrapScript } from "@/i18n/provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-ar",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BI Atlas — افهم البزنس، حلّل صح، وابني تقارير أذكى",
    template: "%s · BI Atlas",
  },
  description:
    "منصة تعلّم لمطوري Power BI: مجالات الأعمال، موسوعة المؤشرات، أنماط العرض والمصفوفات، ومعمل تمارين DAX وSQL.",
  applicationName: "BI Atlas",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#101522" },
    { media: "(prefers-color-scheme: light)", color: "#f5f6fb" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Arabic-first: the server renders ar/rtl, and the bootstrap script below
    // corrects <html> from stored preferences before first paint.
    <html lang="ar" dir="rtl" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: settingsBootstrapScript }} />
      </head>
      <body
        className={`${plexArabic.variable} ${inter.variable} ${mono.variable} antialiased`}
      >
        <SettingsProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
          >
            تخطَّ إلى المحتوى
          </a>
          <div className="flex min-h-dvh flex-col">
            <Header />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </SettingsProvider>
      </body>
    </html>
  );
}
