import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기

  const handleClickHome = () => {
    navigate('/home');
  };
  const handleClickRecords = () => {
    navigate('/records');
  };
  const handleClickFriends = () => {
    navigate('/friends');
  };
  const handleClickStore = () => {
    navigate('/store');
  };

  return (
    <FooterPosition>
      <FooterContainer>
        <Icon onClick={handleClickHome} $active={location.pathname === '/home'}>
          home
        </Icon>
        <Icon
          onClick={handleClickRecords}
          $active={
            location.pathname === '/records' ||
            location.pathname === '/record-categories' ||
            location.pathname === '/record-missions'
          }
        >
          photo_library
        </Icon>
        <Icon
          onClick={handleClickFriends}
          $active={
            location.pathname === '/friends' ||
            location.pathname === '/friends-list' ||
            location.pathname === '/friends-profile'
          }
        >
          group
        </Icon>
        <Icon
          onClick={handleClickStore}
          $active={
            location.pathname === '/store' ||
            location.pathname === '/store/0' ||
            location.pathname === '/store/1' ||
            location.pathname === '/store/2' ||
            location.pathname === '/store/3' ||
            location.pathname === '/store/4' ||
            location.pathname === '/store/5'
          }
        >
          storefront
        </Icon>
      </FooterContainer>
    </FooterPosition>
  );
};

const FooterPosition = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 1.2rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  box-shadow: 0px 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const Icon = styled.button`
  padding: 0rem 0.7rem;
  border: 0;
  border-radius: 1.5rem;
  background-color: ${(props) => (props.$active ? props.theme.colors.green : 'transparent')};
  cursor: pointer;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 2rem;
  color: ${(props) => (props.$active ? '#FFFFFFCC' : props.theme.colors.green)};
`;

export default Footer;
