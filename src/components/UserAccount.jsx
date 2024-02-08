import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

const UserAccount = () => {
  const users = [
    "grumpy19",
    "tickle222",
    "jessjelly",
    "cooljmessy",
    "weegebump",
    "happyamy20160",
  ];

  const { setSelectedUser } = useContext(UserContext);

  return (
    <section>
      <h2>Choose User Account</h2>
      {users.map((user) => (
        <Link key={user} to="/navigation" onClick={() => setSelectedUser(user)}>
          <p>{user}</p>
        </Link>
      ))}
    </section>
  );
};

export default UserAccount;
