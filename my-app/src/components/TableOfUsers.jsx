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
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

import users from "../users.json";
import { useState } from "react";

export const TableOfUsers = (e) => {
	const [searchInput, setSearchValue] = useState("");

	const getVisibleUsers = () => {
		return users.filter((user) => user.name.includes(searchInput));
	};
	const onSearchInput = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<>
			<Container>
				<Container style={{ margin: "20px" }}>
					<span>Users</span> <h1>{users.length}</h1>
					<TextField onChange={onSearchInput} value={searchInput}></TextField>
				</Container>
				<TableContainer>
					<Table>
						<TableHead style={{ backgroundColor: "grey" }}>
							<TableRow>
								<TableCell>Username</TableCell>
								<TableCell>View</TableCell>
								<TableCell>Execute</TableCell>
								<TableCell>Modify</TableCell>
								<TableCell>Delete</TableCell>
								<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{getVisibleUsers().map((user) => {
								return (
									<TableRow key={user.id}>
										<TableCell>{user.name}</TableCell>
										<TableCell>
											<Checkbox></Checkbox>
										</TableCell>
										<TableCell>
											<Checkbox></Checkbox>
										</TableCell>
										<TableCell>
											<Checkbox></Checkbox>
										</TableCell>
										<TableCell>
											<Checkbox></Checkbox>
										</TableCell>
										<TableCell>
											<Button>
												<MoreHorizIcon color="black"></MoreHorizIcon>
											</Button>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
					<Button
						style={{
							background: "black",
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
