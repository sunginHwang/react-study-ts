import * as React from 'react';

interface Props {
    HeaderName: string;
}

const MainHeaderFnc = ({HeaderName}: Props) => (
    <div>
        <h1>mainHeaderFncComponent</h1>
        <div>
            {HeaderName}
        </div>
    </div>
);

export default MainHeaderFnc;