import React, { PureComponent, PropTypes } from 'react';

class TrainingForm extends PureComponent {
    constructor(props) {
        super(props);

        this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this._handleSubmit}>
                    <fieldset className="fieldset">
                        <legend className="is-hidden">Stock challenge</legend>
                        <div className="field">
                            <label className="label" htmlFor="player-boss">Player boss</label>
                            <div className="control">
                                <input className="input" type="text" name="player-boss" id="" ref={(input) => this.player = input}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label" htmlFor="enemy-boss">Enemy boss</label>
                            <div className="control">
                                <input className="input" type="text" name="enemy-boss" id="" ref={(input) => this.enemy = input}/>
                            </div>
                        </div>
                        <button className="button is-primary" type="submit">Fight!</button>
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