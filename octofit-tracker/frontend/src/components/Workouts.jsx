import React, { useEffect, useState } from 'react';
import API_BASE from '../config';

export default function Workouts() {
  const [items, setItems] = useState([]);
  const endpoint = `${API_BASE}/workouts/`;

  useEffect(() => {
    console.log('[Workouts] fetching from', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log('[Workouts] fetched data:', data);
        const payload = data && data.results ? data.results : data;
        setItems(Array.isArray(payload) ? payload : []);
      })
      .catch((err) => {
        console.error('[Workouts] fetch error', err);
      });
  }, [endpoint]);

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Workouts</h3>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Type</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan="4">No workouts found</td>
                </tr>
              )}
              {items.map((it, idx) => (
                <tr key={it.id || idx}>
                  <td>{idx + 1}</td>
                  <td>{it.title || it.name || '-'}</td>
                  <td>{it.type || '-'}</td>
                  <td>{it.duration ?? it.time ?? '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
