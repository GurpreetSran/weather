import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}
export default (props) => {
  return (
    <div>
      <Sparklines height={40} width={320} data={props.data} >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <span className="chart-labels">{average(props.data)} {props.units}</span>
    </div>
  );
};
