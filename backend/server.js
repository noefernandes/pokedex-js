const express = require('express');
const app = express();
const PORT = 3500;

app.use(express.json());

app.use('/', require('./routes'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
