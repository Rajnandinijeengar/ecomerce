import React, { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleEdit = (user) => {
    setEditId(user._id);
    setEmail(user.email);
    setPassword(user.password);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/users/${editId}`, {
        email,
        password,
      });
      setEditId(null);
      setEmail("");
      setPassword("");
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color:"#17AF26"}}>Registered Users</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped" >
          <thead className="thead-dark" >
            <tr className="text-center" >
              <th style={{backgroundColor:"#17AF26", color:"white"}}>Email</th>
              <th style={{backgroundColor:"#17AF26", color:"white"}}>Password</th>
              <th style={{backgroundColor:"#17AF26", color:"white"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="text-center align-middle">
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
                        className="btn  me-2" style={{backgroundColor:"#17AF26", color:"white"}}
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn "style={{backgroundColor:"#17AF26", color:"white"}}
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
  );
}

export default User;
