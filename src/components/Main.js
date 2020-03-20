import React from "react";

//CHARTS
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

//MATERIAL UI CORE
import * as MU from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//COMPONENTS
import TempMap from "../images/temp.png";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "5px",
    textAlign: "center"
  },
  count: {
    padding: theme.spacing(2),
    margin: "5px",
    textAlign: "center",
    height: "70px"
  },
  countries: {
    padding: theme.spacing(2),
    margin: "5px",
    textAlign: "center",
    height: "650px",
    overflow: "auto"
  },
  map: {
    padding: theme.spacing(2),
    margin: "5px",
    textAlign: "center",
    height: "650px",
    backgroundImage: `url(${TempMap})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  chart: {
    padding: theme.spacing(2),
    margin: "5px",
    textAlign: "center",
    height: "240px"
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MU.Grid container>
        <MU.Grid item xs={3}>
          <MU.Grid container>
            <MU.Grid item xs={12}>
              <MU.Paper variant="outlined" square className={classes.count}>
                <MU.Typography>Confirmed Cases</MU.Typography>
                <MU.Typography variant="h3" component="h2">
                  00000000
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
                  00000000
                </MU.Typography>
              </MU.Paper>
            </MU.Grid>
            <MU.Grid item xs={6} sm={12}>
              <MU.Paper variant="outlined" square className={classes.count}>
                <MU.Typography>Recovered</MU.Typography>
                <MU.Typography variant="h3" component="h2">
                  00000000
                </MU.Typography>
              </MU.Paper>
            </MU.Grid>
            <MU.Grid item xs={12}>
              <MU.Paper variant="outlined" square className={classes.chart}>
                <ResponsiveContainer>
                  <LineChart
                    width={300}
                    height={150}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      strokeDasharray="5 5"
                    />
                    <Line
                      type="monotone"
                      dataKey="uv"
                      stroke="#82ca9d"
                      strokeDasharray="3 4 5 2"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </MU.Paper>
            </MU.Grid>
            <MU.Grid item xs={12}>
              <MU.Paper variant="outlined" square className={classes.paper}>
                <MU.Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Last Updated: 2020-03-20T01:43:03.000Z
                </MU.Typography>
              </MU.Paper>
            </MU.Grid>
          </MU.Grid>
        </MU.Grid>
        <MU.Grid item xs={6}>
          <MU.Grid container>
            <MU.Grid item xs={12}>
              <MU.Paper
                variant="outlined"
                square
                className={classes.map}
              ></MU.Paper>
            </MU.Grid>
          </MU.Grid>
        </MU.Grid>
        <MU.Grid item xs={3}>
          <MU.Grid container>
            <MU.Grid item xs={12}>
              <MU.Paper variant="outlined" square className={classes.countries}>
                <MU.Typography>
                  Countries, areas or territories with cases
                </MU.Typography>
                <MU.List component="nav">
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                  <MU.ListItem button>
                    <MU.ListItemText primary="China" />
                    <MU.ListItemSecondaryAction>
                      000000
                    </MU.ListItemSecondaryAction>
                  </MU.ListItem>
                </MU.List>
              </MU.Paper>
            </MU.Grid>
          </MU.Grid>
        </MU.Grid>
      </MU.Grid>
    </div>
  );
}
