import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import SomeChart from "./components/SomeChart";
import Record from "./components/Record";
import Player from "./components/Player";

function App() {
  let score = 0
  const WAIT_TIME = 6;
  const [user, setUser] = useState({
    name: 'Harry Potter',
    balance: 10000
  })
  const [amount, setAmount] = useState(1);
  const [cashout, setCashOut] = useState(1);
  const [params, setParams] = useState({
    waiting: WAIT_TIME,
    currentScore: 0,
    isEnd: false
  });
  let bet = false;
  // const [score, setScore] = useState(0);

  const changeInputValue = e => {
    if (params.waiting > 0) {
      switch(e.target.name) {
        case 'amount':
          if (e.target.value > 0.000005 && user.balance > e.target.value)
            setAmount(e.target.value);
          break;
        case 'cashout':
          setCashOut(e.target.value);
      }
    }
  }

  const newGame = () => {
    setParams({
      waiting: WAIT_TIME,
      currentScore: 0,
      isEnd: false
    });

    score = (Math.random() * 10 + 1)
    let tmp = 0;

    let interval = setInterval(() => {
      if (WAIT_TIME - tmp < 0) {
        clearInterval(interval);
        
        runningScore();
      }
      else {
        setParams({
          ...params,
          waiting: (WAIT_TIME - tmp).toFixed(1)
        });
        tmp += 0.1;
      }
    }, 100);
  }

  const runningScore = () => {
    let tmp1 = 1;
    let intervalid = setInterval(() => {
      setParams({
        ...params,
        waiting: 0,
        currentScore: tmp1
      });
      tmp1 += (tmp1 > 3 ? 0.03 : 0.01);
      if (tmp1 >= score) {
        clearInterval(intervalid);
        setParams({
          waiting: 0,
          currentScore: score,
          isEnd: true
        });
        console.log(bet);
        if (bet) {
          if (score >= cashout) {
            setUser({
              name: user.name,
              balance: user.balance * cashout
            });
          }
          else {
            setUser({
              name: user.name,
              balance: user.balance - amount
            });
          }
        }
        // setTimeout(() => {
        //   newGame();
        // }, 3000);
      }
    }, 50);
  }

  useEffect(() => {
    newGame();
  }, []);

  const handleBetClick = () => {
    bet = true;
    alert("bet!");

  }

  return (
    <div className="App">
      <div className='flex flex-row'>
        <div className='flex flex-col basis-3/5 px-6'>
          <Record />
          <div className='py-3'>
            <span className='text-lg font-bold text-green-500'>{user.name}</span>
            &nbsp;&nbsp;&nbsp;
            <span className='text-lg font-bold text-yellow-600'>{user.balance}</span>
          </div>
          <SomeChart params={params} />
          <div className='pt-10'>
            <div className='flex flex-row justify-center'>
              <button
                type="button"
                disabled={params.waiting == 0 ? true : false}
                onClick={handleBetClick}
                className="inline-block rounded bg-green-500 px-40 pb-3 pt-3 text-xs font-medium leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Bet
              </button>
            </div>
            <div className='flex flex-row pt-5'>
              <div className="relative flex flex-wrap items-stretch w-1/2 px-2">
                <input
                  type="text"
                  className="relative m-0 -me-px block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-dark/10 dark:text-dark dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                  placeholder="Amount"
                  value={amount}
                  name='amount'
                  onChange={e => changeInputValue(e)}
                  aria-label="Amount" />
                <button
                  className="z-[2] -me-0.5 inline-block border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  onClick={() => params.waiting > 0 && amount > 0.000005 && setAmount(amount/2)}
                  data-twe-ripple-init>
                  /2
                </button>
                <button
                  className="z-[2] inline-block rounded-e border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  onClick={() => user.balance > amount * 2 && params.waiting > 0 && setAmount(amount * 2)}
                  data-twe-ripple-init>
                  x2
                </button>
                <button
                  className="z-[2] inline-block rounded-e border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>
                </button>
              </div>
              <div className="relative flex flex-wrap items-stretch w-1/2 px-2">
                <input
                  type="text"
                  className="relative m-0 -me-px block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-dark/10 dark:text-dark dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                  placeholder="Cash Out"
                  value={cashout}
                  onChange={e => changeInputValue(e)}
                  name='cashout'
                  aria-label="Cash Out" />
                <button
                  className="z-[2] -me-0.5 inline-block border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  className="z-[2] inline-block rounded-e border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
            <div className='flex flex-row pt-2'>
              <div className="relative flex flex-wrap items-stretch w-1/2 px-2 justify-around">
                <button
                  className="w-1/4 z-[2] -me-0.5 inline-block border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  1
                </button>
                <button
                  className="w-1/4 z-[2] -me-0.5 inline-block border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  10
                </button>
                <button
                  className="w-1/4 z-[2] -me-0.5 inline-block border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  100
                </button>
                <button
                  className="w-1/4 z-[2] -me-0.5 inline-block border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  1000
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='basis-2/5'>
          <Player />
        </div>
      </div>
    </div>
  );
}

export default App;