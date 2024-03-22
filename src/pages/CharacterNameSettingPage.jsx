import styled from 'styled-components';

import { Header, Button } from '../components/common/layout';
import Texture from '../assets/img/ScreenBackground.png';
import EarthCharacter from '../assets/img/own-earth-char.png';

const CharacterNameSettingPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Text>
          여러분만의{'\n'}
          <Bold>지구 이름</Bold>을 지어주세요!
        </Text>
        <InputContainer>
          <CharacterImg src={EarthCharacter} />
          <CharacterNameInput placeholder='나의 지구 이름' />
          <Border />
          <ErrorMessageText>해당 닉네임은 사용 중입니다!</ErrorMessageText>
        </InputContainer>
        <BottomText>특수문자 _ 만 허용, 10자 내외, 영문 불가</BottomText>
        <RegisterBtnWrapper>
          <Button $bgColor={'green'} $textColor={'white'} size={'large'}>
            완료
          </Button>
        </RegisterBtnWrapper>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  height: 100vh;
  padding-top: 8.5rem;
  background-image: url(${Texture});
`;

const Text = styled.div`
  padding-bottom: 2rem;
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  white-space: pre-wrap;
`;

const Bold = styled.span`
  font-family: 'SUITE-Bold', sans-serif;
`;

const CharacterImg = styled.img`
  width: 190px;
  padding-bottom: 1rem;
  object-fit: contain;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterNameInput = styled.input`
  padding-bottom: 0.5rem;
  border: none;
  background: transparent;
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  color: #00000088;
`;

const Border = styled.div`
  width: 40%;
  border: 0.7px solid ${(props) => props.theme.colors.green};
`;

const ErrorMessageText = styled.div`
  padding-top: 10px;
  font-family: 'SUITE-Medium', sans-serif;
  font-size: 0.8rem;
  color: #ff2323;
`;

const BottomText = styled.div`
  position: fixed;
  bottom: 5rem;
  width: 90%;
  justify-content: center;
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 0.7rem;
  text-align: right;
  color: rgba(0, 0, 0, 0.5);
`;

const RegisterBtnWrapper = styled.div`
  position: fixed;
  bottom: 0.5rem;
  width: 100%;
  font-family: 'SUITE-Medium', sans-serif;
  font-size: 1.25rem;
  text-align: center;
`;

export default CharacterNameSettingPage;
