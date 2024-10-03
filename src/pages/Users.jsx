import { useCallback, useEffect, useState } from "react";
import axios from "axios";
export default function Users() {
  const [list, setList] = useState([]);
  const getData = useCallback(async () => {
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data);

    setList(data);
  }, []);

  useEffect(() => getData(), [getData]);
  return (
    <>
      <ul>
        {list.map((el, index) => (
          <li key={index}>{el.name}</li>
        ))}
      </ul>
    </>
  );
}
