import React, { useEffect, useState } from 'react';
import API_BASE from '../config';

export default function Activities() {
  const [items, setItems] = useState([]);
  const endpoint = `${API_BASE}/activities/`;

  useEffect(() => {
    console.log('[Activities] fetching from', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log('[Activities] fetched data:', data);
        const payload = data && data.results ? data.results : data;
        setItems(Array.isArray(payload) ? payload : []);
      })
      .catch((err) => {
        console.error('[Activities] fetch error', err);
      });
  }, [endpoint]);

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Activities</h3>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Type</th>
                <th>Duration</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan="5">No activities found</td>
                </tr>
              )}
              {items.map((it, idx) => (
                <tr key={it.id || idx}>
                  <td>{idx + 1}</td>
                  <td>{it.user || it.username || '-'}</td>
                  <td>{it.type || it.activity_type || '-'}</td>
                  <td>{it.duration ?? it.time ?? '-'}</td>
                  <td>{it.date || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
