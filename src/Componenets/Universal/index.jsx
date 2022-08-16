import { useState } from 'react';
import '../Universal/style.scss';

function Universal(props) {
    const [item, setitem] = useState(false);




    return (
        <div className='universal-blok'>
            <div className='universal-content  ' >
                <div className='universal-left'>{props.items.cotegory}</div>
                <div className='universal-rigth icon-circle-down' onClick={() => setitem(!item)}></div>
            </div>
            <div className={item ? 'universalBlok ' : 'universalDisplay'}>
                <p className='universal-text'>{props.items.gender}</p>
                <p className='universal-text'>{props.items.genders}</p>
                <p className='universal-text'>{props.items.text}</p>
            </div>
        </div>
    )
}

export default Universal