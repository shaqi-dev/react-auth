import { FC } from 'react';
import styled from 'styled-components';

interface ProfileProps {
  login: string | undefined
  handleLogOut: () => void;
}

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Greeting = styled.p`
  font-size: 4rem;
  line-height: 4.8rem;

  span {
    font-weight: 700;
  }
`;

const LogOutButton = styled.button`
  width: 200px;
  height: 60px;
  padding: 20px 0 18px 0;
  background-color: #F5F5F5;
  border: none;
  border-radius: 8px;
  color: #000000;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.2rem;
  transition: all 80ms;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #e2e5ff;
  }
`;

const Profile: FC<ProfileProps> = ({ login, handleLogOut }) => (
  <RootContainer>
    <Greeting>
      Здравствуйте,
      {' '}
      <span>{login ?? ''}</span>
    </Greeting>
    <LogOutButton type="button" onClick={handleLogOut}>
      Выйти
    </LogOutButton>
  </RootContainer>
);

export default Profile;
