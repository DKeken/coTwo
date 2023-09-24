import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/shared/AntdRegistry";

import { theme, type ThemeConfig } from "antd";
import { Header } from "@/widgets/Header/ui";
import dayjs from "dayjs";

dayjs.locale("ru");

/* const token: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
};
 */
const font = localFont({
  src: [
    {
      path: "../shared/assets/fonts/PTRootUI-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../shared/assets/fonts/PTRootUI-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../shared/assets/fonts/PTRootUI-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../shared/assets/fonts/PTRootUI-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "CO2",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full">
      <body className={`${font.className} h-full`}>
        <StyledComponentsRegistry>
          <Header />
          <div style={{ height: "calc(100% - 60px)" }}>{children}</div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
