import { Container } from "@mui/material";
import "./App.css";
import { TableOfUsers } from "./components/TableOfUsers";

function App() {
	return (
		<>
			<Container>
				<h1>Permissions</h1>
				<p>Create and customise rules for your interface</p>
				<TableOfUsers></TableOfUsers>
			</Container>
		</>
	);
}

export default App;
