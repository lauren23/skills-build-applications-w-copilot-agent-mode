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
