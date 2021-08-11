const businessListStyles = () => ({
	root: {

	},
	addNew: {
		paddingTop: 10,
		display: "flex",
		justifyContent: "flex-end"
	}
});

const businessDataStyles = () => ({
	root: {
		padding: 10
	},
	map: {
		height: "40vh",
		width: "100%"
	},
	link: {
		cursor: "pointer",
		"&:hover": {
			color: "#F09315 !important"
		}
	},
	addNewLocation: {

	}
});

export {
	businessListStyles as BusinessListStyles,
	businessDataStyles as BusinessDataStyles
};
