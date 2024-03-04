
import React from "react";

import 'chart.js/auto';
import { Chart, Line } from 'react-chartjs-2';
import moment from "moment";
import 'chartjs-adapter-moment'



//--------------------------------------------------------------------------------------------------------------
function SomeChart() {

    return (
        <Line
            datasetIdKey='id'
            data={{
                labels: ['Jun', 'Jul', 'Aug'],
                datasets: [
                {
                    id: 1,
                    label: '',
                    data: [5, 6, 7],
                },
                {
                    id: 2,
                    label: '',
                    data: [3, 2, 1],
                },
                ],
            }}
        />
    )
}

export default SomeChart