import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Blog = () => {
    const [loader,setLoader]=(false)
    const handelDownload=()=>{
        setLoader(true)
    }
    return (
        <div className='grid grid-cols-2  gap-4 ml-48 mt-11'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"> The differences between uncontrolled and controlled components?</h2>
    <p>In the context of web development, uncontrolled components are those where the form data is handled by the browser, and their values can be accessed directly through the DOM. Controlled components, on the other hand, have their form data managed by React components, which means that their values are always kept in sync with the component state. The main difference between the two is that uncontrolled components are simpler to use, but provide less control over the data, whereas controlled components offer more flexibility and reliability</p>
    
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"> How to validate React props using PropTypes?</h2>
    <p>React Router is a popular library for routing in React applications. It allows developers to define routes and map them to components, enabling them to create a multi-page application with dynamic navigation. React Router provides several types of components, such as Route, Link, and Redirect, that can be used to create a flexible and customizable routing experience. With React Router, developers can implement client-side routing, which enables fast and seamless transitions between pages without requiring a full page reload. Overall, React Router provides a simple and powerful solution for handling routing in React applications.</p>
    
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"> the difference between nodejs and express js?</h2>
    <p>Redux is a state management library for JavaScript applications, commonly used with React. It allows developers to manage the state of their application in a predictable and consistent way, by providing a single source of truth for the entire application's state. With Redux, developers can define actions that trigger state changes, reducers that handle those changes, and a store that holds the application's state. Redux provides a clear separation of concerns between state and UI, making it easier to reason about and maintain large-scale applications.</p>
    
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"> 
What is a custom hook, and why will you create a custom hook?</h2>
    <p>custom hooks in React are a powerful tool for encapsulating and sharing reusable logic and stateful behavior across multiple components. They improve code reuse, simplify testing, and reduce the size and complexity of components by removing non-essential logic. Custom hooks can be used for a wide range of purposes, such as fetching data, handling user input, managing form state, and more. By creating custom hooks, developers can write code that is more modular, maintainable, and easy to understand.</p>
    
  </div>
</div>
<div className='ml-96'>
    <button className='flex btn btn-outline btn-success mx-auto' onClick={handelDownload} disabled={!(loader===false)}><FaDownload className='text-2xl'></FaDownload>{
        loader ? <span>downloading</span> : <span>download</span>
    }
    </button>
</div>
        </div>
    );
};

export default Blog;