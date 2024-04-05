// Error: No default engine was specified and no extension was provided

import express from 'express';

// 👇️ if you use the CommonJS require() syntax
// const express = require('express');

const app = express();

// ✅ Configure EJS as your view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'bobbyhadz.com',
    message: 'Example message: bobbyhadz.com',
    salary: 500,
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
