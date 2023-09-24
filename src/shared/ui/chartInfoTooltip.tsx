import { InfoCircleFilled } from "@ant-design/icons";
import { Tooltip } from "antd";

export const ChartInfoTooltip = ({
  props,
}: {
  props: {
    position: {
      left?: React.CSSProperties["left"];
      right?: React.CSSProperties["left"];
      top?: React.CSSProperties["top"];
      bottom?: React.CSSProperties["bottom"];
    };
    id: string;
    name: string;
  };
}) => {
  return (
    <Tooltip
      placement="top"
      title={
        <div className="flex flex-col gap-[9px] px-[22px] py-[9px] bg-[#1f2a36] rounded-lg">
          <div className="flex gap-[6px]">
            <div>
              <InfoCircleFilled className="text-[#00B2FF]" />
            </div>
            <div>Событие</div>
          </div>
          <div>Приобретение топлива</div>
        </div>
      }
    >
      <InfoCircleFilled
        className="text-[#00B2FF] text-xl absolute"
        style={{
          ...props.position,
          background: "black",
          borderRadius: "50%",
        }}
      />
    </Tooltip>
  );
};
