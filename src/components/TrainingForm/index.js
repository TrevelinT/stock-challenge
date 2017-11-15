import React, { Component, PropTypes } from 'react';
import Autocomplete from '../Autocomplete';

const propTypes = {
    onSubmit: PropTypes.func.isRequired,
    source: PropTypes.object.isRequired,
};

class TrainingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player: '',
            enemy: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(type) {
        return id => {
            this.setState({
                [type]: id
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({
            player: this.state.player,
            enemy: this.state.enemy
        });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="fieldset">
                        <legend className="is-hidden">Stock challenge</legend>
                        <Autocomplete label="Player Boss" source={this.props.source} onClick={this.handleClick('player')} />
                        <Autocomplete label="Enemy Boss" source={this.props.source} onClick={this.handleClick('enemy')} />
                        <button className="button is-primary" type="submit">Fight!</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

TrainingForm.propTypes = propTypes;

export default TrainingForm;