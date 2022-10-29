const express = require('express');
const loginRoutes = require('./routes/login.router');
const userRoutes = require('./routes/user.router');
const categoriesRoutes = require('./routes/categories.router');
// ...

const app = express();

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoriesRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
