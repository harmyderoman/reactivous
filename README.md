# Reactivous

Reactivous is a collection of utility functions and custom hooks for building React applications. It's designed to help you write cleaner, more concise code and speed up your development process.

## Features

- A variety of utility functions and custom hooks for common tasks like handling array state(for now its the only one but more coming soon)
- Built with TypeScript for improved type safety and easier integration with your existing projects
- Fully tested with Vitest and React Testing Library to ensure reliability and maintainability

## Installation

You can install Reactivous using npm or yarn:

```bash
npm install reactivous

# or

yarn add reactivous
```

## Usage

To use Reactivous in your project, simply import the functions or hooks you need and start using them in your code:

```tsx
import { useArray } from 'reactivous'

function MyComponent() {
  const myArray = useArray([])

  return (
    <ul>{myArray.state.map(item => <li>{item}</li>)}</ul>
  )
}
```

## Hooks

Reactivous includes several custom hooks to help you manage state and handle common tasks in your React components. Here are some examples:

### useArray

The `useArray` hook provides a simple way to manage an array of values in your component's state. It returns an instance that contain the state of array and a set of methods to manipulate the array.

```tsx
import { useArray } from 'reactivous';

function FruitsList() {
  const { state, remove, push, update } = useArray(['apple', 'banana', 'orange']);

  return (
    <div>
      <ul>
        {state.map((value,index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <button onClick={() => push('grape')}>Add Grape</button>
      <button onClick={() => remove(1)}>Remove Second Fruit</button>
      <button onClick={() => update(0, 'pineapple')}>Update Apple</button>
    </div>
  );
}

export default FruitsList
```

### useObjectsArray

The `useObjectsArray` hook is similar to useArray, but it's designed to work with arrays of objects(records, dictionaries). It provide two additional methods: `removeAll` and `updateAll`. They get a key(looks like `{ id: 'qazwsxedc' }`) of desired object in order to find it and then delete or update all objects that contain the given key.

```tsx
import { useObjectsArray } from 'reactivous';

function FruitsList() {
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
      <button onClick={() => push({ title: 'grape' })}>Add Grape</button>
      <button onClick={() => removeAll({ title: 'grape'})}>Remove All Grapes</button>
      <button onClick={() => updateAll({ title: 'apple' }, { title: 'pineapple' })}>Update Apple</button>
    </div>
  );
}

export default FruitsList
```

## License
Reactivous is MIT licensed. See the LICENSE file for details.



