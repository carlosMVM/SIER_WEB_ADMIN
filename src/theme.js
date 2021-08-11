import { createMuiTheme } from "@material-ui/core";
import { Colors } from "./constants/variablesStyles";

const theme = createMuiTheme({
	palette: {
		background: {
			default: Colors.white
		}
	},
	MuiTextField: {
		root: {
			borderRadius: 5,
			borderTopLeftRadius: 5,
			borderTopRightRadius: 5,
			"&.error": {
				"& .MuiInputBase-root": {
					borderRadius: 5
				}
			},
		}
	}
});

export default theme;
