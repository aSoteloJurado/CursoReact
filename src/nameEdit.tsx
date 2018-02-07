import * as React from 'react';
import { OnChangeTextType, onChangeText } from './nameEdit.bussiness';
import { Fragment } from 'react';

interface Props {
    editingUserName: string;
    onNameUpdated : OnChangeTextType;
    onNameSubmit : () => void;
    enableBotton : boolean;
}

export const NameEditComponent = (props : Props) => {
    const onChangeEditingName = (event) => {
        props.onNameUpdated(event.target.value);
    }

    const onNameSubmit = (event) => {
        props.onNameSubmit();
    }

    return (
        <Fragment>
            <label>Update name: </label>
            <input
                value={props.editingUserName}
                onChange={onChangeEditingName}
            />
            <button
                className="btn btn-default"
                onClick={onNameSubmit}
                disabled={props.editingUserName === '' ||
                    props.enableBotton}>
                submit
            </button>
        </Fragment>
    )
}