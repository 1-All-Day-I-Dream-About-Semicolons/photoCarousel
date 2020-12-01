const app = require('./app.js');
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}/photos/1`);
});