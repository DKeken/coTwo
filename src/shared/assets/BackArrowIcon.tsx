import { type SVGProps } from "react";

export const BackArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={22}
      height={8}
      viewBox="0 0 22 8"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 4.5a.5.5 0 000-1v1zM.646 3.646a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.707 4l2.829-2.828a.5.5 0 10-.708-.708L.646 3.646zM21 3.5H1v1h20v-1z"
      />
    </svg>
  );
};
