import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { loadHomeData } from '../store/slice';

import { Header, Footer } from '../components/common/layout';
import Texture from '../assets/img/ScreenBackground.png';
import GoodJob from '../assets/img/GoodJob.png';
import Earth from '../assets/img/earth.png';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadHomeData());
  }, []);

  const point = useSelector((state) => state.point);
  const withDays = useSelector((state) => state.withDays);
  const earthName = useSelector((state) => state.earthName);
  const usingItems = useSelector((state) => state.usingItems);
  const dailyMission = useSelector((state) => state.dailyMission);

  const [clothImageUrl, setClothImageUrl] = useState('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
  const [upperLeftImageUrl, setUpperLeftImageUrl] = useState('');
  const [lowerLeftImageUrl, setLowerLeftImageUrl] = useState('');
  const [upperRightImageUrl, setUpperRightImageUrl] = useState('');
  const [lowerRightImageUrl, setLowerRightImageUrl] = useState('');

  useEffect(() => {
    for (let i = 0; i < usingItems.length; i++) {
      if (usingItems[i].itemCategory === 'CLOTHING') {
        setClothImageUrl(usingItems[i].imageUrl);
      }
      if (usingItems[i].itemCategory === 'BACKGROUND') {
        setBackgroundImageUrl(usingItems[i].imageUrl);
      }
      if (usingItems[i].itemCategory === 'UPPER_LEFT') {
        setUpperLeftImageUrl(usingItems[i].imageUrl);
      }
      if (usingItems[i].itemCategory === 'LOWER_LEFT') {
        setLowerLeftImageUrl(usingItems[i].imageUrl);
      }
      if (usingItems[i].itemCategory === 'UPPER_RIGHT') {
        setUpperRightImageUrl(usingItems[i].imageUrl);
      }
      if (usingItems[i].itemCategory === 'LOWER_RIGHT') {
        setLowerRightImageUrl(usingItems[i].imageUrl);
      }
    }
  }, [usingItems]);

  return (
    <>
      <Header point={point} />
      <Layout>
        <CharacterInfoContainer>
          <CharacterInfo>
            {earthName}와 함께한지 {withDays}일 째
          </CharacterInfo>
          <CharacterContainer>
            {backgroundImageUrl ? (
              <CharacterBackgroundImg src={backgroundImageUrl} />
            ) : (
              <CharacterBackgroundFake />
            )}
            {upperLeftImageUrl ? <TopLeftItem src={upperLeftImageUrl} /> : <TopLeftFake />}
            {upperRightImageUrl ? <TopRightItem src={upperRightImageUrl} /> : <TopRightFake />}
            {lowerLeftImageUrl ? <BottomLeftItem src={lowerLeftImageUrl} /> : <BottomLeftFake />}
            {lowerRightImageUrl ? (
              <BottomRightItem src={lowerRightImageUrl} />
            ) : (
              <BottomRightFake />
            )}
            <CharacterImg src={Earth} />
            {clothImageUrl ? <OutfitImg src={clothImageUrl} /> : <OutfitFake />}
          </CharacterContainer>
          <MyRoomBtn onClick={() => navigate('/myroom')}>
            <MyRoomIcon />
            <MyRoomText>마이룸</MyRoomText>
          </MyRoomBtn>
        </CharacterInfoContainer>
        {/* 미션 수행 전 */}
        <DailyMissionTitle>미션이 도착했어요! 💌</DailyMissionTitle>
        <DailyMissionContainer onClick={() => navigate('/daily-mission')}>
          <TodayMission>오늘의 미션!</TodayMission>
          {dailyMission}
        </DailyMissionContainer>
        {/* 미션 완료 후 화면 */}
        {/* <DailyMissionTitle>오늘의 미션 완료 !</DailyMissionTitle>
        <DailyMissionContainer onClick={() => navigate('/records')}>
          <GoodJobImg src={GoodJob} />
        </DailyMissionSuccessContainer> */}
      </Layout>
      <Footer />
    </>
  );
};

const Layout = styled.div`
  height: 100vh;
  padding-top: 5rem;
  background-image: url(${Texture});
`;

const CharacterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CharacterInfo = styled.div`
  display: inline-block; //배경이 텍스트 길이 따라 자동 조절
  margin-bottom: 0.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.9rem;
  background-color: ${(props) => props.theme.colors.green};
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  color: white;
`;

const CharacterContainer = styled.div`
  overflow: hidden; //자식 요소가(=꾸미기 아이템) 컨테이너 밖으로 나가지 않도록 설정
  position: relative;
  width: 360px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0.9rem;
`;

const CharacterBackgroundFake = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.9rem;
  object-fit: cover;
`;

const CharacterBackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.9rem;
  object-fit: cover;
`;

const CharacterImg = styled.img`
  position: absolute;
  bottom: 0;
  max-width: 100%;
  object-fit: cover;
`;

const OutfitFake = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 100%;
  object-fit: covimg;
`;

const OutfitImg = styled.img`
  position: absolute;
  bottom: 0;
  max-width: 100%;
  object-fit: cover;
`;

const TopLeftFake = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const TopLeftItem = styled.img`
  position: absolute;
  top: 0%;
  left: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const TopRightFake = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const TopRightItem = styled.img`
  position: absolute;
  top: 0%;
  right: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const BottomLeftFake = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const BottomLeftItem = styled.img`
  position: absolute;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const BottomRightFake = styled.div`
  position: absolute;
  bottom: 0%;
  right: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const BottomRightItem = styled.img`
  position: absolute;
  bottom: 0%;
  right: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const MyRoomBtn = styled.div`
  overflow: visible;
  position: absolute;
  top: 90%;
  right: 4%;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.green};
  text-align: center;
`;

const MyRoomText = styled.div`
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.1rem;
  color: white;
`;

const MyRoomIcon = styled.div`
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 2.1rem;
  &:before {
    content: 'apparel';
  }
  color: white;
`;

const DailyMissionTitle = styled.div`
  padding: 1rem 1.5rem;
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1.2rem;
  text-align: left;
`;

const TodayMission = styled.div`
  padding-bottom: 0.5rem;
  font-family: 'SUITE-Light';
  font-size: 1.5rem;
`;

const DailyMissionContainer = styled.div`
  margin: 0rem 1.5rem;
  padding-top: 1.5rem;
  height: 14rem;
  border-radius: 0.9rem;
  background-color: ${(props) => props.theme.colors.blue};
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  color: white;
`;

const DailyMissionSuccessContainer = styled.div`
  position: relative;
  margin: 0rem 1.5rem;
  padding-top: 1.5rem;
  height: 14rem;
  border-radius: 0.9rem;
  background-image: url(${'미션 완료한 이미지'});
  background-color: ${(props) => props.theme.colors.blue};
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  color: white;
  object-fit: cover;
`;

const GoodJobImg = styled.img`
  position: absolute;
  right: 0%;
  bottom: 55%;
  width: 40%;
`;

export default HomePage;
