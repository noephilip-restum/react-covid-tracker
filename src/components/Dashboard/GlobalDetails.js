import React from "react";

const GlobalDetails = ({ MU, classes, data }) => {
  var nf = new Intl.NumberFormat();

  return (
    <MU.Grid container>
      <MU.Grid item xs={12}>
        <MU.Paper variant="outlined" square className={classes.count}>
          <MU.Typography>Confirmed Cases</MU.Typography>
          <MU.Typography variant="h3" component="h2">
            {nf.format(data.confirmed)}
          </MU.Typography>
        </MU.Paper>
      </MU.Grid>
      <MU.Grid item xs={6} sm={12}>
        <MU.Paper variant="outlined" square className={classes.count}>
          <MU.Typography>Deaths</MU.Typography>
          <MU.Typography
            variant="h3"
            component="h2"
            style={{ fontWeight: "5" }}
          >
            {nf.format(data.deaths)}
          </MU.Typography>
        </MU.Paper>
      </MU.Grid>
      <MU.Grid item xs={6} sm={12}>
        <MU.Paper variant="outlined" square className={classes.count}>
          <MU.Typography>Recovered</MU.Typography>
          <MU.Typography variant="h3" component="h2">
            {nf.format(data.recovered)}
          </MU.Typography>
        </MU.Paper>
      </MU.Grid>
      <MU.Grid item xs={12}>
        <MU.Paper variant="outlined" square className={classes.chart}>
          <iframe
            style={{ width: "100%", height: "240px", border: "none" }}
            src="https://coronavirus.app/chart/5pwmh7aSdGRKqRbnuyc0/infected?embed=true"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title="Chart"
          ></iframe>
        </MU.Paper>
      </MU.Grid>
      <MU.Grid item xs={12}>
        <MU.Paper variant="outlined" square className={classes.paper}>
          <MU.Typography variant="body2" color="textSecondary" component="p">
            Last Updated: {data.lastUpdate}
          </MU.Typography>
        </MU.Paper>
      </MU.Grid>
    </MU.Grid>
  );
};

export default GlobalDetails;
