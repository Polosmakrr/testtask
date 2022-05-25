const UsersCard = ({ users }) => {
  return (
    <>
      {users.map(user => (
        <li className="users_item" key={user.id}>
          <div className="users_img">
            <img className="users_img-item" src={user.photo} alt={user.name} />
          </div>
          <h3 className="users_name">{user.name}</h3>
          <div className="users_description">
            <p>{user.position}</p>
            <div className="users_contacts">
              <a href={`mailto:${user.email}`}>{user.email}</a>
              <a href={`tel:${user.phone}`}>{user.phone}</a>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default UsersCard;
