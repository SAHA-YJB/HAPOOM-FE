import styled from 'styled-components';

export const HomePageLayout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
// main comment section styled
export const SectionTitle = styled.h2`
  max-width: 768px;
  padding: 26px 36px 24px;
  color: #0084ff;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 5px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    background-color: #0084ff;
  }
  @media screen and (min-width: 786px) {
    padding: 26px 16px 24px;
    &::after {
      left: 0;
    }
  }
`;

// main banner style
type mainBannerProps = {
  $isClick: boolean;
};

export const MainBannerContainer = styled.div<mainBannerProps>`
  width: 100%;
  height: ${(props) => (props.$isClick ? '29vh' : 'calc(100vh - 52px)')};
  transition: all 0.8s ease-in-out;
  position: relative;
  p {
    width: 90%;
    word-wrap: break-word;
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    color: #fff;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.8s ease-in-out;
    opacity: ${(props) => (props.$isClick ? '0' : '1')};
  }
  @media screen and (min-width: 768px) {
    height: ${(props) => (props.$isClick ? '400px' : '100vh')};
    p {
      bottom: 225px;
      max-width: 768px;
      font-size: 28px;
      line-height: 36px;
    }
  }
`;

// main banner slide style
interface SliderListProps {
  $slideindex: number;
  width?: number;
  $sliedsum: number;
}

type WidthOnly = Pick<SliderListProps, 'width'>;

export const MainBannerLayout = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const SliderList = styled.ul<SliderListProps>`
  width: ${(props) =>
    props.width ? `${props.width * props.$sliedsum}px` : `500vw`};
  height: 100%;
  display: flex;
  transform: ${(props) =>
    props.width
      ? `translateX(${props.$slideindex * props.width * -1}px)`
      : `translateX(${props.$slideindex * 100 * -1}vw)`};
  transition: all 0.3s ease-in-out;
  list-style: none;
`;

export const SliderItem = styled.li<WidthOnly>`
  width: ${(props) => (props.width ? `${props.width}px` : `100vw`)};
  height: 100%;
  position: relative;
  /* padding: 50px 100px; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    width: 50%;
    word-wrap: break-word;
    bottom: 24px;
    left: 24px;
    font-size: 20px;
    line-height: 30px;
    color: #fff;
  }
`;

export const SlideDotBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 24px;
  gap: 4px;
  position: absolute;
  bottom: 12px;
  span {
    display: block;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    &.active {
      background-color: #0084ff;
    }
  }
`;

//------hashtag contents styles--------

export const HashtagContentsLayout = styled.section`
  width: 100%;
  @media screen and (max-width: 786px) {
  }
`;

export const ScrollBar = styled.div`
  width: 30px;
  padding: 8px 0 10px;
  span {
    display: block;
    background-color: #e4e1e1;
    width: 100%;
    height: 4px;
    margin-bottom: 1px;
    border-radius: 2px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px 0;
  }
`;

//popular contents section style
interface PropularSliderListProps {
  $slideindex: number;
  $slideListWidth?: number;
  $slideItemWidth?: number;
}
type Slideitemwidth = Pick<PropularSliderListProps, '$slideItemWidth'>;
type hashtagNavbarProps = {
  $isClick?: boolean;
};
export const PopularContentsLayout = styled.section`
  width: 100%;
  position: relative;
  @media screen and (max-width: 786px) {
    padding: 20px 0;
  }
`;

export const ProularContentContainer = styled.div<Slideitemwidth>`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
`;

export const PopularContentsList = styled.ul<PropularSliderListProps>`
  width: ${(props) =>
    props.$slideListWidth ? `${props.$slideListWidth}px` : `3000px`};
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style: none;
  gap: 16px;

  transform: ${(props) =>
    props.$slideItemWidth
      ? `translateX(${props.$slideindex * (props.$slideItemWidth + 4) * -1}px)`
      : 'translateX(0px)'};
  transition: all 0.3s ease-in-out;
