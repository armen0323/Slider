import './style.scss';

function Brand(props){
    return(
        <div className='brand-blok g-back-img'style={{backgroundImage:`url(${props.brand.img})`}}>

        </div>
    )

}
export default Brand