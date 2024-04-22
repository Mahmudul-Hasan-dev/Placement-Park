import React from 'react';
import './Category.css'

const Category = (props) => {
 const {logo,category_name,availability} = props.category
 return (
        <div className='category'>
            <img src={logo} alt="" />
            <h3> {category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

export default Category;