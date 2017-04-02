import React, { PureComponent, PropTypes } from 'react';

class TrainingForm extends PureComponent {
    constructor(props) {
        super(props);

        this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <fieldset>
                        <legend>Stock challenge</legend>
                        <div>
                            <label htmlFor="player-boss">Player boss</label>
                            <input type="text" name="player-boss" id="" ref={(input) => this.player = input}/>
                        </div>
                        <div>
                            <label htmlFor="enemy-boss">Enemy boss</label>
                            <input type="text" name="enemy-boss" id="" ref={(input) => this.enemy = input}/>
                        </div>
                        <button type="submit">Fight!</button>
                    </fieldset>
                </form>
            </div>
        );
    }

    _handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({
            player: this.player.value,
            enemy: this.enemy.value
        });
    }
}

TrainingForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default TrainingForm;