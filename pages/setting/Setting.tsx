import Main from '@/components/Home/Main';
import Header from '@/components/common/Header';
import React, { ReactNode, useEffect, useState } from 'react';
import UpdateNickName from '@/components/Setting/UpdateNickName';
import UpdateUserProfile from '@/components/Setting/UpdateUserProfile';
import UpdatePassword from '@/components/Setting/UpdatePassword';
import Image from 'next/image';
import AccordianMenu from '@/components/common/AccordianMenu';
import Themes from '@/components/Setting/Themes';
import { getAuthToken, getUserSetting, updateUserSetting } from '@/api/user';
import { useQuery, useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { AUTH_USER, UserResponse } from '@/redux/reducers/userSlice';
import { SettingLayout, AccordianContent, ProfileBox } from '@/styles/setting';
import Profile from '@/components/Setting/Profile';
const Setting = () => {
  const dispatch = useDispatch();

  const { data: userData, isSuccess: tokenSuccess } = useQuery(
    'user',
    getAuthToken,
    {
      onSuccess: (userData: UserResponse) => {
        dispatch(AUTH_USER(userData));
      },
      cacheTime: 0,
    }
  );
  const { data: userSetting } = useQuery('userSetting', getUserSetting, {
    onSuccess: (data) => {},
    cacheTime: 0,
  });

  return (
    <Main>
      <Header />
      <SettingLayout>
        <Profile
          userImage={userSetting?.user.userImage}
          preset={userSetting?.user.preset}
          nick={userSetting?.user.nickname}
        />
        테마 : {userSetting?.user.theme} <br />
        비밀번호 : {userSetting?.user.password} <br />
        <AccordianMenu tabText="별명 수정">
          <AccordianContent>
            <UpdateNickName nickname={userSetting?.user.nickname} />
          </AccordianContent>
        </AccordianMenu>
        <AccordianMenu tabText="프로필 수정">
          <AccordianContent>
            <UpdateUserProfile
              profileImage={userSetting?.user.userImage}
              preset={userSetting?.user.preset}
            />
          </AccordianContent>
        </AccordianMenu>
        <AccordianContent>
          <Themes />
        </AccordianContent>
        <AccordianMenu tabText="비밀번호 수정">
          <AccordianContent>
            <UpdatePassword />
          </AccordianContent>
        </AccordianMenu>
      </SettingLayout>
    </Main>
  );
};

export default Setting;
