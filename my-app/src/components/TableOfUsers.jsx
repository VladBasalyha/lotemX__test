import {
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	Container,
	TableBody,
	Checkbox,
	Button,
	TextField,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import tablecell from "../tablecell.json";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

import users from "../users.json";
import { useEffect, useState } from "react";
import { HeaderOfTable } from "./HeaderOfTable";
import { BodyOfTable } from "./BodyOfTable";

export const TableOfUsers = (e) => {
	const [usersList, setUsersList] = useState([]);
	const [searchInput, setSearchValue] = useState("");
	const [isCheckboxChecked, setCheckboxValue] = useState(false);

	const getVisibleUsers = usersList.filter((user) =>
		user.name.includes(searchInput)
	);

	const onSearchInput = (e) => {
		setSearchValue(e.target.value);
	};

	useEffect(() => {
		setUsersList(users);
	}, []);
	return (
		<>
			<Container>
				<Container
					style={{
						margin: "20px",
						gap: "20px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						alignContent: "center",
						flexDirection: "row",
						flexWrap: "wrap",
					}}
				>
					<h1>
						Users <span>{users.length}</span>{" "}
					</h1>
					<TextField onChange={onSearchInput} value={searchInput}></TextField>
				</Container>
				<TableContainer>
					{/* main elements of our table  */}
					<Table>
						<HeaderOfTable tableheader={tablecell}></HeaderOfTable>
						<BodyOfTable visibleUsers={getVisibleUsers}></BodyOfTable>
					</Table>
					<Button
						style={{
							background: "black",
							margin: "20px",
							paddingRight: "40px",
							paddingLeft: "40px",
						}}
						color="primary"
						variant="contained"
					>
						Save
					</Button>
				</TableContainer>
			</Container>
		</>
	);
};
