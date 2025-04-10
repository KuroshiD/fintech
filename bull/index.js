const express = require('express');
const { createBullBoard } = require('@bull-board/api');
const { BullAdapter } = require('@bull-board/api/bullAdapter');
const { ExpressAdapter } = require('@bull-board/express');
const Bull = require('bull');

const redisOptions = {
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
};

const externalQueues = [
  new BullAdapter(new Bull(process.env.BULL_PREFIX || 'bull', { redis: redisOptions })),
];

const app = express();

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: externalQueues,
  serverAdapter,
});

app.use('/admin/queues', serverAdapter.getRouter());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('Bull Board is running on http://localhost:3000/admin/queues');
});