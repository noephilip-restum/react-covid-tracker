import React from "react";

const Countries = ({ MU, classes, data }) => {
  return (
    <MU.Grid container>
      <MU.Grid item xs={12}>
        <MU.Paper variant="outlined" square className={classes.countries}>
          <MU.Typography>
            Countries, areas or territories with cases
          </MU.Typography>

          <MU.List component="nav">
            {data.countries &&
              data.countries
                .filter(x => x !== 0)
                .map((country, i) => {
                  return (
                    <MU.ListItem key={i} button>
                      <MU.ListItemText primary={country.country} />
                      <MU.ListItemSecondaryAction>
                        <MU.Typography>{country.count}</MU.Typography>
                      </MU.ListItemSecondaryAction>
                    </MU.ListItem>
                  );
                })}
          </MU.List>
        </MU.Paper>
      </MU.Grid>
    </MU.Grid>
  );
};

export default Countries;
