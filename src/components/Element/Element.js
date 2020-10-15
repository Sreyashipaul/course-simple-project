import React, { useState } from 'react';
import courseData from '../../courseData/courseData';

const Element = () => {
    const first15 = courseData.slice(0,15);
    const [] = useState(first15);
    return (
        <div>
            <h1> this is Element.</h1>
        </div>
    );
};

export default Element;