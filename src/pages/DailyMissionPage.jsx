import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { Header } from '../components/common/layout';
import Button from '../components/common/layout/Button';
import ScreenBackground from '../assets/img/ScreenBackground.png';

const customStyles = {
  content: {
    position: 'relative',
    top: '30%',
    right: '0%',
    left: '10%',
    width: '270px',
    height: '168px',
    border: 'none',
    borderRadius: '20px',
    backgroundColor: 'white',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
  },
};

const DailyMissonPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <Header />
      <ElementWrapper>
        <BlueBox>
          <DaliyMissionWrapper>
            <DailyMissionText>오늘의 미션!</DailyMissionText>
          </DaliyMissionWrapper>
          <MissionWrapper>
            <MissionText>{/* 미션 문구 */}</MissionText>
          </MissionWrapper>
        </BlueBox>
        <TipWrapper>{/* 팁 문구 */}</TipWrapper>
        <ButtonWrapper>
          <Button $bgColor={'orange'} $textColor={'white'} size={'large'}>
            🏞️ 사진 업로드
          </Button>
        </ButtonWrapper>
        {/* 기능 구현 불가 */}
        {/* <ButtonWrapper>
          <Button $bgColor={'orange'} $textColor={'white'} size={'large'}>
            📸 바로 촬영하기
          </Button>
        </ButtonWrapper> */}
        <ButtonWrapper>
          <Button
            $bgColor={'orange'}
            $textColor={'white'}
            size={'large'}
            onClick={handleModalButtonClick}
          >
            💬 미션 변경하기
          </Button>
          <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} style={customStyles}>
            <ModalTitle>미션을 변경하시겠습니까?</ModalTitle>
            <ModalExplain>최초 1회 무료 변경 이후에</ModalExplain>
            <ModalExplain>추가 변경 시 10포인트 차감됩니다!</ModalExplain>
            <ModalButtonWrapper>
              <Button $bgColor={'blue'} $textColor={'white'} size={'medium'} border={''}>
                예
              </Button>
              <Button
                $bgColor={'blue'}
                $textColor={'white'}
                size={'medium'}
                border={''}
                onClick={handleCloseModal}
              >
                아니오
              </Button>
            </ModalButtonWrapper>
          </Modal>
        </ButtonWrapper>
      </ElementWrapper>
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${ScreenBackground});
`;

const ElementWrapper = styled.main`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

const BlueBox = styled.div`
  position: relative;
  width: 20.3rem;
  height: 130px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.blue};
  color: white;
`;

const TipWrapper = styled.div`
  width: 20.3rem;
  padding-top: 5px;
  font-family: 'SUITE-Light';
  color: ${(props) => props.theme.colors.blue};
  text-align: right;
`;

const DaliyMissionWrapper = styled.div`
  position: absolute;
  top: 25%;
  width: 100%;
  text-align: center;
`;

const DailyMissionText = styled.div`
  font-family: 'SUITE-Light';
  font-size: 24px;
`;

const MissionWrapper = styled.div`
  position: absolute;
  top: 55%;
  width: 100%;
  text-align: center;
`;

const MissionText = styled.div`
  font-family: 'SUITE-SemiBold';
  font-size: 24px;
`;

const ButtonWrapper = styled.div`
  margin: 30px 0;
`;

const ModalTitle = styled.div`
  padding: 20px 0;
  font-family: 'SUITE-SemiBold';
  font-size: 20px;
  text-align: center;
`;

const ModalExplain = styled.div`
  padding: 1px;
  font-family: 'SUITE-Regular';
  font-size: 11px;
  text-align: center;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
  justify-content: center;
`;

export default DailyMissonPage;
