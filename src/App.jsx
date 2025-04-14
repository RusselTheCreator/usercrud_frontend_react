// APPLICATION MAIN ROUTER

import { Routes, Route, Navigate } from 'react-router-dom'; // Import the Routes, Route, and Navigate components
import Login from './components/Login'; // Import the Login component
import UserList from './components/UserList'; // Import the UserList component

// Create the App component
function App() 
{
  // Read the JWT token from local storage (if logged in)
  const token = localStorage.getItem('token')

  // Return the App component
  return (
    <div className="container mt-5">
      {/* Define all app routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={token ? <UserList /> : <Navigate to="/login" />}/>  {/* Protected route — only accessible if JWT token exists */}
        <Route path="*" element={<Navigate to="/users" />} /> {/* Redirect any unknown URL to /users (if logged in) or /login */}
      </Routes>
    </div>
  )
}

// Export the App component to be used in the main.jsx file
export default App
