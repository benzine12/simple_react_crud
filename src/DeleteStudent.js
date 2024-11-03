import React from 'react'

const DeleteStudent = ({setdel_student,delete_student}) => {

    return (
        <div>
            <p>Enter student email to delete : </p>
            <input onChange={(e) => setdel_student(e.target.value)} />
            <button onClick={delete_student}>delete</button>
        </div>
    )
}

export default DeleteStudent