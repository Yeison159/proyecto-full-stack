const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 3002;

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

const propertyRoutes = require('./routes/properties');
app.use('/property', propertyRoutes);

app.listen(port, () => {
    console.log('server running on port ' + port);
});
