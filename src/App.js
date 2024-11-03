import React, { useState, useEffect } from 'react'
import AddStudent from './AddStudent';
import ShowStudents from './ShowStudents';
import DeleteStudent from './DeleteStudent';
import UPdateStudent from './UpdateStudent';
import axios from 'axios';

const App = () => {
    //varaibles
    const [students, setstudents] = useState([]);
    const [student_name, setstudent_name] = useState('')
    const [student_email, setstudent_email] = useState('')
    const [del_student, setdel_student] = useState('')
    const [oldEmail, setOldEmail] = useState('');
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const SERVER = 'http://localhost:3001/users'

    //functions

    // Read the data
    useEffect(() => {
        axios(SERVER)
            .then(res => {
                const initialStudents = res.data.map(user => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }));
                setstudents(initialStudents);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);
    //add new student
    const add_student = () =>
        setstudents([...students, { name: student_name, email: student_email }])
    const delete_student = () => setstudents(students.filter(student => student.email !== del_student))
    const updateStudent = () => {
        setstudents(students.map(student =>
            student.email === oldEmail
                ? { ...student, name: newName, email: newEmail }
                : student
        ));
    };

    //delete student


    //update student


    
    return (
        <div>
            <h1>Welcome to the Student CRP page</h1> <br />
            <h2>There you can add,delete and update student credentials online!</h2><br />
            <hr/>
            <AddStudent
            add_student={add_student}
             setstudent_name={setstudent_name}
             setstudent_email={setstudent_email}
            />
            <hr />
            <DeleteStudent
                setdel_student={setdel_student}
                delete_student={delete_student}
                />
            <hr />
            <UPdateStudent
                students={students}
                updateStudent={updateStudent}
                oldEmail={oldEmail}
                setOldEmail={setOldEmail}
                newName={newName}
                setNewName={setNewName}
                newEmail={newEmail}
                setNewEmail={setNewEmail}
            />
            <hr />
            <ShowStudents students={students}/>
        </div>
    )
}

export default App