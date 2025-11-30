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
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Teams</h3>
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
                <tr>
                  <td colSpan="3">No teams found</td>
                </tr>
              )}
              {items.map((it, idx) => (
                <tr key={it.id || idx}>
                  <td>{idx + 1}</td>
                  <td>{it.name || '-'}</td>
                  <td>{(it.members && it.members.length) || it.size || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
