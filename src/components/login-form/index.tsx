import React from 'react';
import FormInput from '../form-input';
import Socials from '../socials';
import { FormType } from '../../types';

type LoginFormProps = {
  className?: string;
  title: string;
  hint: string;
  buttonText: string;
  formType: typeof FormType[keyof typeof FormType];
}

const PASSWORD_PATTERN = '^.*(?=.*[a-zA-Z])(?=.*\d).*$';

const LoginForm = ({
  className = 'sign-up-container',
  title,
  hint,
  buttonText,
  formType
}: LoginFormProps): JSX.Element => (
  <div className={`form-container ${className}`}>
    <form
      action='#'
      method='post'
    >
      <h1>{title}</h1>
      <Socials />
      <span>{hint}</span>
      {formType === FormType.SIGN_UP && (
        <FormInput
          type='text'
          placeholder='Name'
          id={`${formType}-name`}
          label='Name'
        />
      )}
      <FormInput
        type='email'
        placeholder='Email'
        id={`${formType}-email`}
        label='Email'
      />
      <FormInput
        type='password'
        placeholder='Password'
        id={`${formType}-password`}
        label='Password'
        title='Пароль должен содержать как минимум 1 букву и 1 цифру'
        pattern={PASSWORD_PATTERN}
      />
      <button className='main'>{buttonText}</button>
    </form>
  </div>
);

export default LoginForm;
