import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Users() {
  const [list, setList] = useState([]);
  const getData = useCallback(async () => {
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data);

    setList(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <>
      <ul>
        <div className="container mt-4">
          <h2>Users List</h2>
          <ul className="list-group">
            {list.map((user) => (
              <li key={user.id} className="list-group-item">
                <Link to={`/user/${user.id}/posts`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </>
  );
}
