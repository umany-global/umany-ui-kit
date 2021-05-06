export default {
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "20px",
        margin: "5px",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#61ccdb",
      },
    },
    MuiInputLabel: {
      root: {
        margin: "10px",
      },
    },
  },
  palette: {
    text: {
      primary: "#808080",
    },
    primary: {
      main: "#371880",
    },
    secondary: {
      main: "#fbac03",
      contrastText: "#fff",
    },
    companyBlue: {
      main: "#65CFE9",
      contrastText: "#fff",
    },
    companyDefault: {
      main: "#808080",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  spacing: [0, 4, 8, 16, 32, 64],
};
