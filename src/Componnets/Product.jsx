function Product(props){
    return(
        <div className="prodact">
        <a href="" className="prodact-link">
            <h3>{props.title}</h3>
            <img className="prodact-img" src={props.image} alt={props.alt} />
            <p className="prodact-iscription">{props.description}</p>
            {props.on_sale? <div className="warp-price"> <p className="prodact-price">{props.price}</p><p className="price-on-sale">{props.sale_price}</p> </div> : <p className="prodact-price">{props.price}</p> }
        </a>
      </div>
    );
}

export default Product;