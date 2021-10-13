const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const port = process.env.PORT || 9191;
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    })
    .then(() => console.log('Database connection successful!'));

const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});