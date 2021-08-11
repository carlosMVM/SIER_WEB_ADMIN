import { lighten } from "@material-ui/core";
import { Colors, Sizes } from "../../constants/variablesStyles";

const appBarStyles = () => ({
	root: {
		width: `calc(100% - ${Sizes.drawerWidth}px)`,
		marginLeft: Sizes.drawerWidth
	},
	paper: {
		backgroundColor: Colors.white,
		color: Colors.black
	},
	title: {
		marginLeft: "auto"
	}
});

const accountAppBarStyles = () => ({
	root: {
		width: "100%"
	},
	paper: {
		backgroundColor: Colors.white,
		color: Colors.black
	}
});

const drawerStyles = theme => ({
	root: {
		width: Sizes.drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: Sizes.drawerWidth,
	},
	drawerHeader: {
		paddingBottom: 10.5,
		margin: "0 auto",
		"& img": {
			width: 163
		}
	},
	nested: {
		paddingLeft: theme.spacing(4),
	}
});

const listMenuStyles = theme => ({
	nested: {
		paddingLeft: theme.spacing(4),
	}
});

const loadingStyle = () => ({
	root: {
		position: "fixed",
		backgroundColor: "rgba(255,255,255,0.7)",
		width: "100%",
		top: "50%",
		left: "50%",
		zIndex: 99999
	},
	linear: {
		position: "fixed",
		top: 0,
		width: "100%",
		zIndex: 99999,
		backgroundColor: lighten(Colors.orange2, 0.5),
		"& .MuiLinearProgress-barColorPrimary": {
			backgroundColor: lighten(Colors.green1, 0.5)
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
	appBarStyles as AppBarStyles,
	drawerStyles as DrawerStyles,
	listMenuStyles as ListMenuStyles,
	loadingStyle as LoadingStyles,
	searchStyles as SearchStyles,
	accountAppBarStyles as AccountAppBarStyles
};
