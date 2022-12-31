import React, { useEffect, useState } from 'react';
import BranchSession from './BranchSession/BranchSession';
import Stu from '../pages/Stu'
import ViewListIcon from '@mui/icons-material/ViewList';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { red } from '@mui/material/colors';
import AddModal from '../Components/AddModal/AddModal';
import { Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';

const Student = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [students, setStudent] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/students")
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [])

    console.log(students)


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
                    }}><ViewListIcon />List</li>
                    <li onClick={handleOpen} style={{
                        background: "#eee",
                        padding: "4px 8px",
                        borderRadius: "15px",
                        border: "2px solid #ddd",
                        cursor: "pointer"
                    }}><ControlPointIcon className='mr-2' />Add new student</li>
                    {/* <Button >Open modal</Button> */}
                </ul>
            </div>


            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead className='bg-[#eee]'>
                        <tr>
                            {/* <th></th> */}
                            <th>Name</th>
                            <th>Roll</th>
                            <th>INFO</th>
                            <th className='text-center'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            students.map((user, idx) => <tr key={user._id} className={`${idx==1 && "bg-[#eee]"} ${idx==3 && "bg-[#eee]"}`}>
                                {/* <th className='text-center'>{idx + 1}</th> */}
                                <td className='text-center'>{user?.name}</td>
                                <td className='text-center'>{user?.roll}</td>
                                <td className='flex justify-center py-5'>
                                    <div>
                                        <p><strong>Class: </strong>{user.class}</p>
                                        <p><strong>Email : </strong>{user?.email ? user.email : " [Not provided]"}</p>
                                        <p><strong>Contact no: </strong>{user.phone}</p>
                                        <p><strong>Gender: </strong>{user.Gender}</p>
                                        <p><strong>Date of birth: </strong>{user.dataOfBirth}</p>
                                        <p><strong>Blood Group: </strong>{user.bloodGroup}</p>
                                        <p><strong>Reg. no: </strong>{user._id}</p>
                                        <p><strong>Father name: </strong>{user.fatherName}</p>
                                        <p><strong>Mother name: </strong>{user.motherName}</p>
                                    </div>
                                </td>
                                <td className='text-center cursor-pointer'>
                                    <div>
                                        <span><SettingsIcon/></span>
                                        <span><ArrowRightSharpIcon/></span>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>


            <AddModal
                handleOpen={handleOpen}
                handleClose={handleClose}
                open={open}
            ></AddModal>
        </div>
    );
};

export default Student;