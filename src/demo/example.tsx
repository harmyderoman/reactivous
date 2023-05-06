import { useArray } from 'reactivous';

function Example() {
  const { state, remove, push, update } = useArray(['apple', 'banana', 'orange']);

  return (
    <div>
      <ol>
        {state.map((value,index) => (
          <li key={index}>{value}</li>
        ))}
      </ol>
      <button className='btn' onClick={() => push('grape')}>Add Grape</button>
      <button className='btn' onClick={() => remove(1)}>Remove Second Fruit</button>
      <button className='btn' onClick={() => update(0, 'pineapple')}>Update Apple</button>
    </div>
  );
}

export default Example