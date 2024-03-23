import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Header, Footer, Button, Modal } from '../components/common/layout';
import Texture from '../assets/img/ScreenBackground.png';
import EarthImage from '../assets/img/own-earth-char.png';

const MyPage = () => {
  const [isOn, setIsOn] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const withDays = useSelector((state) => state.withDays);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header />
      <MyPageContainer>
        <ProfileContainer>
          <ProfilePicture src={EarthImage} />
          <ProfileText>
            지구를 지킨지<ProfileDayText>{withDays}일 째</ProfileDayText>
            <JoinDateText>2024년 03월 24일</JoinDateText>
          </ProfileText>
        </ProfileContainer>
        <BorderLine />
        <Text>공지</Text>
        <BorderLine />
        <NoticeContainer>
          <Text>알림</Text>
          <ToggleButton onClick={toggleSwitch} isOn={isOn} />
        </NoticeContainer>
        <BorderLine />
        <Text onClick={toggleModal}>로그아웃</Text>
        <BorderLine />
      </MyPageContainer>
      <Footer />
      <Modal isOpen={isModalOpen} onRequestClose={toggleModal}>
        <ModalText>로그아웃{'\n'}하시겠습니까?</ModalText>
        <ModalButtonWrapper>
          <Button $bgColor={'blue'} $textColor={'white'} size={'medium'}>
            예
          </Button>
          <Button $bgColor={'blue'} $textColor={'white'} size={'medium'} onClick={toggleModal}>
            아니오
          </Button>
        </ModalButtonWrapper>
      </Modal>
    </>
  );
};

const MyPageContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  padding: 5rem 1.5rem 0 1.5rem;
  background-image: url(${Texture});
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-evenly;
  width: 19rem;
  height: 9.5rem;
  margin: 2rem 0;
  padding-top: 1.5rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.blue};
`;

const ProfilePicture = styled.img`
  width: 7.8rem;
  height: 7.8rem;
  border-radius: 2rem;
  box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: white;
  object-fit: contain;
  object-position: center;
`;

const ProfileText = styled.div`
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.2rem;
  text-align: right;
  line-height: 2.2rem;
  color: white;
`;

const ProfileDayText = styled.div`
  font-family: 'SUITE-Bold', sans-serif;
  font-size: 1.5rem;
  text-align: right;
  color: white;
`;

const BorderLine = styled.div`
  width: 100%;
  height: 2px;
  margin: 1rem 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Text = styled.button`
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.2rem;
  width: 95%;
  border: none;
  background: transparent;
  text-align: left;
  color: #000000;
  white-space: pre-wrap;
`;

const ModalText = styled.div`
  padding: 1.5rem 0;
  font-family: 'SUITE-Bold', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  line-height: 2.2rem;
  color: #000000;
  white-space: pre-wrap;
`;

const NoticeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;

const ToggleButton = styled.div`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 34px;
  background-color: ${(props) => (props.isOn ? '#F9BC60CC' : '#ccc')};
  border-radius: 34px;
  transition: background-color 0.3s;

  &:after {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
    transform: ${(props) => (props.isOn ? 'translateX(30px)' : 'translateX(0)')};
  }
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const JoinDateText = styled.div`
  margin-top: 1.5rem;
  font-size: 1rem;
`;

export default MyPage;
