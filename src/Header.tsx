import "./Header.css";
import "./index.css";
export const Header = () => {
  return (
    <div className="center Header">
      <span style={{ height: 30 }}>{botImage}</span>
    </div>
  );
};

const botImage = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 71 87"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 24.1289C10 10.8029 20.7363 0 33.9801 0H37.0199C50.2637 0 61 10.8029 61 24.1289V62.8711C61 76.1971 50.2637 87 37.0199 87H33.9801C20.7363 87 10 76.1971 10 62.8711V24.1289Z"
      fill="#FDFEFD"
    />
    <path
      d="M0 42.5489C0 40.0366 2.01472 38 4.5 38V38C6.98528 38 9 40.0366 9 42.5489V64.4511C9 66.9634 6.98528 69 4.5 69V69C2.01472 69 0 66.9634 0 64.4511V42.5489Z"
      fill="#FDFEFD"
    />
    <path
      d="M62 42.5489C62 40.0366 64.0147 38 66.5 38V38C68.9853 38 71 40.0366 71 42.5489V64.4511C71 66.9634 68.9853 69 66.5 69V69C64.0147 69 62 66.9634 62 64.4511V42.5489Z"
      fill="#FDFEFD"
    />
    <path
      d="M18 22C18 15.3726 23.4472 10 30.1667 10H40.8333C47.5528 10 53 15.3726 53 22V31.0411C53 32.6753 51.6569 34 50 34H21C19.3431 34 18 32.6753 18 31.0411V22Z"
      fill="#4EA4F6"
    />
    <path d="M25 12H46V33H25V12Z" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use transform="scale(0.00195312)" />
      </pattern>
      <image id="image0_2_2" width="512" height="512" />
    </defs>
  </svg>
);
