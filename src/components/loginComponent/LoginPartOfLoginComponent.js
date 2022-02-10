import React from 'react';
import { useForm } from 'react-hook-form';



const LoginPartOfLoginComponent = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="Try-flex">
                <div className="Try-flex">
                    <h3 className="Font-color">Sign in</h3>
                    <p className="Font-color">Sign in to continue to SayHi</p>
                </div>
            </div>
           

            <div>
                <form className="Try-flex" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("username")} placeholder="user name"/>
                    <input type="password" {...register("password")} placeholder="password"/>
                    <input type="submit" />
                </form>
            </div>
            
        </div>
    );
};

export default LoginPartOfLoginComponent;