import React, { Component } from "react";
import { Chart } from 'react-google-charts';

class Timechart extends Component {
  constructor(props) {
    super(props);
    this.state = {"chartType":"Timeline","columns":[{"id":"President","type":"string"},{"id":"Start","type":"date"},{"id":"End","type":"date"}],"rows":[["Washington","1789-04-30T00:00:00.000Z","1797-03-04T00:00:00.000Z"],["Adams","1797-03-04T00:00:00.000Z","1801-03-04T00:00:00.000Z"],["Jefferson","1801-03-04T00:00:00.000Z","1809-03-04T00:00:00.000Z"]],"options":{"width":"600px"},"width":"100%","chartPackage":"timeline"}
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
export default Timechart;
