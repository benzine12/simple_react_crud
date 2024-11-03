import React, { useState, useEffect } from 'react'
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import axios from 'axios';

const App = () => {
    const SERVER = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        axios(SERVER)
            .then(res => {
                const initialStudents = res.data.map(user => ({
                    name: user.name,
                    email: user.email,
                }));
                setstudents(initialStudents);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);
    const [students, setstudents] = useState([]);
    const [student_name, setstudent_name] = useState('')
    const [student_email, setstudent_email] = useState('')
    const [del_student, setdel_student] = useState('')
    const [oldEmail, setOldEmail] = useState('');
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');


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

    return (
        <div>
            <h1>Welcome to the Student CRP page</h1> <br />
            <h2>There you can add,delete and update student credentials online!</h2><br />
            student name : <input onChange={(e) => setstudent_name(e.target.value)} /> <br />
            student email : <input onChange={(e) => setstudent_email(e.target.value)} /><br />
            <button onClick={add_student}>add</button>
            <hr />
            <p>Enter student email to delete : </p>
            <input onChange={(e) => setdel_student(e.target.value)} />
            <button onClick={delete_student}>delete</button>
            <hr />
            <Comp1
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
            <Comp2 students={students}></Comp2>
        </div>
    )
}

export default App