import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = ({ point }) => {
  const navigate = useNavigate();

  const determineHeader = () => {
    switch (location.pathname) {
      case '/home':
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon>Home</Icon>내 지구
            </LeftContainer>
            <RightContainer>
              <PointContainer>
                <Icon>
                  <IconWrapper>stars</IconWrapper>
                </Icon>
                <Point>{point}</Point>
              </PointContainer>
              <ButtonWrapper onClick={() => navigate('/mypage')}>
                <Icon>account_circle</Icon>
              </ButtonWrapper>
            </RightContainer>
          </HeaderContainer>
        );

      case '/records':
      case '/record-categories':
      case '/record-missions':
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon>photo_library</Icon>
              기록
            </LeftContainer>
            <RightContainer>
              <ButtonWrapper>
                <Icon onClick={() => navigate('/mypage')}>account_circle</Icon>
              </ButtonWrapper>
            </RightContainer>
          </HeaderContainer>
        );

      case '/daily-mission':
        return (
          <HeaderContainer>
            <LeftContainer>
              <ButtonWrapper onClick={() => navigate(-1)}>
                <Icon>arrow_back_ios</Icon>
              </ButtonWrapper>
              오늘의 미션
            </LeftContainer>
          </HeaderContainer>
        );
      case '/friends':
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon>group</Icon>
              친구 목록
            </LeftContainer>
            <RightContainer>
              <ButtonWrapper onClick={() => navigate('/friends-list')}>
                <Icon>group_add</Icon>
              </ButtonWrapper>
            </RightContainer>
          </HeaderContainer>
        );
      case '/friends-list':
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
              <Icon onClick={() => navigate(-1)}>arrow_back_ios</Icon>
              마이페이지
            </LeftContainer>
            <RightContainer>
              <ButtonWrapper onClick={() => navigate('/mypage')}>
                <Icon>account_circle </Icon>
              </ButtonWrapper>
            </RightContainer>
          </HeaderContainer>
        );

      case '/myroom':
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon onClick={() => navigate(-1)}>arrow_back_ios</Icon>
              마이룸
            </LeftContainer>
            <RightContainer>
              <PointContainer>
                <Icon>
                  <IconWrapper>stars</IconWrapper>
                </Icon>
                <Point>{point}</Point>
              </PointContainer>
            </RightContainer>
          </HeaderContainer>
        );

      case '/store':
      case '/store/0':
      case '/store/1':
      case '/store/2':
      case '/store/3':
      case '/store/4':
      case '/store/5':
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon onClick={() => navigate(-1)}>storefront</Icon>
              상점
            </LeftContainer>
            <RightContainer>
              <ButtonWrapper onClick={() => navigate('/mypage')}>
                <Icon>account_circle </Icon>
              </ButtonWrapper>
            </RightContainer>
          </HeaderContainer>
        );

      default: // /onboarding /register /login /character-name-setting
        return (
          <HeaderContainer>
            <LeftContainer>
              <Icon>globe</Icon>
              Own Earth
            </LeftContainer>
          </HeaderContainer>
        );
    }
  };

  return <>{determineHeader()}</>;
};

Header.propTypes = {
  point: PropTypes.number,
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
