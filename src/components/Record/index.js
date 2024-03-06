import React from 'react'
import RecordItem from "./RecordItem";

export default function index() {

    const recordList = [
        {
            id: 49394093,
            score: 3.03
        },
        {
            id: 49394093,
            score: 2.00
        },
        {
            id: 49394093,
            score: 1.04
        },
        {
            id: 49394093,
            score: 4.33
        },
        {
            id: 49394093,
            score: 6.04
        },
        {
            id: 49394093,
            score: 7.03
        },
        {
            id: 49394093,
            score: 5.04
        },
        {
            id: 49394093,
            score: 2.03
        },
    ];

    return (
        <div className='flex justify-around bg-slate-300 rounded-md'>
            {
                recordList.map((item, index) => (
                    <RecordItem params={item} key={"item_"+index} />
                ))
            }
        </div>
    )
}
