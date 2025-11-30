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
    <div className="container mt-4">
      <h2>Workouts</h2>
      <ul className="list-group">
        {items.length === 0 && <li className="list-group-item">No workouts found</li>}
        {items.map((it, idx) => (
          <li key={it.id || idx} className="list-group-item">
            {it.title || it.name || JSON.stringify(it)}
          </li>
        ))}
      </ul>
    </div>
  );
}
