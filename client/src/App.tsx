import * as React from 'react';
import './App.css';
import MainHeader from './component/MainHeader';
import MainHeaderFnc from './component/MainHeaderFnc';
import MainHeaderContainer from 'containers/MainHeaderContainer';
import MainContentContainer from 'containers/MainContentContainer';

interface Props {
}

interface State {
    HeaderName: string;
    count: number;
}

class App extends React.Component<Props, State> {

    state: State = {
        HeaderName: 'header_name',
        count: 0
    };

    onChangeHeaderName = (): void => {
        this.onIncreaseCount();
        this.setState(
            ({ HeaderName }) => ({ HeaderName: HeaderName + this.state.count })
        );
    }

    onIncreaseCount = (): void => {
        this.setState(
            ({ count }) => ({ count: count + 1 })
        );
    }

    onDoubleIncreaseCount = (count: number): number => {
        return count * 2;
    }

   render() {
    const { onChangeHeaderName } = this;
    return (
      <div className="App">
        <div className="App-Content">
            <h1>start state and props study</h1>
            <MainHeader HeaderName={this.state.HeaderName} OnDoubleIncrease={this.onDoubleIncreaseCount}/>
            <MainHeaderFnc HeaderName={this.state.HeaderName}/>
            <button onClick={onChangeHeaderName}>HeaderChaneButton</button>
        </div>
        <div className="App-Content">
            <h1>start redux study</h1>
            <MainHeaderContainer />
        </div>
        <div className="App-Content">
          <h1>start redux async study</h1>
          <MainContentContainer />
        </div>
      </div>
    );
  }
}

export default App;
