const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const crypto = require('crypto');

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const BASE_URL = 'https://yayawallet.com/api/en';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/transactions', async (req, res) => {
  const { page, search } = req.query;
  const timestamp = Date.now().toString();
  const preHash = `${timestamp}GET/transaction/find-by-user${JSON.stringify({ p: page, q: search })}`;
  const hmac = crypto.createHmac('sha256', API_SECRET);
  const signature = hmac.update(preHash).digest('base64');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'YAYA-API-KEY': API_KEY,
      'YAYA-API-TIMESTAMP': timestamp,
      'YAYA-API-SIGN': signature
    }
  };

  try {
    const response = await axios.get(`${BASE_URL}/transaction/find-by-user?p=${page}&q=${search}`, config);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching transactions' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port  3000');
});