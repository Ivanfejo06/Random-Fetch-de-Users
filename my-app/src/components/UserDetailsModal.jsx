import React from "react";

const UserDetailsModal = ({user, onClose}) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>Cerrar</button>
                <h2>{user.name.first} {user.name.last}</h2>
                <img src={user.picture.large} alt={user.name.first} />
                <p><strong>Correo electrónico:</strong> {user.email}</p>
                <p><strong>Edad:</strong> {user.dob.age}</p>
                <p><strong>Género:</strong> {user.gender}</p>
                <p><strong>Ubicación:</strong> {user.location.city}, {user.location.country}</p>
            </div>
        </div>
    );
};

export default UserDetailsModal;