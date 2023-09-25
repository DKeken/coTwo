import { type SVGProps } from "react";

export const ActiveDoPlate = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={63}
      height={32}
      viewBox="0 0 63 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="a" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0H2a2 2 0 00-2 2v28a2 2 0 002 2h54.171a2 2 0 001.975-1.684l4.484-28A2 2 0 0060.655 0H9z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0H2a2 2 0 00-2 2v28a2 2 0 002 2h54.171a2 2 0 001.975-1.684l4.484-28A2 2 0 0060.655 0H9z"
        fill="url(#paint0_linear_375_308)"
      />
      <path
        d="M62.63 2.316l.987.158-.987-.158zm-4.484 28l-.988-.158.988.158zM2 1h7v-2H2v2zM1 30V2h-2v28h2zm8 1H2v2h7v-2zm40.5 0H9v2h40.5v-2zm6.671 0h-6.67v2h6.67v-2zm5.471-28.842l-4.484 28 1.975.316 4.484-28-1.975-.316zM49.5 1h11.155v-2H49.5v2zM9 1h40.5v-2H9v2zm54.617 1.474A3 3 0 0060.655-1v2a1 1 0 01.987 1.158l1.975.316zM-1 30a3 3 0 003 3v-2a1 1 0 01-1-1h-2zm57.171 3a3 3 0 002.962-2.526l-1.975-.316a1 1 0 01-.987.842v2zM2-1a3 3 0 00-3 3h2a1 1 0 011-1v-2z"
        fill="#00BE37"
        mask="url(#a)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_375_308"
          x1={-5.82841}
          y1={15.5897}
          x2={64.1125}
          y2={15.5897}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#072" />
          <stop offset={1} stopColor="#00BE37" />
        </linearGradient>
      </defs>
    </svg>
  );
};
