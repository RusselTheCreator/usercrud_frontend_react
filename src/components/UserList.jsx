import { useEffect, useState } from 'react'; // import react hooks
import { useNavigate } from 'react-router-dom'; // Import Navigate components

const UserList = () => {
  const [users, setUsers] = useState([]); // store user data from API
  const jwtToken = localStorage.getItem('jwtToken'); // get JWT token which created when user logged into the application
  const navigate = useNavigate(); // router function to redirect user

  // useEffect to fetch users from API using API request
  // dependency array has jwtToken and navigate function because we want to run this function when jwtToken changes or when user navigates to a different page
  useEffect(() => {
    // fetch users from API using API request
    const fetchUsers = async () => 
    {
      // Make API request to the API server
      const res = await fetch('https://usercrud-api-ef8r.onrender.com/api/users', {
        headers: {
          Authorization: `Bearer ${jwtToken}`, // attach JWT token to the API request
        },
      });

      // If API request is successful, update state with user data
      if(res.ok) 
      {
        const data = await res.json();
        setUsers(data.users); // update state with user data
      } 
      else 
      {
        // If API request is not successful, show alert and send back to login
        alert('Session expired or unauthorized');
        navigate('/login'); // send back to login
      }
    };

    fetchUsers(); // run on page load
  }, [jwtToken, navigate]);

  return (
    <div>
      <h2>All Users</h2>
      <ul className="list-group mt-3">
        {users.map(user => (
          // map through users and create a list item for each user
          <li className="list-group-item" key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the UserList component to be used in the App component
export default UserList;
