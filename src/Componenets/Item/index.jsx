import '../Item/style.scss';
function Item(props){
    return(
        <div className='item-blok'>
            <div className='g-back-img item-img' style={{backgroundImage:`url(${props.items.img})`}}></div>
            <p className='g-text-center item-name'>{props.items.category}</p>
            <button className='item-btn'>Go Shop</button>
        </div>
    )
}
export default Item