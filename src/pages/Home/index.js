import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

const Home = () => {
  return (
    <>
      <h1>This is the Home component</h1>
      <Input />
      {/* <Link to="/aboutus">
        <button>GO TO ABOUT US</button>
      </Link> */}
    </>
  );
};

export default Home;
