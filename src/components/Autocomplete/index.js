import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    source: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string
        })
    ).isRequired,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

class Autocomplete extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textField: '',
            showAutocomplete: false
        };

        this.handleSelectOption = this.handleSelectOption.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    }

    handleTextFieldChange({ target }) {
        this.setState({
            textField: target.value,
            showAutocomplete: true,
        });
    }

    handleSelectOption(id) {
        return () => {
            this.setState({
                textField: this.props.source[id].name,
                showAutocomplete: false
            });
            this.props.onClick(id);
        };
    }

    getAutocompleteFilter(source, comparisonValue) {
        return Object.keys(source).filter(id => source[id].name.includes(comparisonValue));
    }

    renderAutocomplete() {
        return (
            <ul className="autocomplete-list">
                {this.getAutocompleteFilter(this.props.source, this.state.textField).map(
                    id => (
                        <li
                            key={id}
                            onClick={this.handleSelectOption(id)}
                            className="autocomplete-item"
                        >
                            {this.props.source[id].name}
                        </li>
                    )
                )}
            </ul>
        );
    }

    render() {
        return (
            <div className="field autocomplete">
                <div className="label">{this.props.label}</div>
                <div className="control">
                    <input
                        type="text"
                        className="input"
                        value={this.state.textField}
                        onChange={this.handleTextFieldChange}
                    />
                </div>
                {this.state.showAutocomplete ? this.renderAutocomplete() : null}
            </div>
        );
    }
}

Autocomplete.propTypes = propTypes;

export default Autocomplete;