import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoveCat from '../assets/LoveCat.svg';
import HalfCircleBackground from '../assets/bottomHalfCircle.png';
import { AnimatePresence, motion } from 'framer-motion';

const TransformationCompletePage = () => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 0 }} // 초기 상태: 아래에 위치하고 투명
        animate={{ opacity: 1, y: 0 }} // 애니메이션 후: 제자리로 이동하고 불투명
        exit={{ opacity: 0, y: -50 }} // 종료 시: 위로 이동하며 투명
        transition={{ duration: 0.5 }} // 애니메이션 지속 시간: 0.5초
      >
        <CompleteContainer>
          <h1>변환이 완료되었습니다</h1>
          <Emoji src={LoveCat} alt="변환완료" />
          <ConfirmButton onClick={() => navigate('/result')}>
            확인해 보기
          </ConfirmButton>
        </CompleteContainer>
      </motion.div>
    </AnimatePresence>
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
