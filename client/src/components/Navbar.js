import React, { useContext } from "react";
import { AppContext } from "../context api/Appcontext";
import axios from 'axios';


export default function Navbar() {
  const { user, setuser } = useContext(AppContext);
  const { setauthenticated } = useContext(AppContext);
  const logout = () => {
    if (localStorage.getItem('FBIdToken')) {
      localStorage.setItem("FBIdToken", '');
      axios.defaults.headers.common["Authorization"] = '';
      setauthenticated(false);
      setuser({});
      window.location.href = "http://vidcoapp.netlify.app";
    }
  };
  return (
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="http://vidcoapp.netlify.app">
        <h2>
          <strong>Vidco</strong>
        </h2>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          {user._id ? (
            <a onClick={logout} class="nav-link btn btn-outline-light" href="#" style={{ color: 'white' }}>
              Logout
            </a>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}
