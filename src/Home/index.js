import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
	const navigate = useNavigate();

	// States
	const [bankdata, setBankdata] = useState([]);
	const [user, setUser] = useState({});

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/sign-in");
		}
		const promise = axios.get("https://proj-mywallet.herokuapp.com/transition", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		promise.then((response) => {
			setBankdata(response.data.bankdata);
			setUser(response.data.user);
			console.log(response.data);
		});
		promise.catch((error) => {
			console.log(error);
		});
	}, []);

	return (
		<Body>
			<Top>
				<p>{`Olá, ${user.name}`}</p>
				<ion-icon
					name='exit-outline'
					onClick={() => {
						localStorage.removeItem("token");
						navigate("/sign-in");
					}}></ion-icon>
			</Top>
			<Middle>
				{bankdata.map((element) => {
					return (
						<Description type={element.type}>
							<div id='description'>
								<div>{element.day}</div>
								<div>{element.description}</div>
							</div>
							<div>{element.value}</div>
						</Description>
					);
				})}
			</Middle>
			<Floor>
				<Link to='/deposit' style={{ textDecoration: "none", color: "white" }}>
					<div>
						<ion-icon name='add-circle-outline'></ion-icon>
						<p>Nova Entrada</p>
					</div>
				</Link>
				<Link
					to='/withdrawn'
					style={{ textDecoration: "none", color: "white" }}>
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
	flex-direction: column;
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
const Description = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px;
	#description {
		display: flex;
		div:first-child {
			ont-family: "Raleway";
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;
			margin-right: 10px;

			color: #c6c6c6;
		}
		div:last-child {
			font-family: "Raleway";
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;

			color: #000000;
		}
	}
	div {
		font-family: "Raleway";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		text-align: right;

		color: ${(props) => (props.type === "deposit" ? "#03AC00" : "#C70000")};
	}
`;
