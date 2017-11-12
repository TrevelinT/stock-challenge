import React, { PureComponent, PropTypes } from 'react';

class Results extends PureComponent {
    constructor(props) {
        super(props);

        this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
        const { name, enemiesDefeated, onClick } = this.props;
        return (
            <div className="container">
                <p>Resultados:</p>
                <p>Personagem: {name}</p>
                <p>Inimigos derrubados: {enemiesDefeated}</p>
                <div>
                    <button className="button is-primary" onClick={onClick}>Novo Desafio</button>
                </div>
            </div>
        );
    }

    _handleSubmit(e) {
        e.preventDefault();
        console.log('Player', this.player.value);
        console.log('Enemy', this.enemy.value);
    }
}

Results.propTypes = {
    name: PropTypes.string.isRequired,
    enemiesDefeated: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Results;