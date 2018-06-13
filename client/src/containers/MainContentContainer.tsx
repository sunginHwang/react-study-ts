import * as React from 'react';
import { asyncdPayload, actionCreators as contentActions } from 'store/modules/Content';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from 'store/modules';
import AsyncComponent from 'component/content/AsyncComponent';

type Props = {
    asyncLoading: boolean;
    ContentActions: typeof contentActions;
    asyncdPayload: asyncdPayload;
};

class MainContentContainer extends React.Component<Props> {
    asyncCall = () => {
        const { ContentActions } = this.props;
        ContentActions.asyncCall();
    }
    render() {
        const { asyncCall } = this;
        const { asyncLoading } = this.props;

        const data = this.props.asyncdPayload.id !== -1 ? <AsyncComponent Data={this.props.asyncdPayload} /> : '';

        const loadingBar = asyncLoading ? <div>비동기 호출 중</div>
                                        : <div>비동기 호출 완료</div>;
        return (
            <div>
                <div>
                    {loadingBar}
                </div>
                <div>
                    {data}
                </div>
                <div>
                    <button onClick={asyncCall}>AsyncCall</button>
                </div>
            </div>
        );
    }
}

export default connect(
    ({ Content }: StoreState) => ({
        asyncdPayload: Content.asyncData,
        asyncLoading: Content.loading
    }),
    (dispatch) => ({
        ContentActions: bindActionCreators(contentActions, dispatch)
    })
)(MainContentContainer);