import axios from 'axios';

// 환경변수 설정
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: BASE_URL,
});

// 리스트 가져오기
export const getDiaryList = async () => {
  try {
    const res = await api.get('/diary');
    console.log('응답 데이터:', res.data);
    return res.data.data;
  } catch (err) {
    console.error('다이어리 목록 가져오기 실패:', err.message);
    throw err;
  }
};

// 리스트 세부 정보 가져오기
export const getDetailDiary = async (diaryId) => {
  try {
    const res = await api.get(`/diary/${diaryId}`);
    console.log('세부 응답 데이터:', res.data);
    return res.data.data;
  } catch (err) {
    console.error(
      `다이어리 세부 정보 가져오기 실패 (ID: ${diaryId}):`,
      err.message
    );
    throw err;
  }
};

// 일기 작성
export const createDiary = async (diaryContent) => {
  try {
    const res = await api.post('/diary', { content: diaryContent });
    console.log('일기 작성 응답 데이터:', res.data);
    return res.data;
  } catch (err) {
    console.error('일기 작성 실패:', err.message);
    throw err;
  }
};

// 일기 변환
export const transformDiary = async () => {
  try {
    const res = await api.get('/diary/ai');
    console.log('변환된 일기 응답 데이터:', res.data);
    return res.data;
  } catch (err) {
    console.error('일기 변환 실패:', err.message);
    throw err;
  }
};
