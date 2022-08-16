import '../Services/style.scss';
function Services(props){
    return(
        <div className='ser-block'>
            <div className={`ser-logo ${props.image}`}></div>
            <h2 className='ser-title'>{props.name}</h2>

        </div>
    )
}
export default Services