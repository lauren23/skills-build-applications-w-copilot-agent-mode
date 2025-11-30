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
      .catch((err) => console.error('[Activities] fetch error', err));
  }, [endpoint]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4">Activities</h2>
        <div>
          <button className="btn btn-primary me-2">New Activity</button>
          <button className="btn btn-outline-secondary">Refresh</button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan="5">No activities found</td></tr>
            )}
            {items.map((it, idx) => (
              <tr key={it.id || idx}>
                <td>{idx + 1}</td>
                <td>{it.name || it.title || JSON.stringify(it)}</td>
                <td>{it.type || '-'}</td>
                <td>{it.duration || it.time || '-'}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2">View</button>
                  <button className="btn btn-sm btn-outline-danger">Delete</button>
                </td>
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
          <table className="table table-striped table-fixed">
            <thead>
              <tr>
                <th>User</th>
                <th>Type</th>
                <th>Duration</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan="4">No activities found</td>
                </tr>
              )}
              {items.map((it, idx) => (
                <tr key={it.id || idx}>
                  <td>{it.user || it.email || '-'}</td>
                  <td>{it.activity_type || it.type || '-'}</td>
                  <td>{it.duration ?? '-'}</td>
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
