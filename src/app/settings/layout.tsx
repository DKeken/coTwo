import { SettingsTabs } from "@/widgets/SettingsTabs/ui";
import { ConfigProvider } from "antd";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorBgContainer: "#1d232d",
            colorBorder: "rgba(112, 119, 128, 0.40)",
            colorText: "rgba(255, 255, 255, 0.5)",
            colorTextPlaceholder: "rgba(255, 255, 255, 0.5)",
            colorBgElevated: "#1d232d",
          },
          Empty: {
            colorText: "rgba(255, 255, 255, 0.5",
            colorIcon: "rgba(255, 255, 255, 0.5",
          },
          Switch: {
            colorPrimary: "rgb(41, 171, 29)",
            handleBg: "rgb(21, 28, 36)",
            colorTextQuaternary: "rgb(39, 47, 56)",
          },
        },
      }}
    >
      <div className="h-full">
        <SettingsTabs />
        <div>{children}</div>
      </div>
    </ConfigProvider>
  );
}
