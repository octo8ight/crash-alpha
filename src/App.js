import logo from './logo.svg';
import './App.css';
import SomeChart from "./components/SomeChart";

function App() {
  const tableItem = new Array(13).fill(0);

  return (
    <div className="App">
      <div className='flex flex-row'>
        <div className='flex flex-col basis-3/5'>
          {/* <div>
            <div className="effects-box"> */}
              {/* <div className="w-fit basically-the-graph" style={{ height: '90%', width: '90%', position: "absolute", top: '12%' }}> */}
                <SomeChart />
              {/* </div> */}
              <div className='' style={{ position: "absolute", zIndex: 12, top: '40%' }}>
                <h1>{24}</h1>
                <h1>{'x'}</h1>
              </div>
            {/* </div>
          </div> */}
          <div className='pt-10'>
            <div className='flex flex-row justify-center'>
              <button
                type="button"
                class="inline-block rounded bg-green-500 px-40 pb-3 pt-3 text-xs font-medium leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Bet
              </button>
            </div>
            <div className='flex flex-row pt-5'>
              <div class="relative flex flex-wrap items-stretch w-1/2 px-2">
                <input
                  type="text"
                  class="relative m-0 -me-px block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-dark/10 dark:text-dark dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                  placeholder="Amount"
                  aria-label="Amount" />
                <button
                  class="z-[2] -me-0.5 inline-block border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  /2
                </button>
                <button
                  class="z-[2] inline-block rounded-e border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  x2
                </button>
                <button
                  class="z-[2] inline-block rounded-e border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>
                </button>
              </div>
              <div class="relative flex flex-wrap items-stretch w-1/2 px-2">
                <input
                  type="text"
                  class="relative m-0 -me-px block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-dark/10 dark:text-dark dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                  placeholder="Cash Out"
                  aria-label="Cash Out" />
                <button
                  class="z-[2] -me-0.5 inline-block border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  class="z-[2] inline-block rounded-e border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
            <div className='flex flex-row pt-2'>
              <div class="relative flex flex-wrap items-stretch w-1/2 px-2 justify-around">
                <button
                  class="w-1/4 z-[2] -me-0.5 inline-block border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  1
                </button>
                <button
                  class="w-1/4 z-[2] -me-0.5 inline-block border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  10
                </button>
                <button
                  class="w-1/4 z-[2] -me-0.5 inline-block border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  100
                </button>
                <button
                  class="w-1/4 z-[2] -me-0.5 inline-block border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                  type="button"
                  data-twe-ripple-init>
                  1000
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='basis-2/5'>
          <table
            class="min-w-full text-left text-sm font-light text-surface dark:text-dark">
            <thead
              class="border-b border-neutral-200 font-medium dark:border-dark/10">
              <tr>
                <th scope="col" class="px-6 py-4">Player</th>
                <th scope="col" class="px-6 py-4">Cash Out</th>
                <th scope="col" class="px-6 py-4">Amount</th>
                <th scope="col" class="px-6 py-4">Profit</th>
              </tr>
            </thead>
            <tbody>
              {
                tableItem.map(index => (
                  <tr class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-dark/10 dark:hover:bg-neutral-600" key={"table_"+index}>
                    <td class="flex whitespace-nowrap px-6 py-4 font-medium">
                      <img src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" class="w-7 rounded-full" alt="Avatar" />
                      &nbsp;
                      Harry Potter
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">betting</td>
                    <td class="flex whitespace-nowrap px-6 py-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-6 w-6">
                        <path
                          d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                        <path
                          d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                        <path
                          d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                      </svg>
                      &nbsp;
                      $1500
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">betting</td>
                  </tr>                  
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;