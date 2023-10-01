import { Inter } from "next/font/google";
import BottomNav from "@components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Appointment App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
