import { useState } from 'react';
import styled from 'styled-components';

import { Header, Modal } from '../components/common/layout';
import Texture from '../assets/img/ScreenBackground.png';
import Earth from '../assets/imgLayer/earth.png';

const MyRoomPage = () => {
  const [isOutfitOpen, setOutfitOpen] = useState(false);

  const toggleOutfitModal = () => {
    setOutfitOpen(!isOutfitOpen);
  };

  return (
    <>
      <Header />
      <Layout>
        <CharacterContainer>
          <CharacterBackgroundImg />
          <TopLeftItem />
          <TopRightItem />
          <BottomLeftItem />
          <BottomRightItem />
          <CharacterImg src={Earth} />
          <OutfitImg />
        </CharacterContainer>
        <ButtonContainer>
          <ButtonCategoriesContainer>
            <CategoriesItem alt='categories' onClick={toggleOutfitModal} />
            <CategoriesItemTitle>의류</CategoriesItemTitle>
          </ButtonCategoriesContainer>
          <ButtonCategoriesContainer>
            <CategoriesItem alt='categories' onClick={toggleOutfitModal} />
            <CategoriesItemTitle>왼쪽 위</CategoriesItemTitle>
          </ButtonCategoriesContainer>
          <ButtonCategoriesContainer>
            <CategoriesItem alt='categories' onClick={toggleOutfitModal} />
            <CategoriesItemTitle>오른쪽 위</CategoriesItemTitle>
          </ButtonCategoriesContainer>
          <ButtonCategoriesContainer>
            <CategoriesItem alt='categories' onClick={toggleOutfitModal} />
            <CategoriesItemTitle>배경</CategoriesItemTitle>
          </ButtonCategoriesContainer>
          <ButtonCategoriesContainer>
            <CategoriesItem alt='categories' onClick={toggleOutfitModal} />
            <CategoriesItemTitle>왼쪽 아래</CategoriesItemTitle>
          </ButtonCategoriesContainer>
          <ButtonCategoriesContainer>
            <CategoriesItem alt='categories' onClick={toggleOutfitModal} />
            <CategoriesItemTitle>오른쪽 아래</CategoriesItemTitle>
          </ButtonCategoriesContainer>
        </ButtonContainer>
      </Layout>
      <Modal isOpen={isOutfitOpen} onRequestClose={toggleOutfitModal}>
        <ModalText>
          카테고리 텍스트<CheckIcon onClick={toggleOutfitModal}>check</CheckIcon>
        </ModalText>
        <ModalContainer>
          <ModalItemContainer>
            <Item src={'아이템이미지'} alt='item' />
            <ItemTitle>아이템 텍스트</ItemTitle>
          </ModalItemContainer>
        </ModalContainer>
      </Modal>
    </>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 5rem;
  background-image: url(${Texture});
`;

const CharacterContainer = styled.div`
  overflow: hidden; //자식 요소가(=꾸미기 아이템) 컨테이너 밖으로 나가지 않도록 설정
  position: relative;
  width: 360px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0.9rem;
`;

const CharacterBackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.9rem;
  object-fit: cover;
`;

const CharacterImg = styled.img`
  position: absolute;
  bottom: 0;
  max-width: 100%;
  object-fit: cover;
`;

const OutfitImg = styled.img`
  position: absolute;
  bottom: 0;
  max-width: 100%;
  object-fit: cover;
`;

const TopLeftItem = styled.img`
  position: absolute;
  top: 0%;
  left: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const TopRightItem = styled.img`
  position: absolute;
  top: 0%;
  right: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const BottomLeftItem = styled.img`
  position: absolute;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const BottomRightItem = styled.img`
  position: absolute;
  bottom: 0%;
  right: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  background-color: 'white';
`;

const ButtonCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(30% - 0.8rem); /* 3개씩 배치, 간격 고려 */
  margin-top: 0.5rem;
  background-color: 'white';
`;

const CategoriesItem = styled.img`
  border: none;
  border-radius: 0.5rem;
  background-color: white;
  object-fit: contain;
  object-position: center;
`;

const CategoriesItemTitle = styled.div`
  padding: 0.2rem 0;
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.1rem;
  text-align: center;
  color: black;
`;

const ModalText = styled.div`
  padding: 1rem 1.5rem;
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.3rem;
  text-align: left;
  color: #000000;
  line-height: 2rem;
  white-space: pre-wrap; // \n 적용하기
`;

const CheckIcon = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 15%;
  border: none;
  background: none;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.green};
  cursor: pointer;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 5rem;
`;

const ModalItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(30% - 0.3rem); /* 3개씩 배치, 간격 고려 */
  margin-top: 0.5rem;
  background-color: 'white';
`;

const Item = styled.img`
  border: none;
  border-radius: 0.5rem;
  background-color: white;
  object-fit: contain;
  object-position: center;
`;

const ItemTitle = styled.div`
  padding: 0.2rem 0;
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.1rem;
  text-align: center;
  color: black;
`;

export default MyRoomPage;
