import { useCallback, useMemo, useState } from 'react';
// import 
const SortedList = ({list, sortFunc}) => {
  console.log('sorted list rendering..')
  const sortedList = useMemo(() => {
    console.log('sorting..');
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return(
    <div>
      <p>List: {list.join(", ")}</p>
      <p>Sorted: {sortedList.join(", ")}</p>
    </div>
  )
}
const UseMemoAndUseCallback = () => {
  const [nums, setNums] = useState([1, 7, 3, 4, 5]);
  const [name, setName] = useState('');
  // let sum = nums.reduce((acc, val) => acc + val, 0);
  let sum = useMemo(() => {
    console.log('summing numbers');
    return nums.reduce((acc, val) => acc + val, 0);
  }, [nums]);
  console.log(sum);

  const list = ['bikash', 'shrestha', 'shrestha-bikash', 'bikash shrestha'];
  const sortFunc = useCallback((a,b) => a > b ? 1 : -1, []);


  return (
    <div>
      <h1>UseMemo</h1>
      <p>Sum of {nums.join(', ')}: {sum}</p>
      <input onChange={e => setName(e.target.value)} value={name} />
      <button onClick={() => setNums([...nums, Math.floor(Math.random() * 10)])}>Add Number</button>
      //useCallback
      <SortedList list={list} sortFunc={sortFunc}/>
    </div>
  )
}

export default UseMemoAndUseCallback;