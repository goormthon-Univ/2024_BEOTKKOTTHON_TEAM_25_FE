import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Header, Button } from '../components/common/layout';
import Texture from '../assets/img/ScreenBackground.png';

import OnBoardingImage1 from '../assets/img/own-earth-char.png';
import OnBoardingImage2 from '../assets/img/three-badges.png';
import OnBoardingImage3 from '../assets/img/earth-vs-earth.png';

const images = [OnBoardingImage1, OnBoardingImage2, OnBoardingImage3];
const texts = [
  `나만의 캐릭터를 만들고\n꾸며보세요`,
  `하루에 미션 하나씩,\n지구를 위한 사소한 실천을 올려주세요`,
  `친구와 함께\n주간 미션 달성률을 경쟁해보세요`,
];

const OnboardingPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
      setCurrentText((currentText) => (currentText + 1) % texts.length);
    }, 5000); // 5초마다 이미지 변경

    return () => clearInterval(timer); // 컴포넌트가 언마운트 될 때 타이머 제거
  }, []);

  const goToImage = (index) => {
    setCurrentImage(index);
    setCurrentText(index);
  };

  const handleClickSkipBtn = () => {
    navigate('/login');
  };

  return (
    <>
      <Header />
      <Layout>
        <SliderContainer>
          <Image
            key={currentImage}
            src={images[currentImage]}
            alt='슬라이드 이미지'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <Text>{texts[currentText]}</Text>
        </SliderContainer>
        <Indicators>
          {images.map((_, index) => (
            <Indicator
              key={index}
              isActive={index === currentImage}
              onClick={() => goToImage(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </Indicators>
        <SkipBtnWrapper>
          <Button
            $bgColor={'green'}
            $textColor={'white'}
            size={'large'}
            $border={''}
            onClick={handleClickSkipBtn}
          >
            건너뛰기
          </Button>
        </SkipBtnWrapper>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Texture});
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 12rem;
`;

const Image = styled(motion.img)`
  width: 300px;
  height: 200px;
  object-fit: contain;
  border-radius: 10px;
`;

const Text = styled.div`
  font-family: 'SUITE-Light';
  font-size: 20px;
  text-align: center;
  white-space: pre-line;
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.3rem;
`;

const Indicator = styled(motion.div)`
  cursor: pointer;
  width: 11px;
  height: 11px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#0e7be0' : '#0e7be033')};
`;

const SkipBtnWrapper = styled.div`
  position: fixed;
  bottom: 0.5rem;
  width: 100%;
  font-family: 'SUITE-Medium', sans-serif;
  font-size: 1.25rem;
  text-align: center;
`;

export default OnboardingPage;
