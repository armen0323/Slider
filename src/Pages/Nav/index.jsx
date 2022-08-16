import '../Nav/style.scss';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
function Nav (){
    const item = useSelector(state => state.number)
    const [blok,setblok] = useState(true)
    return(
        <section className={blok ? 'nav-blok':'blok-nav'}>
            <div className='g-justify-align-center nav-logo'>Zay</div>
            <div className='g-align-center g-justify-evenly nav-lists'>
                <Link to='/' className='nav-list'>home</Link>
                <Link to='/about' className='nav-list'>About</Link>
                <Link to='shop' className='nav-list'>Shop</Link>
                <Link to='contact' className='nav-list'>Contact</Link>
            </div>
            <div className='menu icon-menu' onClick={() =>{setblok(!blok)}}></div>
            <div className='btn-input'>
            <input type="text" className='none-input' placeholder='Search...'/>
            <div className='search icon-search'></div>
            <div className='g-justify-evenly g-align-center nav-iconss'>
                <div className='nav-iconsss icon-heart'></div>
                <div className='nav-iconsss icon-cart'></div>
                </div>
            

            </div>
           
            <div className='g-justify-evenly g-align-center nav-icons'>
                <div className='nav-icon icon-search'></div>
                <div className='nav-icon icon-cart'></div>
                <div className='like'>
                <div className=' icon-heart liked'></div>
                <div className='like-caunt'>{item}</div>
                </div>
                
            
               
            </div>
           
        </section>
    )
}
export default Nav