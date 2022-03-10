//  Regular Expressions;-

// 1.
let regex = /^([a-zA-Z0-9\.]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

let email = 'ymail@cmail.com';
// let email = '@t5fgf@ciuf.ndvh';
// let email = 'ADFDV@FGVF.DFFR';
// let email = '13ddsf445@hmail.com';



if(regex.test(email)){
    console.log(`The email ${email} matches the expression ${regex.source}`);

}
else{
    console.log(`The email ${email} does not match the expression ${regex.source}`);
}



2.
let rx = /^([a-zA-Z0-9\.*&%]+)@([a-z]+).([a-z]+)(.[a-z]+)?$/;
// // let id = 'kamala@hotmail.com.np';
// // let id = 'kAm&l*a@vmail.gov.np';
// let id = '-kama+la@ymail.23fv';


if(rx.test(id)){
    console.log(`The email ${id} matches the expression ${rx.source}`);
}
else{
    console.log(`The email ${id} does not match the expression ${rx.source}`);
} 



//3.

let reg = /^([a-zA-Z0-9\_.!]+)@([a-zA-Z]+).([a-z]+)(.[a-z]+)$/;
// // let userName = 'greenhill@junkmail.vote';
// // let userName = '@#98hufr$hudebkbc.vdiv';


if(reg.test(userName)){
    console.log(`The email ${userName} matches the expression ${reg.source}`);
}
else{
    console.log(`The email ${userName} does not match the expression ${reg.source}`);
}



// // 4.

let rg = /^([a-zA-Z0-9\*%#]+)@([a-z0-9]+).([a-z]+)(.[a-z])?$/;
// // let user = 'uandme@protonmail.com';
// // let user = 'u+me.le@h4mail.com.np';


if(rg.test(user)){
    console.log(`The email ${user} matches the expression ${rg.source}`);
}
else{
    console.log(`The email ${user} does not match the expression ${rg.source}`);
}
