import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./ActivityTab.css";
import { Tweets } from "../../Tweet/Tweets/Tweets";

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

  const [tweet, setTweet] = useState();
  useEffect(() => {
    fetch("http://localhost/api/tweet")
      .then((response) => response.json())
      .then((usersFromResponse) => {
        setTweet(usersFromResponse);
      });
  }, []);

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
        <Tab className={classes.root} tabIndex={1} label="Respuestas" />
        <Tab className={classes.root} tabIndex={2} label="Multimedia" />
        <Tab className={classes.root} tabIndex={3} label="Me gusta" />
      </Tabs>
      {value === 0 && (
        <div>
          {tweet && tweet.map((tweet) => <Tweets {...tweet} key={tweet.id} />)}
        </div>
      )}
      {value === 1 && <div>Respuestas</div>}
      {value === 2 && <div>Multimedia</div>}
      {value === 3 && <div>Me gusta</div>}
    </Paper>
  );
};
