import React from 'react';

const Pbutton = ({ fetchUserOnclick }) => {
    console.log(fetchUserOnclick);
    return (
        <div>
            <button onClick={()=>fetchUserOnclick('zzz')}>我是带参数的</button>
        </div>
    )
}

export default Pbutton;