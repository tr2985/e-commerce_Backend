// AQUI TRABAJAMOS CON EL MODELO DE PRODUCTOS....

const Product = require('../models/product.model');

//****************************************************************************** */

// getAll Products es un metodo que creamos nosostros, consulta todos los productos
// ejemplo localhost:3000/api/products?price=200000
// o sino 
// localhost:3000/api/products?name=ni
// es uno u otro caso

exports.getAllProducts = async(name, price) =>{
    return await Product.find({
        $or: [
        {name:{$regex: '.*' +  name + '.*' , $options: 'i'}},
        {price:{$gt: price}}

        ]
    }

    );

}

  
//****************************************************************************** */

exports.getProducts = async (id) => {
    return await Product.findById(id);
}


//  create product - product recibe de toda la data y ademas todas las
// caracteristcas de mongoose

exports.createProduct = async (data) => {
    const product = new Product(data);
    return await product.save();
}

// update product by id//

exports.updateProduct = async (id, data) => {

    return await Product.findByIdAndUpdate(id, data, { new: true });
}

// delete product by id//
exports.deleteProduct = async (id) => {

    return await Product.findByIdAndDelete(id);
}