import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Header, Footer } from '../components/common/layout';
import Texture from '../assets/img/ScreenBackground.png';
import GoodJob from '../assets/img/GoodJob.png';
import Earth from '../assets/img/earth.png';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Layout>
        <CharacterInfoContainer>
          <CharacterInfo>지구젤리와 함께한지 24일 째</CharacterInfo>
          <CharacterContainer>
            <CharacterBackgroundImg />
            <TopLeftItem />
            <TopRightItem />
            <BottomLeftItem />
            <BottomRightItem />
            <CharacterImg src={Earth} />
            <OutfitImg />
          </CharacterContainer>
          <MyRoomBtn onClick={() => navigate('/myroom')}>
            <MyRoomIcon />
            <MyRoomText>마이룸</MyRoomText>
          </MyRoomBtn>
        </CharacterInfoContainer>
        {/* 미션 수행 전 */}
        <DailyMissionTitle>미션이 도착했어요! 💌</DailyMissionTitle>
        <DailyMissionContainer onClick={() => navigate('/daily-mission')}>
          미션 내용
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

const CharacterBackgroundImg = styled.div`
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

const OutfitImg = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 100%;
  object-fit: cover;
`;

const TopLeftItem = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const TopRightItem = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const BottomLeftItem = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  object-fit: contain;
`;

const BottomRightItem = styled.div`
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
