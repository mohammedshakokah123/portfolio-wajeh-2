import type { Metadata } from "next";
import "./globals.css";
import ConnectToast from "@/components/ConnectToast";

export const metadata: Metadata = {
  title: "Wajeh Al-Hawari | IT Instructor, Technical Trainer & Software Engineer",
  description:
    "IT Instructor and Technical Trainer with 3+ years of software engineering experience. Professional IT training, mentoring, and student guidance delivered online and in-center for NGOs, UNRWA programs, schools, and training centers.",
  keywords: [
    "IT Instructor",
    "Technical Trainer",
    "Software Engineer",
    "IT Training",
    "Programming Instructor",
    "Project-Based Learning",
    "Curriculum Design",
    "Mentoring",
    "NGO Training",
    "UNRWA",
    "Flutter",
    "Laravel",
    "React",
  ],
  authors: [{ name: "Wajeh Al-Hawari" }],
  openGraph: {
    title:
      "Wajeh Al-Hawari | IT Instructor, Technical Trainer & Software Engineer",
    description:
      "3+ years of software engineering combined with professional IT training, mentoring, and student guidance — online and in-center.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col">
        {children}
        <ConnectToast />
      </body>
    </html>
  );
}
