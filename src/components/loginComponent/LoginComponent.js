import React from 'react';
import LoginFooter from './LoginFooter';
import LoginHeader from './LoginHeader';
import LoginPartOfLoginComponent from './LoginPartOfLoginComponent';
import './Login.css';

const LoginComponent = () => {
    return (
        <div style={{height: '100vh', overflow: 'hidden', backgroundColor: '#303841'}} >
            <div className="Login-div">
                <div>
                    <LoginHeader/>
                    <LoginPartOfLoginComponent/>
                    <LoginFooter/>
                </div>
            </div>
        </div>
       
    );
};

export default LoginComponent;