import React from 'react';
import './Question.css'

const Question = () => {
   
    return (
        
       
        <div> 
             <h1 className='question-answer'>Question And Answer Section</h1>
        <div className='question-cart'>
            <div className='questionAnswer'>
            <h2 className='question-head'>How React Works?</h2>
            <img src="https://www.cikume.com/img/frontend.jpg" alt="" />
            <p>I know what you're thinking. This is a dev community, people here already know how to create a React app. If you're coming from YT, then you already know the easiest way to create a React app is by using the create-react-app environment. Besides, there is already a million tutorial on how to create a React app. But what people often miss in these tutorials is the concept-level thinking that goes into making them.</p>
            </div>
            <div className='questionAnswer'>
            <h2 className='question-head'>What are the differences between props and state?</h2>
            <p>
                <h3>Props:</h3>
                <ul>
                    <li>Props are read-only.</li>
                    <li>Props allow you to pass data from one component to other components as an argument.</li>
                    <li>Props are used to communicate between components.</li>
                    <li>Props are external and controlled by whatever renders the component.</li>
                </ul>

                <h3>State:</h3>
                <ul> 
                <li>State changes can be asynchronous.</li>
                <li>State holds information about the components.</li>
                <li>States can be used for rendering dynamic changes with the component.</li>
                <li>The State is internal and controlled by the React Component itself.</li>
                </ul>
                
            </p>
            </div>
            <div className='questionAnswer'>
            <h2 className='question-head'>How useState Works?</h2>
            <img src="https://www.scalans.com/wp-content/uploads/2020/02/ReactJS-350x250-1.png" alt="" />
            <p>The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. </p>
            </div>
        </div>
    </div>
    );
};

export default Question;