import React from 'react';
import ImageContent from '@/components/Home/ImageContent';
import { ImageContentsContainer } from '@/styles/imageContainer';
import { NoneSearchResult } from '@/styles/search';
import UserSearchResult from '@/components/Search/UserSearchResult';
type searchProps = {
  option: string;
  data: any[] | string;
};

const SearchResult = ({ option, data }: searchProps) => {
  if (data === '400') {
    return <NoneSearchResult>검색 결과가 없습니다</NoneSearchResult>;
  }
  if (data === 'otherError' || !Array.isArray(data)) {
    return (
      <NoneSearchResult>
        예상치 못한 오류가 발생하였습니다.
        <br /> 다시 검색을 시도해주세요
      </NoneSearchResult>
    );
  }

  switch (option) {
    case 'users':
      return (
        <>
          {data.map((user, idx) => {
            return (
              <UserSearchResult
                key={idx}
                userImage={user.userImage}
                nickname={user.nickname}
                email={user.email}
                preset={user.preset}
                userId={user.userId}
              />
            );
          })}
        </>
      );
    case 'posts':
      return (
        <ImageContentsContainer>
          {data.map((result, idx) => {
            return (
              <ImageContent
                key={idx}
                src={result.Images[0].url}
                alt={'search result image'}
                postId={result.postId}
              />
            );
          })}
        </ImageContentsContainer>
      );
    case 'tags':
      return (
        <ImageContentsContainer>
          {data.map((result, idx) => {
            return (
              <ImageContent
                key={idx}
                src={result.Images[0].url}
                alt={result.comment}
                postId={result.postId}
              />
            );
          })}
        </ImageContentsContainer>
      );
    default:
      return <NoneSearchResult>검색 결과가 없습니다</NoneSearchResult>;
  }
};

export default SearchResult;
