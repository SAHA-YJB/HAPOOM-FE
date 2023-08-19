import api from '../axios/api';

interface PostData {
  images: string[];
  content: string;
  musicTitle: string;
  musicUrl: string;
  tag: string;
  latitude: string;
  longitude: string;
  placeName: string;
}

interface UpdateData {
  updateId: string;
  formData: FormData;
}

const addPost = async (postData: UpdateData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const response = await api.post('/api/post', postData.formData, config);
};

const updatePost = async (postData: UpdateData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const response = await api.put(
    `/api/post/${postData.updateId}`,
    postData.formData,
    config
  );
};

const getPost = async (id: string) => {
  const response = await api.get(`/api/post/${id}`);
  return response.data;
};

const likePost = async (postId: string) => {
  const response = await api.put(`/api/post/${postId}/like`);
  return response.data;
};

const deletePost = async (postId: string) => {
  const response = await api.delete(`/api/post/${postId}`);
  return response.data;
};

const getPostCount = async (postId: string) => {
  const response = await api.get(`/api/post/${postId}/postsCount`);
  return response.data;
};

const getPostLikeCount = async (postId: string) => {
  const response = await api.get(`/api/post/${postId}/likePostsCount`);
  return response.data;
};

const reportPost = async (postId: string) => {
  try {
    const response = await api.post(`/api/report/${postId}`);
    return '신고가 완료되었습니다.';
  } catch (error: any) {
    if (error.response.status === 409) {
      return '이미 신고가 완료되었습니다.';
    }
  }
};

const getComment = async (postId: string) => {
  const response = await api.get(`/api/post/${postId}/comment`);
  return response.data;
};
type comment = {
  formData: FormData;
  id: string;
};

const addComment = async ({ formData: comment, id }: comment) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const response = await api.post(`/api/post/${id}/comment`, comment, config);
};

type commentUpdate = {
  formData: FormData;
  id: string;
  commentId: number;
};

const updateComment = async ({ formData, id, commentId }: commentUpdate) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const response = await api.put(
    `/api/post/${id}/comment/${commentId}`,
    formData,
    config
  );
  return response.data;
};
type commentDelete = {
  id: string;
  commentId: number;
};
const deleteComment = async ({ id, commentId }: commentDelete) => {
  const response = await api.delete(`/api/post/${id}/comment/${commentId}`);
  return response.data;
};

export {
  addPost,
  updatePost,
  getPost,
  likePost,
  getPostCount,
  getPostLikeCount,
  reportPost,
  getComment,
  addComment,
  deletePost,
  updateComment,
  deleteComment,
};
