import React, { useRef, useEffect,useState } from "react";

import axios from "axios"
export default function Stream() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchRandomUsers();
  }, []);

  const fetchRandomUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=30');
      setUsers(response.data.results);
      console.log(response.data.results)
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };



  return (
    <>

        <div className="stream">
        {users.map(user  => (
          <Profile user={user} />
        ))}
      </div>
      </>
  );
}

export function Profile({ user }) {
  const base = useRef();

  useEffect(() => {
    flash(base.current);
  }, []);

  return (
    <div className="list-group-item" ref={base} style={{ color: "red" }}>
      <div className="avatar">
        <img alt="avatar" src={user.picture.medium} loading="lazy" />
      </div>
      <div className="details">
        <div className="info">
          <p className="name" style={{ color: "red" }}>
            {user.name.first}
          </p>
          <p className="location">{user.login.username}</p>
        </div>
      </div>
    </div>
  );
}

function flash(element) {
  element.style.backgroundColor = "#bd7aff";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.transition = "background-color 4s ease";
      element.style.backgroundColor = "transparent";
    });
  });
}
