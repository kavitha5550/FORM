import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './components/HomePage'
import reportWebVitals from './reportWebVitals';
import Register from './components/Register';
import Login from './components/Login';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Count from './practise/Count';
import AppleCount from './practise/AppleCount'
import StudentData from './StudentData';
import Form from './Form';
import Submit from './components/Submit';
const router=createBrowserRouter([{
  path:'/',
  element:<App/>
},{
  path:"/Register",
  element:<Register/>
},{
  path:'/Login',
  element:<Login/>
},{
  path:'/DashBoard',
  element:<Dashboard/>
},{
  path:'/Count',
  element:<Count/>
},{
  path:'/AppleCount',
  element:<AppleCount/>
},{
  path:'/StudentData',
  element:<StudentData/>
},{
  path:'/Form',
  element:<Form/>
},{
  path:'/submit',
  element:<Submit/>
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
