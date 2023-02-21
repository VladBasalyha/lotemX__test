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
export const BodyOfTable = ({ visibleUsers }) => {
	return (
		<TableBody>
			{visibleUsers.map((user) => {
				return (
					<TableRow key={user.id}>
						<TableCell key={user.id}>{user.name}</TableCell>
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
								<MoreHorizIcon style={{ fill: "grey" }}></MoreHorizIcon>
							</Button>
						</TableCell>
					</TableRow>
				);
			})}
		</TableBody>
	);
};
