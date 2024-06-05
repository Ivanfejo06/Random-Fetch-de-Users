import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import UserDetailsModal from "./UserDetailsModal";
import "./UsersList.css";

const UsersList = () => {
    const urlApi = "https://randomuser.me/api/?results=5";
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch(urlApi)
            .then(response => response.json())
            .then(data => setUsers(data.results))
            .catch(error => console.log('Hubo un error ' + error));
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const closeModal = () => {
        setSelectedUser(null);
    };

    return (
        <div className="users-list-container">
            <h1>Listado: </h1>
            <div className="user-cards-container">
                {users.map((user, index) => (
                    <UserCard key={index} user={user} onClick={() => handleUserClick(user)} />
                ))}
            </div>
            {selectedUser && <UserDetailsModal user={selectedUser} onClose={closeModal} />}
        </div>
    );
};

export default UsersList;