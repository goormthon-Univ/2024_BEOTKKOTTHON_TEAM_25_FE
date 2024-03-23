import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Header, Footer } from '../components/common/layout';
import ScreenBackground from '../assets/img/ScreenBackground.png';

const StorePage = () => {
  const naviagte = useNavigate();

  const point = useSelector((state) => state.point);

  return (
    <>
      <Header />
      <Layout>
        <SubTopBar>
          <RightContainer>
            <PointContainer>
              <Icon>
                <IconWrapper>stars</IconWrapper>
              </Icon>
              <Point>{point}</Point> {/*API 적용 전*/}
            </PointContainer>
          </RightContainer>
        </SubTopBar>
        <CategoryList>
          <CategoryItem onClick={() => naviagte('/store/0')}>
            <CategoryIcon>apparel</CategoryIcon>
            <CategoryItemText>의류</CategoryItemText>
            <Move />
          </CategoryItem>
          <CategoryItem onClick={() => naviagte('/store/1')}>
            <CategoryIcon>checkroom</CategoryIcon>
            <CategoryItemText>왼쪽 위 소품</CategoryItemText>
            <Move />
          </CategoryItem>
          <CategoryItem onClick={() => naviagte('/store/2')}>
            <CategoryIcon>checkroom</CategoryIcon>
            <CategoryItemText>왼쪽 아래 소품</CategoryItemText>
            <Move />
          </CategoryItem>
          <CategoryItem onClick={() => naviagte('/store/3')}>
            <CategoryIcon>checkroom</CategoryIcon>
            <CategoryItemText>오른쪽 위 소품</CategoryItemText>
            <Move />
          </CategoryItem>
          <CategoryItem onClick={() => naviagte('/store/4')}>
            <CategoryIcon>checkroom</CategoryIcon>
            <CategoryItemText>오른쪽 아래 소품</CategoryItemText>
            <Move />
          </CategoryItem>
          <CategoryItem onClick={() => naviagte('/store/5')}>
            <CategoryIcon>eco</CategoryIcon>
            <CategoryItemText>배경</CategoryItemText>
            <Move />
          </CategoryItem>
        </CategoryList>
      </Layout>
      <Footer />
    </>
  );
};

const Layout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 1rem;
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
  color: ${(props) => props.theme.colors.green};
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

const IconWrapper = styled.div`
  border-radius: 50%;
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

const CategoryIcon = styled.div`
  margin-left: 20px;
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  color: white;
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

export default StorePage;
