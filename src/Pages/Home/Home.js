import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
// import NewHome from "../NewHome/NewHome";
import Explore from "../Explore/Explore";
import Login from "../Login/Login";
const Home = ({ handleLogged }) => {
  const [token, setToken] = useState();
  const save_token = (e) => {
    window.localStorage.setItem("_TOKEN", e);
    console.log(e);
    setToken(e);
  };

  //   const handleLogOut = (e) => {
  //     window.localStorage.removeItem("_TOKEN");
  //     // console.log(e)
  //     setToken(false);
  //   };

  useEffect(() => {
    let _token = window.localStorage.getItem("_TOKEN");
    if (_token === undefined || _token === null) {
      // setToken("abcd")
      setToken(false);
    } else {
      setToken(_token);
      // getCompanies(_token);
    }
  }, []);

  if (token === undefined) {
    return <div>...Loading</div>;
  }

  console.log(token);

  if (token === false) {
    return (
      <div>
        {/* <ToastContainer /> */}
        <Login setToken={save_token}></Login>
      </div>
    );
  }
  return (
    <div>
      <Header isLogged={handleLogged} />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
    </div>
  );
};

export default Home;
