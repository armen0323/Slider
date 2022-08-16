import '../ProductItem/style.scss';
function ProductItem(props){
    return(
        <div className='productitem-blok'>
            <div className='productitem-img g-back-img' style={{backgroundImage:`url(${props.info.img})`}}></div>
            <div className='stars g-justify-around'>
                <div className='star g-back-img'style={{backgroundImage:`url(${props.info.star})`}}></div>
                <span className='star-text g-justify-align-center'>{props.info.sum}</span>
            </div>
            <h2 className='product-title'>{props.info.name}</h2>
            <p className='product-text'>{props.info.text}</p>
            <span className='reviews'>{props.info.reviews}</span>    
        </div>
    )
}

export default ProductItem