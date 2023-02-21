import {
	TableContainer,
	Table,
	Container,
	Button,
	TextField,
} from "@mui/material";

import { useEffect, useState } from "react";
import { HeaderOfTable } from "./HeaderOfTable";
import { BodyOfTable } from "./BodyOfTable";

// import data for cells of table and info about users
import tablecell from "../tablecell.json";
import users from "../users.json";

export const TableOfUsers = (e) => {
	const [usersList, setUsersList] = useState([]);
	const [searchInput, setSearchValue] = useState("");

	// on mounting of our element we set list of user
	// which is imported from json file
	useEffect(() => {
		setUsersList(users);
	}, []);

	// get value for searching users by filtering of state where
	// we keep list of our users
	const getVisibleUsers = usersList.filter((user) =>
		user.name.includes(searchInput)
	);

	// we have contolled element, so we set value
	// which depends on what we write in input
	const onSearchInput = (e) => {
		const { value } = e.target;
		setSearchValue(value);
	};

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
					<h2>
						Users <span>{users.length}</span>{" "}
					</h2>
					<TextField onChange={onSearchInput} value={searchInput}></TextField>
				</Container>
				<TableContainer>
					<Table>
						{/* main elements of our table, it`s complected from
                different components  */}
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
