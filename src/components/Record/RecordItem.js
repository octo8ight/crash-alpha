import React from 'react';


export default function RecordItem(props) {

    return (
        <div className='flex px-1'>
            <div className={props.params.score > 2 ? 'w-5 h-5 rounded-2xl bg-green-500 my-auto mr-1.5' : 'w-5 h-5 rounded-2xl bg-red-500 my-auto mr-1.5'}></div>
            <div>
                <span className='text-sm/[5px] text-slate-500'>{props.params.id}</span>
                <br />
                <span className={props.params.score > 2 ? 'text-green-500' : 'text-red-500'}>{props.params.score}x</span>
            </div>
        </div>
    )
}
