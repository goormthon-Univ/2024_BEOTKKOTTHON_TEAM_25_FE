import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import styled from 'styled-components';

import {
  loadCompletedMissions,
  setCompletedMissionCategory,
  setCompletedMissionMonth,
} from '../store/slice';

import { Header, Footer } from '../components/common/layout';
import character from '../assets/img/record-character.png';
import Texture from '../assets/img/ScreenBackground.png';

const customStyles = {
  content: {
    position: 'relative',
    top: '20%',
    right: '0%',
    left: '8.5%',
    width: '324px',
    height: '400px',
    padding: '0',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
};

const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const completedCategoryText = {
  SAVE_WATER: '물 절약하기',
  RECYCLE: '분리수거하기',
  SAVE_ENERGY: '전기 절약하기',
  REDUCE_TRASH: '일회용품 줄이기',
};

const completedCategoryIcon = {
  SAVE_WATER: 'water_drop',
  RECYCLE: 'recycling',
  SAVE_ENERGY: 'bolt',
  REDUCE_TRASH: 'eco',
};

Modal.setAppElement('#root');

function Recordspage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCompletedMissions());
  }, []);

  const completedMissions = useSelector((state) => state.completedMissions);
  const completedMissionMonth = useSelector((state) => state.completedMissionMonth);
  const completedMissionCategory = useSelector((state) => state.completedMissionCategory);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedClearYear, setSelectedClearYear] = useState('');
  const [selectedClearMonth, setSelectedClearMonth] = useState('');
  const [selectedClearDay, setSelectedClearDay] = useState('');

  const handleDateClick = () => {
    dispatch(setCompletedMissionCategory(''));
    dispatch(loadCompletedMissions());
  };

  const handleBeforeMonthClick = () => {
    dispatch(setCompletedMissionCategory(''));
    dispatch(setCompletedMissionMonth(month[(completedMissionMonth - 2 + 12) % 12]));
    dispatch(loadCompletedMissions());
  };

  const handleAfterMonthClick = () => {
    dispatch(setCompletedMissionCategory(''));
    dispatch(setCompletedMissionMonth(month[completedMissionMonth % 12]));
    dispatch(loadCompletedMissions());
  };

  const openModal = (mission) => {
    setSelectedImage(mission.imageUrl);
    setSelectedClearYear(mission.completedAt.slice(0, 4));
    setSelectedClearMonth(mission.completedAt.slice(5, 7));
    setSelectedClearDay(mission.completedAt.slice(8, 10));
    setModalIsOpen(true);
  };

  return (
    <>
      <Header />
      <Layout>
        <MonthlySection>
          {/* <BeforeIcon onClick={() => handleBeforeMonthClick()} />
          <MonthlyTitle>{completedMissionMonth}월의 지구</MonthlyTitle>
          <AfterIcon onClick={() => handleAfterMonthClick()} /> */}
          {completedMissionCategory === '' ? (
            <>
              <BeforeIcon onClick={() => handleBeforeMonthClick()} />
              <MonthlyTitle>{completedMissionMonth}월의 지구</MonthlyTitle>
              <AfterIcon onClick={() => handleAfterMonthClick()} />
            </>
          ) : (
            <>
              <Icon>{completedCategoryIcon[completedMissionCategory]}</Icon>
              <MonthlyTitle>{completedCategoryText[completedMissionCategory]}</MonthlyTitle>
              <Icon>{completedCategoryIcon[completedMissionCategory]}</Icon>
            </>
          )}
        </MonthlySection>
        <SortWrapper>
          <SortSection>
            <SortByDateBtn>
              <SortByDateIcon />
              <SortByDateTitle onClick={() => handleDateClick()}>날짜별</SortByDateTitle>
            </SortByDateBtn>
            <SortByTypeBtn>
              <SortByTypeIcon />
              <SortByTypeTitle onClick={() => navigate('/record-categories')}>
                종류별
              </SortByTypeTitle>
            </SortByTypeBtn>
          </SortSection>
        </SortWrapper>
        <ImgWrapper>
          <ImgSection>
            <ImgList>
              {completedMissions.map((mission, index) => (
                <GrayCircle key={index} src={mission.imageUrl} onClick={() => openModal(mission)} />
              ))}
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
              >
                <ModalImg src={selectedImage} />
                <CharacterImgWrapper>
                  <CharacterImg src={character} />
                </CharacterImgWrapper>
                <BlueBox>
                  <BlueBoxText>
                    {selectedClearYear}년 {selectedClearMonth}월 {selectedClearDay}일의 기록
                  </BlueBoxText>
                </BlueBox>
              </Modal>
            </ImgList>
          </ImgSection>
        </ImgWrapper>
        <Footer />
      </Layout>
    </>
  );
}

