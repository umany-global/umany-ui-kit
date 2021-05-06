import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import moment from "moment";

// ICONS
import { RotateRight } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    listStyle: "none",
    padding: 0,
    "& > li": {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    "& li ol": {
      minWidth: "100px",
      fontSize: "15px",
      fontWeight: "bold",
      textAlign: "center",
      padding: 0,
    },
    "& ul": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      padding: 0,
    },
    "& ul li": {
      cursor: "pointer",
      marginBottom: "10px",
      display: "flex",
      padding: "10px",
      justifyContent: "space-between",
      border: "1px solid #cccccc",
      borderRadius: "50px",
      boxShadow: "-3px 3px 2px #cccccc",
    },
    "& ul li:hover, & ul li.active": {
      backgroundColor: theme.palette.companyBlue.main,
      color: theme.palette.companyBlue.contrastText,
    },
    "& ul li label": {
      minWidth: "100px",
    },
    "& ul li label:last-child": {
      borderLeft: "1px solid gray",
    },
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const UmanyList = ({ items, onInput }) => {
  const classes = useStyles();
  const [current, setCurrent] = React.useState({});
  const handleCurrent = (item) => {
    setCurrent(item);
    if (onInput) onInput(item);
  };
  const today = moment().format("ll LTS");
  return (
    <Grid container className={classes.root}>
      <Grid container alignItems="center" justify="center" spacing={1}>
        <RotateRight style={{ marginLeft: "-29px", marginRight: "10px" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong>Ultima Actualizacion</strong>
          <label>{today}</label>
        </div>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ul className={classes.list}>
            <li>
              <ol>Cantidad</ol>
              <ol>Producto</ol>
              <ol>Descuento</ol>
            </li>
            <ul>
              {items.length
                ? items.map((item, ind) => {
                    return (
                      <li
                        onClick={() => {
                          handleCurrent(item);
                        }}
                        className={`${current == item ? "active" : ""}`}
                        key={`item-${ind}`}
                      >
                        <label>{item.amount}</label>
                        <label>{item.product}</label>
                        <label>{item.discount}</label>
                      </li>
                    );
                  })
                : null}
            </ul>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

UmanyList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onInput: PropTypes.func,
};

export default UmanyList;
