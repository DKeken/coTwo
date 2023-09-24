import { HeaderRightContent } from "./ui/HeaderRightContent";
import { TitleTab } from "./ui/TitleTab";

export const Header = () => {
  return (
    <div className="w-full h-[60px] bg-[#141b22] flex justify-between">
      <div className="flex flex-col items-center justify-end">
        <TitleTab />
      </div>
      <HeaderRightContent />
    </div>
  );
};
