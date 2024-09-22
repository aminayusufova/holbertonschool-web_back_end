const express = require('express');
const fs = require('fs/promises');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const db = process.argv[2];
    if (!db) {
      return res.status(400).send('Bad Request: Database filename missing.');
    }

    const data = await fs.readFile(db, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const fieldCounters = {};

    lines.slice(1).forEach((line) => {
      const fields = line.split(',');
      if (fields.length >= 4) {
        const field = fields[3].trim();

        if (!fieldCounters[field]) {
          fieldCounters[field] = [];
        }
        fieldCounters[field].push(fields[0].trim());
      }
    });
    const responseBody = [];

    responseBody.push('This is the list of our students');
    responseBody.push(`Number of students: ${lines.length - 1}`);

    for (const field in fieldCounters) {
      if (field) {
        responseBody.push(`Number of students in ${field}: ${fieldCounters[field].length}. List: ${fieldCounters[field].join(', ')}`);
      }
    }

    // res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(responseBody.join('\n'));
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
});

app.listen(port);

module.exports = app;
