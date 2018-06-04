import * as React from 'react';
import HeaderComponent from 'component/HeaderComponent';
import { actionCreators as headerActions } from 'store/modules/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from 'store/modules';

type Props = {
    count: number;
    HeaderActions: typeof headerActions;
};

class MainHeaderContainer extends React.Component<Props> {
    onIncrement = () => {
        const { HeaderActions } = this.props;
        HeaderActions.increment();
    }
    onDecrement = () => {
        const { HeaderActions } = this.props;
        HeaderActions.decrement();
    }
    onSettingCount = () => {
        const { HeaderActions } = this.props;
        HeaderActions.setting(100);
    }
    render() {
        const { onIncrement, onDecrement, onSettingCount } = this;
        const { count } = this.props;
        return (
            <HeaderComponent
                countIncrease={onIncrement}
                countDecrease={onDecrement}
                countSetting={onSettingCount}
                count={count}
            />
        );
    }
}

export default connect(
    ({ Header }: StoreState) => ({
        count: Header.counts
    }),
    (dispatch) => ({
        HeaderActions: bindActionCreators(headerActions, dispatch)
    })
)(MainHeaderContainer);