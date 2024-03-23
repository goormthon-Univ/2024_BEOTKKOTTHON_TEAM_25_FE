import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Texture from '../assets/img/ScreenBackground.png';
import { Button, Footer, Header } from '../components/common/layout';
import CATEGORY from '../constants/category';
import { getStoreItmesByCategory } from '../services/api/item';
import { buyItem } from '../services/api/member';

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

const StoreDetailPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const point = useSelector((state) => state.point);

  const category = CATEGORY[Object.keys(CATEGORY)[categoryId]];

  useEffect(() => {
    const getItemsAndSetItems = async () => {
      const response = await getStoreItmesByCategory(category.value);
      setItems(response.filter((item) => item.isPurchased == false));
    };
    getItemsAndSetItems();
  });

  const categoryIdNum = Number(categoryId);

  const handleLeftCategoryClick = () => {
    navigate(`/store/${(categoryIdNum - 1 + 6) % 6}`); // 현재 카테고리 - 1 + (카테고리 수) % (카테고리 수)
  };

  const handleRightCategoryClick = () => {
    navigate(`/store/${(categoryIdNum + 1) % 6}`); // 현재 카테고리 + 1 % (카테고리 수)
  };

  const handleBuyYesButtonClick = async () => {
    await buyItem(selectedItem.itemId);
    setIsModalOpen(false);
  };

  const handleItemClick = (item) => {
    if (item.isPurchased) {
      console.error('이미 구매한 아이템입니다!'); // TODO: 이미 보유한 아이템 클릭 안되게 막아야 함
    }
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <Layout>
        <SubTopBar>
          <RightContainer>
            <PointContainer>
              <Icon>stars</Icon>
              <Point>{point}</Point>
            </PointContainer>
          </RightContainer>
        </SubTopBar>
        <ProductContainer>
          <CategoryContainer>
            <LeftIcon onClick={handleLeftCategoryClick}>navigate_before</LeftIcon>
            <CategoryTitle>{category.storeText}</CategoryTitle>
            <RightIcon onClick={handleRightCategoryClick}>navigate_next</RightIcon>
          </CategoryContainer>
          <ItemListContainer>
            <ItemList>
              {items.map((item) => (
                <ItemContainer key={item.itemId} onClick={() => handleItemClick(item)}>
                  <ItemImg src={item.imageUrl} alt='item' />
                  <PriceWrapper>
                    <PriceIcon>stars</PriceIcon>
                    <PriceText>{item.price}</PriceText>
                  </PriceWrapper>
                </ItemContainer>
              ))}
            </ItemList>
          </ItemListContainer>
        </ProductContainer>
        <Footer />
        <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} style={customStyles}>
          <ModalText>
            <ModalBoldText>{selectedItem.name}</ModalBoldText>를{'\n'} 구매하시겠습니까?
          </ModalText>
          <BuyItemPriceWrapper>
            <BuyItemPriceIcon />
            <BuyItemPriceText>-{selectedItem.price}</BuyItemPriceText>
          </BuyItemPriceWrapper>
          <ModalButtonWrapper>
            <Button
              $bgColor={'blue'}
              $textColor={'white'}
              size={'medium'}
              onClick={handleBuyYesButtonClick}
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
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 1rem;
  background-image: url(${Texture});
`;

const SubTopBar = styled.div`
  display: flex;
  padding: 4rem 2.5rem 1rem 2.5rem;
  justify-content: right;
`;

const RightContainer = styled.div`
  height: 46px;
  margin-top: 10px;
`;

const PointContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.5rem;
  border: solid 1.2px;
  border-radius: 1.5rem;
  border-color: ${(props) => props.theme.colors.orange};
  background: 1rem;
  background-color: ${(props) => props.theme.colors.lightOrange};
`;

const Icon = styled.button`
  padding-left: 0.5rem;
  border: 0;
  background: transparent;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.orange};
  cursor: pointer;
`;

const Point = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  font-family: 'SUITE-Bold', sans-serif;
  font-size: 1.3rem;
`;

const PriceIcon = styled.div`
  padding-right: 0.3rem;
  border: 0;
  background: transparent;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.orange};
  cursor: pointer;
`;

const ProductContainer = styled.div`
  width: 360px;
  height: 60%;
  margin: 0 auto 0 auto;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  gap: 40px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-size: 24px;
  background-color: ${(props) => props.theme.colors.green};
  color: white;
  justify-content: center;
  align-items: center;
`;

const LeftIcon = styled.div`
  margin-left: 2rem;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  color: white;
`;

const CategoryTitle = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'SUITE-SemiBold';
  font-size: 1.4rem;
  color: white;
`;

const RightIcon = styled.div`
  margin-right: 2rem;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  color: white;
`;

const ItemListContainer = styled.div`
  overflow: scroll;
  height: calc(100% - 50px);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #c4c4c422;
`;

const ItemList = styled.ul`
  display: flex;
  padding: 10px;
  margin: 0;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ItemContainer = styled.button`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  padding: 0;
  margin-top: 10px;
  border: none;
  border-radius: 0.9rem;
  background-color: white;
  text-align: center;
  align-items: center;
  padding: 0.5rem;
`;

const ItemImg = styled.img`
  margin: 0 auto;
  width: 65px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PriceText = styled.div`
  font-family: 'SUITE-Medium', sans-serif;
  font-size: 16px;
  color: black;
`;

const ModalBoldText = styled.span`
  font-family: 'SUITE-Bold', sans-serif;
`;

const ModalText = styled.div`
  padding: 1rem 0;
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1.3rem;
  text-align: center;
  color: #000000;
  line-height: 2rem;
  white-space: pre-wrap; // \n 적용하기
`;

const BuyItemPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
`;

const BuyItemPriceIcon = styled.div`
  font-family: 'Material Symbols Outlined';
  font-size: 24px;
  color: ${(props) => props.theme.colors.orange};
  &:before {
    content: 'stars';
  }
`;

const BuyItemPriceText = styled.div`
  font-family: 'SUITE-Regular';
  font-size: 20px;
  color: black;
  text-align: center;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default StoreDetailPage;
