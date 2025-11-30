import React, { useEffect, useState } from 'react';
import API_BASE from '../config';

export default function Teams() {
  const [items, setItems] = useState([]);
  const endpoint = `${API_BASE}/teams/`;

  useEffect(() => {
    console.log('[Teams] fetching from', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log('[Teams] fetched data:', data);
        const payload = data && data.results ? data.results : data;
        setItems(Array.isArray(payload) ? payload : []);
      })
      .catch((err) => console.error('[Teams] fetch error', err));
  }, [endpoint]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4">Teams</h2>
        <div>
          <button className="btn btn-primary">New Team</button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan="3">No teams found</td></tr>
            )}
            {items.map((it, idx) => (
              <tr key={it.id || idx}>
                <td>{idx + 1}</td>
                <td>{it.name || JSON.stringify(it)}</td>
                <td>{(it.members && it.members.length) || it.size || '-'}</td>
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

export default function Teams() {
  const [items, setItems] = useState([]);
  const endpoint = `${API_BASE}/teams/`;

  useEffect(() => {
    console.log('[Teams] fetching from', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log('[Teams] fetched data:', data);
        const payload = data && data.results ? data.results : data;
        setItems(Array.isArray(payload) ? payload : []);
      })
      .catch((err) => {
        console.error('[Teams] fetch error', err);
      });
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2>Teams</h2>
      <ul className="list-group">
        {items.length === 0 && <li className="list-group-item">No teams found</li>}
        {items.map((it, idx) => (
          <li key={it.id || idx} className="list-group-item">
            {it.name || JSON.stringify(it)}
          </li>
        ))}
      </ul>
    </div>
  );
}
