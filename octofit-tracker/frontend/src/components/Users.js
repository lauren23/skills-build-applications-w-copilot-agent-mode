import React, { useEffect, useState } from 'react';
import API_BASE from '../config';

export default function Users() {
  const [items, setItems] = useState([]);
  const endpoint = `${API_BASE}/users/`;

  useEffect(() => {
    console.log('[Users] fetching from', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log('[Users] fetched data:', data);
        const payload = data && data.results ? data.results : data;
        setItems(Array.isArray(payload) ? payload : []);
      })
      .catch((err) => console.error('[Users] fetch error', err));
  }, [endpoint]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4">Users</h2>
        <div>
          <button className="btn btn-primary">Invite User</button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan="3">No users found</td></tr>
            )}
            {items.map((it, idx) => (
              <tr key={it.id || idx}>
                <td>{idx + 1}</td>
                <td>{it.username || it.name || JSON.stringify(it)}</td>
                <td>{it.email || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import API_BASE from '../config';

export default function Users() {
  const [items, setItems] = useState([]);
  const endpoint = `${API_BASE}/users/`;

  useEffect(() => {
    console.log('[Users] fetching from', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log('[Users] fetched data:', data);
        const payload = data && data.results ? data.results : data;
        setItems(Array.isArray(payload) ? payload : []);
      })
      .catch((err) => {
        console.error('[Users] fetch error', err);
      });
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <ul className="list-group">
        {items.length === 0 && <li className="list-group-item">No users found</li>}
        {items.map((it, idx) => (
          <li key={it.id || idx} className="list-group-item">
            {it.username || it.email || JSON.stringify(it)}
          </li>
        ))}
      </ul>
    </div>
  );
}
