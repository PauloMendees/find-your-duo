import { colors } from "../../../theme/colors";

type Props = {
  isDark?: boolean
}

export default function GameIcon({isDark}: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.25 10.125H17.25"
        stroke={isDark ? colors.dark.white : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.75 10.125H9.75"
        stroke={isDark ? colors.dark.white : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.25 8.625V11.625"
        stroke={isDark ? colors.dark.white : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.125 5.22186L7.87505 5.24999C6.72918 5.25217 5.62055 5.65714 4.74309 6.39408C3.86563 7.13101 3.27518 8.15298 3.07504 9.28124V9.28124L1.53754 17.1656C1.43882 17.7162 1.51856 18.2839 1.76514 18.786C2.01171 19.2881 2.41222 19.6983 2.90828 19.9568C3.40434 20.2153 3.97 20.3086 4.52278 20.223C5.07557 20.1375 5.58657 19.8776 5.98129 19.4812V19.4812L10.0313 15L16.125 14.9719C17.418 14.9719 18.6579 14.4582 19.5722 13.544C20.4864 12.6298 21 11.3898 21 10.0969C21 8.80393 20.4864 7.56396 19.5722 6.64972C18.6579 5.73548 17.418 5.22186 16.125 5.22186V5.22186Z"
        stroke={isDark ? colors.dark.white : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.925 9.25311L22.4625 17.1656C22.5612 17.7162 22.4815 18.2839 22.2349 18.786C21.9883 19.2881 21.5878 19.6983 21.0918 19.9568C20.5957 20.2153 20.03 20.3086 19.4773 20.223C18.9245 20.1375 18.4135 19.8776 18.0187 19.4812V19.4812L13.9688 14.9812"
        stroke={isDark ? colors.dark.white : "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
