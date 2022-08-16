import People from '../../Componenets/People';
import Universal from '../../Componenets/Universal';
import '../Shop/style.scss';
import { useState } from 'react';
import Item from './../../Componenets/Item/index';
import Select from '../../Componenets/Select';
import {peoples} from '../../Componenets/Peoples'



const Shop = () => {
   


    const [selectedValue, setSelectedValue] = useState(null)
  


   const onChangeSelect = (option) => {
        console.log(option)
        setSelectedValue(option);
    }


    const lists = [
        {
            id: 1,
            cotegory: 'Gender',
            gender: 'Men',
            genders: 'Women',
            text: ''

        },
        {
            id: 2,
            cotegory: 'Sale',
            gender: 'Sport',
            genders: 'Lucury',
            text: ''

        },
        {
            id: 1,
            cotegory: 'Product',
            gender: 'Bag',
            genders: 'Sweather',
            text: 'Sunglass'

        },
    ]



    const info = [
        {
            id: 1,
            one: 'Featured',
            two: 'A to Z',
            three: 'item'
        }
    ]
    const sortList = [
        {
            name: 'Featured',
            value: 'featured'
        },
        {
            name: 'Most useg',
            value: 'most_usage'
        },
        {
            name: 'A to Z',
            value: 'sort_a_to_z'
        },

    ]


    return (
        <section className='about-blok'>
            <div className='shop g-justify-betwen'>
                <div className='shop-left'>
                    <h2 className='shop-title'>Categories</h2>
                    {lists.map(el => <Universal key={el.id} items={el} />)}

                </div>
                <div className='shop-rigth'>
                    <div className='shop-rigth-title  g-justify-betwen'>
                        <span className='rigth-title'>All Men's Women's</span>
                        <div className='shop-rigth-div g-pointer' >
                            <Select
                                value={selectedValue}
                                placeholder='Sort'
                                onChange={onChangeSelect}
                                options={sortList}
                            />
                        

                        </div>


                    </div>
                    <div className='shop-people'>
                        {peoples.map(el => <People key={el.id} man={el} />)}
                        <div className='shop-page'>
                            <div className='page-list one-page'>1</div>
                            <div className='page-list'>2</div>
                            <div className='page-list'>3</div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Shop;