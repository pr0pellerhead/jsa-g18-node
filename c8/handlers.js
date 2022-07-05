const home = (req, res) => {
    res.send('OK Home');
};

const calculator = (req, res) => {
    // console.log(req.params.operation); // го печати URL параметарот operation од /calc/:operation
    // console.log(req.query);
    let result;
    switch (req.params.operation) {
        case 'plus':
            result = Number(req.query.a) + Number(req.query.b);
            break;
        case 'minus':
            result = Number(req.query.a) - Number(req.query.b);
            break;
        case 'delenje':
            result = Number(req.query.a) / Number(req.query.b);
            break;
        case 'mnozenje':
            result = Number(req.query.a) * Number(req.query.b);
            break;
        default:
            result = 0;
    }
    res.send(result.toString());
};

const calculator2 = (req, res) => {
    // console.log(req.body); // req.body ги има JSON податоците испратени од клиентска страна
    let result;
    switch (req.params.operation) {
        case 'plus':
            result = Number(req.body.a) + Number(req.query.b);
            break;
        case 'minus':
            result = Number(req.body.a) - Number(req.body.b);
            break;
        case 'delenje':
            result = Number(req.body.a) / Number(req.body.b);
            break;
        case 'mnozenje':
            result = Number(req.body.a) * Number(req.body.b);
            break;
        default:
            result = 0;
    }
    res.send(result.toString());
};

module.exports = {
    home,
    calculator,
    calculator2
};