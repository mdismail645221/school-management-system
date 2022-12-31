import React from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Title } from '../Styled/Button';
import { useForm } from 'react-hook-form';
import { StyleSubmitInput } from '../Styled/StyleSubmitInput';
import { toast } from 'react-hot-toast';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddModal = ({ handleClose, handleOpen, open }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { register } = useForm();
    // const onSubmit = data => console.log(data);

    const handleData = (data) => {
        console.log(data)

            fetch(`http://localhost:5000/students`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    toast("success fully added")
                    // accessToken(email)
                    console.log(data)
                })
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Title>THE STUDENT ADDED INFO</Title>
                    <form className='grid  grid-cols-3 md:grid-cols-3  gap-3' onSubmit={handleSubmit(handleData)}>
                        {/* Name */}
                        <div>
                            <label className='text-bold text-lg'>Name:</label>
                            <input  {...register("name")} className='border w-full px-4 py-2' placeholder='name' type="text" required></input>
                        </div>
                        {/* Roll */}
                        <div>
                            <label className='text-bold text-lg'>Roll:</label>
                            <input {...register("roll")} className='border w-full px-4 py-2' placeholder='roll' type="number" required></input>
                        </div>
                        {/* CLASS */}
                        <div>
                            <label className='text-bold text-lg'>Class:</label>
                            <input {...register("class")} className='border w-full px-4 py-2' placeholder='class' type="text" required></input>
                        </div>
                        {/* Email */}
                        <div>
                            <label className='text-bold text-lg'>Email:</label>
                            <input {...register("email")} className='border w-full px-4 py-2' placeholder='email' type="email" required></input>
                        </div>
                        {/* Contact*/}
                        <div>
                            <label className='text-bold text-lg'>Contact:</label>
                            <input {...register("contact")} className='border w-full px-4 py-2' placeholder='contact' type="text" required></input>
                        </div>
                        {/* Date of birth */}
                        <div>
                            <label className='text-bold text-lg'>Date of birth:</label>
                            <input {...register("dateOfBirth")} className='border w-full px-4 py-2' placeholder='date of birth' type="text" required></input>
                        </div>
                        {/* Blood Group */}
                        <div>
                            <label className='text-bold text-lg'>Blood Group:</label>
                            <input {...register("bloodGroup")} className='border w-full px-4 py-2' placeholder='blood group' type="text" required></input>
                        </div>
                        {/*Father name  */}
                        <div>
                            <label className='text-bold text-lg'>Father name:</label>
                            <input {...register("fatherName")} className='border w-full px-4 py-2' placeholder='father name' type="text" required></input>
                        </div>
                        {/* Mother Name */}
                        <div>
                            <label className='text-bold text-lg'>Mother Name:</label>
                            <input {...register("motherName")} className='border w-full px-4 py-2' placeholder='mother name' type="text" required></input>
                        </div>
                        {/*  */}
                        <StyleSubmitInput type="submit" value="submit" />
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default AddModal;