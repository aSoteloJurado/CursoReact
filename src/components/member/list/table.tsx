import * as React from 'react';
import { MemberEntity } from '../../../model/index';
import { memberAPI } from '../../../api/member.api';
import { Row, Header, Body } from './components';

interface Props {

}

interface State {
    members: MemberEntity[];
}

export class MemberTableComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { members: [] };
    }

    public componentDidMount() {
        memberAPI.getAllMembers().then(
            (members) =>
            this.setState({ members })
        )
    }

    public render() {
        return (
            <div className="row">
                <h2>Members Page</h2>
                <table className="table">
                    <Header />
                    <Body members={this.state.members} />
                </table>
            </div>
        )
    }
}
