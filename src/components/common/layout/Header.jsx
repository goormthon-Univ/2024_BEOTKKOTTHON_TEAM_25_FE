import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.3rem;
  background-color: #ffffff;
  font-family: 'SUITE-Bold', sans-serif;
  color: #000000;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;

const Text = styled.div`
  font-family: 'SUITE-Light', sans-serif;
  font-size: 1.5rem;
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

const PointContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  padding-right: 1.5rem;
  border-style: solid;
  border-radius: 1.5rem;
  border-color: ${(props) => props.theme.colors.orange};
  background-color: ${(props) => props.theme.colors.lightOrange};
  font-size: 20px;
  font-weight: bold;
`;

const Point = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  padding-left: 0.9rem;
  font-size: 20px;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  font-family: 'Material Symbols Outlined', sans-serif;
  color: ${(props) => props.theme.colors.orange};
  cursor: default;
`;

// Header component
const Header = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1); //이전 페이지로 이동
  };

  const handleClickStore = () => {
    navigate('/store');
  };

  const determineHeader = () => {
    if (location.pathname === '/records' || location.pathname === '/매일의미션페이지')
      return (
        <HeaderContainer>
          <LeftContainer>
            <Icon onClick={handleClickBack}>arrow_back_ios</Icon>
            <Text>Own Earth</Text>
          </LeftContainer>
        </HeaderContainer>
      );
    else if (location.pathname === '/home')
      return (
        <HeaderContainer>
          <PointContainer>
            <Icon>
              <IconWrapper>stars</IconWrapper>
            </Icon>
            <Point>+70</Point> {/*API 적용 전*/}
          </PointContainer>
          <Icon onClick={handleClickStore}>storefront</Icon>
        </HeaderContainer>
      );
    else if (location.pathname === '/friends')
      return (
        <HeaderContainer>
          <PointContainer>
            <Icon>
              <IconWrapper>stars</IconWrapper>
            </Icon>
            <Point>+70</Point> {/*API 적용 전*/}
          </PointContainer>
          <Icon onClick={handleClickStore}>group_add</Icon>
        </HeaderContainer>
      );
    else if (location.pathname === '/mypage')
      return (
        <HeaderContainer>
          <LeftContainer>
            <Icon>account_circle</Icon>
            <Text>마이페이지</Text>
          </LeftContainer>
          <Icon onClick={handleClickStore}>storefront</Icon>
        </HeaderContainer>
      );
    else if (location.pathname === '/친구목록')
      return (
        <HeaderContainer>
          <LeftContainer>
            <Icon>group</Icon>
            <Text>친구 목록</Text>
          </LeftContainer>
          <Icon>search</Icon>
        </HeaderContainer>
      );
  };

  return <>{determineHeader()}</>;
};

export default Header;
