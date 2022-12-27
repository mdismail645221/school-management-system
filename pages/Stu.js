import React from 'react';

const stu = ({ stu }) => {
    console.log("stu", stu)
    const {Gender,bloodGroup,dataOfBirth,fatherName,motherName,name,phone}=stu;
    return (
        <div className="rounded-md shadow-md bg-[#eee] dark:text-gray-100">
            {/* <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /> */}
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide"><span>name: </span>{name}</h2>
                    <ul>
                        <li><strong>gendar</strong>: {Gender}</li>
                        <li><strong>bloodGroup</strong>: {bloodGroup}</li>
                        <li><strong>dataOfBirth</strong>: {dataOfBirth}</li>
                        <li><strong>fatherName</strong>: {fatherName}</li>
                        <li><strong>motherName</strong>: {motherName}</li>
                        <li><strong>phone</strong>: {phone}</li>
                    </ul>
                    {/* <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p> */}
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
            </div>
        </div>
    );
};

export default stu;