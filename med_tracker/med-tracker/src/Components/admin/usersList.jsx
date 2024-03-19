import React, { useEffect, useState } from 'react';
import { getUsers } from "../service/appointmentService";
import UserInfoDialog from "./userdetails";
import "../../style.css"

function UsersList(){
    const [users, setUsers] = useState([]);


    const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };



    useEffect(() => {
        (async () => {
            try {
                const listOfUsers = await getUsers();
                console.log("hihih")
                console.log(listOfUsers)
                setUsers(listOfUsers);
            } catch (error) {
                console.error('Failed to fetch appointments:', error);
            }
        })();
    }, []);



    return (
        <div>
          <div className="user_header">
            <ul>
              <li className='first_name'>FIRST NAME</li>
              <li className='last_name'>LAST NAME</li>
              <li className='role'>ROLE</li>
            </ul>
          </div>
    
          <div className='user__card'>
            {users && users.map(user => (
              <div className='user_info' key={user.id} onClick={() => handleUserClick(user)}>
                <ul>
                  <li className='user__firstname'>{user.firstName}</li>
                  <li className='user__lastname'>{user.lastName}</li>
                  <li className='user__role'>{user.role}</li>
                </ul>
              </div>
            ))}
          </div>
    
          {/* Render UserInfoDialog only when isDialogOpen is true */}
          {isDialogOpen && <UserInfoDialog isOpen={isDialogOpen} onClose={handleCloseDialog} user={selectedUser} />}
        </div>
      );
    };
    
    export default UsersList;