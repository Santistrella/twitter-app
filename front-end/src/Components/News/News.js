import React from "react";
import "./News.css";
import { WhoToFollow } from "../Logged User/WhoToFollow/WhoToFollow";

export const News = () => {
  return (
    <div className="FlexNews">
      <div className="NewsContainer">
        <div className="SearchBarContainer">
          <input placeholder="  Buscar en Twitter" className="SearchBar" />
        </div>
        <div className="RecommendDiv">
          <div className="Whatshappening">
            <h3>Qué está pasando</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              accumsan ex eget tortor accumsan lacinia. In eu massa viverra,
              fringilla nisi vitae, <br /> lacinia velit. Vivamus ullamcorper
              sapien ac felis efficitur semper.{" "}
            </p>
          </div>
          <WhoToFollow />
        </div>
      </div>
    </div>
  );
};
