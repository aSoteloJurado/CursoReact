import * as React from 'react';
import { MemberEntity } from '../../../../model';
import { Row } from './row';

interface Props {
    members : MemberEntity[];
}

export const Body = (props: Props) =>
    <tbody>
        {
            props.members.map((member: MemberEntity) =>
                <Row key={member.id} member={member} />
            )
        }
    </tbody>
