import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import Configuration from "umany/config";

let theme = createMuiTheme(Configuration);
theme = responsiveFontSizes(theme);
export { theme };
