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
<<<<<<< HEAD
            <a onClick={logout} class="nav-link btn btn-outline-light" href="#" style={{ color: 'white' }}>
              Logout
            </a>
=======
            <Button onClick={logout} negative class="nav-item">
              <a class="nav-link" href="#">
                Logout
              </a>
            </Button>
>>>>>>> f62ff324b550c2350ce27906d2bbef4b56979fa0
          ) : null}
        </ul>
      </div>
    </nav>
  );
}
