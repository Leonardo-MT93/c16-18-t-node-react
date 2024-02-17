import productModel from "../models/product.model.js";

export default class ProductDAO {

    get = (params) =>{
        return productModel.find(params)
    }

    getBy = (params) =>{
        return productModel.findOne(params);
    }

    save = (doc) =>{
        return productModel.create(doc);
    }

    update = (id,doc) =>{
        return productModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return productModel.findByIdAndDelete(id);
    }
}