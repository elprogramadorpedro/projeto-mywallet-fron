import styled from "styled-components";

export default function Deposit() {
	return (
		<Body>
			<p>Nova entrada</p>
			<form>
				<input type='text' placeholder='Valor' />
				<input type='text' placeholder='Descrição' />
				<button>Salvar entrada</button>
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
