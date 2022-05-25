import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/operations';
import UsersCard from './UsersCard';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.data.users);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log('1', users);
    if (users.length === 0) {
      dispatch(fetchUsers(page));
      return;
    }
    if (page === users[0].page) {
      return;
    }
    dispatch(fetchUsers(page));
  }, [page]);

  const showMore = () => {
    console.log('page', page);
    console.log('total-page', users[0].total_pages);
    if (page === users[0].total_pages - 1) {
      console.log('fimish');
      document.querySelector('#showMore').classList.add('hidden');
    }
    setPage(page + 1);
  };

  return (
    <section className="users_container container">
      <h2 className="users_title">Working with GET request</h2>
      <ul className="users_list list">{users.length !== 0 && <UsersCard data={users} />}</ul>
      {users.length !== 0 && (
        <button
          id="showMore"
          className="btn"
          onClick={showMore}
          disabled={page === users[0].total_pages}
        >
          Show more
        </button>
      )}
    </section>
  );
};

export default Users;
