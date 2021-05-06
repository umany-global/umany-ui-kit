import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import moment from "moment";

const RoundedLogo = withStyles((theme) => ({
  root: {
    padding: 60,
    margin: 20,
    width: 50,
    height: 80,
  },
}))(Avatar);

const useStyles = makeStyles((theme) => {
  console.log("theme", theme);
  return {
    primaryButton: {
      backgroundColor: theme.palette.companyBlue.main,
      color: theme.palette.companyBlue.contrastText,
    },
    primaryDefault: {
      backgroundColor: theme.palette.companyDefault.main,
      color: theme.palette.companyDefault.contrastText,
    },
    subtitle: {
      color: theme.palette.companyBlue.main,
      fontSize: "20px",
    },
  };
});

const PromoBox = ({ item, confirmation }) => {
  const classes = useStyles();
  const today = moment().format("ll LTS");
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <Grid container direction="column" justify="center">
        <Grid container justify="center">
          <Grid item>
            <RoundedLogo src={item.business} children="Logo Empresa" />
          </Grid>
          <Grid item>
            <RoundedLogo src={item.foundation} children="Logo Fundacion" />
          </Grid>
        </Grid>
        <Grid item>
          <Typography className={classes.subtitle}>
            Con tu compra <strong>{item.product}</strong>
          </Typography>
          <Typography className={classes.subtitle}>
            {item.discount}% de descuento
          </Typography>
        </Grid>
        <Grid item style={{ margin: "20px" }}>
          <Typography variant="subtitle1">Tu cliente paga</Typography>
          <Typography variant="subtitle1">${item.amount}</Typography>item
        </Grid>
        <Grid item style={{ margin: "20px" }}>
          <Typography variant="subtitle1">Y eligio destinar</Typography>
          <Typography variant="subtitle1">
            $17 a Utiles y transporte escolar, guardapolvos y conexion a
            internet
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: "3em" }}>
          <Typography variant="subtitle1">
            <strong>¿Confirmar Canje?</strong>
          </Typography>
          <Grid container justify="center" style={{ padding: "20px" }}>
            <Button
              variant="contained"
              className={classes.primaryDefault}
              onClick={() => {
                confirmation(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              className={classes.primaryButton}
              onClick={() => {
                confirmation(item);
              }}
            >
              Confirmar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

PromoBox.propTypes = {
  item: PropTypes.object,
  confirmation: PropTypes.func.isRequired,
};

export default PromoBox;
