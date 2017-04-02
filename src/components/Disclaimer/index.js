import React, { PureComponent, PropTypes } from 'react';

class Disclaimer extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>App baseado no stock challenge criado pelo Danilo Rosa</p>
                <p>Segue descrição feita por ele do desafio:</p>
                <blockquote>
                    Desafio extra pro final de semana, criado o "20-stock challenge" pra quem curte jogar Smash!<br/>
Quase um survival mode, vc tem 20 stocks pra derrubar o máximo de chars que conseguir do PC (level 9), pode parecer besta, mas, o limite de stocks muda tudo e cada vacilada faz diferença no final
                </blockquote>
                <p>Vídeos do desafio</p>
                <a href="https://www.youtube.com/watch?v=VLXAyMzLUn0">Video 1</a><br />
                <a href="https://www.youtube.com/watch?v=QVRvuabsnsA">Video 2</a><br />
                <button onClick={this.props.onFinish}>Iniciar</button>
            </div>
        );
    }

}

Disclaimer.propTypes = {
    onFinish: PropTypes.func.isRequired
};

export default Disclaimer;