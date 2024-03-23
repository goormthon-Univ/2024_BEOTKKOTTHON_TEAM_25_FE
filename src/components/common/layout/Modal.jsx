import PropTypes from 'prop-types';
import StyledModal from 'react-modal';

const Modal = ({ children, isOpen, onRequestClose, top }) => {
  const customStyles = {
    content: {
      position: 'relative',
      top: '30%',
      left: '0%',
      right: '0%',
      margin: '0 3.5rem',
      border: 'none',
      borderRadius: '0.9rem',
      backgroundColor: 'white',
      boxShadow: '2px 2px 12.3px 0px rgba(0, 0, 0, 0.2)',
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
      borderRadius: '0.8rem',
      backgroundColor: '#00AA8B66',
      boxShadow: '2px 2px 12.3px 0px rgba(0, 0, 0, 0.2)',
    },
  };

  const myRoomStyles = {
    //마이룸 페이지 - 마이룸 아이템 모달 레이아웃
    overlay: {
      backgroundColor: 'transparent',
    },
    content: {
      overflow: 'scroll',
      position: 'relative',
      top: '60%',
      right: '0%',
      left: '5%',
      width: '350px',
      height: '400px',
      padding: '0 0 2rem 0',
      border: 'none',
      borderRadius: '0.8rem',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 4px 12.3px 0px rgba(0, 0, 0, 0.35)',
    },
  };

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      appElement={document.getElementById('root')}
      style={
        location.pathname === '/friends-profile'
          ? friendItemStyles
          : location.pathname === '/myroom'
          ? myRoomStyles
          : customStyles
      }
      top={top}
    >
      {children}
    </StyledModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  top: PropTypes.string,
};

export default Modal;
