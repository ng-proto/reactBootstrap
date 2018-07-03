import React, { Component } from "react";
import { Chart } from 'react-google-charts';

class Donutchart extends Component {
  constructor(props) {
    super(props);
    this.state = {"chartTitle":"DonutChart","chartType":"PieChart","width":"100%",
    "data":[["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]],"options":{"title":"My Daily Activities","pieHole":0.4,"is3D":true}};
  }

  

  render() {
    return (
  

        <div className={'my-pretty-chart-container'}>
        <Chart
        chartType={this.state.chartType}
        data={this.state.data}
        options={this.state.options}
        graph_id={this.state.chartTitle}
        width={this.state.width}
        height={this.state.height}
        legend_toggle
      />
      </div>

    );
  }
}
export default Donutchart;
