const fs = require('fs');
const app = require('express')();

function log(...args) {
    console.log(Date.now(), ...args);
}

app.use(require('cors')());
app.use((req, res, next) => {
    log(req, res);
    return next();
});

app.get('/data/:lang/:id', async (req, res) => {
    const { lang, id } = req.params;
    res.send(await fs.readFileSync(`data/${lang}/${id}`));
});


app.listen(process.env.PORT, () => {
    log('STARTED');
});