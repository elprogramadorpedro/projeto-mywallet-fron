import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../Login";
import SignUp from "../SignUp";
import Home from "../Home";
import Deposit from "../Deposit";
import Withdrawn from "../Withdrawn";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/sign-in' element={<Login />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/deposit' element={<Deposit />} />
				<Route path='/withdrawn' element={<Withdrawn />} />
			</Routes>
		</BrowserRouter>
	);
}
