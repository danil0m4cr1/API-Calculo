module.exports = (req, res, next) => {
    const numeros = req.body.numeros;
    
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return res.status(400).json({ erro: "Ocorreu um erro. Coloque números válidos! " });
    }

    if (!numeros.every(n => typeof n === "number")) {
        return res.status(400).json({ erro: "O valor deve ser um número" });
    }

    next();
}