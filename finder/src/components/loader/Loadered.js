import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loadered = () => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top:"0", left:"0", right:"0",bottom:"0", display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", backgroundColor:"black"}}>
        <Loader
          type="Audio"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={2000}
        />
      </div>
    </div>
  );
};

export default Loadered;
