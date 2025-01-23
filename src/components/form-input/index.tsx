import React, { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  title?: string;
  label: string;
}

const FormInput = ({ id, type = 'text', placeholder, title, label, pattern, ...rest }: FormInputProps): JSX.Element => (
  <>
    <label htmlFor={id} className='visually-hidden'>{label}</label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      pattern={pattern}
      title={title}
      required
      {...rest}
    />
  </>
);

export default FormInput;
