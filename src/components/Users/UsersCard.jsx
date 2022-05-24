import { useEffect, useState } from 'react';

const UsersCard = ({ data }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users === data[0].users) {
      return;
    }

    if (users.length === 0) {
      setUsers(data[0].users);
    }

    if (users.length !== 0) {
      let arr = users.concat(data[0].users);
      setUsers(arr);
    }
  }, [data]);

  return (
    <>
      {users.map(item => (
        <li className="users_item" key={item.id}>
          <div className="users_img">
            <img className="users_img-item" src={item.photo} alt={item.name} />
          </div>
          <h3 className="users_name">{item.name}</h3>
          <div className="users_description">
            <p>{item.position}</p>
            <div className="users_contacts">
              <a href={`mailto:${item.email}`}>{item.email}</a>
              <a href={`tel:${item.phone}`}>{item.phone}</a>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default UsersCard;
