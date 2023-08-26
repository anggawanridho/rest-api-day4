const express = require('express');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});