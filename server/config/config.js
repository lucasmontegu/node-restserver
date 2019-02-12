

//========================
//      Puerto
//========================

process.env.PORT = process.env.PORT || 3000;


//========================
//      Entorno
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//========================
//      Entorno
//========================
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:Carajo+36925@ds131905.mlab.com:31905/cafe'
}

process.env.URLDB = urlDB;
