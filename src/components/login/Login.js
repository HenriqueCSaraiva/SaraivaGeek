import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();


    }

    const register = e => {
        e.preventDefault();




    }

    return (
        <section className="login">
            <div className="login__bg" />

            <Link to="/">
                <img className="login__companyIcon" src="https://api.freelogodesign.org/files/732524b4b63144f991e6f05f649535b9/thumb/logo_200x200.png?v=637687957030000000" />
            </Link>

            <div className="login__container">
                <h1 className="login__containerTitle">Fazer Login</h1>

                <form>
                    <h5 className="login__containerType">E-mail</h5>
                    <input type="text" value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5 className="login__containerType">Senha</h5>
                    <input type="password" value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button onClick={signIn}
                        type="submit"
                        className="login__sighInButton">Fazer Login</button>

                    <p className="login__containerText">
                        Ao fazer login você concorda com os Termos e Condições de nossa empresa.
                    </p>

                    <button className="login__registerButton">Cadastre-se</button>
                </form>
            </div>

            <div className="login__logos">
                <img
                    className="login__logo"
                    src="https://cdn-icons-png.flaticon.com/512/588/588299.png"
                    alt=""
                />
                <img
                    className="login__logo"
                    src="https://cdn-icons-png.flaticon.com/512/126/126731.png"
                    alt=""
                />
                <img
                    onClick={register}
                    className="login__logo"
                    src="https://cdn-icons-png.flaticon.com/512/871/871380.png"
                    alt=""
                />
            </div>

        </section>
    )
}

export default Login
