import { useState } from 'react';
import styled from 'styled-components';

import { Header, Footer, Button, Modal } from '../components/common/layout';
import ScreenBackground from '../assets/img/ScreenBackground.png';

const FriendsListPage = () => {
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isAcceptModalOpen, setAcceptModalOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isPressed, setPressed] = useState(false);

  const toggleInviteModal = () => {
    setInviteModalOpen(!isInviteModalOpen);
    setActive(!isActive); //친구 초대 버튼 색상 변경
  };

  const toggleDeleteModal = () => {
    setDeleteModalOpen(!isDeleteModalOpen);
  };

  const toggleAcceptModal = () => {
    setAcceptModalOpen(!isAcceptModalOpen);
  };

  const handleFriendClick = () => {
    setPressed(!isPressed); // 친구 초대 모달 안에 있는 친구 색상 변경
  };

  return (
    <>
      <Header />
      <FriendListPage>
        <InviteButton onClick={toggleInviteModal} $active={isActive}>
          <InviteIcon $active={isActive}>add_circle</InviteIcon>친구 초대
        </InviteButton>
        <FriendListContainer>
          <IconWrapper>
            <FaceIcon>sentiment_very_satisfied</FaceIcon>
            김구름
          </IconWrapper>
          <SmallButtonWrapper>
            <Button
              $bgColor={'lightBlue'}
              $textColor={'white'}
              size={'small'}
              onClick={toggleDeleteModal}
            >
              삭제
            </Button>
          </SmallButtonWrapper>
        </FriendListContainer>
        <TitleText>친구 요청</TitleText>
        <FriendRequestContainer>
          <IconWrapper>
            <EarthIcon>public</EarthIcon>
            김구름
          </IconWrapper>
          <SmallButtonWrapper>
            <Button
              $bgColor={'orange'}
              $textColor={'black'}
              size={'small'}
              onClick={toggleAcceptModal}
            >
              수락
            </Button>
          </SmallButtonWrapper>
        </FriendRequestContainer>
      </FriendListPage>
      <Footer />
      <Modal isOpen={isInviteModalOpen} onRequestClose={toggleInviteModal}>
        <ModalInviteText>
          친구 초대<CloseIcon onClick={toggleInviteModal}>close</CloseIcon>
        </ModalInviteText>
        <SearchBox>
          <NameInput placeholder='지구 이름' />
          <ModalIconWrapper /* onClick={ 이름 검색 결과 함수 여기 적용 } */>
            <Icon>search</Icon>
          </ModalIconWrapper>
        </SearchBox>
        <SearchResultBox>
          <SearchResult onClick={handleFriendClick} $active={isPressed}>
            <SearchResultCircle />
            지구 이름
          </SearchResult>
        </SearchResultBox>
        <ModalButtonWrapper>
          <Button
            $bgColor={'blue'}
            $textColor={'white'}
            size={'medium'}
            onClick={'해당 친구에게 친구 요청 보내기'}
          >
            요청
          </Button>
        </ModalButtonWrapper>
      </Modal>
      <Modal isOpen={isDeleteModalOpen} onRequestClose={toggleDeleteModal}>
        <ModalText>최지민님을 친구에서{'\n'}삭제 하시겠습니까?</ModalText>
        <ModalButtonWrapper>
          <Button $bgColor={'blue'} $textColor={'white'} size={'medium'}>
            예
          </Button>
          <Button
            $bgColor={'blue'}
            $textColor={'white'}
            size={'medium'}
            onClick={toggleDeleteModal}
          >
            아니오
          </Button>
        </ModalButtonWrapper>
      </Modal>
      <Modal isOpen={isAcceptModalOpen} onRequestClose={toggleAcceptModal}>
        <ModalText>최지민님의 요청을{'\n'}수락 하시겠습니까?</ModalText>
        <ModalButtonWrapper>
          <Button $bgColor={'blue'} $textColor={'white'} size={'medium'}>
            예
          </Button>
          <Button
            $bgColor={'blue'}
            $textColor={'white'}
            size={'medium'}
            onClick={toggleAcceptModal}
          >
            아니오
          </Button>
        </ModalButtonWrapper>
      </Modal>
    </>
  );
};

