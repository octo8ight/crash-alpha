
import React from "react";

import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import running from "../assets/running.gif";
import stop from "../assets/running.jpg";
import finish from "../assets/newFile-10.avif";

//--------------------------------------------------------------------------------------------------------------
function SomeChart(props) {

    return (
        <div className="flex relative">
            {/* <Line

                datasetIdKey='id'
                data={{
                    labels: props.params.data,
                    datasets: [
                    {
                        id: 1,
                        label: '',
                        data: labels,
                    },
                    ]
                }}
            /> */}
            {(props.params.waiting != 0) && <img className="mx-auto w-1/2" src={stop} />}
            {(props.params.isEnd) && <img className="mx-auto w-1/2" src={finish} />}
            {props.params.waiting == 0 && props.params.isEnd == false && <img className="mx-auto w-1/2" src={running} />}
            {props.params.waiting == 0 && <h1 className="absolute text-6xl pl-[780px] pt-[210px] font-bold text-green-500">{props.params.currentScore.toFixed(2)}x</h1>}
            {
                props.params.waiting != 0 && <div className="absolute w-2/5 h-6 bg-gray-200 rounded-full dark:bg-gray-700 ml-[320px] mt-[250px]">
                    <span className="absolute text-white">{props.params.waiting}s</span>
                    <div className="h-6 bg-green-600 rounded-full dark:bg-green-500 text-white" style={{width: 405 - 405 * (6 - props.params.waiting) / 6}}></div>
                </div>
            }
        </div>
    )
}

export default SomeChart