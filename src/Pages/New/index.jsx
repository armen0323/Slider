import { useState } from 'react';
import '../New/style.scss';
import {peoples} from '../../Componenets/Peoples'
import People from '../../Componenets/People';
import Slider from 'react-slick';
import { pictures } from './Pictures';

function New(){
    const settingsBrends = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    let [caunt,setcaunt] = useState(1)
function min(){
    if(caunt > 1){
        setcaunt(caunt - 1)
    }
}

const [picture, setPicture] = useState('/img/product_single_10.jpg')

    return(
        <div className='new-contenier'>
        <div className='new-blok'>
            <div className='new-left'>
                <img src={picture} alt="Unknown" className='new-left-img'/>
                <div className='new-slide'>
                  <Slider {...settingsBrends}>
                  {
                    pictures.map((el, key) => <img src={el} key={key}  alt='Unknown'  className='img'
                              onClick={() => setPicture(el)}/>)
                  }
                 </Slider>
                </div>
            </div>
            <div className='new-rigth'>
                <p className='new-name'>Active Wear</p>
                <p className='sum'>$25.00</p>
                <div className='new-star-text'><div className='new-star g-back-img'></div>Rating 4.8 | 36 Comments</div>
                <div className='brand'> Brand: <div className='easy'>Easy Wear</div></div>
                <p className='desc'>Description:</p>
                <p className='new-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                <div className='brand'> Avaliable Color : <div className='easy'>White / Black</div></div>
                <p className='desc'>Specification:</p>
                <p className='lorem-ipsum'>Lorem ipsum dolor sit</p>
                <p className='lorem-ipsum'>Amet, consectetur</p>
                <p className='lorem-ipsum'>Adipiscing elit,set</p>
                <p className='lorem-ipsum'>Duis aute irure</p>
                <p className='lorem-ipsum'>Ut enim ad minim</p>
                <p className='lorem-ipsum'>Dolore magna aliqua</p>
                <p className='lorem-ipsum'>Excepteur sint</p>
                <div className='new-size'>
                    <div className='size-left'>
                        <div className='size'>Size :</div>
                        <div className='new-btn'>S</div>
                        <div className='new-btn'>M</div>
                        <div className='new-btn'>L</div>
                        <div className='new-btn'>XL</div>
                    </div>
                    <div className='size-rigth'>
                        <div className='rigth-size'>Quantity</div>
                        <div className='rigth-btn' onClick={min}>-</div>
                        <div className='btn-center'>{caunt}</div>
                        <div className='rigth-btn' onClick={() => {setcaunt(caunt + 1)}}>+</div>
                    </div>
                </div>
                <div className='new-foot'>
                    <button className='new-foot-btn'>Buy</button>
                    <button className='new-foot-btn'>Add To Cart</button>
                </div>
            </div>

        </div>
        <div className='new-foot'>
            <p className='new-name-text'>Related Products</p>
            <div className='new-foot-imgs'>
                <Slider {...settingsBrends}>
            {peoples.map(el => <People key={el.id} man={el} />)}
            </Slider>
            </div>
        </div>
        </div>
    )
}

export default New