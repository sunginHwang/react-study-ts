import * as React from 'react';
import { asyncdPayload } from 'store/modules/Content';
interface Props {
    Data: asyncdPayload;
}

const AsyncComponent = ({Data}: Props) => (
    <div>
        <h1>AsyncComponent</h1>
        <div>
            <span>{`id : ${Data.id}`}</span><br/>
            <span>{`userId : ${Data.userId}`}</span><br/>
            <span>{`title : ${Data.title}`}</span><br/>
            <span>{`body : ${Data.body}`}</span><br/>
        </div>
    </div>
);

export default AsyncComponent;