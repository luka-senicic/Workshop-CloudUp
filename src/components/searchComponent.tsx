import * as React from 'react';

interface State {
    search_string : string;
}

interface Props {
    onChange(value : any);
}

export default class SearchComponent extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);
        this.state = { search_string : '' };
    }

    private updateState = (e : any) => {
        this.setState({search_string : e.target.value});
    }

    private buttonClick = () => {
        this.props.onChange(this.state.search_string);
    }

    public render() {
        return(
            <div>
                <input onChange={this.updateState} value={this.state.search_string} />
                <button onClick={this.buttonClick} > alert </button>
            </div>
        );
    }
}