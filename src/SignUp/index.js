import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
	let navigate = useNavigate();

	//States
	const [campoErrado, setCampoErrado] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Body>
			<p>MyWallet</p>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const login = {
						name,
						email,
						password,
					};
					const promise = axios.post("http://192.168.0.4:5000/sign-up", login);
					promise.then((response) => {
						localStorage.setItem("token", response.data);
						navigate("/login");
					});
					promise.catch((error) => {
						setCampoErrado(!campoErrado);
					});
				}}>
				<input
					type='text'
					placeholder='Nome'
					onChange={(e) => {
						if (campoErrado) setCampoErrado(!campoErrado);
						setName(e.target.value);
					}}
				/>
				<input
					type='text'
					placeholder='E-mail'
					onChange={(e) => {
						if (campoErrado) setCampoErrado(!campoErrado);
						setEmail(e.target.value);
					}}
				/>
				<input
					type='password'
					placeholder='Senha'
					onChange={(e) => {
						if (campoErrado) setCampoErrado(!campoErrado);
						setPassword(e.target.value);
					}}
				/>
				<input type='password' placeholder='Confirmar a senha' />
				<button>Entrar</button>
				{campoErrado ? <p>Usuario ou senha incorretos!</p> : <></>}
			</form>
			<Link to='/login'>
				<a>Já tem uma conta? Entre agora!</a>
			</Link>
		</Body>
	);
}

const Body = styled.main`
	position: absolute;
	top: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	p:first-child {
		font-family: "Saira Stencil One";
		font-style: normal;
		font-weight: 400;
		font-size: 32px;
		line-height: 50px;

		color: #ffffff;
	}
	form {
		display: flex;
		flex-direction: column;
		margin-bottom: 60px;
		input {
			width: 320px;
			height: 50px;
			padding: 10px;
			margin-top: 10px;
			margin-bottom: 10px;
			border: none;
			border-radius: 5px;

			font-family: "Raleway";
			font-style: normal;
			font-weight: 400;
			font-size: 20px;
			line-height: 23px;

			color: #000000;
		}
		button {
			text-align: center;
			width: 100%;
			height: 50px;
			background: #a328d6;
			border: none;
			border-radius: 5px;

			font-family: "Raleway";
			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 23px;

			color: #ffffff;
		}
	}
	a {
		font-family: "Raleway";
		font-style: normal;
		font-weight: 700;
		font-size: 15px;
		line-height: 18px;

		color: #ffffff;
	}
	a:hover {
		cursor: pointer;
	}
`;
