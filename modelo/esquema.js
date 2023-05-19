const {Schema, model} = require('mongoose');

const esquema = new Schema({
nombre: String,
urlvideo: String,
ubicacion:String,
temperatura:String,
comollegar:String,
urlimagen1:String,
urlimagen2:String,
urlimagen3:String,
urlimagen4:String,
contenidoCorto: String,
contenido:String

})

const Datos = model('Datos', esquema);
module.exports = Datos;