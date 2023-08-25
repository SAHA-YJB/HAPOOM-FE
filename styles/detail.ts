import styled, { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
`;

export const GlobalStyle = createGlobalStyle`
  body{
    color: #051619;
    font-size: 14px;
    font-family: "Noto Sans KR","Apple SD Gothic Neo",sans-serif;
    line-height: 1.8;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    letter-spacing: -.0125rem;
    margin: 0;
  }
  `;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  /* padding: 20px 30px; */
  gap: 30px;
  /* height: 10vh; */
  .image {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const DetialContentSection = styled.section`
  margin-bottom: 40px;
  h3 {
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 1px solid #cdcdcd;
    font-size: 16px;
    line-height: 16px;
    &::after {
      content: '';
      display: block;
      position: relative;
      bottom: -10px;
      width: 60px;
      height: 3px;
      background-color: #0084ff;
    }
  }
  .comments-header {
    display: flex;
    gap: 8px;
    h3 {
      width: 60%;
    }
    button {
      width: 40%;
      padding: 4px 22px 2px;
    }
  }
  .button-box {
    width: 100%;
    display: flex;
    gap: 8px;
    button {
      width: 50%;
    }
  }
  & > div:last-child {
    border: none;
  }
`;

export const OtherProfileBox = styled.div`
  width: 100%;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  padding: 0 24px;
  /* position: relative; */
  .heart {
    position: static;
    width: 36px;
    height: 36px;
    margin-top: 10px;
    margin-bottom: 12px;
  }
  .detail-content-text {
    min-height: 120px;
    margin-bottom: 12px;
  }
  .carousel-box {
    border-radius: 8px;
    overflow: hidden;
    height: 45vh;
  }
`;
export const HashtagBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const Hashtag = styled.div`
  color: #0084ff;
  cursor: pointer;
  display: inline-block;
  padding: 8px 20px 6px;
  border-radius: 20px;
  border: 2px solid #0084ff;
  text-align: center;
  font-size: 14px;
`;

export const CommentForm = styled.form`
  width: 100%;
  padding: 8px 0;
  textarea {
    width: 100%;
    height: 141px;
    padding: 16px 12px;
    margin-top: 8px;
    resize: none;
    border: 1px solid #0084ff;
    border-radius: 3px;
    ::placeholder {
      color: #b3b3b3;
    }
  }
`;

// comment components style
export const CommentsContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
`;
export const CommentBox = styled.div`
  width: 100%;
  padding: 16px 0;
  .comment-profile {
    display: flex;
    gap: 12px;
  }
  .comment-image {
    width: 36px;
    height: 36px;
    border-radius: 18px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .comment {
    width: calc(100% - 48px);
    margin: 4px 0 0 auto;
    color: #737373;
    font-size: 12px;
    height: 70px;

    p {
      padding: 14px 12px 12px;
      line-height: 20px;
    }

    textarea {
      resize: none;
      width: 100%;
      height: 70px;
      padding: 14px 12px 12px;
      font-size: 12px;
      line-height: 20px;
      color: #737373;
      border: none;
      background-color: #f0efef;
      border-radius: 3px;
    }
  }
`;
export const CommentInfomation = styled.div`
  width: calc(100% - 48px);
  display: flex;
  justify-content: space-between;
  .comment-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    p {
      font-weight: 700;
      font-size: 12px;
      line-height: 12px;
      margin-bottom: 6px;
    }
    span {
      color: #b7b4b4;
      font-size: 8px;
      line-height: 8px;
    }
  }
  .comment-button-box {
    display: flex;
    &.active button:nth-child(1) svg path {
      fill: #369dfe;
    }
  }
`;

export const CommentButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 0 0;
  gap: 2px;
  color: #fff;
  font-size: 10px;
  position: fixed;
  right: 24px;
  bottom: 10vh;
  background-color: #52acff;
  border: none;
  cursor: pointer;
  z-index: 15;
`;

export const NoneComment = styled.div`
  width: 100%;
  padding: 36px 0;
  text-align: center;
  line-height: 1.8;
  color: #777;
`;
