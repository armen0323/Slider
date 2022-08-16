import Item from '../../Componenets/Item'
import ProductItem from '../../Componenets/ProductItem'
import '../Home/style.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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



  const commodity = [
    {
      id: 1,
      category: 'Watches',
      img: '/img/category_img_01.jpg'
    },
    {
      id: 2,
      category: 'Shoes',
      img: '/img/category_img_02.jpg'

    },
    {
      id: 3,
      category: 'Accessories',
      img: '/img/category_img_03.jpg'
    }
  ]

  const products = [
    {
      id: 1,
      img: '/img/feature_prod_01.jpg',
      name: 'Gym Weight',
      sum: '$240.00',
      star: '/img/st.svg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.',
      reviews: 'Reviews (24)'
    },
    {
      id: 2,
      img: '/img/feature_prod_02.jpg',
      name: 'Cloud Nike Shoes',
      sum: '$480.00',
      star: '/img/st.svg',
      text: 'Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.',
      reviews: 'Reviews (48)'
    },
    {
      id: 3,
      img: '/img/feature_prod_03.jpg',
      name: 'Summer Addides Shoes',
      sum: '$360.00',
      star: '/img/st.svg',
      text: 'Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque  lobortis nec.',
      reviews: 'Reviews (274)'
    },
  ]

  return (
    <section className='home-blok'>
      <section className='home-shop'>
        <Slider {...settings}>
          <div className='home-slide'>
            <div className='slide-text'>
              <h2 className='slide-title'>Zay eCommerce</h2>
              <p className='slide-p'>Tiny and Perfect eCommerce Template</p>
              <p className='slide-secnd-p'>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
            </div>
            <div className='slide-img g-back-img' style={{ backgroundImage: `url('/img/banner_img_01.jpg')` }}></div>
          </div>
          <div className='home-slide'>
            <div className='slide-text'>
              <h2 className='slide-title'>Proident occaecat</h2>
              <p className='slide-p'>Aliquip ex ea commodo consequat</p>
              <p className='slide-secnd-p'>You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.</p>
            </div>
            <div className='slide-img g-back-img' style={{ backgroundImage: `url('/img/banner_img_02.jpg')` }}></div>
          </div>
          <div className='home-slide'>
            <div className='slide-text'>
              <h2 className='slide-title'>Repr in voluptate</h2>
              <p className='slide-p'>Ullamco laboris nisi ut</p>
              <p className='slide-secnd-p'>We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</p>
            </div>
            <div className='slide-img g-back-img' style={{ backgroundImage: `url('/img/banner_img_03.jpg')` }}></div>
          </div>
          </Slider>
          <div className='home-titles'>
            <h1 className='g-text-center home-title'>Categories of The Month</h1>
            <p className='g-text-center home-title-text'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
     

        <div className='g-justify-betwen home-imgs'>
         
          {commodity.map(el => <Item key={el.id} items={el} />)}
      
        </div>
      </section>
      <section className='home-product'>
        <div className='product-titles'>
          <h2 className='g-text-center product-title '>Featured Product</h2>
          <p className='g-text-center product-text'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br />
            deserunt mollit anim id est laborum.</p>
        </div>
        <div className='product-item g-justify-betwen'>
          {products.map(el => <ProductItem key={el.id} info={el} />)}
        </div>
      </section>

    </section>
  )
}
export default Home