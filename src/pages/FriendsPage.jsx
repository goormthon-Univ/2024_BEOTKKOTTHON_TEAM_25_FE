import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { loadFriendsData } from '../store/slice';

import { Header, Footer } from '../components/common/layout';
import Texture from '../assets/img/ScreenBackground.png';

const FriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFriendsData());
  }, []);

  const accumulatedPoint = useSelector((state) => state.accumulatedPoint);
  const completedMissionCount = useSelector((state) => state.completedMissionCount);
  const completionRate = useSelector((state) => state.completionRate);
  // const friends = useSelector((state) => state.friends); 친구 목록

  return (
    <>
      <Header />
      <Layout>
        <TitleText>월간 미션 달성률</TitleText>
        <MonthlyContainer>
          <PointTitle>
            누적 포인트<PointIcon>stars</PointIcon>
            <PointText>{accumulatedPoint}</PointText>
          </PointTitle>
          <PointTitle>미션 완료 횟수 {completedMissionCount}회</PointTitle>
          <AchieveWrapper>
            <GraphIcon>bar_chart</GraphIcon>
            <AchieveText>달성률 {completionRate}%</AchieveText>
          </AchieveWrapper>
          <ProgressBar>
            <ProgressBarOrange width={`${completionRate}%`} />
          </ProgressBar>
        </MonthlyContainer>
        <TitleText>친구</TitleText>
        <FriendBox>
          <FaceIcon>sentiment_very_satisfied</FaceIcon>
          <FriendInfoContainer>
            <FriendPointWrapper>
              <FriendPointIcon>stars</FriendPointIcon>
              <FriendPointText>1,800</FriendPointText>
            </FriendPointWrapper>
            <FriendText>최지민</FriendText>
            <FriendAchieve>월간 미션 달성률 75%</FriendAchieve>
          </FriendInfoContainer>
        </FriendBox>
      </Layout>
      <Footer />
    </>
  );
};

const Layout = styled.div`
  height: 100vh;
  padding: 6rem 1.5rem 0 1.5rem;
  background-image: url(${Texture});
`;

const TitleText = styled.div`
  font-family: 'SUITE-Bold', sans-serif;
  font-size: 1.5rem;
  text-align: left;
`;

const MonthlyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  padding: 1rem 1.5rem;
  border-radius: 0.9rem;
  box-shadow: 0px 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const PointTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'SUITE-Light', sans-serif;
  font-size: 0.9rem;
`;

const PointIcon = styled.div`
  padding-left: 0.4rem;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.orange};
`;

const PointText = styled.div`
  font-family: 'SUITE-Bold', sans-serif;
  font-size: 1rem;
`;

const GraphIcon = styled.div`
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.green};
`;

const AchieveText = styled.div`
  font-family: 'SUITE-Bold', sans-serif;
  font-size: 1.2rem;
`;

const AchieveWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.3rem;
`;

const ProgressBar = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 1rem 0;
  border-radius: 0.8rem;
  box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #e3e3e3;
`;

const ProgressBarOrange = styled.div`
  width: ${(props) => props.width};
  transition: width 0.5s ease-in-out;
  height: 20px;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.orange};
`;

const FaceIcon = styled.div`
  margin-right: 0.6rem;
  padding: 0.3rem 0.5rem;
  border-radius: 50%;
  background-color: #33bba289;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 3rem;
  color: white;
`;

const FriendInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  width: 100%;
  margin-left: 1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.9rem;
  box-shadow: 0px 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

const FriendPointWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 13%;
  right: 5%;
`;

const FriendPointIcon = styled.div`
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.orange};
`;

const FriendPointText = styled.div`
  font-family: 'SUITE-ExtraBold', sans-serif;
  font-size: 0.8rem;
`;

const FriendBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.5rem 0;
`;

const FriendText = styled.div`
  padding: 0.3rem 0.5rem;
  font-family: 'SUITE-Medium', sans-serif;
  font-size: 0.9rem;
  text-align: left;
  color: #000000;
`;

const FriendAchieve = styled.div`
  padding: 0.3rem 0.5rem;
  font-family: 'SUITE-Bold', sans-serif;
  font-size: 1rem;
  text-align: left;
  color: #000000;
`;

export default FriendsPage;
