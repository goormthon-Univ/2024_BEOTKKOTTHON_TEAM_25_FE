import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1); //이전 페이지로 이동
  };

  const handleClick = () => {
    navigate('/mypage');
  };

  const determineHeader = () => {
    switch (location.pathname) {
      case '/home':
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon>Home</Icon>홈 화면
            </LeftContainer>
            <RightContainer>
              <PointContainer>
                <Icon>
                  <IconWrapper>stars</IconWrapper>
                </Icon>
                <Point>70</Point>
              </PointContainer>
              <ButtonWrapper onClick={handleClick}>
                <Icon>account_circle</Icon>
              </ButtonWrapper>
            </RightContainer>
          </HeaderContainer>
        );

      case '/records':
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon>photo_library</Icon>
              기록
            </LeftContainer>
            <RightContainer>
              <ButtonWrapper>
                <Icon>account_circle</Icon>
              </ButtonWrapper>
            </RightContainer>
          </HeaderContainer>
        );

      case '/daily-mission':
        return (
          <HeaderContainer>
            <LeftContainer>
              <ButtonWrapper onClick={handleClickBack}>
                <Icon>arrow_back_ios</Icon>
                Own Earth
              </ButtonWrapper>
            </LeftContainer>
          </HeaderContainer>
        );

      case '/friends-list':
      case '/friends':
      case '/friends-profile':
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon>group</Icon>
              친구 목록
            </LeftContainer>
            <RightContainer>
              <ButtonWrapper>
                <Icon>search</Icon>
              </ButtonWrapper>
            </RightContainer>
          </HeaderContainer>
        );

      case '/mypage':
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon onClick={handleClickBack}>arrow_back_ios</Icon>
              마이페이지
            </LeftContainer>
            <RightContainer>
              <ButtonWrapper onClick={handleClick}>
                <Icon>account_circle </Icon>
              </ButtonWrapper>
            </RightContainer>
          </HeaderContainer>
        );

      case '/마이룸': //마이룸 라우트 지정해주세요
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon onClick={handleClickBack}>arrow_back_ios</Icon>
              마이룸
            </LeftContainer>
            <PointContainer>
              <Icon>
                <IconWrapper>stars</IconWrapper>
              </Icon>
              <Point>70</Point>
            </PointContainer>
          </HeaderContainer>
        );

      case '/상점': // /store 라우트 지정해주세요
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon onClick={handleClickBack}>storefront</Icon>
              상점
            </LeftContainer>
            <RightContainer>
              <ButtonWrapper onClick={handleClick}>
                <Icon>account_circle </Icon>
              </ButtonWrapper>
            </RightContainer>
          </HeaderContainer>
        );

      default: // /onboarding /login
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon>globe</Icon>
              Own Earth
            </LeftContainer>
            <Icon>search</Icon>
          </HeaderContainer>
        );
    }
  };

  return <>{determineHeader()}</>;
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 0.7rem 0;
  box-shadow: 0 4px 7.5px 0px #00000033;
  background-color: #ffffff;
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.5rem;
  color: #000000;
  z-index: 10; //헤더가 페이지 뒤에 나타나는 현상 보완
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1rem;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
`;

const Icon = styled.div`
  padding: 0 0.5rem;
  border: none;
  background: transparent;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.green};
  cursor: pointer;
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

const ButtonWrapper = styled.button`
  border: none;
  background: none;
`;

export default Header;
