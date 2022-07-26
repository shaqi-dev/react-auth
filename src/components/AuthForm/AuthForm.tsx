import { FC } from 'react';
import styled, { css } from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import fakeAuthWithDelay from '../../service/fakeAuth';

interface LabelProps {
  readonly checkbox?: boolean;
}

interface TextFieldProps {
  readonly clientError?: boolean;
}

export interface AuthFormInput {
  login: string;
  password: string;
  savePassword: boolean;
}

const Form = styled.form`
  width: 640px;
  padding-top: 212px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label<LabelProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  text-align: left;

  ${(props) => props.checkbox && css`
    flex-direction: row;
    gap: 14px;
    line-height: 2.1rem;
    cursor: pointer;
  `}
`;

const TextField = styled.input<TextFieldProps>`
  padding: 21px 20px 20px 20px;
  border: none;
  border-radius: 8px;
  background-color: #F5F5F5;
  color: #232323;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.8rem;
  transition: all 80ms;

  &:focus {
    outline: #4A67FF 1px solid;
    background-color: #f3f4ff;
  }

  ${(props) => props.clientError && css`
    outline: #E26F6F 1px solid;
    color: #E26F6F;

    &:focus {
      outline: #E26F6F 1px solid;
      background-color: #fff2f2;
    }
  `}
`;

const CheckboxInput = styled.input`
  /* remove default styles */
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #000000;
  outline: none;
  cursor: pointer;
  transition: all 80ms;

  &:hover {
    border: 1px solid #4A67FF;
  }
  
  &:checked {
    position: relative;
    border: 1px solid #4A67FF;

    &::before {
      content: '';
      position: absolute;
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 2px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #4A67FF; 
    }
  }
`;

const SubmitButton = styled.input`
  padding: 20px 0 18px 0;
  background-color: #4A67FF;
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.2rem;
  transition: background-color 80ms;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #6881ff;
  }

  &:disabled {
    background-color: #99A9FF;
    pointer-events: none;
  }
`;

const TextFieldErrorMsg = styled.span`
  margin-top: -2px;
  color: #E26F6F;
`;

const AuthForm: FC = () => {
  const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm<AuthFormInput>();
  const onSubmit: SubmitHandler<AuthFormInput> = async (inputData) => {
    const { status, data } = await fakeAuthWithDelay(inputData, 2000);
    console.log(status, data);
  };
  const requireErrorEl = <TextFieldErrorMsg>Обязательное поле</TextFieldErrorMsg>;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldsContainer>
        <Label htmlFor="auth-login-input">
          Логин
          <TextField
            type="text"
            id="auth-login-input"
            clientError={errors.login?.type === 'required'}
            {...register('login', { required: true })}
          />
          {errors.login?.type === 'required' && requireErrorEl}
        </Label>
        <Label htmlFor="auth-password-input">
          Пароль
          <TextField
            type="password"
            id="auth-password-input"
            clientError={errors.password?.type === 'required'}
            {...register('password', { required: true })}
          />
          {errors.password?.type === 'required' && requireErrorEl}
        </Label>
        <Label htmlFor="auth-save-password-checkbox" checkbox>
          <CheckboxInput
            type="checkbox"
            id="auth-save-password-checkbox"
            {...register('savePassword')}
          />
          Запомнить пароль
        </Label>
      </FieldsContainer>
      <SubmitButton type="submit" value="Войти" disabled={isSubmitting} />
    </Form>
  );
};

export default AuthForm;
