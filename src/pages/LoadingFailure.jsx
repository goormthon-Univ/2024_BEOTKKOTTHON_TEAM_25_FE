import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import Texture from '../assets/img/ScreenBackground.png';
import EarthCharacter from '../assets/img/loadingfailure.png';
import { Button, Header } from '../components/common/layout';

const LoadingFailure = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Layout>
        <Text>오늘의 미션 실패</Text>
        <TipText>
          tip 1 ) 본인이 찍은 사진을 확인해주세요!{'\n'}tip 2 )관련된 사물이 잘 나오게 촬영해주세요!
        </TipText>
        <CharacterImg src={EarthCharacter} />
        <RegisterBtnWrapper onClick={() => navigate('/daily-mission')}>
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
  padding-bottom: 1.6rem;
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  line-height: 2.5rem;
  white-space: pre-wrap;
`;

const TipText = styled.div`
  padding-bottom: 1.6rem;
  font-family: 'SUITE-Light', sans-serif;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.blue};
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

export default LoadingFailure;
