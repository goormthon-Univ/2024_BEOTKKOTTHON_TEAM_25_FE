import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { setCompletedMissionCategory, setCompletedMissionMonth } from '../store/slice';

import { Header, Footer } from '../components/common/layout';
import Texture from '../assets/img/ScreenBackground.png';

function RecordCategories() {
  const completedMissionMonth = useSelector((state) => state.completedMissionMonth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDateClick = () => {
    dispatch(setCompletedMissionCategory(''));
    navigate('/records');
  };

  const handleCategoryClick = (category) => {
    dispatch(setCompletedMissionCategory(category));
    navigate('/records');
  };

  const handleBeforeMonthClick = () => {
    dispatch(setCompletedMissionCategory(''));
    dispatch(setCompletedMissionMonth((completedMissionMonth - 1 + 12) % 12));
  };

  const handleAfterMonthClick = () => {
    dispatch(setCompletedMissionCategory(''));
    dispatch(setCompletedMissionMonth((completedMissionMonth + 1) % 12));
  };

  return (
    <>
      <Header />
      <Layout>
        <MonthlySection>
          <BeforeIcon onClick={() => handleBeforeMonthClick()} />
          <MonthlyTitle>{completedMissionMonth}월의 지구</MonthlyTitle>
          <AfterIcon onClick={() => handleAfterMonthClick()} />
        </MonthlySection>
        <SortWrapper>
          <SortSection>
            <SortByDateWrapper>
              <SortByDateIcon />
              <SortByDateTitle onClick={() => handleDateClick()}>날짜별</SortByDateTitle>
            </SortByDateWrapper>
            <SortByTypeWrapper>
              <SortByTypeIcon />
              <SortByTypeTitle onClick={() => navigate('/record-categories')}>
                종류별
              </SortByTypeTitle>
            </SortByTypeWrapper>
          </SortSection>
        </SortWrapper>
        <TypeWrapper>
          <TypeSection>
            <TypeList>
              <BlueBox onClick={() => handleCategoryClick('SAVE_WATER')}>
                <BlueBoxWrapper>
                  <WaterIcon />
                  <TypeText>물 절약하기</TypeText>
                  <Move />
                </BlueBoxWrapper>
              </BlueBox>
              <BlueBox onClick={() => handleCategoryClick('RECYCLE')}>
                <BlueBoxWrapper>
                  <RecycleIcon />
                  <TypeText>분리수거 하기</TypeText>
                  <Move />
                </BlueBoxWrapper>
              </BlueBox>
              <BlueBox onClick={() => handleCategoryClick('SAVE_ENERGY')}>
                <BlueBoxWrapper>
                  <ThunderIcon />
                  <TypeText>전기 절약하기</TypeText>
                  <Move />
                </BlueBoxWrapper>
              </BlueBox>
              <BlueBox onClick={() => handleCategoryClick('REDUCE_TRASH')}>
                <BlueBoxWrapper>
                  <LeafIcon />
                  <TypeText>일회용품 줄이기</TypeText>
                  <Move />
                </BlueBoxWrapper>
              </BlueBox>
            </TypeList>
          </TypeSection>
        </TypeWrapper>
      </Layout>
      <Footer />
    </>
  );
}

const Layout = styled.div`
  height: 600px;
  padding-top: 5rem;
  background-image: url(${Texture});
`;

const MonthlySection = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  text-align: center;
  line-height: 56px;
  justify-content: center;
`;

const BeforeIcon = styled.div`
  font-family: 'Material Symbols Outlined';
  font-size: 2rem;
  &:before {
    content: 'navigate_before';
  }
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: ${(props) => props.theme.colors.green};
`;

const AfterIcon = styled.div`
  font-family: 'Material Symbols Outlined';
  font-size: 2rem;
  &:before {
    content: 'navigate_next';
  }
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: ${(props) => props.theme.colors.green};
`;

const MonthlyTitle = styled.div`
  width: 140px;
  font-family: 'SUITE-Medium';
  font-size: 24px;
`;

const SortWrapper = styled.div`
  display: flex;
  height: 38px;
  justify-content: center;
`;

const SortSection = styled.div`
  display: flex;
  width: 80%;
  border-bottom: 1px solid ${(props) => props.theme.colors.green};
  justify-content: center;
`;

const SortByDateWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 50%;
  border-right: 1px solid ${(props) => props.theme.colors.green};
  justify-content: center;
  color: #00000083;
`;

const SortByDateIcon = styled.div`
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  &:before {
    content: 'calendar_month';
  }
  color: #888888;
`;

const SortByDateTitle = styled.div`
  font-family: 'SUITE-Light';
  font-size: 18px;
  letter-spacing: -0.37px;
  line-height: 36px;
  color: #888888;
`;

const SortByTypeWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 50%;
  justify-content: center;
`;

const SortByTypeIcon = styled.div`
  font-family: 'Material Symbols Outlined';
  font-size: 30px;
  &:before {
    content: 'spoke';
  }
  color: ${(props) => props.theme.colors.green};
`;

const SortByTypeTitle = styled.div`
  font-family: 'SUITE-Light';
  font-size: 18px;
  letter-spacing: -0.37px;
  line-height: 36px;
  color: ${(props) => props.theme.colors.green};
`;

const TypeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TypeSection = styled.div`
  width: 90%;
  height: calc(100vh - 298px);
  overflow: hidden;
`;

const TypeList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-align: center;
  align-items: center;
`;

const BlueBox = styled.li`
  display: inline-flex;
  width: 307px;
  height: 64px;
  margin: 0.8rem 0%;
  border-radius: 45px 73px 37px 45px;
  color: #ffffff;
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue};
`;

const BlueBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  line-height: 64px;
`;

const WaterIcon = styled.div`
  margin-left: 10px;
  font-family: 'Material Symbols Outlined';
  &:before {
    content: 'water_drop';
  }
  font-size: 30px;
`;

const TypeText = styled.div`
  margin-left: 10px;
  font-family: 'SUITE-Light';
  font-size: 18px;
`;

const Move = styled.div`
  margin-left: auto;
  margin-right: 20px;
  font-family: 'Material Symbols Outlined';
  &:before {
    content: 'east';
  }
  font-size: 30px;
`;

const RecycleIcon = styled.div`
  margin-left: 10px;
  font-family: 'Material Symbols Outlined';
  &:before {
    content: 'recycling';
  }
  font-size: 30px;
`;

const ThunderIcon = styled.div`
  margin-left: 10px;
  font-family: 'Material Symbols Outlined';
  &:before {
    content: 'bolt';
  }
  font-size: 30px;
`;

const LeafIcon = styled.div`
  margin-left: 10px;
  font-family: 'Material Symbols Outlined';
  &:before {
    content: 'eco';
  }
  font-size: 30px;
`;

export default RecordCategories;
