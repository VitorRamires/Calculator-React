
import React, {Component} from 'react'

 class Display extends Component {
    render() {
        return(
        <div className = {"display borderBlack"}>
            {this.props.value}
        </div>
        )
    };//render
};

export default Display

//o props vai surtir efeito, quando colocarmos o valor dele na hora de renderizar o que queremos, nesse caso, criamos um display, com a propriedade value. Esse value no arquivo da calculadora, está setado com 123456, só pra representar que a prop está pegando.