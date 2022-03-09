import React from "react";
import '../App.css';

type SquareProps = {
    value: string,
    onClick: () => void
}

type SquareState = {
    value: string | null
}

export class Square extends React.Component<SquareProps, SquareState> {
    render() {
        return(
            <button className="square" onClick={this.props.onClick}>
            {this.props.value}
            </button>
          )
        }
    
}

