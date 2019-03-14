import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { Container } from './style';

class DataAtual extends Component {
    
  constructor(props){
    super(props);
    
    moment.updateLocale('pt-br', {
      weekdays : [
          "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
      ],
    });

    this.state = {
      dataComplete: moment(),
      dayNumber: "",
      dayName: "",
      monthName: "",
      yearNumber: ""
    };

  }

  componentDidMount() {
    this.setState({
      dayNumber: this.state.dataComplete.format('D'),
      dayName: this.state.dataComplete.format("dddd"),
      monthName: this.state.dataComplete.format("MMM"),
      yearNumber: this.state.dataComplete.format("YYYY")
    })
  }

  render() {
    return (
      <Container>
        <span className="dateMain">
          {this.state.dayNumber}
        </span>
        <div className="dateComplement">
          <span className="dayName"> {this.state.dayName} </span>
          <div className="monthAndYear">
            <span> {this.state.monthName} </span>
            <span> {this.state.yearNumber} </span>
          </div>
        </div>
      </Container>
    );
  }
}

export default DataAtual;
