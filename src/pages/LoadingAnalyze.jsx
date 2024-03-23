import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Texture from '../assets/img/ScreenBackground.png';
import EarthCharacter from '../assets/img/loadinganalyze.png';
import { Header } from '../components/common/layout';
import { postMissionPhoto } from '../services/api/mission';

const LoadingAnalyze = () => {
  const earthName = useSelector((state) => state.earthName);
  const location = useLocation();
  const navigate = useNavigate();
  const file = location.state.file;

  useEffect(() => {
    if (!file) {
      navigate('/loading-failure');
    }
    (async () => {
      const { isCompleted } = await postMissionPhoto(file);
      if (isCompleted) {
        navigate('/loading-success');
      } else {
        navigate('/loading-failure');
      }
    })();
  });

  return (
    <>
      <Header />
      <Layout>
        <Text>
          {earthName}가 사진을{'\n'}분석중이에요.
        </Text>
        <SmallText>잠시만 기다려주세요!</SmallText>
        <CharacterImg src={EarthCharacter} />
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

const CharacterImg = styled.img`
  width: 190px;
  padding-bottom: 1rem;
  object-fit: contain;
`;

export default LoadingAnalyze;
