import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/operations';
import UsersCard from './UsersCard';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.data.users);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [page]);

  const showMore = () => {
    setPage(page + 1);
  };

  return (
    <section className="users_container container">
      <h2 className="users_title">Working with GET request</h2>
      <ul className="users_list list">{users.length !== 0 && <UsersCard data={users} />}</ul>
      {users && (
        <button className="btn" onClick={showMore} disabled={page === users.total_pages}>
          Show more
        </button>
      )}
    </section>
  );
};

export default Users;
