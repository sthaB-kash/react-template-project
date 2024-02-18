import { useMemo, useState } from 'react';
// import 

const UseMemoAndUseCallback = () => {
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);
  const [name, setName] = useState('');
  // let sum = nums.reduce((acc, val) => acc + val, 0);
  let sum = useMemo(() => {
    console.log('summing numbers');
    return nums.reduce((acc, val) => acc + val, 0);
  }, [nums]);
  console.log(sum);


  return (
    <div>
      <h1>UseMemo</h1>
      <p>Sum of {nums.join(', ')}: {sum}</p>
      <input onChange={e => setName(e.target.value)} value={name} />
      <button onClick={() => setNums([...nums, Math.floor(Math.random() * 10)])}>Add Number</button>
    </div>
  )
}

export default UseMemoAndUseCallback;