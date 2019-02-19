import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 15px;   
    a{
        width: 50px;
        font-size: 1.7rem;
        text-align: center;
        color: black;
        text-decoration: none;
        padding: 10px 15px;
        border: 1px solid gray;
        margin: 10px;
        transition: 0.2s;
        &:hover{
            box-shadow: 0px 3px 15px rgba(0,0,0,.25);
        }
    }
`;

const Action = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    padding: 15px;
    margin: 10px;
    transition: 0.2s;
    &:hover{
        box-shadow: 0px 3px 15px rgba(0,0,0,.25);
    }
`;

class SingleProject extends React.Component{
    state = {
        actions: []
    }

    componentDidMount(){
        axios.get(`http://localhost:8000/api/projects/${this.props.match.params.id}/actions`)
            .then(res => this.setState({actions: res.data}))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <ActionContainer>
                <Link to='/'>Home</Link>
                {this.state.actions.length > 0 ? 
                this.state.actions.map(action => {
                    return <Action>
                        <h1>{action.description}</h1>
                        <h3>{action.notes}</h3>
                        <h3>{action.completed ? 'Completed': 'Incomplete'}</h3>
                    </Action>
                }):
                <h1>No actions on this project</h1>
                }
            </ActionContainer>
        )
    }
}

export default SingleProject