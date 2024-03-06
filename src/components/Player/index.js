import React from 'react';
import PlayerItem from './PlayerItem'

export default function index() {
    const tableItem = new Array(13).fill(0);
    return (
        <table className="min-w-full text-left text-sm font-light text-surface dark:text-dark">
            <thead className="border-b border-neutral-200 font-medium dark:border-dark/10">
                <tr>
                    <th scope="col" className="px-6 py-4">Player</th>
                    <th scope="col" className="px-6 py-4">Cash Out</th>
                    <th scope="col" className="px-6 py-4">Amount</th>
                    <th scope="col" className="px-6 py-4">Profit</th>
                </tr>
            </thead>
            <tbody>
            {
                tableItem.map((item, index) => (
                    <PlayerItem key={'table_' + index}/>
                ))
              }
            </tbody>
        </table>
    )
}
