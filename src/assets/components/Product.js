import React from "react";




function Product({labeltext, picture, productname, price}) {
    return (
        <article>
            <span>{labeltext}</span>
            <img src={picture} alt='Voorbeeld van product'/>
            <p>{productname}</p>
            <h4>€{price},-</h4>
        </article>

    );
}

export default Product;










