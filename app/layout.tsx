import { Poppins } from "next/font/google";
import "@/app/ui/globals.css";
import { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Zaher Lavi - Personal Website",
  description:
    "Personal portfolio of Zaher Lavi, Computer Science student and developer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${poppins.className} bg-background-dark min-h-screen`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
