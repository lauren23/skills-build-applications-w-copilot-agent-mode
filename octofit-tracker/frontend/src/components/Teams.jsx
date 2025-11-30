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
