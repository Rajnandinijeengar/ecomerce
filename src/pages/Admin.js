import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch all login users
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Edit user
  const handleEdit = (user) => {
    setEditId(user._id);
    setEmail(user.email);
    setPassword(user.password);
  };

  // Update user
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/users/${editId}`, {
        email,
        password,
      });
      setMessage("User updated successfully");
      setEditId(null);
      setEmail("");
      setPassword("");
      fetchUsers();
    } catch (err) {
      console.log(err);
      setMessage("Error updating user");
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setMessage("User deleted successfully");
      fetchUsers();
    } catch (err) {
      console.log(err);
      setMessage("Error deleting user");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: "#17AF26" }}>
        Admin Panel - Login Users
      </h2>
      {message && <div className="alert alert-info">{message}</div>}

      <div className="card p-3 shadow-sm">
        <h4 style={{ color: "#17AF26" }}>Login Users</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-striped text-center">
            <thead className="table-dark">
              <tr>
                <th style={{ backgroundColor: "#17AF26", color: "white" }}>Email</th>
                <th style={{ backgroundColor: "#17AF26", color: "white" }}>Password</th>
                <th style={{ backgroundColor: "#17AF26", color: "white" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    {editId === user._id ? (
                      <input
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td>
                    {editId === user._id ? (
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    ) : (
                      "********"
                    )}
                  </td>
                  <td>
                    {editId === user._id ? (
                      <>
                        <button
                          className="btn btn-success btn-sm me-2"
                          onClick={handleUpdate}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => setEditId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn me-2"
                          style={{ backgroundColor: "#17AF26", color: "white" }}
                          onClick={() => handleEdit(user)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn"
                          style={{ backgroundColor: "#17AF26", color: "white" }}
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
