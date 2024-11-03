import React from 'react'

const Comp2 = (props) => {
  let students = props.students
  return (
    <div>
      <h2> Stidents :</h2>
      {students.map(student=>
      <div key={student.email}>
        name : {student.name},
        email : {student.email}
      </div>)}
    </div>
  )
}

export default Comp2