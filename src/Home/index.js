import styled from "styled-components";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	useEffect(() => {}, []);

	return (
		<Body>
			<Top>
				<p>Olá, Fulano</p>
				<ion-icon name='exit-outline'></ion-icon>
			</Top>
			<Middle>Não há registros de entrada ou saída</Middle>
			<Floor>
				<Link to='/deposit' style={{ textDecoration: 'none', color: 'white' }}>
					<div>
						<ion-icon name='add-circle-outline'></ion-icon>
						<p>Nova Entrada</p>
					</div>
				</Link>
				<Link to='/withdrawn' style={{ textDecoration: 'none', color: 'white' }}>
					<div>
						<ion-icon name='remove-circle-outline'></ion-icon>
						<p>Nova Saída</p>
					</div>
				</Link>
			</Floor>
		</Body>
	);
}

const Body = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Top = styled.div`
	display: flex;
	width: 330px;
	margin: 20px;
	justify-content: space-between;

	font-family: "Raleway";
	font-style: normal;
	font-weight: 700;
	font-size: 26px;
	line-height: 31px;

	color: #ffffff;
	ion-icon {
		font-size: 35px;
	}
	ion-icon:hover {
		cursor: pointer;
	}
`;
const Middle = styled.div`
	display: flex;

	width: 330px;
	height: 650px;
	border-radius: 10px;
	background-color: white;

	font-family: "Raleway";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 23px;
	text-align: center;

	color: #868686;
`;
const Floor = styled.div`
	display: flex;
	justify-content: space-between;
	width: 330px;
	margin-top: 15px;

	font-family: "Raleway";
	font-style: normal;
	font-weight: 700;
	font-size: 17px;
	line-height: 20px;
	color: #ffffff;

	div {
		display: flex;
		flex-direction: column;
		width: 150px;
		height: 114px;
		padding: 10px;
		justify-content: space-between;

		border-radius: 10px;
		background: #a328d6;
		ion-icon {
			font-size: 35px;
		}
	}
	div:hover {
		cursor: pointer;
	}
`;
