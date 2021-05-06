import React from "react";

// COMPONENTS
import UmanyList from "@/components/list.component";
import PromoBox from "@/components/promoBox.component";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "@/generateTheme";

// THEME DECORATOR
const MergeThemeList = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <UmanyList {...props} />
    </ThemeProvider>
  );
};

const MergeThemePromo = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <PromoBox {...props} />
    </ThemeProvider>
  );
};

export default {
  UmanyList: MergeThemeList,
  PromoBox: MergeThemePromo,
};
