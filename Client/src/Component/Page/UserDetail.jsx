import { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    nickname: "",
    useremail: "",
    password: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3000/api/user-list")
      .then((res) => setData(res.data.USerREs));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/del/${id}`)
      .then(() => setData(data.filter((user) => user._id !== id)));
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setFormData({
      username: user.username,
      nickname: user.nickname,
      useremail: user.useremail,
      password: user.password,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/update-user/${selectedUser._id}`, formData)
      .then(() => {
        setData(data.map((user) =>
          user._id === selectedUser._id ? { ...user, ...formData } : user
        ));
        setSelectedUser(null); 
      });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>User List</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>Username</th>
            <th>Nickname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, idx) => (
            <tr key={user._id}>
              <td>{idx + 1}</td>
              <td>{user.profilePicture ? "Image" : "No Image"}</td>
              <td>{user.username}</td>
              <td>{user.nickname}</td>
              <td>{user.useremail}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleEditClick(user)}>Edit</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <form onSubmit={handleUpdateSubmit} style={{ marginTop: "20px" }}>
          <h3>Update User</h3>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="Nickname"
          />
          <input
            name="useremail"
            type="email"
            value={formData.useremail}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default UserDetails;
