import React, { useEffect, useState, memo } from 'react';
import {
  Dropdown,
  UserCommentBox,
  UserContainer,
  UserHeaderBox,
  UserPictureBox,
} from '@/styles/detail';
import Image from 'next/image';

type Post = {
  image: {
    url: string;
  };
};

const DetailUserPost: React.FC<{ data: any }> = ({ data }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const [userPic, setUserPic] = useState<string>('');

  const imagesPerPage = 1;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  useEffect(() => {
    if (data && data.posts) {
      const userImages = data.posts.map((post: Post) => post.image.url);
      setImages(userImages);
      setUserPic(data.posts[0].image.url);
    }
  }, [data]);

  // 드롭다운 클릭 이벤트 핸들러
  const handleDropdownClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const prevImage = () => {
    setCurrentPage((oldPage) => Math.max(oldPage - 1, 1));
  };

  const nextImage = () => {
    setCurrentPage((oldPage) => Math.min(oldPage + 1, totalPages));
  };

  const gotoImage = (index: number) => {
    setCurrentPage(index + 1);
  };

  // 드롭다운 컴포넌트
  const DropdownComponent = memo(() => (
    <Dropdown className="dropdown">
      <ul>
        <li>게시글 삭제</li>
        <li>게시글 수정</li>
      </ul>
    </Dropdown>
  ));
  DropdownComponent.displayName = 'DropdownComponent';

  // 사용자 헤더 컴포넌트
  const UserHeaderComponent = memo(() => (
    <UserHeaderBox>
      <UserContainer>
        <p className="userPic">
          <Image
            src={userPic}
            alt="User Profile"
            width={500}
            height={500}
            loading="eager"
          />
        </p>
        <p className="userNickname">{/* User nickname placeholder */}</p>
      </UserContainer>
      <button onClick={handleDropdownClick}>햄버거 모양 아이콘</button>
      {isDropdownOpen && <DropdownComponent />}
    </UserHeaderBox>
  ));
  UserHeaderComponent.displayName = 'UserHeaderComponent';

  // 사용자 이미지 박스 컴포넌트
  const UserPictureBoxComponent = () => {
    const currentImage = images[currentPage - 1];

    const gotoImage = (index: number) => {
      setCurrentPage(index + 1);
    };

    useEffect(() => {
      if (currentPage !== 1) {
        gotoImage(currentPage - 1);
      }
    }, [currentPage]);

    return (
      <UserPictureBox>
        <div>
          {images.map((img, index) => (
            <Image
              key={img}
              src={img}
              alt="User uploaded"
              width={500}
              height={500}
              loading="eager"
              style={{ display: index + 1 === currentPage ? 'block' : 'none' }}
            />
          ))}
        </div>
        <div className="dot-navigation">
          {images.map((img, index) => (
            <span
              key={img}
              className={`dot ${index + 1 === currentPage ? 'active' : ''}`}
              onClick={() => gotoImage(index)}
            ></span>
          ))}
        </div>
      </UserPictureBox>
    );
  };

  // 사용자 댓글 박스 컴포넌트
  const UserCommentBoxComponent = () => {
    const [comments, setComments] = useState([
      'This is a user comment',
      'This is another user comment',
      'This is yet another user comment',
    ]);

    const [borderColor, setBorderColor] = useState('black'); // 기본 테두리 색상을 설정합니다.
    useEffect(() => {
      // 댓글 중 하나라도 149자를 초과하면 테두리 색상을 변경합니다.
      if (comments.some((comment) => comment.length > 149)) {
        setBorderColor('red');
        alert('A comment exceeds the maximum length of 149 characters!');
      } else {
        setBorderColor('black');
      }
    }, [comments]);

    return (
      <UserCommentBox style={{ borderColor: borderColor }}>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </UserCommentBox>
    );
  };

  return (
    <>
      <UserHeaderComponent />
      <UserPictureBoxComponent />
      <UserCommentBoxComponent />
    </>
  );
};

export default DetailUserPost;