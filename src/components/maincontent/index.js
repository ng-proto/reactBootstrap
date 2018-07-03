import React, { Component } from "react";
import { Chart } from 'react-google-charts';

class Maincontent extends Component {
  constructor(props) {
    super(props);
    console.log("----")
    console.log(this.props.data);
    console.log("----")
    this.state = {
      options: {
        title: 'Age vs. Weight comparison',
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none',
      },
      data: [["Element","Density",{"role":"style"}],["Copper",8.94,"#b87333"],["Silver",10.49,"silver"],["Gold",19.3,"gold"],["Platinum",21.45,"color: #e5e4e2"]],"width":"100%","height":"300px","options":{"title":"Density of Precious Metals, in g/cm^3","bar":{"groupWidth":"95%"},"legend":{"position":"none"}},"chartEvents":[{"eventName":"onmouseover"}],
    };
  }

  

  render() {
    return (
  

        <div className={'my-pretty-chart-container'}>
        <Chart
        chartType="BarChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="ScatterChart"
        width="100%"
        height="400px"
        legend_toggle
      />
      </div>

    );
  }
}
export default Maincontent;
