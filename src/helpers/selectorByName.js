import { products } from "../data/products";

export const getProductByName=(name='')=>{
    if(name.length===0){
        return [];
    }
    name=name.toLowerCase();
    console.log('estos son todos: ', products);
    return products.filter(product=>product.name.toLowerCase().includes(name));
    
}