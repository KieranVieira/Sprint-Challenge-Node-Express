import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Project = styled.div`
    margin: 25px;
    a{
        border: 1px solid gray;
        padding: 15px;
        margin: 10px;
        color: black;
        text-decoration: none;
        transition: 0.2s;
        &:hover{
            box-shadow: 0px 3px 15px rgba(0,0,0,.25);
        }
    }
`;

class Projects extends React.Component{
    state = {
        projects: []
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/projects')
            .then(res => this.setState({projects: res.data}))
            .catch(err => console.log(err))
    }

    render(){
        return(
            this.state.projects.map(project => {
                return <Project>
                <h1><Link to={`/project/${project.id}`}>{project.name}</Link></h1>
                </Project>
            })
        )
    }
}

export default Projects