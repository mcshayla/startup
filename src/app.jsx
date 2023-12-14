import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Habits } from './habits/habits';
import { Public } from './public/public';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


function App() {

  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

    return (  
      <BrowserRouter>
        <div className="body">
        <header className="container-fluid">
        <h1 className="font">BECOMING! WITH YOUR HABITS<sup>&reg;</sup></h1>

        <nav>
             <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='habits'>
                    Habits
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='public'>
                    Public
                  </NavLink>
                </li>
              )}
            </menu>
        </nav>
        <hr />
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/habits' element={<Habits userName={userName} />} />
          <Route path='/public' element={<Public />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        

        <footer className="container-fluid">
          <div className="nav-item">
            <a className="nav-link" href="https://github.com/mcshayla/startup">Shayla's GitHub</a>
          </div>
        </footer>
        {/* <script src="login.js"></script>
        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
        ></script> */}
    </div> 
    </BrowserRouter>
    );
}


function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
