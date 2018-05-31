import * as React from 'react';
import './App.css';
import MainHeader from './component/MainHeader';
import MainHeaderFnc from './component/MainHeaderFnc';
import logo from './logo.svg';

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

   render() {
    const { onChangeHeaderName } = this;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MainHeader HeaderName={this.state.HeaderName}/>
        <MainHeaderFnc HeaderName={this.state.HeaderName}/>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={onChangeHeaderName}>HeaderChaneButton</button>
      </div>
    );
  }
}

export default App;
