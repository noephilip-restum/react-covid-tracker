import React, { useState } from "react";

const Countries = ({ MU, classes, data, Icons }) => {
  const [search, setSearch] = useState("");
  return (
    <MU.Grid container>
      <MU.Grid item xs={12}>
        <MU.Paper variant="outlined" square className={classes.countries}>
          {/* <MU.Typography>
            Countries, areas or territories with cases
          </MU.Typography> */}
          <MU.TextField
            label="Filter"
            variant="outlined"
            fullWidth
            size="small"
            onChange={e => {
              setSearch(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <MU.InputAdornment position="start">
                  <Icons.FilterList />
                </MU.InputAdornment>
              )
            }}
          />
          <MU.List component="nav">
            {data.countries &&
              data.countries
                .filter(x => x !== 0)
                .sort((a, b) => b.count - a.count)
                .filter(x => {
                  const regex = new RegExp(search, "gi");
                  return x.country.match(regex);
                })
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
