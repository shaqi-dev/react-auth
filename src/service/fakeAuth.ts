import type { AuthFormInput } from '../components/AuthForm/AuthForm';

interface FakeAuthResponseType {
  status: number,
  data: string,
}

const fakeUsersDB = [
  {
    id: 1,
    email: 'steve.jobs@example.com',
    password: 'password',
  },
];

const fakeAuth = (data: AuthFormInput): FakeAuthResponseType => {
  const { login, password } = data;
  const filtered = fakeUsersDB.filter((user) => user.email === login);
  const res = {
    status: 403,
    data: 'Пользователя с таким логином не существует',
  };

  if (filtered.length > 0) {
    if (filtered[0].password === password) {
      res.status = 202;
      res.data = 'Вошли успешно';
    } else {
      res.status = 403;
      res.data = 'Неверный пароль';
    }
  }

  return res;
};

const fakeAuthWithDelay = async (
  data: AuthFormInput,
  delay: number,
): Promise<FakeAuthResponseType> => new Promise((
  resolve,
) => {
  setTimeout(() => (resolve(fakeAuth(data))), delay);
});

export default fakeAuthWithDelay;
