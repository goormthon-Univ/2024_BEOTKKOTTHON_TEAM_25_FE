import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
  font-family: 'SUITE-Bold', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.3rem;
  background-color: #ffffff;
  color: #000000;
  margin-top: 2.8rem;
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
  font-size: 2rem;
  font-family: 'Material Symbols Outlined', sans-serif;
  color: ${(props) => props.theme.colors.green};
  cursor: pointer;
  padding-left: 0.5rem;
  border: 0;
  background: transparent;
`;

const PointContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  font-size: 20px;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.lightOrange};
  padding-right: 1.5rem;
  border-radius: 1.5rem;
  border-color: ${(props) => props.theme.colors.orange};
  border-style: solid;
`;

const Point = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  font-size: 20px;
  font-weight: bold;
  padding-left: 0.9rem;
`;

const IconWrapper = styled.div`
  color: ${(props) => props.theme.colors.orange};
  font-family: 'Material Symbols Outlined', sans-serif;
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
