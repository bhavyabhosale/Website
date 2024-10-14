import { signUp, signIn } from '../../services/authService';

export default async function handler(req, res) {
  const { method } = req;
  const { email, password } = req.body;

  if (method === 'POST') {
    try {
      if (req.query.action === 'signup') {
        const user = await signUp(email, password);
        res.status(200).json({ user });
      } else if (req.query.action === 'signin') {
        const user = await signIn(email, password);
        res.status(200).json({ user });
      } else {
        res.status(400).json({ message: 'Invalid action' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
