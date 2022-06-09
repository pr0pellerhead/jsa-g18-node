const textConvert = (type, text) => {
    const conversionMap = { a: 'a', b: 'б', v: 'в', g: 'г', d: 'д', gj: 'ѓ', e: 'е', zh: 'ж', z: 'з', dz: 'ѕ', i: 'и', j: 'ј', k: 'к', l: 'л', lj: 'љ', m: 'м', n: 'н', nj: 'њ', o: 'о', p: 'п', r: 'р', s: 'с', t: 'т', kj: 'ќ', u: 'у', f: 'ф', h: 'х', c: 'ц', ch: 'ч', dzh: 'џ', sh: 'ш' };

    for (let c in conversionMap) {
        let regex;
        switch (type) {
            case 'cyr2lat':
                regex = new RegExp(`${conversionMap[c]}`, 'g'); // /џ/g
                //regex = new RegExp(`ж`, 'g'); // /џ/g
                text = text.replace(regex, c);
                break;
            case 'lat2cyr':
                regex = new RegExp(`${c}`, 'g');
                text = text.replace(regex, conversionMap[c]);
                break;
        }
    }
    return text;
};

const textStats = (text) => {
    if(typeof text !== 'string') return;

    let out = {
        bukvi: 0,
        zborovi: 0,
        recenici: 0,
        gt5: 0,
        lt5: 0,
        eq5: 0
    };

    out.bukvi = text.length;
    out.zborovi = text.split(' ').length;
    out.recenici = text.split('.').length;

    let zborovi = text.split(' ');

    for(let z of zborovi) {
        if(z.length === 5) out.eq5++;
        if(z.length > 5) out.gt5++;
        if(z.length < 5) out.lt5++;
    }

    return out;
};

module.exports = {
    textConvert,
    textStats
};