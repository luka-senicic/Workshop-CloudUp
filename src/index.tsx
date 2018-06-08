import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getRandomGiphy } from './util/giphy.service';
import Lecture from './demo/lecture';
import SearchComponent from './components/searchComponent';
import GiphyViewer from './components/giphyViewer';

export interface IState{
    source : string;
}

class Index extends React.Component<{}, IState> {
    constructor(props : {}){
        super(props);
        this.state = { source : 'victory' };
        this.searchGiphy(this.state.source);
    }

    private searchGiphy(query?: string) {
        getRandomGiphy(query).then(gifSource => {
            this.setState({source : gifSource});
        });
    }

    private changed = (value : any) => {
        this.searchGiphy(value);
    }

    public render(): JSX.Element {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >

                <GiphyViewer source={this.state.source} />
                <SearchComponent onChange={this.changed}/>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
