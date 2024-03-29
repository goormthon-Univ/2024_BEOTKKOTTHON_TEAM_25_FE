import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import Texture from '../assets/img/ScreenBackground.png';
import EarthCharacter from '../assets/img/loadingsuccess.png';
import { Button, Header } from '../components/common/layout';

const LoadingSuccess = () => {
  const earthName = useSelector((state) => state.earthName);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Layout>
        <Text>오늘의 미션 성공</Text>
        <SmallText>{earthName}가 기뻐해요!</SmallText>
        <CharacterImg src={EarthCharacter} />
        <RegisterBtnWrapper onClick={() => navigate('/home')}>
          <Button $bgColor={'green'} $textColor={'white'} size={'large'}>
            확인
          </Button>
        </RegisterBtnWrapper>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 8.5rem;
  background-image: url(${Texture});
`;

const Text = styled.div`
  padding-bottom: 2rem;
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  line-height: 2.5rem;
  white-space: pre-wrap;
`;

const SmallText = styled.div`
  padding-bottom: 2rem;
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  white-space: pre-wrap;
`;

const RegisterBtnWrapper = styled.div`
  position: fixed;
  bottom: 0.5rem;
  width: 100%;
  font-family: 'SUITE-Medium', sans-serif;
  font-size: 1.25rem;
  text-align: center;
`;

const CharacterImg = styled.img`
  width: 190px;
  padding-bottom: 1rem;
  object-fit: contain;
`;

export default LoadingSuccess;
