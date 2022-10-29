const express = require('express');
const loginRoutes = require('./routes/login.router');
const userRoutes = require('./routes/user.router');

// ...

const app = express();

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/user', userRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
