import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import LoveCat from '../assets/LoveCat.svg';
import HalfCircleBackground from '../assets/bottomHalfCircle.png';
import { saveDiary } from '../api/Diary';

const TransformationCompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { diaryTitle, diaryContent, diaryImgUrl } = location.state || {};

  const handleSaveAndNavigate = async () => {
    const diaryData = {
      title: diaryTitle,
      content: diaryContent,
      imgUrl: diaryImgUrl,
    };

    try {
      await saveDiary(diaryData);
      console.log('일기 저장 완료');
      
      navigate('/result');
    } catch (error) {
      console.error('일기 저장 실패:', error);
    }
  };

  return (
    <CompleteContainer>
      <h1>변환이 완료되었습니다</h1>
      <Emoji src={LoveCat} alt="변환완료" />
      <ConfirmButton onClick={handleSaveAndNavigate}>확인해 보기</ConfirmButton>
    </CompleteContainer>
  );
};

const CompleteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${HalfCircleBackground}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 1.8rem;
    color: #4d4d4d;
    margin-bottom: 30px;
  }
`;

const Emoji = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 30px;
`;

const ConfirmButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #5cb85c;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4cae4c;
  }
`;

export default TransformationCompletePage;