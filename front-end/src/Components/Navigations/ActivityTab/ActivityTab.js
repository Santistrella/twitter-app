import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./ActivityTab.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 650,
    color: "#00acee",
    borderRadius: 3,
    borderBottomColor: "#00acee",
    fontFamily: "Ubuntu",
    fontSize: 12,
  },
});

export const ActivityTab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
        className={classes.root}
      >
        <Tab className={classes.root} tabIndex={0} label="Tweets" />
        <Tab
          className={classes.root}
          classes="tabs"
          tabIndex={1}
          label="Respuestas"
        />
        <Tab className={classes.root} tabIndex={2} label="Multimedia" />
        <Tab className={classes.root} tabIndex={3} label="Me gusta" />
      </Tabs>
    </Paper>
  );
};
