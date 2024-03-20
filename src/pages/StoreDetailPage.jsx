import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import styled from 'styled-components';

import { Header, Footer } from '../components/common/layout';
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

// 카테고리는 0부터 시작해야 하며 번호는 공백없이 연속되어야 함
const category = {
  0: '의류',
  1: '액세서리',
  2: '소품',
  3: '바닥재',
  4: '벽지',
};

const StoreDetailPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryIdNum = Number(categoryId);

  const handleLeftCategoryClick = () => {
    navigate(`/store/${(categoryIdNum - 1 + 5) % 5}`); // 현재 카테고리 - 1 + (카테고리 수) % (카테고리 수)
  };

  const handleRightCategoryClick = () => {
    navigate(`/store/${(categoryIdNum + 1) % 5}`); // 현재 카테고리 + 1 % (카테고리 수)
  };

  const handleModalButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <Header />
      <SubTopBar>
        <RightContainer>
          <PointContainer>
            <Icon>
              <IconWrapper>stars</IconWrapper>
            </Icon>
            <Point>70</Point> {/*API 적용 전*/}
          </PointContainer>
        </RightContainer>
      </SubTopBar>
      <ProductContainer>
        <CategoryContainer>
          <LeftIcon onClick={handleLeftCategoryClick}>navigate_before</LeftIcon>
          <CategoryTitle>{category[categoryId]}</CategoryTitle>
          <RightIcon onClick={handleRightCategoryClick}>navigate_next</RightIcon>
        </CategoryContainer>
        <ItemListContainer>
          <ItemList>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} style={customStyles}>
              <BuyItemTitle>초록색 티셔츠를</BuyItemTitle>
              <BuyConfirmText>구매하시겠습니까?</BuyConfirmText>
              <BuyItemPriceWrapper>
                <BuyItemPriceIcon />
                <BuyItemPriceText>70</BuyItemPriceText>
              </BuyItemPriceWrapper>
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
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
            <ItemContainer onClick={handleModalButtonClick}>
              <ItemImg />
              <PriceWrapper>
                <PriceIcon />
                <PriceText>70</PriceText>
              </PriceWrapper>
            </ItemContainer>
          </ItemList>
        </ItemListContainer>
      </ProductContainer>

      <Footer />
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${ScreenBackground});
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
  justify-content: end;
  padding-right: 1rem;
  border-style: solid;
  border-radius: 1.5rem;
  border-color: ${(props) => props.theme.colors.orange};
  background-color: ${(props) => props.theme.colors.lightOrange};
  font-size: 20px;
  font-weight: bold;
`;

const Icon = styled.button`
  padding-left: 0.5rem;
  border: 0;
  background: transparent;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.green};
  cursor: pointer;
`;

const Point = styled.div`
  display: flex;
  padding-left: 0.9rem;
  font-family: 'SUITE-Bold';
  font-size: 20px;
  font-weight: bold;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

const IconWrapper = styled.div`
  font-family: 'Material Symbols Outlined', sans-serif;
  color: ${(props) => props.theme.colors.orange};
  cursor: default;
`;

const ProductContainer = styled.div`
  width: 350px;
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

const LeftIcon = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0);
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  color: white;
`;

const CategoryTitle = styled.div`
  font-family: 'SUITE-SemiBold';
  font-size: 24px;
  color: white;
`;

const RightIcon = styled.button`
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
  width: 92px;
  height: 92px;
  padding: 0;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  background-color: white;
`;

const ItemImg = styled.div`
  width: 92px;
  height: 70px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: gray;
`;

const PriceWrapper = styled.div`
  display: flex;
  width: 92px;
  height: 22px;
  gap: 4px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const PriceIcon = styled.div`
  font-family: 'Material Symbols Outlined';
  font-size: 18px;
  color: ${(props) => props.theme.colors.orange};
  &:before {
    content: 'stars';
  }
`;

const PriceText = styled.div`
  font-family: 'SUITE-Regular';
  font-size: 16px;
  color: black;
  text-align: center;
`;

const BuyItemTitle = styled.div`
  padding-top: 20px;
  font-family: 'SUITE-Bold';
  font-size: 20px;
  text-align: center;
`;

const BuyConfirmText = styled.div`
  font-family: 'SUITE-Regular';
  font-size: 20px;
  text-align: center;
`;

const BuyItemPriceWrapper = styled.div`
  display: flex;
  height: 30px;
  gap: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
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
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
`;

export default StoreDetailPage;
