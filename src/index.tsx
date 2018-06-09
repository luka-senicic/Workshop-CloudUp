import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getRandomGiphy } from './util/giphy.service';
import Lecture from './demo/lecture';
import SearchComponent from './components/searchComponent';
import GiphyViewer from './components/giphyViewer';
import Navigation from './components/navigation';
import HistoryViewer from './components/historyViewer';
import {NavigationItem} from './components/navigation';
import {HistoryItem} from './components/historyViewer';

export interface IState {
    source : string;
    selectedNavigationId : string;
    historyItems : Array<HistoryItem>;
}

class Index extends React.Component<{}, IState> {
    constructor(props : {}) {
        super(props);
        this.state = { source : '', selectedNavigationId : 'search', historyItems : [] };
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

    private navigationItems: Array<NavigationItem> = [
        {
            name : 'Search',
            id : 'search'
        },
        {
            name : 'History',
            id : 'history'
        }

    ]

    private onNavigationSelected = (selected : string) => {
        this.setState({
            selectedNavigationId : selected
        });
    }

    private onSave = () => {
        const historyItem: HistoryItem = {
            url : this.state.source
        }

        const items = [...this.state.historyItems, historyItem];
        this.setState({historyItems : items});
    }

    // tslint:disable-next-line:semicolon
    public render(): JSX.Element {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Navigation
                    navigationItems={this.navigationItems}
                    selectedId={this.state.selectedNavigationId}
                    onSelectedChanged={this.onNavigationSelected} />
            {this.state.selectedNavigationId ==='search' &&  //ako je prva komponenta istinita onda ce se druga izvrsiti, if zapravo u jsx-u
                <>
                <GiphyViewer source={this.state.source} onSave={this.onSave} /> 
                <SearchComponent onChange={this.changed}/>
                </>
            }
                
        {this.state.selectedNavigationId ==='history' &&
                <>
                <HistoryViewer
                    historyItems={this.state.historyItems}
                />
                </>}
                
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
