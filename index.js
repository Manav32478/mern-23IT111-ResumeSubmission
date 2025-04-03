import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import connectDB from "./config/db.js";
import Route from "./routes/Route.js";
app.use("/test", Route);
connectDB();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
