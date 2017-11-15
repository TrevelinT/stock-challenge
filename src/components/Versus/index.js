import React, { Component, PropTypes } from 'react';

class Versus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            win: false,
            remainingStocks: 2,
        };
        this._onWin = this._onWin.bind(this);
        this._onLose = this._onLose.bind(this);
    }

    getStocksStyle(stocks) {
        if (stocks <= 5) {
            return 'has-text-danger';
        } else if (stocks <= 10) {
            return 'has-text-warning';
        } else {
            return 'has-text-primary';
        }
    }

    render() {
        const  { player, challenger } = this.props;
        const stocksStyle = this.getStocksStyle(player.stocks);
        return (
            <div className="container">
                <div className="columns is-desktop">
                    <div className="column">
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-128x128">
                                    <img src={player.character.image} alt={player.character.name} />
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p className="title is-4">{player.character.name}</p>
                                    {/* Insert pluralize */}
                                    <p className={`${stocksStyle} subtitle is-6`}>{player.stocks} vidas</p>
                                    <div>
                                        <div className="field has-addons">
                                            <div className="control">
                                                <div className="select">
                                                    <select name="remaining-stocks" 
                                                    value={this.state.remainingStocks} id="" onChange={(e) => this.setState({
                                                        remainingStocks: e.target.value
                                                    })}>
                                                        <option value="1">Ganhou por 1 stock</option>
                                                        <option value="2">Ganhou por 2 stocks</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="control">
                                                <button className="button is-primary" onClick={this._onWin}>Venceu</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="column"><p className="has-text-centered is-size-2">VS</p></div>
                    <div className="column">
                        <article className="media">
                            <figure className="media-left">
                                <p className="image is-128x128">
                                    <img src={challenger.image} alt={challenger.name} />
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p className="title is-4">{challenger.name}</p>
                                    <button className="button is-primary" onClick={this._onLose}>Venceu</button>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    }

    // Mudar nome pra handleWin ou fazer chamada direta
    _onWin() {
        this.props.onWin(this.state.remainingStocks);
        this.setState({ win: false });
    }

    // Fazer chamada direta
    _onLose() {
        this.props.onLose();
        this.setState({ win: false });
    }

}

Versus.propTypes = {
    player: PropTypes.object.isRequired,
    challenger: PropTypes.object.isRequired,
    onWin: PropTypes.func.isRequired,
    onLose: PropTypes.func.isRequired,
};

export default Versus;