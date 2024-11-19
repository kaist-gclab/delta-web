import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delta",
  description: "3차원 기하 모델 프로세싱 프레임워크",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
