
import { useEffect, useState } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "next/image";

import PersonIcon from '@mui/icons-material/Person';
import Person4Icon from '@mui/icons-material/Person4';
import GroupIcon from '@mui/icons-material/Group';

const Posts = ({ posts }) => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("sgt.json")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <section className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    users.map(user => <Card key={user.id} className={`${user.id === 1 && "bg-red-300"} ${user.id === 2 && "bg-blue-300"} ${user.id === 3 && "bg-green-300"}`}>
                        <CardContent  className="flex items-center justify-between">
                            <div>
                                {
                                    user.id === 1 && <PersonIcon className="text-5xl" />
                                }
                                {
                                    user.id === 2 && <Person4Icon className="text-5xl" />
                                }
                                {
                                    user.id === 3 && <GroupIcon className="text-5xl" />
                                }
                                <Typography variant="body2" color="text.secondary" className="text-2xl">
                                    {user.title}
                                </Typography>
                            </div>
                            <div>
                                <h3 className="text-5xl">{user.students.length}</h3>
                            </div>
                        </CardContent>
                        <CardActions>
                            {/* <Button size="small">Share</Button> */}
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>)
                }
            </div>
        </section>
    );
};

// export const  getStaticProps =  async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     // console.log(data)
//     return {
//         props: {
//             posts: data
//         }
//     }
// }

export default Posts;