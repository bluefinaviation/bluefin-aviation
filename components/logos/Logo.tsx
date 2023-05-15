export const Logo = ({ className, darkColor, lightColor }) => {
  return (
    <svg
      viewBox="0 0 6667 5000"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
      }}
      className={className}
    >
      <path
        d="M4148.79 3499.84c121.601-100.37 266.408-157.684 350.498-260.886 308.513-378.846 480.191-616.169 724.179-942.651 154.185-199.55 741.053-1034.9 997.203-1322.52 143.546-161.04 362.637-196.313 362.637-196.313s-589.083 1394.45-672.625 1570.36c-101.703 214.211-401.124 780.183-640.708 925.466-99.489 60.384-218.234 226.541-1121.18 226.541M219.076 3571.85s3518.95.334 3581.36.167c257.197-.571 933.868-8.188 1122.61-72.142-167.133 87.303-596.056 320.056-1326.83 334.98-30.204.619-3481.66.857-3512.86.69 18.47-38.082 135.715-263.695 135.715-263.695M1584.47 2042.67c27.157 25.277 27.085 63.788-.167 115.508-19.731 37.582-48.245 69.262-85.613 95.158-40.605 28.466-82.758 42.675-126.385 42.675H892.208l262.886-499.875h471.551c43.604 0 70.738 14.21 81.425 42.724 9.449 25.919 4.379 57.575-15.4 95.133-24.491 46.556-60.598 82.829-108.2 108.677m-151.662 136.644c16.637 0 31.465-12.472 44.651-37.44 13.138-24.967 11.377-37.439-5.26-37.439h-363.756l-39.438 74.879h363.803Zm93.039-191.577c16.661 0 31.56-12.496 44.651-37.44 13.186-24.991 11.377-37.463-5.284-37.463h-356.02l-39.415 74.903h356.068ZM2124.75 2295.99h-495.519l263.004-499.851h115.389l-201.526 383.225h380.06l-61.408 116.626ZM2931.62 2141.4c-22.183 42.152-54.433 78.449-96.8 108.915-42.319 30.489-84.018 45.698-125.052 45.698h-327.149c-41.724 0-67.5-15.209-77.473-45.698-9.949-30.466-3.832-66.763 18.303-108.915l181.675-345.262h115.461L2438.957 2141.4c-13.305 25.277-11.591 37.916 5.141 37.916h327.982c16.066 0 30.775-12.639 44.056-37.916l181.676-345.262h115.46L2931.62 2141.4ZM3697.45 1912.84h-412.786l-39.415 74.879h385.938l-61.431 116.721H3183.96l-39.462 74.903h411.834l-61.384 116.65h-527.27l262.933-499.851h528.294l-61.455 116.698ZM4343.11 1912.84H3930.3l-39.343 74.879h386.819l-61.432 116.721h-386.771l-100.822 191.553h-115.437l262.933-499.851h528.318l-61.455 116.698ZM4359.03 2295.99h-115.484l262.957-499.851h115.484L4359.03 2295.99ZM5004.66 2295.99H4889.2l-120.339-336.455-177.011 336.455h-115.412l262.933-499.851h115.484l121.291 334.503 175.987-334.503h115.532L5004.66 2295.99Z"
        style={{
          fill: darkColor,
          fillRule: 'nonzero',
        }}
      />
      <path
        d="M973.22 3061.1h-92.991l67.143-127.718H702.457l49.459-93.944h244.963l29.632-56.432c10.759-20.374 9.331-30.585-4.093-30.585H758.89c-12.925 0-24.706 10.163-35.417 30.489l-146.33 278.19h-93.04l146.426-278.332c17.827-33.894 43.652-63.145 77.473-87.613 33.774-24.444 67.31-36.678 100.323-36.678h263.576c33.583 0 54.409 12.234 62.43 36.678 8.045 24.468 3.166 53.719-14.685 87.613L973.22 3061.1ZM1743.9 2658.47l-414.88 402.623h-79.092l7.973-402.623h103.869l-4.76 275.691 283.069-275.691H1743.9ZM1708.84 3061.1h-93.039l211.832-402.623h93.039L1708.84 3061.1ZM2292.5 3061.1h-92.992l67.12-127.718h-244.915l49.482-93.944h244.916l29.704-56.432c10.687-20.374 9.354-30.585-4.094-30.585h-263.576c-12.9 0-24.682 10.163-35.368 30.489l-146.331 278.19h-93.063l146.426-278.332c17.875-33.894 43.675-63.145 77.521-87.613 33.798-24.444 67.191-36.678 100.298-36.678h263.528c33.584 0 54.386 12.234 62.479 36.678 7.997 24.468 3.118 53.719-14.709 87.613L2292.5 3061.1ZM2991.25 2752.42h-179.891l-162.325 308.655h-93.039l162.444-308.655h-179.89l49.483-93.944h452.677l-49.459 93.944ZM3016.45 3061.1h-93.04l211.808-402.623h93.063L3016.45 3061.1ZM3672.58 2933.65c-19.255 36.487-47.864 66.882-85.875 91.088-38.13 24.229-75.26 36.344-111.366 36.344h-234.134c-36.178 0-60.551-12.115-73.094-36.344-12.614-24.206-9.282-54.601 9.925-91.088l77.712-147.782c19.16-36.44 47.912-66.882 85.97-91.088 38.011-24.23 75.141-36.321 111.295-36.321h234.11c36.178 0 60.526 12.091 73.117 36.321 12.591 24.206 9.283 54.648-9.949 91.088l-77.711 147.782Zm-92.968-.095 77.592-147.568c11.83-22.35 5.308-33.56-19.564-33.56h-234.039c-24.824 0-43.08 11.21-54.862 33.56l-77.592 147.568c-11.782 22.373-5.284 33.536 19.517 33.536h234.062c24.849 0 43.152-11.163 54.886-33.536M4125.62 3061.1h-92.992l-96.919-271.049-142.617 271.049H3700.1l211.808-402.623h93.015l97.776 269.479 141.737-269.479h93.016L4125.62 3061.1Z"
        style={{
          fill: lightColor,
          fillRule: 'nonzero',
        }}
      />
      <path
        d="m1467.33 3950.95 2.689 151.304-1.428 42.129 16.304-41.248 61.55-152.185h57.623l-.833 151.304-.928 42.129 16.518-40.534 67.215-152.899h55.528l-129.145 264.218h-52.149l.904-154.494 1.381-51.102-19.827 51.102-64.001 154.494h-50.792l-18.613-264.218h58.004ZM1957.95 3997.76h-138.333l-11.734 56.076h127.004l-9.735 45.936h-127.027l-14.21 67.905h144.784l-9.949 47.508h-198.123l55.505-264.242h191.744l-9.926 46.817ZM1996.1 4033.79c12.305-3.689 21.564-9.973 27.824-18.874 3.451-5.237 5.593-10.544 6.402-15.924h-27.823l9.925-47.102h50.53l-7.974 37.772c-3.784 18.042-11.162 32.346-21.992 42.676-10.877 10.377-24.515 17.137-40.986 20.207l4.094-18.755ZM2117.76 3950.95h54.625l-45.604 216.687h129.479l-9.877 47.531h-184.151l55.528-264.218ZM2339.66 3950.95h54.601l-45.58 216.687h129.527l-9.925 47.531h-184.127l55.504-264.218ZM2846.07 3950.95l-9.973 46.84h-78.211l-45.555 217.378h-55.005l45.603-217.378h-78.592l9.949-46.84h211.784ZM2926.07 3950.95h61.693l37.082 264.218h-59.217l-5.498-54.315h-96.324l-29.443 54.315h-57.123l148.83-264.218Zm-38.011 164.348h66.358l-10.782-103.941-55.576 103.941ZM3114.44 3950.95h53.744l-22.897 108.819 123.814-108.819h70.571l-130.003 108.819 79.997 155.399h-70.238l-56.576-115.413-31.751 27.086-18.493 88.327h-53.696l55.528-264.218ZM3559.27 3997.76h-138.333l-11.734 56.076h127.004l-9.759 45.936h-126.98l-14.233 67.905h144.783l-9.925 47.508h-198.146l55.529-264.242h191.695l-9.901 46.817ZM3861.87 3950.95h61.907l-122.243 164.919-20.707 99.299h-54.648l20.755-99.299-55.695-164.919h64.382l29.966 115.103 76.283-115.103ZM4105.58 4191.73c-24.016 20.541-54.695 30.799-92.04 30.799-37.368 0-63.811-10.258-79.306-30.799-21.183-25.205-26.729-61.55-16.637-109.01 10.14-48.388 31.013-84.756 62.574-108.986 24.015-20.564 54.695-30.846 92.063-30.846 37.392 0 63.764 10.282 79.282 30.846 21.279 24.23 26.872 60.598 16.709 108.986-10.092 47.46-30.966 83.805-62.645 109.01m7.973-109.01c6.189-29.632 4.57-52.529-4.665-68.809-9.33-16.114-24.753-24.23-46.412-24.23-21.636 0-40.558 8.116-56.814 24.182-16.28 16.161-27.538 39.106-33.822 68.857-6.259 29.776-4.665 52.696 4.784 68.834 9.473 16.089 25.039 24.229 46.651 24.229 21.635 0 40.534-8.14 56.719-24.229 16.137-16.138 27.323-39.058 33.559-68.834M4237.56 3950.95h55.528l-34.226 162.443c-3.808 18.161-4.451 31.442-1.975 39.772 3.522 14.805 16.446 22.255 38.677 22.255 22.087 0 37.987-7.45 47.721-22.255 5.998-8.33 10.901-21.611 14.733-39.772l34.203-162.443h55.528l-34.25 162.443c-5.879 28.086-14.804 49.959-26.753 65.597-22.111 28.68-55.861 43.009-101.084 43.009-45.365 0-73.046-14.329-83.257-43.009-5.284-15.638-4.998-37.511.929-65.597l34.226-162.443ZM4790.77 3950.95l-9.901 46.84h-78.235l-45.579 217.378h-55.029l45.58-217.378h-78.569l9.949-46.84h211.784ZM4766.86 4215.18l55.48-264.218h54.101l-21.302 100.775h102.179l21.278-100.775h54.315l-55.529 264.218h-54.291l24.682-117.912h-102.155l-24.682 117.912h-54.076ZM5268.45 3997.76h-138.357l-11.686 56.076h126.98l-9.735 45.936h-127.004l-14.233 67.905h144.783l-9.949 47.508h-198.122l55.529-264.242h191.719l-9.925 46.817ZM5518.88 3976.22c4.26 6.712 7.188 14.138 8.806 22.254 1.595 8.093 1.333 17.351-.809 27.753-2.69 12.59-8.497 24.896-17.28 37.058-8.83 12.115-20.969 20.707-36.464 25.706 10.997 4.926 18.042 11.829 21.207 20.85 3.118 9.092 2.761 22.825-1.166 41.39l-3.737 17.732c-2.475 12.043-3.713 20.231-3.713 24.539 0 6.855 2.238 11.853 6.76 15.066l-1.262 6.617h-60.145c-.453-5.831-.691-10.568-.691-14.138.096-7.426.952-15.018 2.476-22.754l4.808-24.587c3.332-16.851 2.594-28.085-2.047-33.702-4.665-5.57-15.043-8.426-31.109-8.426h-56.456l-21.636 103.607h-53.362l55.504-264.242h128.242c18.208.357 31.822 2.666 40.771 6.879 8.997 4.117 16.114 10.282 21.303 18.398m-146.688 20.636-14.852 70.999h61.884c12.305 0 21.802-1.428 28.561-4.284 11.948-5.07 19.493-14.971 22.683-29.776 3.308-16.042.309-26.752-9.021-32.298-5.379-3.07-13.9-4.641-25.729-4.641h-63.526ZM5773.07 3997.76h-138.38l-11.663 56.076h126.98l-9.759 45.936h-127.003l-14.21 67.905h144.784l-9.949 47.508h-198.146l55.552-264.242h191.72l-9.926 46.817Z"
        style={{
          fill: darkColor,
          fillRule: 'nonzero',
        }}
      />
    </svg>
  );
};
