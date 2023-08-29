import styled from 'styled-components';
import React, { CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
}

type svgColorProps = {
  fillColor?: string;
  $isPush?: boolean | null;
};
interface RightArrowProps {
  fillColor?: string;
  rotation?: boolean;
}

export const Cloud = ({ fillColor = '#fff' }) => (
  <svg
    width="40"
    height="31"
    viewBox="0 0 40 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="&#240;&#159;&#166;&#134; icon &#34;cloud&#34;">
      <path
        // fill={fillColor}
        id="Vector"
        d="M30 11.75H28.7665L28.5282 10.5397C27.5163 5.39877 22.8316 1.5 17.5 1.5C11.4631 1.5 6.5 6.5333 6.5 12.8125V15.375V16.4183L5.5219 16.7813C3.28384 17.6119 1.5 20.2756 1.5 23.0625C1.5 26.523 4.21313 29.25 7.5 29.25H30C34.6369 29.25 38.5 25.3442 38.5 20.5C38.5 15.6558 34.6369 11.75 30 11.75Z"
        stroke={fillColor}
        strokeWidth="3"
      />
    </g>
  </svg>
);

export const Home = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="21"
    viewBox="0 0 25 21"
    fill="none"
  >
    <path
      d="M1 12.5064L12.5556 1.47632L24.1111 12.5064"
      stroke="#0084FF"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.55566 9.11279V20.1429H20.5557V9.11279"
      stroke="#0084FF"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Search = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="21"
    viewBox="0 0 23 21"
    fill="none"
  >
    <path
      d="M10.4199 17.6818C12.625 17.4026 14.629 16.2588 15.9909 14.5021C17.3527 12.7454 17.961 10.5197 17.6818 8.31453C17.4026 6.10936 16.2589 4.10542 14.5022 2.74354C12.7455 1.38166 10.5197 0.773405 8.31458 1.05258C6.10942 1.33176 4.10548 2.4755 2.7436 4.2322C1.38172 5.98889 0.773464 8.21464 1.05264 10.4198C1.33182 12.625 2.47556 14.6289 4.23226 15.9908C5.98895 17.3527 8.2147 17.9609 10.4199 17.6818Z"
      stroke="#0084FF"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.1406 19.6049L16.1797 14.9836"
      stroke="#0084FF"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Upload = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      d="M10.6665 3.69873V17.921"
      stroke="#0084FF"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.55518 10.8098H17.7774"
      stroke="#0084FF"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6664 20.5875C13.2597 20.5875 15.7467 19.5574 17.5804 17.7237C19.4141 15.89 20.4442 13.403 20.4442 10.8098C20.4442 8.21653 19.4141 5.72952 17.5804 3.89583C15.7467 2.06214 13.2597 1.03198 10.6664 1.03198C8.07322 1.03198 5.58621 2.06214 3.75252 3.89583C1.91883 5.72952 0.888672 8.21653 0.888672 10.8098C0.888672 13.403 1.91883 15.89 3.75252 17.7237C5.58621 19.5574 8.07322 20.5875 10.6664 20.5875Z"
      stroke="#0084FF"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const MyProfile = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
  >
    <path
      d="M12.1429 23.2857C15.0981 23.2857 17.9324 22.1117 20.022 20.022C22.1117 17.9324 23.2857 15.0981 23.2857 12.1429C23.2857 9.18759 22.1117 6.35336 20.022 4.26367C17.9324 2.17398 15.0981 1 12.1429 1C9.18759 1 6.35336 2.17398 4.26367 4.26367C2.17398 6.35336 1 9.18759 1 12.1429C1 15.0981 2.17398 17.9324 4.26367 20.022C6.35336 22.1117 9.18759 23.2857 12.1429 23.2857Z"
      stroke="#0084FF"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ScrollBar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="5"
    viewBox="0 0 23 5"
    fill="none"
  >
    <line
      x1="0.3"
      y1="0.7"
      x2="22.7"
      y2="0.7"
      stroke="#E4E2E2"
      strokeWidth="0.6"
      strokeLinecap="round"
    />
    <line
      x1="0.3"
      y1="2.7"
      x2="22.7"
      y2="2.7"
      stroke="#E4E2E2"
      strokeWidth="0.6"
      strokeLinecap="round"
    />
    <line
      x1="0.3"
      y1="4.7"
      x2="22.7"
      y2="4.7"
      stroke="#E4E2E2"
      strokeWidth="0.6"
      strokeLinecap="round"
    />
  </svg>
);

