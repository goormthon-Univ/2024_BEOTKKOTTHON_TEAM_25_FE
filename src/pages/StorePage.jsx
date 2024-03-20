import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Header, Footer } from '../components/common/layout';
import ScreenBackground from '../assets/img/ScreenBackground.png';

const StorePage = () => {
  const naviagte = useNavigate();

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
      <CategoryList>
        <CategoryItem onClick={() => naviagte('/store/0')}>
          <ClothIcon />
          <CategoryItemText>의류</CategoryItemText>
          <Move />
        </CategoryItem>
        <CategoryItem onClick={() => naviagte('/store/1')}>
          <HangerIcon />
          <CategoryItemText>액세서리</CategoryItemText>
          <Move />
        </CategoryItem>
        <CategoryItem onClick={() => naviagte('/store/2')}>
          <FaceIcon />
          <CategoryItemText>소품</CategoryItemText>
          <Move />
        </CategoryItem>
        <CategoryItem onClick={() => naviagte('/store/3')}>
          <WallIcon />
          <CategoryItemText>바닥재</CategoryItemText>
          <Move />
        </CategoryItem>
        <CategoryItem onClick={() => naviagte('/store/4')}>
          <FloorIcon />
          <CategoryItemText>벽지</CategoryItemText>
          <Move />
        </CategoryItem>
      </CategoryList>
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

const CategoryList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-align: center;
  align-items: center;
`;

const CategoryItem = styled.button`
  display: inline-flex;
  width: 307px;
  height: 64px;
  margin-top: 10px;
  border: none;
  border-radius: 45px 73px 37px 45px;
  color: #ffffff;
  background-color: ${(props) => props.theme.colors.orange};
  align-items: center;
`;

const CategoryItemText = styled.div`
  margin-left: 15px;
  font-family: 'SUITE-SemiBold';
  font-size: 18px;
`;

const ClothIcon = styled.div`
  margin-left: 20px;
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  &:before {
    content: 'apparel';
  }
`;

const Move = styled.div`
  margin-left: auto;
  margin-right: 20px;
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  &:before {
    content: 'east';
  }
`;

const HangerIcon = styled.div`
  margin-left: 20px;
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  &:before {
    content: 'checkroom';
  }
`;

const FaceIcon = styled.div`
  margin-left: 20px;
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  &:before {
    content: 'face';
  }
`;

const FloorIcon = styled.div`
  margin-left: 20px;
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  &:before {
    content: 'grid_on';
  }
`;

const WallIcon = styled.div`
  margin-left: 20px;
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  &:before {
    content: 'settings_system_daydream';
  }
`;

export default StorePage;
