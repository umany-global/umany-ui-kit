import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import Configuration from "umany/config";

// Umany Flavor Components
import Components from "@/components";

let theme = createMuiTheme(Configuration);
theme = responsiveFontSizes(theme);
export { theme, Components };