export const RightArrow = ({
  fillColor = '#8995a7',
  rotation = false,
}: RightArrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="11"
    viewBox="0 0 8 11"
    fill="none"
    style={{
      transform: rotation ? 'rotate(90deg)' : '',
      transition: 'transform 0.2s, fill 0.2s',
    }}
  >
    <path
      d="M7.70034 5.92748L2.48544 10.8229C2.23393 11.059 1.82617 11.059 1.57469 10.8229L0.966457 10.2519C0.715378 10.0162 0.714895 9.63425 0.965384 9.39799L5.09828 5.49999L0.965384 1.60201C0.714895 1.36575 0.715378 0.983752 0.966457 0.748052L1.57469 0.177077C1.8262 -0.0590258 2.23396 -0.0590258 2.48544 0.177077L7.70031 5.07252C7.95182 5.3086 7.95182 5.69138 7.70034 5.92748Z"
      fill={fillColor}
    />
  </svg>
);
export const LikeCloud = ({ fillColor = '#8995a7' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="18"
    viewBox="0 0 23 18"
    fill="none"
  >
    <path
      d="M2.48438 12.5555V13.2178C2.4848 14.9702 3.79951 16.3333 5.3738 16.3333H17.8381C20.1599 16.3328 22.1115 14.2891 22.111 11.7369C22.1106 9.1847 20.1582 7.14143 17.8368 7.14143H16.796L16.5943 6.07367C16.0743 3.32106 13.6593 1.22217 10.9112 1.22217C9.17392 1.22253 7.60798 2.07064 6.5661 3.4093L6.33274 3.80696"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M1.79206 9.32132L5.60208 13.191C5.79693 13.3894 6.05536 13.5 6.32405 13.5C6.59275 13.5 6.85118 13.3894 7.04602 13.191L11.0536 9.10954C11.3125 8.83688 11.5182 8.51161 11.6586 8.15275C11.799 7.79388 11.8712 7.40861 11.8712 7.01945C11.8712 6.20431 11.5522 5.47788 11.0527 4.92936C10.7967 4.65193 10.4918 4.43182 10.1558 4.28181C9.81981 4.1318 9.45935 4.05489 9.09539 4.05555C8.33249 4.05555 7.65323 4.39658 7.1381 4.93031C6.87901 5.20289 6.6732 5.52813 6.53274 5.88701C6.39228 6.24589 6.31997 6.6312 6.32005 7.02041C6.32063 6.46927 6.17465 5.92938 5.89923 5.46405C5.78611 5.27159 5.6543 5.09252 5.506 4.92984C5.31315 4.72352 5.09368 4.54796 4.85431 4.40851C4.4541 4.17578 4.00578 4.05457 3.5505 4.05602H3.54516C2.78449 4.05602 2.10745 4.39849 1.59544 4.93079C1.33648 5.20345 1.1308 5.52872 0.990419 5.88759C0.850036 6.24646 0.777768 6.63173 0.777832 7.02088C0.777832 7.83603 1.09678 8.56246 1.59633 9.11098L1.79206 9.32132Z"
      fill="white"
    />
  </svg>
);
export const Bell = ({ fillColor, $isPush }: svgColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="19"
    viewBox="0 0 17 19"
    fill="none"
  >
    <path
      d="M8.46047 18.9182C9.73384 18.9182 10.7667 17.8596 10.7667 16.5534H6.15422C6.15422 17.8596 7.18711 18.9182 8.46047 18.9182ZM16.2258 13.3865C15.5292 12.6194 14.2259 11.4655 14.2259 7.68552C14.2259 4.81454 12.2618 2.51627 9.61342 1.95242V1.18239C9.61342 0.529488 9.09716 0 8.46047 0C7.82379 0 7.30753 0.529488 7.30753 1.18239V1.95242C4.65913 2.51627 2.69501 4.81454 2.69501 7.68552C2.69501 11.4655 1.39173 12.6194 0.6952 13.3865C0.478887 13.6248 0.382988 13.9097 0.384791 14.1887C0.388756 14.7946 0.852748 15.371 1.54206 15.371H15.3789C16.0682 15.371 16.5326 14.7946 16.5362 14.1887C16.538 13.9097 16.4421 13.6244 16.2258 13.3865Z"
      fill={$isPush ? fillColor : 'gray'}
    />
  </svg>
);
export const Hamburger = ({ fillColor }: svgColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
  >
    <rect width="18" height="2" fill={fillColor} />
    <rect y="7" width="18" height="2" fill={fillColor} />
    <rect y="14" width="18" height="2" fill={fillColor} />
  </svg>
);
export const Logout = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="20"
    viewBox="0 0 25 20"
    fill="none"
  >
    <path
      d="M24.654 10.8847L16.3203 19.6333C15.5762 20.4144 14.2864 19.8676 14.2864 18.748V13.7488H7.54006C6.8803 13.7488 6.34952 13.1916 6.34952 12.499V7.49986C6.34952 6.80727 6.8803 6.25007 7.54006 6.25007H14.2864V1.2509C14.2864 0.136502 15.5712 -0.41549 16.3203 0.36563L24.654 9.11418C25.1153 9.60368 25.1153 10.3952 24.654 10.8847ZM9.52428 19.3729V17.2899C9.52428 16.9462 9.25641 16.665 8.92901 16.665H4.76214C3.88412 16.665 3.17476 15.9203 3.17476 14.9986V5.00028C3.17476 4.07856 3.88412 3.33389 4.76214 3.33389H8.92901C9.25641 3.33389 9.52428 3.05268 9.52428 2.70899V0.626004C9.52428 0.282311 9.25641 0.00110755 8.92901 0.00110755H4.76214C2.13304 0.00110755 0 2.24032 0 5.00028V14.9986C0 17.7586 2.13304 19.9978 4.76214 19.9978H8.92901C9.25641 19.9978 9.52428 19.7166 9.52428 19.3729Z"
      fill="black"
    />
  </svg>
);
export const AddPicture = () => (
  <svg
    width="31"
    height="28"
    viewBox="0 0 31 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="&#236;&#130;&#172;&#236;&#167;&#132; &#236;&#182;&#148;&#234;&#176;&#128; &#236;&#149;&#132;&#236;&#157;&#180;&#236;&#189;&#152;">
      <g id="Group 12">
        <path
          id="Ellipse 11"
          d="M28.5483 14C28.5483 20.8498 22.7613 26.5 15.5002 26.5C8.23916 26.5 2.45215 20.8498 2.45215 14C2.45215 7.15021 8.23916 1.5 15.5002 1.5C22.7613 1.5 28.5483 7.15021 28.5483 14Z"
          stroke="#0084FF"
          strokeWidth="3"
        />
        <g id="&#240;&#159;&#166;&#134; icon &#34;plus&#34;">
          <path
            id="Vector"
            d="M9 14.3037H15.5M15.5 14.3037H22M15.5 14.3037V7.99994M15.5 14.3037V20.6074"
            stroke="#0084FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  </svg>
);
export const DeleteComment = () => (
  <svg
    width="19"
    height="20"
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="recycle-bin-2--remove-delete-empty-bin-trash-garbage">
      <path
        id="Subtract"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.59879 2.86825C7.89106 2.57868 8.25332 2.37149 8.65013 2.26693C9.04693 2.16238 9.4647 2.16405 9.86255 2.27178C10.2604 2.37951 10.6247 2.58961 10.9198 2.88153C11.2149 3.17344 11.4307 3.53717 11.5461 3.93713L6.99637 3.87062C7.11134 3.49035 7.31838 3.14587 7.59879 2.86825ZM4.91548 3.8402C5.08362 2.79217 5.61703 1.84273 6.41951 1.16313C7.22199 0.483525 8.24072 0.118489 9.29196 0.133857C10.3432 0.149225 11.3577 0.543985 12.1526 1.24694C12.9475 1.94989 13.4704 2.91477 13.627 3.96755L17.4103 4.02286C17.6801 4.0268 17.9383 4.13899 18.1281 4.33474C18.3178 4.53049 18.4235 4.79377 18.422 5.06666C18.4205 5.33954 18.3119 5.59969 18.1201 5.78986C17.9282 5.98003 17.6688 6.08465 17.399 6.08071L16.0425 6.06088L15.9803 17.3791C15.9773 17.9248 15.76 18.4451 15.3763 18.8255C14.9926 19.2058 14.4739 19.4151 13.9342 19.4072L4.43863 19.2683C3.89898 19.2605 3.38262 19.0361 3.00314 18.6446C2.62367 18.2531 2.41217 17.7265 2.41517 17.1808L2.47737 5.86257L1.12086 5.84274C0.987251 5.84079 0.855101 5.81224 0.73195 5.75873C0.6088 5.70521 0.497061 5.62778 0.403113 5.53086C0.309165 5.43393 0.234848 5.31941 0.184406 5.19383C0.133964 5.06825 0.108383 4.93406 0.109126 4.79894C0.109869 4.66382 0.136919 4.53041 0.188734 4.40632C0.240548 4.28223 0.316111 4.1699 0.411109 4.07574C0.506107 3.98158 0.618679 3.90742 0.742398 3.85752C0.866117 3.80762 0.99856 3.78294 1.13216 3.78489L4.91548 3.8402ZM6.53465 8.15277C7.00264 8.15962 7.38036 8.5493 7.37776 9.02261L7.34759 14.513C7.34634 14.7404 7.25581 14.9571 7.09593 15.1156C6.93605 15.2741 6.71991 15.3613 6.49505 15.358C6.2702 15.3547 6.05505 15.2612 5.89693 15.0981C5.73882 14.935 5.65069 14.7156 5.65194 14.4882L5.68212 8.99782C5.68472 8.52451 6.06665 8.14593 6.53465 8.15277ZM12.8038 9.10193C12.8051 8.87452 12.7169 8.65512 12.5588 8.492C12.4007 8.32887 12.1856 8.23538 11.9607 8.2321C11.7358 8.22881 11.5197 8.31599 11.3598 8.47447C11.1999 8.63295 11.1094 8.84973 11.1082 9.07714L11.078 14.5675C11.0767 14.7949 11.1649 15.0143 11.323 15.1774C11.4811 15.3405 11.6962 15.434 11.9211 15.4373C12.146 15.4406 12.3621 15.3534 12.522 15.1949C12.6819 15.0365 12.7724 14.8197 12.7736 14.5923L12.8038 9.10193Z"
        fill="#909090"
      />
    </g>
  </svg>
);
export const EditComment = () => (
  <svg
    width="16"
    height="20"
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Union"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2907 11.5901C11.0844 11.8405 10.8196 12.0083 10.5319 12.0709L7.10337 12.8171C6.87821 12.8663 6.64655 12.8495 6.4279 12.768C6.20925 12.6864 6.01 12.5425 5.84692 12.3485C5.68384 12.1544 5.5617 11.9159 5.49078 11.6528C5.41986 11.3898 5.40224 11.11 5.43939 10.837L6.01081 6.63653C6.05931 6.27886 6.19965 5.94869 6.41195 5.6928L11.1422 6.76544e-07H2.85657C2.40192 6.76544e-07 1.96589 0.218365 1.64441 0.607057C1.32292 0.995749 1.14231 1.52293 1.14231 2.07262V14.3964L0.0291837 18.4353C-0.00308643 18.5526 -0.00871219 18.6783 0.0128936 18.7992C0.0344993 18.92 0.0825445 19.0317 0.152014 19.1225C0.221484 19.2132 0.309831 19.2798 0.407835 19.3152C0.505839 19.3506 0.609906 19.3535 0.709174 19.3237L5.21197 17.9627H14.285C14.7396 17.9627 15.1757 17.7443 15.4971 17.3556C15.8186 16.967 15.9992 16.4398 15.9992 15.8901V5.87242L11.2907 11.5901ZM14.0781 0.106395C13.8683 0.000630907 13.6371 -0.0270703 13.4142 0.0268332C13.1913 0.0807368 12.9868 0.213796 12.8267 0.408998L7.42108 6.91702L6.84966 11.1175L10.2782 10.3714L15.661 3.83573C15.7681 3.70728 15.8531 3.55445 15.9111 3.38608C15.9691 3.2177 15.999 3.0371 15.999 2.85469C15.999 2.67228 15.9691 2.49168 15.9111 2.3233C15.8531 2.15492 15.7681 2.0021 15.661 1.87365L14.4495 0.408998C14.3436 0.279002 14.2173 0.175685 14.0781 0.105013V0.106395Z"
      fill="#909090"
    />
  </svg>
);
export const Marker = () => (
  <svg
    width="12"
    height="15"
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="&#236;&#158;&#165;&#236;&#134;&#140; &#236;&#149;&#132;&#236;&#157;&#180;&#236;&#189;&#152;">
      <path
        id="Vector"
        d="M5.38338 14.6974C0.842813 8.5263 0 7.89296 0 5.625C0 2.51839 2.68628 0 6 0C9.31372 0 12 2.51839 12 5.625C12 7.89296 11.1572 8.5263 6.61662 14.6974C6.31866 15.1009 5.68131 15.1009 5.38338 14.6974ZM6 7.96875C7.38072 7.96875 8.5 6.91942 8.5 5.625C8.5 4.33057 7.38072 3.28125 6 3.28125C4.61928 3.28125 3.5 4.33057 3.5 5.625C3.5 6.91942 4.61928 7.96875 6 7.96875Z"
        fill="#0084FF"
      />
    </g>
  </svg>
);
export const SecretEye: React.FC<Props> = ({ style, onClick }) => (
  <svg
    style={style}
    onClick={onClick}
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="&#240;&#159;&#166;&#134; icon &#34;Eye Slash&#34;">
      <path
        id="Vector"
        d="M17.831 12.8789L1.01274 0.0959767C0.966614 0.0600684 0.913662 0.0333454 0.85691 0.0173336C0.800159 0.00132179 0.740719 -0.0036653 0.681984 0.00265706C0.62325 0.00897942 0.566372 0.0264874 0.514597 0.0541814C0.462822 0.0818755 0.417165 0.119213 0.380232 0.164063L0.0989906 0.505586C0.0619708 0.550451 0.0344135 0.601973 0.0178957 0.657203C0.00137784 0.712434 -0.00377633 0.770289 0.00272808 0.827459C0.0092325 0.884628 0.0272678 0.939989 0.0558021 0.990375C0.0843363 1.04076 0.122809 1.08518 0.16902 1.12109L16.9873 13.904C17.0334 13.9399 17.0863 13.9667 17.1431 13.9827C17.1998 13.9987 17.2593 14.0037 17.318 13.9973C17.3767 13.991 17.4336 13.9735 17.4854 13.9458C17.5372 13.9181 17.5828 13.8808 17.6198 13.8359L17.901 13.4944C17.938 13.4495 17.9656 13.398 17.9821 13.3428C17.9986 13.2876 18.0038 13.2297 17.9973 13.1725C17.9908 13.1154 17.9727 13.06 17.9442 13.0096C17.9157 12.9592 17.8772 12.9148 17.831 12.8789ZM8.34724 4.00504L12.1381 6.88652C12.0757 5.24754 10.7009 3.9375 9 3.9375C8.78059 3.9379 8.56182 3.96053 8.34724 4.00504ZM9.65276 9.99523L5.86191 7.11375C5.92463 8.75246 7.29933 10.0625 9 10.0625C9.21939 10.062 9.43815 10.0395 9.65276 9.99523ZM9 3.0625C11.7744 3.0625 14.318 4.56641 15.6916 7C15.3549 7.59893 14.9388 8.15235 14.4541 8.64609L15.5155 9.45273C16.1065 8.8381 16.6071 8.14696 17.0033 7.39895C17.0676 7.27521 17.1011 7.13851 17.1011 6.99986C17.1011 6.86122 17.0676 6.72451 17.0033 6.60078C15.4767 3.70754 12.4573 1.75 9 1.75C7.96784 1.75 6.98322 1.94141 6.05737 2.26434L7.36261 3.25664C7.89528 3.13906 8.44089 3.0625 9 3.0625ZM9 10.9375C6.22555 10.9375 3.68229 9.43359 2.30842 7C2.64557 6.40108 3.06208 5.84775 3.54729 5.35418L2.48589 4.54754C1.89504 5.16208 1.39447 5.85314 0.998401 6.60105C0.934064 6.72479 0.900544 6.86149 0.900544 7.00014C0.900544 7.13878 0.934064 7.27549 0.998401 7.39922C2.52357 10.2925 5.54298 12.25 9 12.25C10.0322 12.25 11.0168 12.0572 11.9426 11.7357L10.6374 10.7436C10.1047 10.8609 9.55939 10.9375 9 10.9375Z"
        fill="#797979"
      />
    </g>
  </svg>
);
export const Star = () => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="&#240;&#159;&#166;&#134; icon &#34;star&#34;">
      <path
        id="Vector"
        d="M13.2498 1.82507C13.683 0.724974 15.317 0.724974 15.7502 1.82508L18.5449 9.29863C18.7404 9.79491 19.2385 10.1237 19.7951 10.1237H26.6622C27.9302 10.1237 28.4841 11.6491 27.4871 12.3951L22.6 16.6406C22.15 16.9773 21.9754 17.5497 22.1658 18.0637L23.95 25.3669C24.3844 26.5389 22.9768 27.5472 21.9149 26.8248L15.2761 22.7595C14.8119 22.4437 14.1882 22.4437 13.7239 22.7595L7.08519 26.8248C6.02319 27.5472 4.61564 26.5389 5.05 25.3669L6.83418 18.0637C7.02465 17.5497 6.85001 16.9773 6.4 16.6406L1.51292 12.3951C0.515839 11.6491 1.06982 10.1237 2.33785 10.1237H9.20486C9.76145 10.1237 10.2596 9.79491 10.4551 9.29863L13.2498 1.82507Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export const StartPageCloud = () => (
  <svg
    width="140"
    height="94"
    viewBox="0 0 140 94"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 153">
      <g id="&#240;&#159;&#166;&#134; icon &#34;cloud&#34;">
        <path
          id="Vector"
          d="M108.665 34.584H105.796L105.233 31.7708C102.021 15.7235 87.1441 3.5 70.1218 3.5C50.8056 3.5 35.0789 19.3134 35.0789 38.855V46.626V49.0743L32.7789 49.9138C25.3663 52.6194 19.6617 61.1426 19.6617 69.939C19.6617 80.9325 28.4508 89.752 39.2875 89.752H108.665C123.664 89.752 135.999 77.3578 135.999 62.168C135.999 46.9781 123.664 34.584 108.665 34.584Z"
          stroke="#2D74FF"
          strokeWidth="7"
        />
      </g>
      <g id="&#240;&#159;&#166;&#134; icon &#34;heart&#34;">
        <path
          id="Vector_2"
          d="M8.36311 24.0467L8.34886 24.0615L8.33483 24.0765C5.48876 27.1115 3.6748 31.2448 3.6748 35.936C3.6748 40.5719 5.49803 44.6869 8.307 47.7655L8.32081 47.7807L8.33483 47.7956L30.577 71.5143L32.7654 73.8479L34.9537 71.5143L57.1959 47.7956C60.042 44.7606 61.856 40.6272 61.856 35.936C61.856 31.3002 60.0327 27.1852 57.2238 24.1066L57.2099 24.0914L57.1959 24.0765C54.3497 21.0413 50.3883 19.0248 45.8107 19.0248C41.285 19.0248 37.3407 21.0512 34.4537 24.0467L34.4394 24.0615L34.4254 24.0765C33.8187 24.7235 33.2589 25.4204 32.7535 26.162C32.2613 25.4349 31.7186 24.7482 31.1332 24.1066L31.1194 24.0914L31.1054 24.0765C28.2591 21.0413 24.2977 19.0248 19.7201 19.0248C15.1944 19.0248 11.2502 21.0512 8.36311 24.0467Z"
          fill="#2D74FF"
          stroke="white"
          strokeWidth="6"
        />
      </g>
    </g>
  </svg>
);
export const UserLike = () => (
  <svg
    width="34"
    height="26"
    viewBox="0 0 34 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 85">
      <g id="&#240;&#159;&#166;&#134; icon &#34;cloud&#34;">
        <path
          id="Vector"
          d="M25.7253 9.60812H24.8872L24.7407 8.78292C23.9411 4.27929 20.2827 1 16.2565 1C11.6984 1 7.78779 5.24887 7.78779 10.7601V12.9122V13.5821L7.16829 13.837C5.4337 14.5507 4.00029 16.8724 4.00029 19.3683C4.00029 22.5123 6.2065 24.8243 8.68154 24.8243H25.7253C29.223 24.8243 32.3003 21.5224 32.3003 17.2162C32.3003 12.9101 29.223 9.60812 25.7253 9.60812Z"
          stroke="black"
          strokeWidth="2"
        />
      </g>
      <g id="&#240;&#159;&#166;&#134; icon &#34;heart&#34;">
        <path
          id="Vector_2"
          d="M2.96142 6.03617L2.95446 6.04368L2.9476 6.05128C2.05754 7.03807 1.5 8.37109 1.5 9.86828C1.5 11.3527 2.06206 12.6764 2.93404 13.67L2.94077 13.6777L2.9476 13.6853L9.08241 20.4867L10.1963 21.7216L11.3101 20.4867L17.4449 13.6853C18.335 12.6985 18.8925 11.3655 18.8925 9.86828C18.8925 8.38385 18.3304 7.06012 17.4585 6.06652L17.4517 6.05885L17.4449 6.05128C16.5549 5.06456 15.2855 4.37915 13.7944 4.37915C12.3361 4.37915 11.0902 5.0498 10.1967 5.99449C9.30957 5.03836 8.0605 4.37915 6.59813 4.37915C5.11849 4.37915 3.85747 5.06959 2.96142 6.03617Z"
          fill="black"
          stroke="white"
          strokeWidth="3"
        />
      </g>
    </g>
  </svg>
);
export const UserPost = () => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 86">
      <g id="&#240;&#159;&#166;&#134; icon &#34;image&#34;">
        <g id="Group">
          <path
            id="Vector"
            d="M1 6.2202C1 3.33716 3.41766 1 6.4 1H22.6C25.5823 1 28 3.33716 28 6.2202V21.8808C28 24.7638 25.5823 27.101 22.6 27.101H6.4C3.41766 27.101 1 24.7638 1 21.8808V6.2202Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <g id="&#240;&#159;&#166;&#134; icon &#34;moon&#34;">
        <path
          id="Vector_2"
          d="M11.7146 5.60132C8.16364 6.79246 5.60156 10.1411 5.60156 14.0966C5.60156 19.0634 9.62447 23.0864 14.5913 23.0864C18.5468 23.0864 21.8955 20.5243 23.0866 16.9733C22.1876 17.2655 21.2212 17.4678 20.2099 17.4678C15.2431 17.4678 11.2201 13.4449 11.2201 8.47803C11.2201 7.46669 11.3999 6.50029 11.7146 5.60132Z"
          fill="black"
        />
      </g>
    </g>
  </svg>
);

