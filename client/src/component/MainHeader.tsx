import * as React from 'react';

interface Props {
    HeaderName: string;
    OnDoubleIncrease(count: number): number;
}

interface State {
    headerFncCount: number;
}

class MainHeader extends React.Component<Props, State>  {

    state: State = {
      headerFncCount: 1
    };

    onPropsDoubleIncrease = (): void => {
        this.setState(
            ({ headerFncCount }) => ({ headerFncCount: this.props.OnDoubleIncrease(this.state.headerFncCount) })
        );
        global.console.log('doubleIncrease Success');
    }

     render() {
        const { HeaderName } = this.props;
        return (
            <div>
                <p>{HeaderName}</p>
                <p>{this.state.headerFncCount}</p>
                <button onClick={this.onPropsDoubleIncrease}>PropsCountDoubleIncrease</button>
            </div>
        );
    }
}

export default MainHeader;
