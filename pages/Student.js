import React, { useEffect, useState } from 'react';
import BranchSession from './BranchSession/BranchSession';
import Stu from '../pages/Stu'
import ViewListIcon from '@mui/icons-material/ViewList';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { red } from '@mui/material/colors';

const Student = () => {

    const [students, setStudent] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/students")
        .then(res=> res.json())
        .then(data=> setStudent(data))
    },[])


    return (
        <div className='mt-20'>
            <BranchSession student={"Student"}></BranchSession>
            {/* <h1>THIS IS STUDENTS</h1> */}


        {/* list & added  */}

        <div className='mt-10' style={{
            borderBottom: "1px solid #ddd"
        }}>
            <ul className='flex justify-between items-center'>
                <li className='px-5' style={{
                    border: "2px solid #ddd",
                    borderBottom: "none"
                }}><ViewListIcon/>List</li>
                <li style={{
                    background: "#eee",
                    padding: "4px 8px",
                    borderRadius: "15px",
                    border: "2px solid #ddd",
                    cursor: "pointer"
                }}><ControlPointIcon className='mr-2' />Add new student</li>
            </ul>
        </div>


            <section className='mt-20'>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
                    {students.map(stu=> <Stu key={stu._id} stu={stu}></Stu> )}
                </div>
            </section>
        </div>
    );
};

export default Student;