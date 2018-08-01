import React from 'react';
import ComButton from '../../../common/ComButton';
import { TypeButton } from '../../../common/TypeButton';

const DangerButton = TypeButton(ComButton, 'danger', '危险');
const Primary = TypeButton(ComButton, 'primary', '默认');

const SomeButton = () => {
    return (
        <div>
        <DangerButton />
        <Primary />
    </div>
    );
}
export default SomeButton;

