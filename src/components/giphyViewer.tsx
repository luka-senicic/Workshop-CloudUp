import * as React from 'react';

export interface IProps {
    source : string;
}

export default class GiphyViewer extends React.Component<IProps, {}> {
    constructor(props : IProps) {
        super(props);
    }

    public render() {
        return <img src={this.props.source} />;
    }
}