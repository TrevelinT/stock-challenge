import React, { Component, PropTypes } from 'react';

class Versus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            win: false,
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
                                    <img src={player.image} alt={player.name} />
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p className="title is-4">{player.name}</p>
                                    {/* Insert pluralize */}
                                    <p className={`${stocksStyle} subtitle is-6`}>{player.stocks} vidas</p>
                                    <div>
                                        <div className="buttons">
                                            <button className="button is-primary" onClick={() => this.setState({ win: true })}>Venceu</button>
                                            
                                            {this.state.win ? <div className="field">
                                                <label className="label" htmlFor="remaining-stocks">Stocks restantes</label>
                                                <div className="control">
                                                    <div className="select">
                                                        <select name="remaining-stocks" id="" onChange={this._onWin}>
                                                            <option value="" selected disabled>Selecione</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div> : null}
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

    _onWin(e) {
        this.props.onWin(e.target.value);
        this.setState({ win: false });
    }

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