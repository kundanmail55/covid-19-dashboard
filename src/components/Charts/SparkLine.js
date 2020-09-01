
import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';

export class SparkLine extends Component {
  state = {
    series: []
  }
  componentDidMount() {
    const {data, type} = this.props
    let newData = [];
    for (let i = data.length - 10 ; i < data.length ; i++) {
      if (type === 'totalactive') {
        newData.push(Number(data[i].dailyconfirmed) - (Number(data[i].dailydeceased) + Number(data[i].dailyrecovered)))
      }
      else {
        newData.push(Number(data[i][type]) - Number(data[i-1][type]) )
      }
    }
    this.setState({series:newData})
  }
  render() {
    const {color} = this.props;
    const {series} = this.state;
    var data = {
      series: [series]
    };
  
    var options = {
      showPoint: false,
      axisX: {showGrid: false, showLabel: false, offset: 0},
      axisY: {showGrid: false, showLabel: false, offset: 0}
    };
  
    return (
      <div style={{height:'100%'}}>
        <ChartistGraph data={data} options={options} type={'Line'} 
          listener={
              {"draw" : data => {
                if(data.type === 'line' || data.type === 'area') {
                    data.element.attr({
                      style: `stroke: ${color};`
                    })
                } 
              } 
          }}/>
      </div>
    )
  }
}