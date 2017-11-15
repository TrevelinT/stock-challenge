import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TrainingForm from '../../components/TrainingForm';
import Disclaimer from '../../components/Disclaimer';
import Versus from '../../components/Versus';
import Results from '../../components/Results';
import { addPlayer, addBoss, challenge, removeStocks, reset } from '../../actions';

const MAX_STOCKS = 2;

class Wrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1
        };

        this.onWin = this.onWin.bind(this);
        this.onLose = this.onLose.bind(this);
    }

    render() {
        const { step } = this.state;
        const { props } = this;

        if (props.player.stocks === 0 || step === 3 && !props.challenger && !props.challengerList.length) return <Results name={props.characterList[props.player.id].name} enemiesDefeated={props.enemiesDefeated.length} onClick={() => {
            this.props.reset();
            this.changeStep(2);
        }} />;

        return (
            <div>
                {step === 1 ? <Disclaimer onFinish={() => this.changeStep(2)} /> : null}
                {step === 2 ? <TrainingForm source={props.characterList} onSubmit={(obj) => {
                    this.props.addPlayer(obj.player);
                    this.props.addBoss(obj.enemy);
                    this.props.challenge();
                    this.changeStep(3);
                }
                }/> : null}
                {step === 3 ? 
                    <Versus
                        player={{
                            stocks: props.player.stocks,
                            character: props.characterList[props.player.id]
                        }}
                        challenger={props.characterList[props.challenger]}
                        onWin={this.onWin}
                        onLose={this.onLose}
                    /> : 
                null}
            </div>
        );
    }

    onWin(remainingStocks) {
        const stocks = MAX_STOCKS - remainingStocks;
        this.props.removeStocks(stocks);
        this.props.challenge();
    }

    onLose() {
        this.props.removeStocks(MAX_STOCKS);
    }

    changeStep(step) {
        this.setState({
            step
        });
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        addBoss: (boss) => {
            dispatch(addBoss(boss));
        },
        addPlayer: (player) => {
            dispatch(addPlayer(player));
        },
        challenge: () => {
            dispatch(challenge());
        },
        reset: () => {
            dispatch(reset());
        },
        removeStocks: (stocks) => {
            dispatch(removeStocks(stocks));
        }
    };
};

Wrapper.propTypes = {
    addBoss: PropTypes.func.isRequired,
    addPlayer: PropTypes.func.isRequired,
    challenge: PropTypes.func.isRequired,
    removeStocks: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Wrapper);