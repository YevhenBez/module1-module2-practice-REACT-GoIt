export const UsersList = ({ users, deleteUser }) => {
  return (
    <ul>
      {users.map(({ name, email, id }) => (
        <li key={id}>
          <p>Name:{name}</p>
          <p>Email:{email}</p>
          <button type="button" onClick={() => deleteUser(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
