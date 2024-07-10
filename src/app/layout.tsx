import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoFooter from '../../public/logoFooter.png';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Info Logic Solution",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const footerData = {
    logoSrc: logoFooter,
    message: "Thank you for visiting our website. We appreciate your support and look forward to helping you achieve your goals. Here's to success and collaboration!",
    services: [
      { name: "Data Visualization", link: "/DataVisualization" },
      { name: "Web and App", link: "/WebAnalytics" },
      { name: "SEM", link: "/SEM" },
      { name: "SMM", link: "/SMM" },
      { name: "Graphic Design", link: "/GraphicsDesign" },
      { name: "Development", link: "/WebDesign&Development" }
    ],
    companyLinks: [
      { name: 'About Us', link: '/#about' },
      { name: 'Services', link: '/#services' },
      { name: 'Why Choose Us', link: '/#why-choose-us' },
      { name: 'Company', link: '/#company' },
      { name: 'Testimonial', link: '/#testimonial' },
      { name: 'FAQ', link: '/#QaN' },
    ],
    contact: {
      phone: '+1234567890',
      email: 'admin@infologicsolution.com'
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='container mx-auto min-h-screen'>
          <Navbar></Navbar>
          {children}
          <Footer {...footerData} />
        </main>
      </body>
    </html>
  );
}
