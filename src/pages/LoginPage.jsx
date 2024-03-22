import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Header, Button } from '../components/common/layout';
import Texture from '../assets/img/ScreenBackground.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <Header />
      <Layout>
        <LoginText>로그인</LoginText>
        <InputContainer>
          <Input placeholder='아이디 (이메일)' onChange={handleEmailChange} />
          <ErrorMessageText>등록된 사용자가 없습니다.</ErrorMessageText>
          <Input placeholder='비밀번호' type='password' onChange={handlePasswordChange} />
          <ErrorMessageText>비밀번호가 일치하지 않습니다.</ErrorMessageText>
        </InputContainer>
        <NavigateText>
          계정을 만드시려면,
          <NavigateLink onClick={() => navigate('/register')}> 회원가입</NavigateLink>
        </NavigateText>
        <LoginBtnWrapper>
          <Button $bgColor={'green'} $textColor={'white'} size={'large'} onClick={handleSubmit}>
            로그인
          </Button>
        </LoginBtnWrapper>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  height: 100vh;
  padding-top: 9.5rem;
  background-image: url(${Texture});
`;

const LoginText = styled.div`
  padding-bottom: 1.5rem;
  font-family: 'SUITE-Medium', sans-serif;
  font-size: 1.3rem;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.7rem 0.8rem;
  border: none;
  border-radius: 0.9rem;
  background-color: #d5d5d4;
  font-family: 'SUITE-Light', sans-serif;
  font-size: 1.1rem;
  color: #797979;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 0.9rem;
  font-family: 'SUITE-Light', sans-serif;
  font-size: 1.1rem;
`;

const ErrorMessageText = styled.div`
  padding: 0.3rem 0 1rem 0;
  background-color: transparent;
  font-family: 'SUITE-Medium', sans-serif;
  font-size: 0.7rem;
  color: #ff2323;
`;

const NavigateText = styled.div`
  position: fixed;
  bottom: 5rem;
  width: 100%;
  justify-content: center;
  font-family: 'SUITE-Light', sans-serif;
  font-size: 1rem;
  text-align: center;
`;

const NavigateLink = styled.span`
  border-bottom: 1px solid ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.green};
`;

const LoginBtnWrapper = styled.div`
  position: fixed;
  bottom: 0.5rem;
  width: 100%;
  font-family: 'SUITE-Medium', sans-serif;
  font-size: 1.25rem;
  text-align: center;
`;

export default LoginPage;
