import React from "react";

const Map = ({ MU, classes }) => {
  return (
    <MU.Grid item xs={12}>
      <MU.Paper variant="outlined" square className={classes.map}>
        <iframe
          style={{ width: "100%", height: "680px", border: "none" }}
          src="https://coronavirus.app/map?mode=infected&embed=true"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title="Corona Virus App Tracker"
        ></iframe>
      </MU.Paper>
    </MU.Grid>
  );
};

export default Map;
