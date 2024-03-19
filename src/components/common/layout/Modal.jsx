import PropTypes from 'prop-types';
import StyledModal from 'react-modal';

const Modal = ({ isOpen, onRequestClose, children }) => {
  const customStyles = {
    content: {
      position: 'relative',
      top: '30%',
      right: '0%',
      left: '10%',
      width: '270px',
      height: '168px',
      border: 'none',
      borderRadius: '20px',
      backgroundColor: 'white',
      boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
    },
  };

  const friendItemStyles = {
    //친구 상세 페이지 - 친구 보유 아이템 모달 레이아웃
    content: {
      overflow: 'auto',
      position: 'relative',
      top: '30%',
      right: '0%',
      left: '5%',
      width: '350px',
      height: '400px',
      padding: '0',
      border: 'none',
      borderRadius: '24px',
      backgroundColor: '#00AA8B66',
      boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={location.pathname === '/friends-profile' ? friendItemStyles : customStyles}
    >
      {children}
    </StyledModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
};

export default Modal;
