import React, { useState } from "react";
import useFetch from "../useFetch";

export const Movies = () => {
  const [mes, setMes] = useState("");
  const [err, setErr] = useState("");

  const { data, loading, error } = useFetch("http://localhost:1000/movies/");
  // console.log(data)

  const handleDelete = async (id) => {
    const url = `http://localhost:1000/movies/delete/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      credentials: "include",
    });
    const result = await response.json();
    const { success, message } = result;

    if (success) {
      setMes(message);
      window.location.reload();
    } else {
      setErr(message);
    }
  };
  return (
    <>
      {mes && <p>{mes}</p>}
      {err && <p>{err}</p>}
      <div>
        <ul>
          {data?.map((curr) => (
            <li key={curr._id}>
              {curr.title}{" "}
              <button onClick={() => handleDelete(curr._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
