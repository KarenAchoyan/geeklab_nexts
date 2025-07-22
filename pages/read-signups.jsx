import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import App from '../components/layouts/app';

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'signups.json');
  let signups = [];
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    signups = JSON.parse(data);
  } catch (e) {
    signups = [];
  }
  return { props: { signups } };
}

const ReadSignups = ({ signups: initialSignups }) => {
  const [signups, setSignups] = useState(initialSignups);
  const [deleting, setDeleting] = useState(false);

  const handleDownloadExcel = async () => {
    const xlsx = await import('xlsx');
    const ws = xlsx.utils.json_to_sheet(signups);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Signups');
    const wbout = xlsx.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'signups.xlsx';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  };

  const handleDelete = async (idx) => {
    if (!window.confirm('Are you sure you want to delete this signup?')) return;
    setDeleting(true);
    const res = await fetch('/api/delete-signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ index: idx })
    });
    if (res.ok) {
      setSignups(signups.filter((_, i) => i !== idx));
    } else {
      alert('Failed to delete signup.');
    }
    setDeleting(false);
  };

  return (
    <App>
      <div style={{padding: '100px 0'}}>
        <div style={{ maxWidth: 900, margin: '0px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h1 style={{ textAlign: 'center', margin: 0 }}>Signups</h1>
            <button onClick={handleDownloadExcel} style={{ padding: '8px 18px', borderRadius: 6, border: 'none', background: '#22223b', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Download Excel</button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f5f5f5' }}>
                <th style={{ padding: 12, border: '1px solid #eee' }}>Name</th>
                <th style={{ padding: 12, border: '1px solid #eee' }}>Email</th>
                <th style={{ padding: 12, border: '1px solid #eee' }}>Phone</th>
                <th style={{ padding: 12, border: '1px solid #eee' }}>Branch</th>
                <th style={{ padding: 12, border: '1px solid #eee' }}>Course</th>
                <th style={{ padding: 12, border: '1px solid #eee' }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {signups.length === 0 ? (
                <tr><td colSpan={6} style={{ textAlign: 'center', padding: 24 }}>No signups found.</td></tr>
              ) : (
                signups.map((signup, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: 10, border: '1px solid #eee' }}>{signup.name}</td>
                    <td style={{ padding: 10, border: '1px solid #eee' }}>{signup.email}</td>
                    <td style={{ padding: 10, border: '1px solid #eee' }}>{signup.phone}</td>
                    <td style={{ padding: 10, border: '1px solid #eee' }}>{signup.branch}</td>
                    <td style={{ padding: 10, border: '1px solid #eee' }}>{signup.course}</td>
                    <td style={{ padding: 10, border: '1px solid #eee', textAlign: 'center' }}>
                      <button onClick={() => handleDelete(idx)} disabled={deleting} style={{ background: '#e74c3c', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 12px', cursor: 'pointer' }}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </App>
  );
};

export default ReadSignups; 