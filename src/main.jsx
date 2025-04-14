import React from 'react' // Import the React library
import ReactDOM from 'react-dom/client' // Import the ReactDOM library
import App from './App.jsx' // Import the App component
import { BrowserRouter } from 'react-router-dom' // Import the BrowserRouter component
import 'bootstrap/dist/css/bootstrap.min.css' // Import the Bootstrap module

// Create a root element for the app
// purpose of the root element is to render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
