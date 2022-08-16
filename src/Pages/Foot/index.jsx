import '../Foot/style.scss';
function Foot(){
    return(
        <section className='foot-blok'>
            <div className='foot-info '>
                <div className='g-justify-betwen foot-titles'>
                    <span className='foot-title'>Zay Shop</span>
                    <span className='foot-title'>Products</span>
                    <span className='foot-title'>Further Info</span>
                </div>
                <div className='g-justify-betwen foot-titles foot-item'>
                <div className='foot-lists g-flex-colume'>
                     <div className=' foot-one'>
                        <div className='foot-logo icon-location'></div>
                        <p className=' foot-sec'>123 Consectetur at ligula 10660</p>
                    </div>   
                    <div className=' foot-one'>
                        <div className='foot-logo icon-phone'></div>
                        <p className=' foot-sec'>010-020-0340</p>
                    </div> 
                    <div className=' foot-one'>
                        <div className='foot-logo icon-namak'></div>
                        <p className=' foot-sec'> info@company.com</p>
                    </div> 
                    </div>

                    <ol className='foot-lists '>
                         <li className='foot-list'>Luxury</li>
                         <li className='foot-list'>Sport Wear</li>
                         <li className='foot-list'>Men's Shoes</li>
                         <li className='foot-list'>Women's Shoes</li>
                         <li className='foot-list'>Popular Dress</li>
                         <li className='foot-list'>Gym Accessories</li>
                         <li className='foot-list'>Sport Shoes</li>
                    </ol>

                    <ol className='foot-lists '>
                         <li className='foot-list'>Home</li>
                         <li className='foot-list'>About Us</li>
                         <li className='foot-list'>Shop Locations</li>
                         <li className='foot-list'>FAQs</li>
                         <li className='foot-list'>Contact</li>
                    </ol>
                </div>
            </div>
            <div className='footer-info g-justify-betwen'>
                <div className='footer-left g-justify-betwen'>
                    <div className='footer-logo icon-facebook-footer'></div>
                    <div className='footer-logo icon-instagram'></div>
                    <div className='footer-logo icon-twitter'></div>
                    <div className='footer-logo icon-linkedin'></div>
                </div>
                <div className='footer-rigth g-justify-betwen'>
                    <input type='text' className='foot-input' placeholder='Email addres'/>
                    <button className='foot-btn'>Subscribe</button>
                </div>
            </div>
        </section>
    )
}
export default Foot