import * as React from 'react';

interface Props {
    count: number;
    countIncrease(): void;
    countDecrease(): void;
}

const HeaderComponent = ({count, countIncrease, countDecrease}: Props) => (
    <div>
        <h1>Header Component For Redux</h1>
        <div>
            {count}
        </div>
        <button onClick={countIncrease}>redux count increase</button>
        <button onClick={countDecrease}>redux count decrease</button>
    </div>
);

export default HeaderComponent;