import React, { Component } from "react";
import { Chart } from 'react-google-charts';

class Tablechart extends Component {
  constructor(props) {
    super(props);
    this.state = {"chartType":"Table","width":"100%",
    "columns":[{"type":"string","label":"Name"},{"type":"number","label":"Salary"},{"type":"boolean","label":"Full Time Employee"}],
    "rows":[["Mike",{"v":10000,"f":"$10,000"},true],["Jim",{"v":8000,"f":"$8,000"},false],["Alice",{"v":12500,"f":"$12,500"},true],["Bob",{"v":7000,"f":"$7,000"},true]],"chartPackages":["table"]}
}
  render() {
    return (
  

        <div className={'my-pretty-chart-container'}>
        <Chart
        chartType={this.state.chartType}
        data={this.state.data}
        options={this.state.options}
        columns={this.state.columns}
        rows={this.state.rows}
        graph_id={this.state.chartType}
        width={this.state.width}
        height={this.state.height}
        legend_toggle
      />
      </div>

    );
  }
}
export default Tablechart;
