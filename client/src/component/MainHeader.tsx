import * as React from 'react';

interface Props {
    HeaderName: string;
}

class MainHeader extends React.Component<Props>  {
     render() {
        const { HeaderName } = this.props;
        return (
            <div>
                <p>{HeaderName}</p>
            </div>
        );
    }
}

export default MainHeader;
