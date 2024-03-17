import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${({ size }) =>
    size === 'large' ? '20.3rem' : size === 'medium' ? '6rem' : size === 'small' ? '4.12rem' : ''};
  height: ${({ size }) =>
    size === 'large' ? '3.6rem' : size === 'medium' ? '2.8rem' : size === 'small' ? '2.3rem' : ''};
  border: ${({ border }) => (border ? '1px solid' : 'none')};
  border-color: ${({ theme, border }) => theme.colors[border] || '#000000'};
  border-radius: ${({ size }) =>
    size === 'large' ? '0.8rem' : size === 'medium' ? '0.8rem' : size === 'small' ? '1.2rem' : ''};
  background-color: ${({ theme, $bgColor }) => theme.colors[$bgColor] || '#FFFFFF'};
  font-size: ${({ size }) =>
    size === 'large'
      ? '1.25rem'
      : size === 'medium'
      ? '1.25rem'
      : size === 'small'
      ? '1.1rem'
      : ''};
  font-family: ${({ size }) =>
    size === 'large'
      ? "'SUITE-Regular', sans-serif"
      : size === 'medium'
      ? "'SUITE-Bold', sans-serif"
      : size === 'small'
      ? "'SUITE-Bold', sans-serif"
      : ''};
  color: ${({ theme, $textColor }) => theme.colors[$textColor] || '#FFFFFF'};
  text-align: center;
  cursor: pointer;
`;

const Button = ({ children, $bgColor, $textColor, size, border }) => {
  return (
    <StyledButton $bgColor={$bgColor} $textColor={$textColor} size={size} border={border}>
      <div>{children}</div>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  $textColor: PropTypes.string,
  $bgColor: PropTypes.string,
  border: PropTypes.string,
};

export default Button;
