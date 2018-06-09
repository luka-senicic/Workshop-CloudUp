import * as React from 'react';

export interface HistoryProps {
    historyItems : Array<HistoryItem>;
}

export interface HistoryItem {
    url : string;
    //input : string;
}

export default class HistoryViewer extends React.PureComponent<HistoryProps,{}> {
    public render() : JSX.Element {
        return(
            <>
                {this.props.historyItems && this.props.historyItems.map((x, i) => (
                    // tslint:disable-next-line:no-unused-expression
                    <div key={i}>
                        <img src={x.url} />
                    </div>
                ))
                }
            </>
        );
    }
}