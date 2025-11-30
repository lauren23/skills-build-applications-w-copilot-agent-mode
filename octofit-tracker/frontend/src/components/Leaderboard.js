import React, { useEffect, useState } from 'react';
import API_BASE from '../config';

export default function Leaderboard() {
  const [items, setItems] = useState([]);
  const endpoint = `${API_BASE}/leaderboard/`;

  useEffect(() => {
    console.log('[Leaderboard] fetching from', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log('[Leaderboard] fetched data:', data);
        const payload = data && data.results ? data.results : data;
        setItems(Array.isArray(payload) ? payload : []);
      })
      .catch((err) => console.error('[Leaderboard] fetch error', err));
  }, [endpoint]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4">Leaderboard</h2>
        <div>
          <button className="btn btn-primary">Refresh</button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan="3">No leaderboard data</td></tr>
            )}
            {items.map((it, idx) => (
              <tr key={it.id || idx}>
                <td>{idx + 1}</td>
                <td>{it.username || it.name || JSON.stringify(it)}</td>
                <td>{it.score || it.points || '-'}</td>
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

export default function Leaderboard() {
  const [items, setItems] = useState([]);
  const endpoint = `${API_BASE}/leaderboard/`;

  useEffect(() => {
    console.log('[Leaderboard] fetching from', endpoint);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log('[Leaderboard] fetched data:', data);
        const payload = data && data.results ? data.results : data;
        setItems(Array.isArray(payload) ? payload : []);
      })
      .catch((err) => {
        console.error('[Leaderboard] fetch error', err);
      });
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2>Leaderboard</h2>
      <ol className="list-group list-group-numbered">
        {items.length === 0 && <li className="list-group-item">No leaderboard data</li>}
        {items.map((it, idx) => (
          <li key={it.id || idx} className="list-group-item">
            {it.username || it.name || JSON.stringify(it)}
          </li>
        ))}
      </ol>
    </div>
  );
}
