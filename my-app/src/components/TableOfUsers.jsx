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

export const TableOfUsers = (e) => {
	const [usersList, setUsersList] = useState([]);
	const [searchInput, setSearchValue] = useState("");
	const [isCheckboxChecked, setCheckboxValue] = useState(false);

	const getVisibleUsers = () => {
		return usersList.filter((user) => user.name.includes(searchInput));
	};
	const onSearchInput = (e) => {
		setSearchValue(e.target.value);
	};
	const onCheckboxChange = (e) =>
		usersList.forEach((user) => {
			if (e.target.name === Number(user.id)) {
			}
			console.log(e.target);
		});
	useEffect(() => {
		setUsersList(users);
	}, []);
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
								{tablecell.map((param) => (
									<TableCell key={param}>{param}</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{getVisibleUsers().map((user) => {
								return (
									<TableRow key={user.id}>
										<TableCell key={user.id}>{user.name}</TableCell>
										<TableCell>
											<Checkbox
												checked={isCheckboxChecked}
												onClick={onCheckboxChange}
											></Checkbox>
										</TableCell>
										<TableCell>
											<Checkbox checked={isCheckboxChecked}></Checkbox>
										</TableCell>
										<TableCell>
											<Checkbox checked={isCheckboxChecked}></Checkbox>
										</TableCell>
										<TableCell>
											<Checkbox checked={isCheckboxChecked}></Checkbox>
										</TableCell>
										<TableCell>
											<Button data-id={`${user.id}`}>
												<MoreHorizIcon></MoreHorizIcon>
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
