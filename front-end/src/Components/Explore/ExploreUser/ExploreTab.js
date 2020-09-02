import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import pirineos from "./pirineos.jpg";
import covid19 from "./covid19.jpg";
import noticias from "./noticias.jpg";
import deportes from "./deportes.jpg";
import "./ExploreTab.css";

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

export const ExploreTab = () => {
  const [news, setNews] = useState([]);
  const API =
    "https://api-hoaxy.p.rapidapi.com/tweets?ids=[29317,68363,1000,1400]";

  useEffect(() => {
    fetch(API, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-hoaxy.p.rapidapi.com",
        "x-rapidapi-key": "5e698e8bc4msh3f2b88b6ba11593p14dfffjsn2fd6ea1e7a5d",
      },
    })
      .then((res) => res.json())
      .then((news) => setNews(news))
      .catch((err) => {
        console.log(err);
        console.log(news);
      });
  }, []);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
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
          <Tab
            className={classes.root}
            style={{
              fontWeight: "bold",
              color: "#00acee",
            }}
            tabIndex={0}
            label="Para ti"
          />
          <Tab
            className={classes.root}
            style={{ fontWeight: "bold", color: "#00acee" }}
            tabIndex={1}
            label="COVID-19"
          />
          <Tab
            className={classes.root}
            style={{ fontWeight: "bold", color: "#00acee" }}
            tabIndex={2}
            label="Noticias"
          />
          <Tab
            className={classes.root}
            style={{ fontWeight: "bold", color: "#00acee" }}
            tabIndex={3}
            label="Deportes"
          />
        </Tabs>
        {value === 0 && (
          <div>
            <img src={pirineos} className="ExploreImages" />
            <label>Viajes - Hace 1 hora</label>
            <h3 className="ImgLabel">Viaja a los Pirineos estas vacaciones</h3>
          </div>
        )}
        {value === 1 && (
          <div>
            <img src={covid19} className="ExploreImages" />
            <label>COVID19 - Hace 48 horas</label>
            <h3 className="ImgLabel">¡Se termina la crisis del COVID19!</h3>
          </div>
        )}
        {value === 2 && (
          <div>
            <img src={noticias} className="ExploreImages" />
            <label>Noticias - Hace 2 horas</label>
            <h3 className="ImgLabel">Los hospitales vuelven a la normalidad</h3>
          </div>
        )}
        {value === 3 && (
          <div>
            <img src={deportes} className="ExploreImages" />
            <label>Deportes - Hace 24 horas</label>
            <h3 className="ImgLabel">Vuelve La Liga</h3>
          </div>
        )}
      </Paper>
    </div>
  );
};
