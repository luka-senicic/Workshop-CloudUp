import * as React from 'react';

export interface NavigationProps {
    navigationItems : Array<NavigationItem>;
    selectedId : string;
    // tslint:disable-next-line:typedef
    onSelectedChanged(selectedId);
}

export interface NavigationItem {
    name : string;
    id : string;
}

export interface NavigationItemProps {
    item : NavigationItem;
    onClicked(id : string);
    isSelected : boolean;
}

export default class Navigation extends React.Component<NavigationProps, never> {
    public render() : JSX.Element {
        return(
            <>
                {this.props.navigationItems && this.props.navigationItems.map((x, i) => (
                   // tslint:disable-next-line:no-unused-expression
                   <NavigationItemComponent 
                   item={x} onClicked={this.props.onSelectedChanged} 
                   key={i} 
                   isSelected={x.id === this.props.selectedId} />
                ))}
            </>
        );
    }
}

export class NavigationItemComponent extends React.PureComponent<NavigationItemProps, never>{
    private onClicked = () => {
        this.props.onClicked(this.props.item.id);
    }

    public render() : JSX.Element {
        let color : string = this.props.isSelected ? 'red' : 'black';
        return(
            <div onClick={this.onClicked} style={{marginLeft: '5px' , cursor : 'pointer', color : color}}>
            {this.props.item.name}
            </div>
        );
    }
}