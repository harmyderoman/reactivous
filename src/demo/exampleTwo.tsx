import { useObjectsArray } from 'reactivous';

function ExampleTwo() {
  const fruits = [{ title: 'apple' }, { title: 'banana' }, { title: 'orange' }]
  const { state,
     removeAll, 
     push, 
     updateAll 
    } = useObjectsArray(fruits);

  return (
    <div>
      <ul>
        {state.map((value, index) => (
          <li key={index}>{value.title}</li>
        ))}
      </ul>
      <button className='btn' onClick={() => push({ title: 'grape' })}>Add Grape</button>
      <button className='btn' onClick={() => removeAll({ title: 'grape'})}>Remove All Grapes</button>
      <button className='btn' onClick={() => updateAll({ title: 'apple' }, { title: 'pineapple' })}>Update Apple</button>
    </div>
  );
}

export default ExampleTwo
