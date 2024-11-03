import React from 'react';

const UPdateStudent = ({  
  updateStudent, 
  oldEmail, setOldEmail, 
  newName, setNewName, 
  newEmail, setNewEmail 
}) => {
  return (
    <div>
      <p>Enter student email to update their credentials:</p>

      <div>
        <label>Student old email: </label>
        <input 
          value={oldEmail} 
          onChange={(e) => setOldEmail(e.target.value)} 
        /> <br />
        
        <label>Student new name: </label>
        <input 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
        /> <br />
        
        <label>Student new email: </label>
        <input 
          value={newEmail} 
          onChange={(e) => setNewEmail(e.target.value)} 
        /> <br />

        <button onClick={updateStudent}>Update Student</button>
      </div>
    </div>
  );
};

export default UPdateStudent;