const { textConvert, textStats } = require('./text_convert.js');
// let original = 'NODE JS e dobar programski jazik';
// let conv = textConvert('lat2cyr', original);

// console.log(original);
// console.log(conv);

let original = 'немам поима од ноде јс';
let conv = textConvert('cyr2lat', original);

console.log(original);
console.log(conv);


// 
// функција textStats("text blah blah lbah...");

// колку букви има во текстот?
// колку зборови има во текстот?
// колку реченици има во текстот?

// колку зборови имаат повеќе од 5 карактери
// колку зборови имаат помалку од 5 карактери
// колку зборови имаат точно 5 карактери

// {
//     bukvi: 12,
//     zborovi: 3,
//     recenici: 1,
//     gt5: 2,
//     lt5: 1,
//     eq5: 0
// }

const randomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lectus at sapien fringilla interdum sed id lorem. In nec interdum leo, non imperdiet nulla. Sed elementum est vitae sem vulputate, non ornare est facilisis. Mauris eget leo at lectus aliquet elementum sit amet a ligula. Integer quis metus vel odio dictum suscipit a vel mauris. Ut nec nibh a turpis mattis ultrices. Etiam venenatis est id ante pulvinar vulputate. Vivamus elementum ullamcorper consectetur. Donec tempus tortor non justo maximus, interdum imperdiet enim viverra. Donec ultricies commodo efficitur. Sed vel augue dolor. Proin aliquam eros eget ligula cursus tempus. Proin efficitur sem quis ipsum placerat consectetur. Praesent malesuada est sed massa ornare consequat. Nulla massa ligula, finibus ac erat vitae, posuere blandit leo. Suspendisse dignissim egestas dignissim.';

let stats = textStats(randomText);
console.log(stats);
