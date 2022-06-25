let name = 'Ajayi Taiwo John';
let height = '189cm';
let country = 'Nigeria';

let heading = document.createElement('h1');
heading.textContent = `name : ${name}
                       height: ${height}
                       country: ${country}`
document.body.appendChild(heading);
