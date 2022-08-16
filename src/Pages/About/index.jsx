import Slider from 'react-slick';
import Brand from '../../Componenets/Brand';
import Services from '../../Componenets/Services';
import '../About/style.scss';
function About() {


    const settingsBrends = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
    const service = [
        {
            image: 'icon-truck',
            name: 'Delivery Services'
        },

        {
            image: 'icon-exchange',
            name: 'Shipping & Return'
        },
        {
            image: 'icon-tokos',
            name: 'Promotion'
        },
        {
            image: 'icon-user',
            name: '24 Hours Service'
        }
    ]
    const brands = [
        {
            id: 1,
            img: '/img/brand_01.png'
        },
        {
            id: 2,
            img: '/img/brand_02.png'
        },
        {
            id: 3,
            img: '/img/brand_03.png'
        },
        {
            id: 4,
            img: '/img/brand_04.png'
        },
        {
            id: 5,
            img: '/img/brand_01.png'
        },
        {
            id: 6,
            img: '/img/brand_02.png'
        },
        {
            id: 7,
            img: '/img/brand_03.png'
        },
        {
            id: 8,
            img: '/img/brand_04.png'
        },

    ]


    return (
        <section className='about-blok'>
            <div className='about-as'>
                <div className='about-titles g-justify-betwen g-align-center'>
                    <div className='title-left'>
                        <h2 className='about-title'>About Us</h2>
                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='title-img g-back-img'></div>
                </div>
            </div>
            <div className='servises'>
                <h2 className='servises-titles'>Our Services</h2>
                <p className='services-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</p>
                <div className='about-info'>
                    {
                        service.map((el, index) => {
                            return <Services image={el.image} name={el.name} />
                        })
                    }
                </div>
            </div>

            <div className='brands'>

                <h2 className='brands-title g-text-center'>Our Brands</h2>
                <p className='brands-text g-text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet. </p>


            </div>
            <div className='about-slide'>
                <Slider {...settingsBrends}>
                    {brands.map(el => <Brand key={el.id} brand={el} />)}
                </Slider>
            </div>

        </section>
    )
}

export default About