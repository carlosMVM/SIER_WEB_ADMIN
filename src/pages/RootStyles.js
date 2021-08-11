import { Sizes } from "../constants/variablesStyles";

const rootStyles = () => ({
	root: {
	},
	content: {
		width: `calc(100% - ${Sizes.drawerWidth}px)`,
		height: "100vh",
		marginLeft: Sizes.drawerWidth,
		padding: 10
	}
});

export {
	// eslint-disable-next-line import/prefer-default-export
	rootStyles as RootStyles
};
