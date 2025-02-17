import React, { useEffect, useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'
import { getLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const [username, setUsername] = useState('Admin'); // Default to Admin

  useEffect(() => {
    console.log("Fetching user from localStorage...");
    const storedUser = localStorage.getItem('loggedInUser');

    if (storedUser) {
      try {
        const loggedInUser = JSON.parse(storedUser);
        console.log("Parsed User:", loggedInUser);

        // Fetch employees & admin from local storage
        const { employees } = getLocalStorage();
        console.log("Employees from Local Storage:", employees);

        if (loggedInUser && loggedInUser.data && loggedInUser.data.email) {
          // Find employee by email
          const employee = employees.find(emp => emp.email === loggedInUser.data.email);
          console.log("Matched Employee:", employee);

          if (employee) {
            setUsername(employee.firstName); // Set employee name
          } else {
            setUsername('Admin'); // If not an employee, assume Admin
          }
        }
      } catch (error) {
        console.error("Error parsing logged-in user data:", error);
      }
    }
  }, []);


  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl font-semibold'>{username} 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
