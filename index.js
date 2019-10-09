class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { player1Choice: null, player2Choice: null};
    }
    render() {
        return (
            <div>
                <h1>Rock–Paper–Scissors</h1>
                <PlayerChoice numPlayer={1}/>
                <PlayerChoice numPlayer={2}/>
                <Winner/>
            </div>
        );
    }
}

function PlayerChoice(props) {
    return (
        <div>
            <p>Player {props.numPlayer}: <button>💎</button> <button>🧻</button> <button>✄</button></p>
        </div>
    );
}

function Winner() {
    return (
        <div>
            <p>Player 1 choose 🧻</p>
            <p>Player {1 + 1} choose 🧻</p>
            <p><strong>Player 1 wins!</strong></p>
        </div>
    )
}

ReactDOM.render(<Game />, document.querySelector("#game"));
