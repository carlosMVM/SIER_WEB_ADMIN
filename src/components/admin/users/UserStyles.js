import { Colors } from "../../../constants/variablesStyles";

const tabsStyles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	name: {
		paddingLeft: 10,
		paddingTop: 8
	},
	states: {
		paddingLeft: 100,
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
		},
		"& .active": {
			"&.primary": {
				color: Colors.green1,
			},
			"&.secundary": {
				color: Colors.orange1,
			}
		},
		"& .verify": {
			"&.primary": {
				color: Colors.green2,
			},
			"&.secundary": {
				color: Colors.orange2,
			}
		},
		"& .operator": {
			"&.primary": {
				color: Colors.green2,
			},
			"&.secundary": {
				color: Colors.orange2,
			}
		}
	}
});

const searchStyles = theme => ({
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: 400,
		marginBottom: 10
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
});

export {
	tabsStyles as TabsStyles,
	searchStyles as SearchStyles
};
