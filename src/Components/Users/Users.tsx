import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch(() => setError("Error Fetching Users"));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;

// Here now we will test the component in which we are making api call and we will test the api behaviour seen by user and then populating of data