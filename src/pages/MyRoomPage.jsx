import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Texture from '../assets/img/ScreenBackground.png';
import Earth from '../assets/imgLayer/earth.png';
import MyRoomModal from '../components/MyRoomModal';
import { Header } from '../components/common/layout';
import CATEGORRY from '../constants/category';

const MyRoomPage = () => {
  const [isOutfitOpen, setOutfitOpen] = useState(false);
  const [category, setCategory] = useState(CATEGORRY.CLOTHING);
  const point = useSelector((state) => state.point);

  const toggleOutfitModal = (event, category) => {
    setCategory(category);
    setOutfitOpen(!isOutfitOpen);
  };

  return (
    <>
      <Header point={point} />
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
            <CategoriesItem
              onClick={(e) => {
                toggleOutfitModal(e, CATEGORRY.CLOTHING);
              }}
            >
              apparel
            </CategoriesItem>
            <CategoriesItemTitle>의류</CategoriesItemTitle>
          </ButtonCategoriesContainer>
          <ButtonCategoriesContainer>
            <CategoriesItem
              onClick={(e) => {
                toggleOutfitModal(e, CATEGORRY.UPPER_LEFT);
              }}
            >
              checkroom
            </CategoriesItem>
            <CategoriesItemTitle>왼쪽 위</CategoriesItemTitle>
          </ButtonCategoriesContainer>
          <ButtonCategoriesContainer>
            <CategoriesItem
              onClick={(e) => {
                toggleOutfitModal(e, CATEGORRY.UPPER_RIGHT);
              }}
            >
              checkroom
            </CategoriesItem>
            <CategoriesItemTitle>오른쪽 위</CategoriesItemTitle>
          </ButtonCategoriesContainer>
          <ButtonCategoriesContainer>
            <CategoriesItem
              onClick={(e) => {
                toggleOutfitModal(e, CATEGORRY.BACKGROUND);
              }}
            >
              eco
            </CategoriesItem>
            <CategoriesItemTitle>배경</CategoriesItemTitle>
          </ButtonCategoriesContainer>
          <ButtonCategoriesContainer>
            <CategoriesItem
              onClick={(e) => {
                toggleOutfitModal(e, CATEGORRY.LOWER_LEFT);
              }}
            >
              checkroom
            </CategoriesItem>
            <CategoriesItemTitle>왼쪽 아래</CategoriesItemTitle>
          </ButtonCategoriesContainer>
          <ButtonCategoriesContainer>
            <CategoriesItem
              onClick={(e) => {
                toggleOutfitModal(e, CATEGORRY.LOWER_RIGHT);
              }}
            >
              checkroom
            </CategoriesItem>
            <CategoriesItemTitle>오른쪽 아래</CategoriesItemTitle>
          </ButtonCategoriesContainer>
        </ButtonContainer>
      </Layout>
      <MyRoomModal
        isOpen={isOutfitOpen}
        toggleOutfitModal={toggleOutfitModal}
        category={category}
      />
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

const CategoriesItem = styled.div`
  padding: 1rem 0;
  border: none;
  border-radius: 0.5rem;
  background-color: #f9bc60;
  object-fit: contain;
  object-position: center;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 50px;
  text-align: center;
  color: white;
`;

const CategoriesItemTitle = styled.div`
  padding: 0.2rem 0;
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.1rem;
  text-align: center;
  color: black;
`;

export default MyRoomPage;
