import React from "react";

type SquareProps = {
    value: number,
    onClick: (n: number) => void
}

type SquareState = {
    value: string | null
}

export class Square extends React.Component<SquareProps, SquareState> {
    constructor(props: SquareProps) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.setState({ value: 'X' })}
            >
                {this.state.value}
            </button>
        );
    }
}