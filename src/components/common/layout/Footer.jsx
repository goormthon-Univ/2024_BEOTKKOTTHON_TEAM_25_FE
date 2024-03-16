import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const FooterPosition = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 1.3rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  box-shadow: 0px 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
`;

const Icon = styled.button`
  font-size: 2.5rem;
  font-family: 'Material Symbols Outlined', sans-serif;
  color: ${(props) => (props.$active ? '#FFFFFFCC' : props.theme.colors.green)};
  background-color: ${(props) => (props.$active ? props.theme.colors.green : 'transparent')};
  cursor: pointer;
  border: 0;
  border-radius: 1.5rem;
  padding: 0rem 1rem;
`;

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
  const handleClickMyPage = () => {
    navigate('/mypage');
  };

  return (
    <FooterPosition>
      <FooterContainer>
        <Icon onClick={handleClickHome} $active={location.pathname === '/home'}>
          home
        </Icon>
        <Icon onClick={handleClickRecords} $active={location.pathname === '/records'}>
          photo_library
        </Icon>
        <Icon onClick={handleClickFriends} $active={location.pathname === '/friends'}>
          group
        </Icon>
        <Icon onClick={handleClickMyPage} $active={location.pathname === '/mypage'}>
          account_circle
        </Icon>
      </FooterContainer>
    </FooterPosition>
  );
};

export default Footer;