export const ModalWarning = () => (
  <svg
    width="21"
    height="31"
    viewBox="0 0 21 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="&#240;&#159;&#166;&#134; icon &#34;exclamation&#34;"
      filter="url(#filter0_d_1446_3523)"
    >
      <path
        id="Vector"
        d="M12.8125 20.5103C12.8125 21.7877 11.7331 22.827 10.4062 22.827C9.07944 22.827 8 21.7877 8 20.5103C8 19.2328 9.07944 18.1935 10.4062 18.1935C11.7331 18.1935 12.8125 19.2328 12.8125 20.5103ZM8.27852 8.72974L8.68759 16.6066C8.70681 16.9765 9.02389 17.2669 9.40856 17.2669H11.4039C11.7886 17.2669 12.1057 16.9765 12.1249 16.6066L12.534 8.72974C12.5546 8.33274 12.2259 8 11.813 8H8.9995C8.58664 8 8.25792 8.33274 8.27852 8.72974Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1446_3523"
        x="0"
        y="0"
        width="20.8125"
        height="30.827"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1446_3523"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1446_3523"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export const SearchIcon = ({ fillColor }: svgColorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="46"
    height="39"
    viewBox="0 0 46 39"
    fill="none"
  >
    <path
      d="M21.0868 32.9544C25.3378 32.4417 29.2009 30.3416 31.8263 27.116C34.4516 23.8904 35.6242 19.8035 35.086 15.7544C34.5478 11.7053 32.343 8.02574 28.9565 5.52509C25.57 3.02443 21.2794 1.90756 17.0284 2.42019C12.7774 2.93281 8.9143 5.03293 6.28895 8.25854C3.6636 11.4841 2.49104 15.571 3.02922 19.6201C3.56741 23.6692 5.77225 27.3488 9.1587 29.8495C12.5452 32.3501 16.8358 33.467 21.0868 32.9544Z"
      stroke={fillColor}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M43.6807 36.4849L32.1895 27.9995"
      stroke={fillColor}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="46"
    viewBox="0 0 48 46"
    fill="none"
  >
    <path
      d="M38.0986 24.7183V41.7386C38.0978 42.8686 37.6482 43.952 36.8486 44.7511C36.0489 45.5501 34.9645 45.9992 33.8336 46H4.265C3.1341 45.9992 2.04973 45.5501 1.24999 44.7511C0.450448 43.952 0.000820713 42.8686 0 41.7386V13.4148C0.000961752 12.2844 0.4509 11.2007 1.25126 10.4017C2.05145 9.60266 3.13648 9.15387 4.26771 9.15387H24.0026C24.5383 9.15387 25.0334 9.43959 25.3013 9.90308C25.5693 10.3668 25.5693 10.9379 25.3013 11.4015C25.0334 11.8652 24.5382 12.1507 24.0026 12.1507H4.26483C3.92949 12.1511 3.60794 12.2843 3.37071 12.5214C3.13363 12.7582 3.00011 13.0795 2.99994 13.4147V41.7386C3.0001 42.0736 3.13363 42.3951 3.37071 42.6319C3.60794 42.869 3.92949 43.0022 4.26483 43.0026H33.8335C34.1688 43.0022 34.4904 42.869 34.7276 42.6319C34.9647 42.3951 35.098 42.0736 35.0984 41.7386V24.7183C35.0907 24.3158 35.2454 23.9272 35.5275 23.6399C35.8096 23.3526 36.1956 23.1907 36.5984 23.1907C37.0013 23.1907 37.3873 23.3526 37.6694 23.6399C37.9515 23.9272 38.1062 24.3158 38.0985 24.7183L38.0986 24.7183ZM46.3603 9.55781L26.0161 29.884C25.8813 30.0192 25.7218 30.1273 25.5461 30.2021C24.7878 30.5269 24.0371 30.8496 23.2941 31.1702C20.6581 32.3063 18.168 33.3788 15.4752 34.4438C15.1104 34.5879 14.7037 34.5836 14.3421 34.4316C13.9805 34.2796 13.6929 33.9923 13.5408 33.631C13.3887 33.2696 13.3843 32.8633 13.5284 32.4988C14.2124 30.7725 14.9604 29.0547 15.6836 27.3884C16.3867 25.7731 17.1128 24.1023 17.7579 22.4745H17.758C17.833 22.2839 17.9467 22.1108 18.0917 21.966L38.4343 1.63979C39.8501 0.22542 41.9132 -0.326821 43.8469 0.190979C45.7806 0.708616 47.2909 2.21782 47.809 4.14999C48.3271 6.08216 47.7742 8.14356 46.3586 9.55801L46.3603 9.55781ZM37.2393 14.4304L33.5571 10.7512L20.431 23.867C19.7991 25.4463 19.1058 27.0376 18.435 28.5825C18.1876 29.1507 17.939 29.7241 17.6893 30.3029C19.1545 29.689 20.606 29.0636 22.1055 28.418C22.765 28.1337 23.4294 27.8478 24.0988 27.5602L37.2393 14.4304ZM44.2372 3.75823C43.7486 3.27085 43.0864 2.99717 42.396 2.99717C41.7056 2.99717 41.0436 3.27088 40.5549 3.75823L35.6786 8.63078L39.3609 12.31L44.2372 7.4374V7.43724C44.7249 6.94909 44.9989 6.28745 44.9989 5.59782C44.9989 4.90802 44.7249 4.24638 44.2372 3.75823Z"
      fill="black"
    />
  </svg>
);
export const CommentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="26"
    viewBox="0 0 30 26"
    fill="none"
  >
    <path
      d="M8.4403 10.1595C7.40332 10.1595 6.56554 10.985 6.56554 12.0067C6.56554 13.0284 7.40332 13.8539 8.4403 13.8539C9.47727 13.8539 10.3151 13.0284 10.3151 12.0067C10.3151 10.985 9.47727 10.1595 8.4403 10.1595ZM15.0019 10.1595C13.965 10.1595 13.1272 10.985 13.1272 12.0067C13.1272 13.0284 13.965 13.8539 15.0019 13.8539C16.0389 13.8539 16.8767 13.0284 16.8767 12.0067C16.8767 10.985 16.0389 10.1595 15.0019 10.1595ZM21.5636 10.1595C20.5266 10.1595 19.6888 10.985 19.6888 12.0067C19.6888 13.0284 20.5266 13.8539 21.5636 13.8539C22.6006 13.8539 23.4384 13.0284 23.4384 12.0067C23.4384 10.985 22.6006 10.1595 21.5636 10.1595ZM15.0019 0C6.71786 0 0.00388826 5.37416 0.00388826 12.0067C0.00388826 14.7544 1.16975 17.2712 3.1031 19.2973C2.23016 21.5717 0.413991 23.4997 0.384698 23.5228C-0.00197036 23.9268 -0.107425 24.5156 0.115202 25.0236C0.337829 25.5316 0.847529 25.8606 1.40996 25.8606C5.013 25.8606 7.85443 24.3771 9.55929 23.188C11.2524 23.7133 13.0803 24.0134 15.0019 24.0134C23.286 24.0134 30 18.6393 30 12.0067C30 5.37416 23.286 0 15.0019 0ZM15.0019 21.2427C13.4377 21.2427 11.891 21.006 10.4088 20.5442L9.07888 20.1286L7.93645 20.9252C7.09867 21.5082 5.95038 22.1605 4.56775 22.5992C4.99543 21.9007 5.41139 21.1157 5.73361 20.2787L6.35463 18.6566L5.14775 17.3982C4.08734 16.2841 2.81602 14.4427 2.81602 12.0067C2.81602 6.91541 8.28211 2.77078 15.0019 2.77078C21.7218 2.77078 27.1879 6.91541 27.1879 12.0067C27.1879 17.098 21.7218 21.2427 15.0019 21.2427Z"
      fill="white"
    />
  </svg>
);
export const FeedPlayer = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
  >
    <circle cx="11" cy="11" r="11" fill="url(#paint0_linear_1915_2364)" />
    <path d="M17 11L8 16.1962L8 5.80385L17 11Z" fill="white" />
    <defs>
      <linearGradient
        id="paint0_linear_1915_2364"
        x1="2"
        y1="2"
        x2="19"
        y2="22"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4AA8FF" />
        <stop offset="1" stopColor="#2B99FF" />
      </linearGradient>
    </defs>
  </svg>
);
export const Xmark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <rect
      x="3"
      y="4.37134"
      width="1.93936"
      height="17.9038"
      transform="rotate(-45 3 4.37134)"
      fill="#929AA7"
    />
    <rect
      x="4.37109"
      y="17.0312"
      width="1.93936"
      height="17.9038"
      transform="rotate(-135 4.37109 17.0312)"
      fill="#929AA7"
    />
  </svg>
);
export const Volume = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
    <path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
  </svg>
);

