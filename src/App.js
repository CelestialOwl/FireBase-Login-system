import "./App.css";
import Card from "./components/card";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get("https://reqres.in/api/users?page=2");
			// console.log(res);
			setUsers(res.data.data);
		};
		fetchData();
	}, []);
	return (
		<div className='App'>
			{users.map((user, i) => (
				<Card key={user.id}>
					<Card.Image src={user.avatar}></Card.Image>
					<Card.body>
						<Card.Title>
							{user.first_name} {user.last_name}
						</Card.Title>
						<Card.Text>{user.email}</Card.Text>
						<Card.Button>Details</Card.Button>
					</Card.body>
				</Card>
			))}
		</div>
	);
}

export default App;
