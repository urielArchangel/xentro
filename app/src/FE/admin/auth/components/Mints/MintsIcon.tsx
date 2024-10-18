import React from "react";

const MintsIcon = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.92396 0.579347C9.15666 0.579347 9.36481 0.724186 9.44317 0.941049L10.0019 2.48996C10.2022 2.53982 10.3739 2.58968 10.5196 2.64192C10.6787 2.69891 10.8836 2.78518 11.1369 2.9031L12.4381 2.21453C12.5443 2.15826 12.6659 2.13795 12.7846 2.15664C12.9034 2.17533 13.0128 2.23203 13.0966 2.31821L14.2411 3.50146C14.393 3.65896 14.4358 3.88928 14.3503 4.09031L13.7401 5.5205C13.8414 5.70649 13.9221 5.86558 13.9838 5.99855C14.0503 6.14339 14.1326 6.34284 14.2308 6.60006L15.653 7.2095C15.8667 7.30052 15.9989 7.51421 15.9847 7.74295L15.8802 9.38525C15.8731 9.49194 15.8348 9.59419 15.77 9.67931C15.7053 9.76443 15.617 9.82868 15.5161 9.86409L14.169 10.3429C14.1303 10.5289 14.0899 10.688 14.0472 10.8226C13.9782 11.0304 13.8995 11.2348 13.8113 11.4352L14.488 12.931C14.5358 13.0361 14.5486 13.1538 14.5247 13.2667C14.5008 13.3797 14.4413 13.482 14.355 13.5587L13.0681 14.7079C12.9834 14.7833 12.8776 14.8309 12.765 14.8445C12.6524 14.8581 12.5383 14.8369 12.4381 14.7839L11.1116 14.081C10.9041 14.1909 10.69 14.2879 10.4705 14.3715L9.89114 14.5884L9.37669 16.013C9.33856 16.1174 9.26979 16.2077 9.1794 16.2723C9.089 16.3368 8.9812 16.3725 8.87014 16.3747L7.36635 16.4088C7.25235 16.4118 7.14022 16.3793 7.0454 16.316C6.95058 16.2526 6.87772 16.1614 6.83686 16.055L6.23059 14.4507C6.02374 14.38 5.81893 14.3034 5.61641 14.2211C5.45077 14.1494 5.28763 14.0721 5.12728 13.9892L3.62349 14.6319C3.5244 14.6742 3.41516 14.6867 3.30907 14.668C3.20297 14.6494 3.1046 14.6002 3.02593 14.5266L1.91312 13.4827C1.83027 13.4053 1.77384 13.3038 1.75183 13.1926C1.72981 13.0814 1.74332 12.9661 1.79044 12.863L2.43707 11.4542C2.35107 11.2873 2.27134 11.1173 2.19805 10.9444C2.11249 10.7329 2.03331 10.5189 1.96061 10.3026L0.543873 9.87121C0.428715 9.83641 0.328272 9.76455 0.258144 9.6668C0.188016 9.56905 0.152128 9.45088 0.156053 9.33064L0.211456 7.81022C0.215399 7.71102 0.246388 7.61479 0.301072 7.53192C0.355756 7.44906 0.432053 7.38272 0.521712 7.34009L2.00809 6.62618C2.07695 6.3737 2.1371 6.17742 2.19013 6.03416C2.2648 5.84282 2.34772 5.6548 2.43865 5.47064L1.7944 4.10931C1.7455 4.00593 1.73066 3.8897 1.75199 3.77735C1.77332 3.665 1.82974 3.56231 1.91312 3.48404L3.02434 2.43455C3.10224 2.36108 3.19971 2.31169 3.30502 2.29231C3.41033 2.27293 3.519 2.2844 3.61795 2.32533L5.12016 2.94584C5.28637 2.83504 5.43674 2.7456 5.57288 2.67358C5.73513 2.58731 5.95199 2.49708 6.22505 2.39973L6.74742 0.942632C6.78604 0.835996 6.85663 0.743879 6.94956 0.67886C7.04248 0.61384 7.15321 0.579087 7.26662 0.579347H8.92396ZM8.08975 6.13468C6.77037 6.13468 5.7011 7.19129 5.7011 8.49564C5.7011 9.79998 6.77037 10.8574 8.08975 10.8574C9.40834 10.8574 10.4776 9.79998 10.4776 8.49564C10.4776 7.19129 9.40914 6.13468 8.08975 6.13468Z"
        fill={color}
      />
    </svg>
  );
};

export default MintsIcon;
