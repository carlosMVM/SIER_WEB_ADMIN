import React, { Component } from 'react';
import { Chart } from 'react-charts'

class InvolvementComponent extends Component {
    axes = [
        { primary: true, type: 'ordinal', position: 'bottom' },
        { position: 'left', type: 'linear', stacked: false }
    ]
    data = [
        {
            label: 'Series 1',
            data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
        },
        {
            label: 'Series 2',
            data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
        },
        {
            label: 'Series 3',
            data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
        }
    ]
    render() {
        return (
            <Chart data={this.data} axes={this.axes} tooltip />
        )
    }
}
export default InvolvementComponent;