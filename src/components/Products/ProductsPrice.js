export const productsPrice = (product)=> {
    let price, unit='';
    if(product === 'Banana Plantation' || product === 'Plantain Plantation') {
        
        price = 1000;
        unit = 'bunch';
        return {price, unit}
    }else if(product === 'Garri Production') {
        price=800;
        unit='sack';
        return {price, unit}
    }else if(product === 'Pepper Farming') {
        price=800;
        unit='basket';
        return {price, unit}
    }else if(product === 'Snail Farming') {
        price=500;
        unit='1000 snails'
        return {price, unit}
    }else if(product === 'Snail Feed Production') {
        price=3000;
        unit='sack';
        return {price, unit}
    }else if(product === 'Oil Palm Farming') {
        price=10000;
        unit='100 stands';
        return {price, unit}
    }else  {
        price=200;
        return {price}
    }

}