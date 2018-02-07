import * as React from 'react';
import { MemberEntity } from '../../../../model';

interface Props {
    member: MemberEntity;
}

export const Row = (props: Props) =>
    <tr>
        <td>
            <img src={props.member.avatar_url} style={{ maxWidth: '5rem' }} />
        </td>
        <td>
            <span>{props.member.id}</span>
        </td>
        <td>
            <span>{props.member.login}</span>
        </td>
    </tr>