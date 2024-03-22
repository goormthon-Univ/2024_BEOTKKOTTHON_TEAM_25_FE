import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { loadChangeDailyMission } from '../store/slice';

import { Header, Button, Modal } from '../components/common/layout';
import Texture from '../assets/img/ScreenBackground.png';

const DailyMissonPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dailyMission = useSelector((state) => state.dailyMission);
  const dispatch = useDispatch();

  const handleModalButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleChangeMissionClick = () => {
    dispatch(loadChangeDailyMission());
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <Layout>
        <DailyMissionContainer>
          <MissionContainer>
            <DailyMissionTitle>오늘의 미션!</DailyMissionTitle>
            <MissionText>{dailyMission}</MissionText>
          </MissionContainer>
        </DailyMissionContainer>
        <TipText>tip ) 미션을 하는 행동과 사물이 잘 보이게 찍어주세요!</TipText>
        <Button $bgColor={'orange'} $textColor={'white'} size={'large'}>
          🏞️ 사진 업로드
        </Button>
        {/* 기능 구현 불가 */}
        {/* <Button $bgColor={'orange'} $textColor={'white'} size={'large'}>
            📸 바로 촬영하기
          </Button> */}
        <ButtonWrapper>
          <Button
            $bgColor={'orange'}
            $textColor={'white'}
            size={'large'}
            onClick={handleModalButtonClick}
          >
            💬 미션 변경하기
          </Button>
        </ButtonWrapper>
        <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
          <ModalTitle>
            <BoldText>미션을 변경</BoldText>하시겠습니까?
          </ModalTitle>
          <ModalExplainText>
            최초 1회 무료 변경 이후에{'\n'}추가 변경 시 10포인트 차감됩니다!
          </ModalExplainText>
          <ModalButtonWrapper>
            <Button
              $bgColor={'blue'}
              $textColor={'white'}
              size={'medium'}
              onClick={handleChangeMissionClick}
            >
              예
            </Button>
            <Button
              $bgColor={'blue'}
              $textColor={'white'}
              size={'medium'}
              onClick={handleCloseModal}
            >
              아니오
            </Button>
          </ModalButtonWrapper>
        </Modal>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 9.5rem;
  background-image: url(${Texture});
`;

const DailyMissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  text-align: center;
`;

const MissionContainer = styled.div`
  max-width: 90%;
  padding: 1.5rem 1rem;
  border-radius: 0.9rem;
  box-shadow: 0px 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme.colors.blue};
  color: white;
`;

const DailyMissionTitle = styled.div`
  padding-bottom: 0.5rem;
  font-family: 'SUITE-Light';
  font-size: 1.5rem;
`;

const MissionText = styled.div`
  font-family: 'SUITE-SemiBold';
  font-size: 1.5rem;
  white-space: pre-wrap;
`;

const TipText = styled.div`
  padding-top: 3.5rem;
  padding-bottom: 0.5rem;
  font-family: 'SUITE-Light', sans-serif;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.blue};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15%;
`;

const ModalTitle = styled.div`
  padding-top: 1rem;
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1.2rem;
  text-align: center;
`;

const BoldText = styled.span`
  font-family: 'SUITE-SemiBold', sans-serif;
`;

const ModalExplainText = styled.div`
  padding-top: 1rem;
  font-family: 'SUITE-Regular';
  font-size: 0.7rem;
  text-align: center;
  white-space: pre-wrap;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 1.5rem;
`;

export default DailyMissonPage;
