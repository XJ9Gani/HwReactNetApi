import { useCallback, useEffect, useState } from "react";
import axios from "axios";
export default function Posts() {
  const [list, setList] = useState([]);
  const getData = useCallback(async () => {
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/posts ")
      .then((res) => res.data);

    setList(data);
  }, []);

  useEffect(() => getData(), [getData]);
  return (
    <>
      <ul>
        {list.map((el, index) => (
          <li key={index}>{el.title}</li>
        ))}
      </ul>
    </>
  );
}
