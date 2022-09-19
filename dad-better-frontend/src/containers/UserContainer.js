import React from 'react';
import UserCard from '../components/UserCard';

function UserContainer (props) {  
    return (
            <div>
                <UserCard username={props.username} score={props.score}/>
            </div>
        )
}

export default UserContainer