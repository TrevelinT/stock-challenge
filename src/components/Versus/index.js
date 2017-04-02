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

    render() {
        const  { player, challenger } = this.props;
        return (
            <div>
                <p>Personagem: {player.name}</p>
                <p>Vidas: {player.stocks}</p>
                <div>
                    <p>Próximo desafiante: {challenger.name}</p>
                    <div>
                        <button onClick={() => this.setState({ win: true })}>Venceu</button>
                        <button onClick={this._onLose}>Perdeu</button>
                        {this.state.win ? <div>
                            <label htmlFor="remaining-stocks">Stocks restantes</label>
                            <select name="remaining-stocks" id="" onChange={this._onWin}>
                                <option value="" selected disabled>Selecione</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div> : null }
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