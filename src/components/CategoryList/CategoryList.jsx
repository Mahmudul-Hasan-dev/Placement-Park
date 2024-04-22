import React, { useEffect, useState } from 'react';
import './CategoryList.css'
import Category from '../Category/Category';

const CategoryList = () => {
    const [categories, setCategories] = useState();
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div className="title">
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="category-container">
                {
                    categories && categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }

            </div>
        </div>
    );
};

export default CategoryList;