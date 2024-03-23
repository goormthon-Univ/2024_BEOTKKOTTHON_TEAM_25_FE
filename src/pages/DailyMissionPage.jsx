import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import Texture from '../assets/img/ScreenBackground.png';
import { Footer, Header } from '../components/common/layout';
import Button from '../components/common/layout/Button';
import { loadChangeDailyMission } from '../store/slice';

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
  const dailyMission = useSelector((state) => state.dailyMission);
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    navigate('/loading-analyze', { state: { file } });
  };

  const handlePhotoUploadClick = () => {
    fileInputRef.current.click();
  };

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
    <Layout>
      <Header />
      <ElementWrapper>
        <BlueBox>
          <DaliyMissionWrapper>
            <DailyMissionText>오늘의 미션!</DailyMissionText>
          </DaliyMissionWrapper>
          <MissionWrapper>
            <MissionText>{dailyMission}</MissionText>
          </MissionWrapper>
        </BlueBox>
        <TipWrapper>tip ) 미션을 하는 행동과 사물이 잘 보이게 찍어주세요</TipWrapper>
        <input
          type='file'
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <ButtonWrapper>
          <Button
            $bgColor={'orange'}
            $textColor={'white'}
            size={'large'}
            onClick={handlePhotoUploadClick}
          >
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
              <Button
                $bgColor={'blue'}
                $textColor={'white'}
                size={'medium'}
                border={''}
                onClick={handleChangeMissionClick}
              >
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
      <Footer />
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${Texture});
`;

const ElementWrapper = styled.main`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

const BlueBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20.3rem;
  height: 150px;
  padding: 1rem 0.5rem;
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
  width: 100%;
  padding-bottom: 1rem;
  text-align: center;
`;

const DailyMissionText = styled.div`
  font-family: 'SUITE-Light';
  font-size: 24px;
`;

const MissionWrapper = styled.div`
  width: 90%;
  text-align: center;
`;

const MissionText = styled.div`
  font-family: 'SUITE-SemiBold';
  font-size: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ModalTitle = styled.div`
  padding: 20px 0 20px 0;
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
