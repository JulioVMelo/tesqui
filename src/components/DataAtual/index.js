import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { Container } from './style';

class DataAtual extends Component {
    
  dayNumber = moment().format("D");
  dayName = moment().format("d");
  monthName = moment().format("MMM");
  yearNumber = moment().format("YYYY");

  constructor(props){
    super(props);
    
    moment.updateLocale('pt-BR', {
      weekdays : [
          "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"
      ],
    });
  }
  
  componentWillMount(){
    this.dayName = moment.weekdays(this.dayName);
  }

  render() {
    return (
      <Container>
        <span className="dateMain">
          {this.dayNumber}
        </span>
        <div className="dateComplement">
          <span className="dayName"> {this.dayName} </span>
          <div className="monthAndYear">
            <span> {this.monthName} </span>
            <span> {this.yearNumber} </span>
          </div>
        </div>
      </Container>
    );
  }
}

export default DataAtual;
