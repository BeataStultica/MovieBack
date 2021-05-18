const app = require('./app');
require('dotenv').config();
app.listen(process.env.PORT || 3001, (err) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
});
