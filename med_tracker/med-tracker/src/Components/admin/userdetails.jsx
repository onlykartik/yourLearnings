import React, { useState, useRef, useEffect } from 'react';
import { updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase'; // Assuming db is your Firestore database instance

const UserInfoDialog = ({ isOpen, onClose, user }) => {
  const dialogRef = useRef(null);
  const [formData, setFormData] = useState({
    address: user.address || '',
    dob: user.dob || '',
    email: user.email || '',
    firstName: user.firstName || '',
    gender: user.gender || '',
    id: user.id || '',
    lastName: user.lastName || '',
    phoneNumber: user.phoneNumber || '',
    role: user.role || '',
  });

  useEffect(() => {
    setFormData({
      address: user.address || '',
      dob: user.dob || '',
      email: user.email || '',
      firstName: user.firstName || '',
      gender: user.gender || '',
      id: user.id || '',
      lastName: user.lastName || '',
      phoneNumber: user.phoneNumber || '',
      role: user.role || '',
    });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await updateDoc(doc(db, 'users', user.id), formData);
      onClose();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'users', user.id));
      onClose();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="dialog-wrapper" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="dialog" ref={dialogRef}>
        <h2>User Info</h2>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleInputChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} readOnly />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
        </div>
        <div>
          <label>Role:</label>
          <input type="text" name="role" value={formData.role} onChange={handleInputChange} />
        </div>
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoDialog;
