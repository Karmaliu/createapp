import React from 'react';
import { Button } from 'antd';
const ComButton = ({ type, value }) => {
    return (
        <div>
            <Button type={type}>
                {value}
            </Button>
        </div>
    )
}

export default ComButton;