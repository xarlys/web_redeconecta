import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './sytles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Aguarde...' : children}
  </Container>
);

export default Button;
