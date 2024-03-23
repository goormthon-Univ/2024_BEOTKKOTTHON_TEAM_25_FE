import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMyInventory } from '../services/api/member';
import { Modal } from './common/layout';

const MyRoomModal = ({ isOpen, toggleOutfitModal, category }) => {
  const [items, setItems] = useState([]);
  const memberId = useSelector((state) => state.memberId);

  useEffect(() => {
    const getMyInvetoryAndSetItmes = async () => {
      const response = await getMyInventory(memberId, category.value);
      setItems(response);
    };
    setItems([]);
    try {
      getMyInvetoryAndSetItmes();
    } catch (error) {
      console.error(error);
    }
  }, [memberId, category]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={(e) => {
        toggleOutfitModal(e, category);
      }}
    >
      <ModalText>
        {category.text}
        <CheckIcon
          onClick={(e) => {
            toggleOutfitModal(e, category);
          }}
        >
          check
        </CheckIcon>
      </ModalText>
      <ModalContainer>
        {items.map((item) => (
          <ModalItemContainer key={item.itemId}>
            <Item src={item.imageUrl} alt='item' />
            <ItemTitle>{item.name}</ItemTitle>
          </ModalItemContainer>
        ))}
      </ModalContainer>
    </Modal>
  );
};

MyRoomModal.propTypes = {
  isOpen: PropTypes.bool,
  toggleOutfitModal: PropTypes.func,
  category: PropTypes.object,
};

const ModalText = styled.div`
  padding: 1rem 1.5rem;
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.3rem;
  text-align: left;
  color: #000000;
  line-height: 2rem;
  white-space: pre-wrap; // \n 적용하기
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 5rem;
`;

const ModalItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(30% - 0.3rem); /* 3개씩 배치, 간격 고려 */
  max-height: 100%;
  margin-top: 0.5rem;
  background-color: 'white';
`;

const Item = styled.img`
  border: none;
  border-radius: 0.5rem;
  background-color: white;
  object-fit: contain;
  object-position: center;
`;

const ItemTitle = styled.div`
  padding: 0.2rem 0;
  font-family: 'SUITE-SemiBold', sans-serif;
  font-size: 1.1rem;
  text-align: center;
  color: black;
`;

const CheckIcon = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 15%;
  border: none;
  background: none;
  font-family: 'Material Symbols Outlined', sans-serif;
  font-size: 2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.green};
  cursor: pointer;
`;

export default MyRoomModal;