const Layout = styled.div`
  height: 600px;
  padding-top: 5rem;
  background-image: url(${Texture});
`;

const MonthlySection = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  text-align: center;
  line-height: 56px;
  justify-content: center;
`;

const Icon = styled.div`
  font-family: 'Material Symbols Outlined';
  font-size: 2rem;
  color: ${(props) => props.theme.colors.green};
`;

const BeforeIcon = styled.div`
  font-family: 'Material Symbols Outlined';
  font-size: 36px;
  &:before {
    content: 'navigate_before';
  }
  color: ${(props) => props.theme.colors.green};
`;

const AfterIcon = styled.div`
  font-family: 'Material Symbols Outlined';
  font-size: 36px;
  &:before {
    content: 'navigate_next';
  }
  color: ${(props) => props.theme.colors.green};
`;

const MonthlyTitle = styled.div`
  width: 140px;
  font-family: 'SUITE-Medium';
  font-size: 24px;
`;

const SortWrapper = styled.div`
  display: flex;
  height: 38px;
  justify-content: center;
`;

const SortSection = styled.div`
  display: flex;
  width: 80%;
  border-bottom: 1px solid ${(props) => props.theme.colors.green};
  justify-content: center;
`;

const SortByDateBtn = styled.button`
  display: flex;
  gap: 8px;
  width: 50%;
  border: none;
  border-right: 1px solid ${(props) => props.theme.colors.green};
  background-color: rgba(255, 255, 255, 0);
  justify-content: center;
`;

const SortByDateIcon = styled.div`
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  &:before {
    content: 'calendar_month';
  }
  color: ${(props) => props.theme.colors.green};
`;

const SortByDateTitle = styled.div`
  font-family: 'SUITE-Light';
  font-size: 18px;
  letter-spacing: -0.37px;
  line-height: 36px;
  color: ${(props) => props.theme.colors.green};
`;

const SortByTypeBtn = styled.button`
  display: flex;
  gap: 8px;
  width: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  justify-content: center;
  color: #00000083;
`;

const SortByTypeIcon = styled.div`
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  &:before {
    content: 'spoke';
  }
  color: #888888;
`;

const SortByTypeTitle = styled.div`
  font-family: 'SUITE-Light';
  font-size: 18px;
  letter-spacing: -0.37px;
  line-height: 36px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
`;

const ImgSection = styled.div`
  width: 80%;
  height: calc(100vh - 298px);
  overflow: scroll;
`;

const ImgList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GrayCircle = styled.img`
  display: flex;
  width: 94px;
  height: 94px;
  margin-top: 21px;
  border-radius: 47px;
  background-color: gray;
`;

const ModalImg = styled.img`
  width: 324px;
  height: 324px;
  border-radius: 130px;
  box-shadow: 0px 4px 4.3px 0px rgba(0, 0, 0, 0.3);
`;

const CharacterImgWrapper = styled.div`
  position: absolute;
  top: 65.5%;
  left: 70%;
`;

const CharacterImg = styled.img``;

const BlueBox = styled.div`
  display: flex;
  width: 271px;
  height: 51px;
  margin: 10px auto 0 auto;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 25px;
  color: white;
  justify-content: center;
  align-items: center;
`;

const BlueBoxText = styled.p`
  margin: 0;
  font-family: 'SUITE-SemiBold';
  font-size: 20px;
`;

export default Recordspage;