export const Clouds = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
  >
    <rect width="50" height="50" fill="white" />
    <path
      d="M13.864 19.4674C17.0588 16.3655 22.363 16.9341 24.6157 17.6062C26.3363 14.8765 30.0427 13.8839 31.6808 13.7289C31.0664 7.64913 25.9978 7.36996 23.5402 7.99034C23.0794 6.1809 20.8984 2.65508 15.8604 3.0273C10.8225 3.39953 8.94859 7.31826 8.6414 9.2311C7.71983 9.2311 5.41623 8.92091 2.6515 11.5575C-0.11323 14.1941 0.65475 21.0183 4.49465 22.2591C8.33455 23.4998 9.87051 23.3447 13.864 19.4674Z"
      fill="#D9D9D9"
    />
    <path
      d="M14.9388 22.8794C18.748 18.7849 23.489 20.3462 25.3834 21.6387C26.151 20.3979 29.9913 15.59 36.2887 17.6062C41.3266 19.2192 42.4837 24.2753 42.4325 26.6017C47.3476 27.7184 49.3955 31.8233 49.8051 33.7361C51.1568 40.8084 45.1461 44.1274 41.9717 44.9029H17.0892C14.1709 45.3165 8.11918 44.6237 7.25904 38.544C6.3989 32.4643 10.9965 30.0138 13.4029 29.5485C12.7885 26.4466 14.1709 23.81 14.9388 22.8794Z"
      fill="#D9D9D9"
    />
  </svg>
);
export const Find = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="20"
    viewBox="0 0 25 20"
    fill="none"
  >
    <path
      d="M8.13297 10.4371C9.6559 8.6648 12.36 8.79392 13.5217 9.08001C14.3093 7.55668 16.1561 6.90033 16.9811 6.76257C16.4832 3.51752 13.9073 3.53607 12.6816 3.95098C12.3926 2.99443 11.1796 1.17319 8.63931 1.5406C6.09898 1.908 5.27019 4.07508 5.17333 5.1127C4.70654 5.14333 3.53023 5.05331 2.21083 6.56137C0.891442 8.06943 1.11098 11.5 3.47303 12.248C5.43156 12.8682 6.22929 12.6524 8.13297 10.4371Z"
      fill="white"
      stroke="black"
      strokeWidth="1.5"
    />
    <path
      d="M7.45244 8.77358C9.14159 7.01133 11.2439 7.6833 12.084 8.23956C12.4244 7.70555 14.1273 5.63624 16.9198 6.50401C19.1539 7.19823 19.667 9.37434 19.6443 10.3756C21.8238 10.8562 22.732 12.6229 22.9136 13.4462C23.513 16.4901 20.8476 17.9186 19.4399 18.2523H8.40599C7.11188 18.4303 4.42832 18.1322 4.0469 15.5155C3.66548 12.8988 5.70426 11.8442 6.77133 11.6439C6.49889 10.3089 7.11188 9.17409 7.45244 8.77358Z"
      fill="white"
      stroke="black"
      strokeWidth="1.5"
    />
  </svg>
);
export const Mappin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="17"
    viewBox="0 0 11 17"
    fill="none"
  >
    <path
      d="M4.93476 16.1572C0.772578 9.60192 0 8.92915 0 6.51999C0 3.21997 2.46242 0.5448 5.5 0.5448C8.53758 0.5448 11 3.21997 11 6.51999C11 8.92915 10.2274 9.60192 6.06524 16.1572C5.7921 16.5858 5.20787 16.5858 4.93476 16.1572ZM5.5 9.00966C6.76566 9.00966 7.79167 7.895 7.79167 6.51999C7.79167 5.14498 6.76566 4.03033 5.5 4.03033C4.23434 4.03033 3.20833 5.14498 3.20833 6.51999C3.20833 7.895 4.23434 9.00966 5.5 9.00966Z"
      fill="#0084FF"
    />
  </svg>
);
export const Logo = () => (
  <svg
    width="120"
    height="65"
    viewBox="0 0 7738 1469"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1214.92 151.29V1320.01C1214.92 1365.18 1177.72 1401.81 1131.85 1401.81H882.985C837.115 1401.81 799.918 1365.18 799.918 1320.01V965.452C799.918 920.286 762.722 883.653 716.852 883.653H566.065C520.195 883.653 482.998 920.286 482.998 965.452V1320.01C482.998 1365.18 445.802 1401.81 399.932 1401.81H151.066C105.196 1401.81 68 1365.18 68 1320.01V151.29C68 106.124 105.196 69.4907 151.066 69.4907H399.932C445.802 69.4907 482.998 106.124 482.998 151.29V477.602C482.998 522.768 520.195 559.4 566.065 559.4H716.852C762.722 559.4 799.918 522.768 799.918 477.602V151.29C799.918 106.124 837.115 69.4907 882.985 69.4907H1131.85C1177.72 69.4907 1214.92 106.124 1214.92 151.29Z"
      fill="white"
    />
    <path
      d="M2079.94 1359.59L2028.23 1181.57C2020.89 1156.56 1997.71 1139.35 1971.35 1139.35H1697.8C1671.78 1139.35 1648.76 1156.12 1641.26 1180.69L1585.71 1360.62C1578.04 1385.19 1555.19 1401.96 1529.17 1401.96H1316.5C1276.63 1401.96 1248.11 1363.85 1259.95 1326.34L1640.59 110.684C1648.26 86.2624 1671.11 69.4907 1697.13 69.4907H2048.58C2074.44 69.4907 2097.29 86.1153 2105.13 110.39L2491.94 1326.04C2503.95 1363.71 2475.42 1401.81 2435.39 1401.81H2137.32C2110.3 1401.81 2087.11 1384.6 2079.94 1359.59ZM1802.22 848.491H1864.94C1904.13 848.491 1932.49 811.711 1921.98 774.49L1890.62 663.561C1874.44 606.626 1792.71 606.626 1776.53 663.561L1745.17 774.49C1734.66 811.564 1763.02 848.491 1802.22 848.491Z"
      fill="white"
    />
    <path
      d="M2972.32 999.583V1320.01C2972.32 1365.18 2935.12 1401.81 2889.25 1401.81H2634.55C2588.68 1401.81 2551.48 1365.18 2551.48 1320.01V151.29C2551.48 106.124 2588.68 69.4907 2634.55 69.4907H3128.78C3272.73 69.4907 3382.15 85.821 3457.04 118.335C3531.93 150.848 3591.32 200.722 3635.18 267.661C3679.05 334.748 3701.07 409.779 3701.07 493.196C3701.07 620.161 3656.2 722.557 3566.46 800.677C3476.72 878.798 3356.96 917.785 3207.01 917.785H3055.39C3009.52 917.785 2972.32 954.418 2972.32 999.583ZM2966.32 549.985C2966.32 595.151 3003.51 631.783 3049.38 631.783H3104.93C3227.02 631.783 3288.07 587.5 3288.07 499.081C3288.07 415.811 3231.69 374.176 3118.77 374.176H3049.38C3003.51 374.176 2966.32 410.809 2966.32 455.975V549.985Z"
      fill="white"
    />
    <path
      d="M5627.11 1420.37C5444.63 1420.37 5295.68 1358.28 5180.76 1233.96C5065.66 1109.65 5008.12 943.402 5008.12 735.227C5008.12 536.174 5063.16 371.694 5173.08 241.787C5283 111.88 5435.63 47 5630.95 47C5811.59 47 5958.88 108.202 6072.63 230.459C6186.39 352.862 6243.27 516.166 6243.27 720.515C6243.27 932.074 6185.89 1101.56 6071.13 1229.11C5956.54 1356.52 5808.42 1420.37 5627.11 1420.37ZM5625.28 1117.74C5692.5 1117.74 5740.87 1087.58 5770.23 1027.41C5799.75 967.236 5814.43 857.043 5814.43 696.976C5814.43 465.262 5753.88 349.479 5632.78 349.479C5502.18 349.479 5436.96 481.592 5436.96 745.82C5436.96 993.717 5499.68 1117.74 5625.28 1117.74Z"
      fill="white"
    />
    <path
      d="M6308.32 1340.52C6308.32 1374.07 6333.51 1401.28 6364.53 1401.28H6612.9C6644.59 1401.28 6670.28 1374.07 6670.28 1340.52V1018.63C6670.28 936.092 6785.87 921.674 6805.38 1001.71L6891.95 1355.82C6898.46 1382.6 6921.31 1401.28 6947.5 1401.28H7104.29C7130.31 1401.28 7153 1382.89 7159.67 1356.27L7255.24 979.786C7275.43 900.341 7390.19 915.2 7390.19 997.293V1340.38C7390.19 1373.92 7415.87 1401.14 7447.56 1401.14H7613.2C7644.72 1401.14 7670.24 1373.63 7670.24 1339.79V217.263C7670.24 127.667 7602.08 69.9907 7518.85 69.9907H7289.5C7217.61 69.9907 7155.33 106.776 7136.48 181.219L7054.92 502.676C7035.5 583.491 6948 581.991 6928 502.676L6840.25 163.711C6824.73 99.7142 6764.55 69.9897 6703 69.9897H6458.64C6373.07 69.9897 6310.32 129.58 6310.32 221.677V667.009"
      fill="white"
    />
    <path
      d="M4353.92 1421.86C4171.45 1421.86 4022.49 1359.77 3907.57 1235.45C3792.48 1111.14 3734.93 944.892 3734.93 736.718C3734.93 537.664 3789.97 373.184 3899.9 243.277C4009.82 113.37 4162.44 48.4902 4357.76 48.4902C4538.41 48.4902 4685.69 109.692 4799.45 231.949C4913.2 354.353 4970.08 517.656 4970.08 722.006C4970.08 933.564 4912.7 1103.05 4797.95 1230.6C4683.19 1358.15 4535.07 1421.86 4353.92 1421.86ZM4351.92 1141.74C4419.14 1141.74 4467.52 1111.58 4496.87 1051.41C4526.4 991.235 4541.07 881.042 4541.07 720.976C4541.07 489.262 4480.53 373.478 4359.43 373.478C4228.82 373.478 4163.61 505.592 4163.61 769.82C4163.61 1017.72 4226.49 1141.74 4351.92 1141.74Z"
      fill="white"
    />
  </svg>
);
