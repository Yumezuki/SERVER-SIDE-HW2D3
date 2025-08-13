const Product = require('../models/productModel');

const productController = {
    getAllProducts: (req, res) => {

      Product.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
      });

    },

    getProductById: (req, res) => {

      Product.getById(req.params.id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(result || {});
      });

    },

    searchProducts: (req, res) => {

      Product.searchByKeyword(req.params.keyword, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
      });

    },

    createProduct: (req, res) => {

      Product.create(req.body, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: result.insertId, message: 'Product created' });
      });

    },

    updateProduct: (req, res) => {

      Product.update(req.params.id, req.body, err => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Product updated' });
      });

    },

    softDeleteProduct: (req, res) => {

      Product.softDelete(req.params.id, err => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Product soft-deleted' });
      });

    },

    restoreProduct: (req, res) => {

      Product.restore(req.params.id, err => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Product restored' });
      });

    },

    getProductsView: (req, res) => {

      Product.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.render('products', { products: results });
      });
      
    },

}

module.exports = productController