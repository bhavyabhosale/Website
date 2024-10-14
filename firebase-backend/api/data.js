import { addData, getData, updateData, deleteData } from '../../services/firestore';

export default async function handler(req, res) {
  const { method } = req;
  const { id, data } = req.body;

  try {
    switch (method) {
      case 'POST':
        const docId = await addData(data);
        res.status(200).json({ id: docId });
        break;
      case 'GET':
        const dataList = await getData();
        res.status(200).json(dataList);
        break;
      case 'PUT':
        await updateData(id, data);
        res.status(200).json({ message: 'Updated successfully' });
        break;
      case 'DELETE':
        await deleteData(id);
        res.status(200).json({ message: 'Deleted successfully' });
        break;
      default:
        res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
