import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuickCart | Your Favorite Online Store",
  description: "The best tech products at the best prices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <AppProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

          <Navbar />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
