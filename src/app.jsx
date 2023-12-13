import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import {Login} from './login/login'
import {Habits} from './habits/habits'
import {Public} from './public/public'

export default function App() {
    return (  
      <BrowserRouter>
        <div className="body">

        <header class="container-fluid">
        <h1>BECOMING! WITH YOUR HABITS<sup>&reg;</sup></h1>

        <nav>
            <menu>
            <li className="nav-item"><NavLink className="nav-link" to="">Home</NavLink></li>
            <li className = "nav-item"><NavLink className="nav-link" to="habits">Habits</NavLink></li>
            <li className = "nav-item"><NavLink className="nav-link" to="public_habits">Public</NavLink></li>
            </menu>
        </nav>
        <hr />
        </header>

        {/* <main class="container-fluid text-center">
        <p>components go here</p>
        </main> */}
        <Routes>
         <Route path='/' element = {<Login />} exact />
          <Route path='/habits' element={<Habits />} />
          <Route path='/public_habits' element={<Public />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="container-fluid">
        <div className="nav-item">
        <a className="nav-link" href="https://github.com/mcshayla/startup">Shayla's GitHub</a>
        </div>
        </footer>
        <script src="login.js"></script>
        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
        ></script>
    </div> 
    </BrowserRouter>
    );
}