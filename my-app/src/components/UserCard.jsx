import React from "react";

const UserCard = ({user, onClick}) => {
    return (
        <div className="user-card" onClick={onClick}>
            <img src={user.picture.thumbnail} alt={user.name.first} />
            <p>{user.name.first} {user.name.last}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UserCard;
