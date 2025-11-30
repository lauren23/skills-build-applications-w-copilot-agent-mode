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
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Users</h3>
        <div className="table-responsive">
          <table className="table table-striped table-fixed">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan="3">No users found</td>
                </tr>
              )}
              {items.map((it, idx) => (
                <tr key={it.id || idx}>
                  <td>{it.name || it.username || '-'}</td>
                  <td>{it.email || '-'}</td>
                  <td>{it.team || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
