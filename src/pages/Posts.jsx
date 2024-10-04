import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Posts() {
  const [list, setList] = useState([]);
  const getData = useCallback(async () => {
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/posts ")
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
          <h2>Post List</h2>
          <ul className="list-group">
            {list.map((post) => (
              <li key={post.id} className="list-group-item">
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </>
  );
}
