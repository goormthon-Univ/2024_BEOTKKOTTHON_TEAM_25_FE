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

const Icon = styled.button`
  font-size: 2rem;
  font-family: 'Material Symbols Outlined', sans-serif;
  color: ${(props) => props.theme.colors.green};
  cursor: pointer;
  padding-left: 0.7rem;

  border: 0;
  background: transparent;
`;

// Header component
const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/store');
    console.log('success');
  };

  return (
    <HeaderContainer>
      <PointContainer>
        <Icon>
          <IconWrapper>stars</IconWrapper>
        </Icon>
        <Point>+70</Point> {/*API 적용 전*/}
      </PointContainer>
      <Icon onClick={handleClick}>storefront</Icon>
    </HeaderContainer>
  );
};

export default Header;