const FriendListPage = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  padding: 4rem 1.5rem;
  background-image: url(${ScreenBackground});
  font-family: 'SUITE-Medium', sans-serif;
  color: #ffffff;
  z-index: -1;
`;

const InviteButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0px 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  background-color: ${(props) => (props.$active ? props.theme.colors.green : 'white')};
  font-size: 1.2rem;
  color: ${(props) => (props.$active ? 'white' : 'black')};
`;

const InviteIcon = styled.div`
  padding-right: 0.8rem;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 2.25rem;
  color: ${(props) => (props.$active ? 'white' : props.theme.colors.green)};
`;

const FriendListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.5rem 0;
  border: none;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.blue};
  font-size: 1.2rem;
`;

const FaceIcon = styled.div`
  margin-right: 0.6rem;
  padding: 0.3rem 0.5rem;
  border-radius: 50%;
  background-color: #ffffff;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 2.25rem;
  color: ${(props) => props.theme.colors.blue};
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.3rem 1rem;
`;

const SmallButtonWrapper = styled.div`
  padding-right: 1rem;
`;

const TitleText = styled.div`
  width: 100%;
  padding-top: 2rem;
  font-family: 'SUITE-Bold', sans-serif;
  font-size: 1.5rem;
  text-align: left;
  color: #000000;
`;

const FriendRequestContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.5rem 0;
  border: solid;
  border-radius: 2rem;
  border-color: ${(props) => props.theme.colors.orange};
  box-shadow: 0px 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  font-size: 1.2rem;
  color: #000000;
`;

const EarthIcon = styled.div`
  margin-right: 0.6rem;
  padding: 0.3rem 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.green};
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 2.25rem;
  color: #ffffff;
`;

const ModalInviteText = styled.div`
  font-family: 'SUITE-Bold', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  color: #000000;
`;

const CloseIcon = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 15%;
  border: none;
  background: none;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  color: #656565;
  cursor: pointer;
`;

const SearchBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  margin: 1rem 0.8rem;
  border: none;
  border-radius: 0.8rem;
  background-color: #e5e5e5;
  color: #666666;
`;

const NameInput = styled.input`
  width: 10rem;
  padding: 0.7rem;
  border: none;
  background-color: transparent;
  font-family: 'SUITE-Light', sans-serif;
  font-size: 1.25rem;
  text-align: left;
`;

const ModalIconWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.7rem;
  height: 1.7rem;
  border: none;
  background-color: transparent;
`;

const Icon = styled.div`
  border: none;
  background-color: transparent;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.theme.colors.green};
`;

const SearchResultBox = styled.div`
  overflow-y: auto;
  display: flex;
  justify-content: center;
  width: 15rem;
  height: 11.5rem;
  margin: 1rem 0.8rem;
  border: none;
  border-radius: 0.8rem;
  background-color: #e5e5e5;
`;

const SearchResult = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 13rem;
  height: fit-content;
  margin: 1rem 0;
  padding: 0.8rem 0;
  border: none;
  border-radius: 0.8rem;
  background-color: ${(props) => (props.$active ? '#F9BC60' : 'white')};
  font-family: 'SUITE-Medium', sans-serif;
  font-size: 1rem;
  color: #404040;
`;

const SearchResultCircle = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0 0.6rem;
  border: none;
  border-radius: 50%;
  background-color: #e5e5e5;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ModalText = styled.div`
  padding: 1rem 0;
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.3rem;
  text-align: center;
  color: #000000;
  line-height: 2rem;
  white-space: pre-wrap; // \n 적용하기
`;

export default FriendsListPage;
