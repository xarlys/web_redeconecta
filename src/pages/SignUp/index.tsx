import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, AnimationContainer, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import { Link } from 'react-router-dom';

interface SignUnFormData {
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    
    const { addToast } = useToast();
    const handleSubmit = useCallback(
        async (data: SignUnFormData) => {
            try {
              formRef.current?.setErrors({});        
      
              
      
              
            } catch (err) {
             
              addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description:
                  'Ocorreu um erro ao fazer o cadastro, cheque suas credenciais',
              });
             
            }
        },
        [addToast],
    );
    return(
        <Container>
            <Content>
                <AnimationContainer>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1 style={{color: 'white'}}>Faça Login</h1>
                        <Input name="email" icon={FiMail} placeholder="E-mail" />
                        <Input
                            name="password"
                            icon={FiLock}
                            type="password"
                            placeholder="Senha"
                        />
                        <Input
                            name="confirmPassword"
                            icon={FiLock}
                            type="confirmPassword"
                            placeholder="Confirmar senha"
                        />
    
                        <Button type="submit">Entrar</Button>
                        <Link to="/login">Já tenho uma conta</Link>
                    </Form>
                </AnimationContainer>
            </Content>
            
            <Background />
        </Container>
    );
};

export default SignUp;