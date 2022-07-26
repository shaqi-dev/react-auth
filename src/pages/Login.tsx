import { FC } from 'react';
import AuthForm from '../components/AuthForm';
import type { currentUserData } from '../App';

interface LoginPageProps {
  // eslint-disable-next-line no-unused-vars
  setUser: (data: currentUserData) => void
}

const Login: FC<LoginPageProps> = ({ setUser }) => (
  <AuthForm setUser={setUser} />
);

export default Login;
