import { TableHead, TableRow, TableCell } from "@mui/material";

export const HeaderOfTable = ({ tableheader }) => {
	return (
		<>
			<TableHead style={{ backgroundColor: "grey" }}>
				<TableRow>
					{tableheader.map((param) => (
						<TableCell key={param}>{param}</TableCell>
					))}
					<TableCell></TableCell>
				</TableRow>
			</TableHead>
		</>
	);
};