`;

export const PopularContentItem = styled.li<Slideitemwidth>`
  width: ${(props) =>
    props.$slideItemWidth ? `${props.$slideItemWidth - 12}px` : `25px`};
`;

export const SlideButtonBox = styled.div`
  width: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 0;
  @media screen and (max-width: 786px) {
    top: 100%;
  }
`;

//hashtag navbar style
export const HashtagNavBarLayout = styled.nav<hashtagNavbarProps>`
  width: 100%;
  border-radius: 30px 30px 0 0;
  transform: translateY(-95%);
  position: relative;
  z-index: 10;
  font-size: 10px;
  color: #fff;
  overflow: hidden;
  .background {
    width: 100%;
    padding: 0px 24px 20px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.22) 80%,
      #fff 90%,
      #fff 95%,
      rgba(255, 255, 255, 0.1) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    transform: translateY(-100%);
    .background {
      width: 100%;
      padding: 0px 24px 35px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.22) 80%,
        #fff 90%,
        #fff 95%,
        rgba(255, 255, 255, 0.1) 100%
      );
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const HashtagList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  list-style: none;
`;

export const HashtagItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 9px;
  cursor: pointer;
  figure {
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 2px;
    overflow: hidden;
    border-radius: 8px;
    width: 44px;
    height: 44px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 12px;
    font-weight: 500;
    figure {
      width: 120px;
      height: 100px;
    }
  }
`;

// popular contents carousel styles
interface CarouselStyleprops {
  $active: number;
  $i: number;
}
const MAX_VISIBILITY = 3;

export const HomeMainSection = styled.section`
  background-color: #f0f1f2;
  margin-top: 24px;
  @media screen and (min-width: 786px) {
    padding-top: 24px;
  }
`;

export const PopularContentsContainer = styled.div`
  width: 100%;
  padding: 24px 24px 56px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const CarouselStyle = styled.div`
  --size: 180px;
  position: relative;
  width: var(--size);
  height: var(--size);

  perspective: 500px;
  transform-style: preserve-3d;
  & > div {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  @media screen and (min-width: 460px) {
    --size: 210px;
  }
  @media screen and (min-width: 768px) {
    --size: 280px;
  }
`;

export const CardContainer = styled.div<CarouselStyleprops>`
  position: absolute;
  width: 100%;
  /* height: 100%; */
  border-radius: 8px;
  overflow: hidden;
  pointer-events: auto;
  --active: ${({ $active, $i }) => ($i === $active ? 1 : 0)};
  --offset: ${({ $active, $i }) => ($active - $i) / 3};
  --direction: ${({ $active, $i }) => $active - $i};
  --abs-offset: ${({ $active, $i }) => Math.abs($active - $i) / 3};

  opacity: ${({ $active, $i }) =>
    Math.abs($active - $i) / MAX_VISIBILITY >= 1 ? 0 : 1};
  display: ${({ $active, $i }) =>
    Math.abs($active - $i) / MAX_VISIBILITY > 1 ? 'none' : 'block'};
  transform: rotateY(calc(0 * 50deg)) scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--direction) * -5.5rem));
  transition: all 0.3s ease-out;
  .heart {
    display: ${({ $active, $i }) => ($i === $active ? 'flex' : 'none')};
  }
  @media screen and (min-width: 460px) {
    transform: rotateY(calc(0 * 50deg))
      scaleY(calc(1 + var(--abs-offset) * -0.4))
      translateZ(calc(var(--abs-offset) * -30rem))
      translateX(calc(var(--direction) * -8rem));
  }
  @media screen and (min-width: 768px) {
    transform: rotateY(calc(0 * 50deg))
      scaleY(calc(1 + var(--abs-offset) * -0.4))
      translateZ(calc(var(--abs-offset) * -30rem))
      translateX(calc(var(--direction) * -15.3rem));
  }
`;
