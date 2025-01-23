import React, { useState } from 'react';
import LoginForm from '../components/login-form';
import OverlayPanel from '../components/overlay-panel';
import { FormType } from '../types';
import '../index.css';

const App: React.FC = () => {
  const [formType, setFormType] = useState(FormType.SIGN_IN);
  const handleSignInClick = () => setFormType(FormType.SIGN_IN);
  const handleSignUpClick = () => setFormType(FormType.SIGN_UP);

  return (
    <main>
      <div
        className={`container ${FormType.SIGN_UP === formType ? 'right-panel-active' : ''}`}
        id='container'>
        <LoginForm
          title='Create Account'
          className='sign-up-container'
          formType={FormType.SIGN_UP}
          buttonText='Sign Up'
          hint='or use your email for registration'
        />
        <LoginForm
          title='Sign in'
          className='sign-in-container'
          formType={FormType.SIGN_IN}
          buttonText='Sign In'
          hint='or use your account'
        />
        <div className='overlay-container'>
          <div className='overlay'>
            <OverlayPanel
              className='overlay-left'
              title='Welcome Back!'
              description='To keep connected with us please login with your personal info'
              buttonId='signIn'
              onClick={handleSignInClick}
              buttonText='Sign in'
            />
            <OverlayPanel
              className='overlay-right'
              title='Hello, Friend!'
              description='Enter your personal details and start journey with us'
              buttonId='signUp'
              onClick={handleSignUpClick}
              buttonText='Sign Up'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
