import '../Select/style.scss'
import Item from './../Item/index';
import { useRef, useState } from 'react';
function Select(props) {

    const [isOpenList, setIsOpenList] = useState(false)

    const selectItem = (item)=>{
        props.onChange(item)
        setIsOpenList(!isOpenList)
    }

    return (

      

        <div className='G-select'>
            <div className='G-select-header' onClick={()=>setIsOpenList(!isOpenList)}>
                {props.value ? props.value : props.placeholder}
            </div>
          {isOpenList?  <div className='G-select-options'>
                <ul>
                    {props.options.map((item, index) => {
                        return <li className='g-list-none g-pointer' onClick={() => selectItem(item.value)}>{item.name}</li>
                    })}
                </ul>
            </div>: null}
        </div>


    )
}
export default Select