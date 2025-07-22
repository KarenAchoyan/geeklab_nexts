import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { index } = req.body;
    if (typeof index !== 'number') {
      return res.status(400).json({ error: 'Invalid index' });
    }
    const filePath = path.join(process.cwd(), 'signups.json');
    try {
      const fileData = fs.readFileSync(filePath, 'utf8');
      let data = JSON.parse(fileData);
      if (index < 0 || index >= data.length) {
        return res.status(400).json({ error: 'Index out of range' });
      }
      data.splice(index, 1);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to delete signup' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 