// src/pages/Login.jsx
import { useState } from 'react'; // import react hooks
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// Create the Login component
const Login = () => 
{
   // React state to store form values
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate(); // Router function to redirect user

   // Create a function to handle the login form submission
   const handleLoginFormSubmit = async e => {
      e.preventDefault(); // Prevent page reload on form submit

      // Send login request to the API server
      // Make API request to the API server
      const res = await fetch('https://usercrud-api-ef8r.onrender.com/api/authentication/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ email, password }),
      });

      const data = await res.json(); // Parse the response as JSON

      // If login is successful, store the token in local storage and redirect to the users page
      if(res.ok) 
      {
         localStorage.setItem('jwtToken', data.jwtToken); // Store the token in local storage
         navigate('/users'); // Redirect to the users page
      } 
      else 
      {
         alert(data.error || 'Login failed'); // Show an alert if login fails
      }
   };

   // Return the Login component
   return (
      <form className="max-w-md mx-auto mt-5" onSubmit={handleLoginFormSubmit}>
         <h2 className="mb-4">Login</h2>
         <div className="mb-3">
            <input
               className="form-control"
               type="email"
               placeholder="Email"
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
         </div>
         <div className="mb-3">
            <input
               className="form-control"
               type="password"
               placeholder="Password"
               value={password}
               onChange={e => setPassword(e.target.value)}
            />
         </div>
         <button className="btn btn-primary w-100" type="submit">Log In</button>
      </form>
   );
};

// Export the Login component to be used in the App.jsx file
export default Login;
