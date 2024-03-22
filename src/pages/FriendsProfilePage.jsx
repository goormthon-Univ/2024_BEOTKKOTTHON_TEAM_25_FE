import { useState } from 'react';
import styled from 'styled-components';

import { Header, Footer, Modal } from '../components/common/layout';
import EarthImage from '../assets/img/own-earth-char.png';
// import ItemImage from '../assets/item.png';
// import ItemImage2 from '../assets/item2.png';
// import ItemImage3 from '../assets/item3.png';
import Texture from '../assets/img/ScreenBackground.png';

const FriendsProfilePage = () => {
  // 요일과 완료 여부를 포함하는 배열
  const days = [
    { name: '일', completed: true },
    { name: '월', completed: true },
    { name: '화', completed: true },
    { name: '수', completed: false },
    { name: '목', completed: true },
    { name: '금', completed: false },
    { name: '토', completed: true },
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <main>
      <Header />
      <FriendProfilePage>
        <Name>이구름의</Name>
        <EarthName>
          <EarthIcon>public</EarthIcon>지구젤리
        </EarthName>
        <CharacterContainer>
          <EarthCharacter src={EarthImage} alt='friend-character' />
        </CharacterContainer>
        <InfoContainer>
          <InfoBox>
            <InfoLabel>보유 포인트</InfoLabel>
            <IconContainer>
              <PointIcon>stars</PointIcon>180P
            </IconContainer>
          </InfoBox>
          <InfoBox onClick={toggleModal}>
            <InfoLabel>보유 아이템</InfoLabel>
            <IconContainer>
              <ItemIcon>styler</ItemIcon>3개
            </IconContainer>
          </InfoBox>
        </InfoContainer>
        <Text>지난 7일 간 달성 여부</Text>
        <WeeklyBox>
          {days.map((day, index) => (
            // map 함수를 사용하여 각 요일마다 컴포넌트 렌더링
            <WeeklyContainer key={index}>
              {day.name}
              <WeeklyCircle iscompleted={day.completed} />
            </WeeklyContainer>
          ))}
        </WeeklyBox>
      </FriendProfilePage>
      <Footer />
      <Modal isOpen={isModalOpen} onRequestClose={toggleModal}>
        <ModalTitle>
          보유 아이템<CloseIcon onClick={toggleModal}>close</CloseIcon>
        </ModalTitle>
        <ModalContainer>
          <ModalItemContainer>
            <ModalItem src={'아이템이미지'} alt='item' />
            <ModalItemTitle>어피치 인형</ModalItemTitle>
          </ModalItemContainer>
          <ModalItemContainer>
            <ModalItem src={'아이템이미지'} alt='item' />
            <ModalItemTitle>어피치 인형</ModalItemTitle>
          </ModalItemContainer>
          <ModalItemContainer>
            <ModalItem src={'아이템이미지'} alt='item' />
            <ModalItemTitle>어피치 인형</ModalItemTitle>
          </ModalItemContainer>
          <ModalItemContainer>
            <ModalItem src={'아이템이미지'} alt='item' />
            <ModalItemTitle>어피치 인형</ModalItemTitle>
          </ModalItemContainer>
          <ModalItemContainer>
            <ModalItem src={'아이템이미지'} alt='item' />
            <ModalItemTitle>어피치 인형</ModalItemTitle>
          </ModalItemContainer>
          <ModalItemContainer>
            <ModalItem src={'아이템이미지'} alt='item' />
            <ModalItemTitle>어피치 인형</ModalItemTitle>
          </ModalItemContainer>
        </ModalContainer>
      </Modal>
    </main>
  );
};

const FriendProfilePage = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  padding: 0 1.5rem;
  padding-top: 5rem;
  background-image: url=(${Texture});
`;

const Name = styled.div`
  padding: 0.4rem 0;
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1.2rem;
`;

const EarthName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0.9rem;
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.7rem;
`;

const EarthIcon = styled.div`
  padding-right: 0.5rem;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 1.5rem;
  color: #c9c9c9;
`;

const CharacterContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 0.1rem solid #0000001a;
  border-radius: 1.5rem;
  box-shadow: 0px 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

const EarthCharacter = styled.img`
  width: 13rem;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  align-items: center;
  width: 100%;
  padding: 1.1rem 0;
`;

const InfoBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  border: 0.1rem solid #00aa8b1a;
  border-radius: 1.5rem;
  box-sizing: border-box;
  box-shadow: 0px 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.5rem;
  color: #000000;
`;

const InfoLabel = styled.div`
  width: 100%;
  padding: 0.3rem 0;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: ${(props) => props.theme.colors.green};
  font-family: 'SUITE-Medium', sans-serif;
  font-size: 1rem;
  text-align: center;
  color: #ffffff;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0;
`;

const PointIcon = styled.div`
  padding-right: 0.5rem;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 2rem;
  color: #f9bc60cc;
`;

const ItemIcon = styled.div`
  padding-right: 0.5rem;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 2rem;
  color: #00aabbcc;
`;

const Text = styled.div`
  width: 100%;
  padding-top: 0.1rem;
  padding-bottom: 0.5rem;
  font-family: 'SUITE-Medium', sans-serif;
  font-size: 1rem;
  text-align: left;
  color: #000000;
`;

const WeeklyBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0.5rem;
  border: 0.1rem solid #00aa8b1a;
  border-radius: 1.5rem;
  box-shadow: 0px 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

const WeeklyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3rem;
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1rem;
`;

const WeeklyCircle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.6rem 0;
  border-radius: 50%;
  background-color: ${(props) => (props.isCompleted ? props.theme.colors.green : '#00AA8B1A')};
`;

const CloseIcon = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0.3rem;
  right: 1rem;
  width: 15%;
  background: none;
  border: none;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  color: white;
`;

const ModalTitle = styled.div`
  width: 100%;
  padding: 0.3rem 0;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: ${(props) => props.theme.colors.green};
  font-family: 'SUITE-Bold', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ModalItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33.333% - 0.5rem); /* 3개씩 배치, 간격 고려 */
  margin-top: 0.8rem;
`;

const ModalItem = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: white;
  object-fit: contain;
  object-position: center;
`;

const ModalItemTitle = styled.div`
  padding: 0.2rem 0;
  border-radius: 0 0 0.6rem 0.6rem;
  background-color: ${(props) => props.theme.colors.green};
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1rem;
  text-align: center;
  color: white;
`;

export default FriendsProfilePage;
