import React from 'react';
import LoginFooter from './LoginFooter';
import LoginHeader from './LoginHeader';
import LoginPartOfLoginComponent from './LoginPartOfLoginComponent';

const LoginComponent = () => {
    return (
        <div style={{height: '100vh', overflow: 'hidden', backgroundColor: '#303841'}}>
           <LoginHeader/>
           <LoginPartOfLoginComponent/>
           <LoginFooter/>
        </div>
    );
};

export default LoginComponent;