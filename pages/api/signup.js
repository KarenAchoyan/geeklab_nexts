import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, branch, course } = req.body;
    if (!name || !email || !phone || !branch || !course) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const signup = { name, email, phone, branch, course };
    const filePath = path.join(process.cwd(), 'signups.json');
    let data = [];
    try {
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, 'utf8');
        data = JSON.parse(fileData);
      }
      data.push(signup);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to save signup' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 