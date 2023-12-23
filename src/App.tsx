import React from "react";
import "./styles.css";
import logo1 from "@Images/rosatom-svg.svg";
import logo2 from "@Images/rosatom-jpg.jpg";

const App = (): JSX.Element => {
  return (
    <>
      <h1>React TypeScript Webpack project</h1>
      {process.env.NODE_ENV}
      {process.env.NODE_ENV == "development" && "We are in dev environment"}
      {process.env.NODE_ENV == "production" && "We are in prod environment"}
      <img src={logo1} alt='' />
      <img src={logo2} alt='' />
      <img src={"/circle.png"} alt='mountains' />
    </>
  );
};
export { App };
