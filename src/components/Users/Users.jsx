import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/operations';
import UsersCard from './UsersCard';
import * as actions from '../../redux/actions';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.data.users);

  useEffect(() => {
    dispatch(actions.clearState());
    dispatch(fetchUsers(1));
  }, []);

  const showMore = () => {
    const nextPage = users.page + 1;

    dispatch(fetchUsers(nextPage));

    if (nextPage === users.total_pages) {
      document.querySelector('#showMore').classList.add('hidden');
    }
  };

  return (
    <section className="users_container container">
      <h2 className="users_title">Working with GET request</h2>
      <ul className="users_list list">{users.users.length && <UsersCard users={users.users} />}</ul>
      {users.users.length && (
        <button id="showMore" className="btn" onClick={showMore}>
          Show more
        </button>
      )}
    </section>
  );
};

export default Users;
