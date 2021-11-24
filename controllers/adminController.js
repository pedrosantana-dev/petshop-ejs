const { uuid } = require('uuidv4');
const fs = require('fs');

exports.painel = (req, res) => {
    res.render('admin');
}

exports.index = (req, res) => {
    let servicosStr = fs.readFileSync('servicos.json', { encoding: 'utf-8' });
    let servicosList = JSON.parse(servicosStr);
    res.send(servicosList);
};

exports.create = (req, res) => {
    const { path } = req.file;
    let servico = { ...req.body, id: uuid(), image: path };
    console.log(servico);

    servicoStr = JSON.stringify(servico);
    fs.writeFileSync('servicos.json', servicoStr);

    res.send(servico);

}