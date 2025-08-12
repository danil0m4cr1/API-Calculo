const math = require('mathjs');

exports.calculos = (req, res) => {
    const numeros = req.body.numeros;

    try {
        const mean = math.mean(numeros);
        const max = math.max(numeros);
        const min = math.min(numeros);

        return res.json({ mean, max, min })
    } catch (error) {
        console.error(error);

        return res.status(500).json({ erro: "Erro interno no servidor" });
    }
}