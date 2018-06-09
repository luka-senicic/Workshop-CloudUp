import * as React from 'react';

export interface IProps {
    source : string;
    onSave();
}

export default class GiphyViewer extends React.Component<IProps, {}> {
    constructor(props : IProps) {
        super(props);
    }

    public render() {
        return (<div>
            <img src={this.props.source} />
            <button onClick={this.props.onSave}>Save</button>
            </div>);
    }
}