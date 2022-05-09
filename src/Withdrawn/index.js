import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Withdrawn() {
	const type = "withdrawn";
	const navigate = useNavigate();

	//States
	const [value, setValue] = useState(0);
	const [description, setDescription] = useState("");
	return (
		<Body>
			<p>Nova saída</p>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const data = {
						value: value,
						description: description,
						type: type,
					};
					console.log(data);
					const promise = axios.post("https://proj-mywallet.herokuapp.com/transition", data, {
						headers: {
							Authorization: `Bearer ${localStorage.getItem("token")}`,
						},
					});
					promise.then(() => navigate("/"));
					promise.catch(() => console.log("probleminha"));
				}}>
				<input
					type='number'
					placeholder='Valor'
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
				<input
					type='text'
					placeholder='Descrição'
					onChange={(e) => {
						setDescription(e.target.value);
					}}
				/>
				<button>Salvar Saída</button>
			</form>
		</Body>
	);
}

const Body = styled.div`
	display: flex;
	flex-direction: column;
	p:first-child {
		font-family: "Raleway";
		font-style: normal;
		font-weight: 700;
		font-size: 26px;
		line-height: 31px;

		color: #ffffff;
		margin-top: 15px;
		margin-bottom: 15px;
	}
	form {
		display: flex;
		flex-direction: column;
		input {
			margin-top: 10px;
			margin-bottom: 10px;
			width: 340px;
			height: 60px;
			border-radius: 10px;
			border: none;

			padding: 15px;
			font-family: "Raleway";
			font-style: normal;
			font-weight: 400;
			font-size: 20px;
			line-height: 23px;

			color: #000000;
		}
		button {
			height: 50px;
			background: #a328d6;
			border-radius: 10px;
			border: none;

			font-family: "Raleway";
			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 23px;

			color: #ffffff;
		}
	}
`;
