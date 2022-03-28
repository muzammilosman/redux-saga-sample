import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './store/reducers/users';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.users.users);
  console.log(users)

  return (
    <div className="App">
      <h2>
        USERS LIST
      </h2>
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
