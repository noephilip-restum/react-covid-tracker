import React, { useContext } from "react";
import { Context } from "../../ContextConfig";

//MATERIAL UI CORE
import * as MU from "@material-ui/core";

//COMPONENTS
import GlobalDetails from "./GlobalDetails";
import Map from "./Map";
import Countries from "./Countries";

//STYLES
import useStyles from "./Styles";

const Main = () => {
  const classes = useStyles();
  const { data } = useContext(Context);

  return (
    <div className={classes.root}>
      <MU.Grid container>
        <MU.Grid item xs={3}>
          <GlobalDetails MU={MU} classes={classes} data={data} />
        </MU.Grid>
        <MU.Grid item xs={6}>
          <MU.Grid container>
            <Map MU={MU} classes={classes} />
          </MU.Grid>
        </MU.Grid>
        <MU.Grid item xs={3}>
          <Countries MU={MU} classes={classes} data={data} />
        </MU.Grid>
      </MU.Grid>
    </div>
  );
};

export default Main;
