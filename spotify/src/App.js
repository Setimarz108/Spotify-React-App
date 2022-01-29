import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./ServiceProvider";
import Player from "./Components/Player"
import { getTokenFromUrl } from "./spotify";
import "./App.css";
import Login from "./Components/Login";
import {ReactBrowser, Router, Route} from "react-router"

const s = new SpotifyWebApi();

function App() {
  // const [{ token }, dispatch] = useStateValue();

  // useEffect(() => {
  //   // Set token
  //   const hash = getTokenFromUrl();
  //   window.location.hash = "";
  //   let _token = hash.access_token;

  //   if (_token) {
  //     s.setAccessToken(_token);

  //     dispatch({
  //       type: "SET_TOKEN",
  //       token: _token,
  //     });
 
     
     

  //     s.getMe().then((user) => {
  //       dispatch({
  //         type: "SET_USER",
  //         user,
  //       });
  //     });

      
  //   }
  // }, [token, dispatch]);

  return (

    <div className="app">
      <ReactBrowser>
      <Router>
      <Route><Player spotify={s} /></Route>
       </Router>
       </ReactBrowser>
    </div>
  );
}

export default App;