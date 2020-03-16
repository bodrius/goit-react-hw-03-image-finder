import React from 'react'

const Button = ({uploadMoreImg}) => {
    return (
        
        <button className="Button" onClick={uploadMoreImg} type="button">Load more</button>
       
    );
}

export default Button;