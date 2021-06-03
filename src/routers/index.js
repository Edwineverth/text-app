import express from 'express';
import IechoService from '../services/index';
const router = express.Router();

const echoService = new IechoService();

router.get('/iecho', async (req, res) => {
  try {
    const result = await echoService.getIecho({ req });
    return res.status(200).json(result);
  } catch (e) {
    res.status(400).json({ error: 'no text' });
  }
});
module.exports = router;
