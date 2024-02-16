import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useAppDispatch, useAppSelector } from './app/hooks'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'

import { useGetBreedsQuery } from './features/dogs/dogsApiSlice'

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // dispatch(increment()); // increments by one
    // dispatch(decrement()); // decrements by one
    dispatch(incrementByAmount(5)); // increments by 5
  }

  const [numDogs, setNumDogs] = useState(5);
  const { data = [], isFetching } = useGetBreedsQuery(numDogs);

  return (
    <div>
      <div>
        <select value={numDogs} onChange={ e => setNumDogs(Number(e.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <p>number of data fetched { isFetching ? "Fetching" : data.length}</p> 
        <table>
          <thead>
            <tr><th>Name</th><th>Picture</th></tr>
          </thead>
          <tbody>
            {
              data.map( dog => (
                <tr key={dog.id}>
                  <td>{dog.name}</td>
                  <td><img src={dog.image.url} alt={dog.name} height={200} width={250} /></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
