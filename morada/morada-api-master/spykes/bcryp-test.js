const bcrypt = require('bcrypt');
const pass = "$2b$11$bqIR/t3hcwuyiIkzyTtTNuINtZocJmdl.DOkhJyMR4RCapCcdCem2";

const main = async () => {
    const plainPassword = "0002";
    const match = await bcrypt.compare(plainPassword, pass);

    if (match) {
        console.log('match');
    } else {
        console.log('no match');
    }
}

main ();


