import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Container } from './style';

class DataAtual extends Component {
  
  componentDidMount(){
    moment.locale('pt-BR');
  }
  
  date = moment();
  format = "DD [de] MMMM";
  dataAtual = moment(this.date).format(this.format);
    
  render() {
    return (
      <Container>
        <span>
          {this.dataAtual}
        </span>
      </Container>
    );
  }
}

export default DataAtual;
