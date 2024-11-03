import React from 'react'

const AddStudent = ({setstudent_name,setstudent_email,add_student}) => {
    return (
        <div>
            <p>Add Student :</p>
            student name : <input onChange={(e) => setstudent_name(e.target.value)} /> <br />
            student email : <input onChange={(e) => setstudent_email(e.target.value)} /><br />
            <button onClick={add_student}>add</button>
        </div>
    )
}

export default AddStudent