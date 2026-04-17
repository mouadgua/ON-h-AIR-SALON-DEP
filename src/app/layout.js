import "@/app/globals.css"; // Import de ton Tailwind
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BookingContent from "@/components/layout/booking-content";
import AnimationObserver from "@/components/AnimationObserver";
import { Inter, Lib_Math } from "next/font/google";
import { LanguageProvider } from '@/context/LanguageContext';

// Configuration des polices pour correspondre à ton design
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "ON h'AIR salon | Institut de Beauté à Rabat",
  description: "Expertise et luxe pour sublimer votre beauté naturelle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} bg-white text-gray-700`}>
        <SpeedInsights/>
        <LanguageProvider>
          <AnimationObserver />
          <Header />

          <main id="page-content-wrapper">
            {children}
          </main>

          <BookingContent />

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}