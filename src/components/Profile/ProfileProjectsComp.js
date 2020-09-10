
import React from 'react';
import ProjectCard from '../Project/ProjectCardComp';
import { Card, CardContent, Typography } from '@material-ui/core';

const ProfilePosts = () => {

    const Projects= [
        {
            id : "259853",
            name : "Project 1",
            desc: "Conducting requirements gathering and validation as a part of collaboration for the high-profile external web app that helped to address important UI/UX parts of the system's user interface before the active phase of development.",
        },
        {
            id : "485853",
            name : "Project 2",
            desc: "Conducting requirements gathering and validation as a part of collaboration for the high-profile external web app that helped to address important UI/UX parts of the system's user interface before the active phase of development.",
        },
    ];
    return(
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h4">Projects</Typography>
                </CardContent>
            </Card>
            <br/>
            <div>
                {Projects.map((data) => {
                    return(
                    <span>
                        <li key={data.id} style={{ listStyleType: "none" }} >
                            <ProjectCard project={data} />
                        </li>
                        <br />
                    </span>
                    );
                })}
            </div>
            
            {/* <ProjectCard /> */}
        </div>
        
    );
}
export default ProfilePosts;