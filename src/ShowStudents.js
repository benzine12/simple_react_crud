import React from 'react'

const ShowStudents = ({students}) => {
  return (
    <div>
      <h2> Students :</h2>
      {students.map(student=>
      <div key={student.id}>
        Id : {student.id},
        name : {student.name},
        email : {student.email}
      </div>)}
    </div>
  )
}

export default ShowStudents