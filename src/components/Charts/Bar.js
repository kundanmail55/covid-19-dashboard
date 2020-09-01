
import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
import styled from 'styled-components';

const ChartBackroundStyle = styled.div`
    background: ${props => props.type === 'totalconfirmed' ? 'rgba(255,7,58,.12549)' : 
                props.type === 'totalactive' ? 'rgba(0,123,255,.0627451)' :
                props.type === 'totalrecovered' ? 'rgba(40,167,69,.12549)' : 'rgba(108,117,125,.0627451)'};
    padding: 10px;
    border-radius: 3px;
`;

const ChartName = styled.h1`
  color: ${props => props.type === 'totalconfirmed' ? 'red' : 
          props.type === 'totalactive' ? '#007bff' :
          props.type === 'totalrecovered' ? '#28a745' : '#6c757d'};
`;

export class Bar extends Component {
  state = {
    labels: [],
    series: []
  }
  componentDidMount() {
    const {data, type} = this.props;
    let newData = [], newLabels = [];
    for (let i = data.length - 30 ; i < data.length ; i++) {
      if (type === 'totalactive') {
        if (i%5 === 0) newLabels.push(data[i].date);
        else newLabels.push('');
        newData.push(Number(data[i].dailyconfirmed) - (Number(data[i].dailydeceased) + Number(data[i].dailyrecovered)));
      }
      else {
        if (i%5 === 0) newLabels.push(data[i].date);
        else newLabels.push('');
        newData.push(Number(data[i][type]) - Number(data[i-1][type]));
      }
    }
    this.setState({series:newData, labels: newLabels})
  }
  render() {
    const {type, chartType, color, name} = this.props;
    const {labels, series} = this.state;
    var data = {
      labels: labels,
      series: [series]
    };

    var options = {
      showArea: true,
      fullWidth: true,
      showPoint: false,
      axisY: {
          showLabel: true,
          showGrid: false,
      },
      axisX: {
          showLabel: true,
          showGrid: false,
      }
    };

    return (
          <ChartBackroundStyle type={type}>
            <ChartName type={type}>{name}</ChartName>
            <ChartistGraph className={type} data={data} options={options} type={chartType} 
              listener={
                  {"draw" : data => {
                    if (data.type === 'bar') {
                      data.element.attr({
                          style: `stroke: ${color};`
                      })
                    }
                  } 
              }}/>
      </ChartBackroundStyle>
    )
  }
}