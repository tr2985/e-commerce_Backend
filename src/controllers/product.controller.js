
const productRepository = require('../repository/product.repository');



// seach product by name property
// parametros por query o GET son opcionales
exports.getAllProducts = async (req, res) => {

    try {

        const name = req.query.name;
        const price = req.query.price;

        const product = await productRepository.getAllProducts(name, price);

        res.status(200).json(product);
    } catch (error) {

        res.status(500).json({ Error: 'Error imprevisto ' + error })
    }

}




//  create new product 

exports.createProducts = async (req, res) => {

    try {

        const product = await productRepository.createProduct(req.body);

        res.status(201).json(product);
    } catch (error) {

        res.status(500).json({ Error: 'Error imprevisto ' + error })
    }

}


// update product by id//
exports.updateProducts = async (req, res) => {

    try {

        const productId = req.params.id;

        const product = await productRepository.updateProduct(productId, req.body);
        res.status(200).json(product);
    } catch (error) {

        res.status(500).json({ Error: 'Error imprevisto ' + error })
    }

}



// delete product by id//

exports.deleteProducts = async (req, res) => {

    try {

        const productId = req.params.id;
        const product = await productRepository.deleteProduct(productId);
        res.status(204).json({ message: 'Producto eliminado' });
    } catch (error) {

        res.status(500).json({ Error: 'Error imprevisto ' + error })
    }
}