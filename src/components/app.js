import React from 'react';
import '../assets/css/app.scss';
import { whatsYourName } from '../helpers'; // Demo helper functions
import BasicButton from './basic_button'; // Basic Button - Functional Component
import ChangingButton from './changing_button'; // Changing color button - Class Component
import Modal from './modal'; // Modal - Class Component
import Accordion from './accordion';

const modalContent = (
    <div>
        <h3>This is some modal content</h3>
        <h2>The modal content is stored in JSX</h2>
        <p>This makes the modal very flexible</p>
        <p>This is only a basic modal example, there is much more you could do</p>
    </div>
)

const accordionContent = [
    {
        title: 'What is React?',
        content: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.'
    },
    {
        title: 'What is JSX?',
        content: 'JSX is a syntax extension to JavaScript. JSX produces React “elements”.'
    },
    {
        title: 'What is a component in React?',
        content: 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.'
    },
    {
        title: 'What is the difference between a Functional Component and a Class Component?',
        content: 'A functional component is created using a function whereas a class component is created as a JavaScript Class. Class components give you the ability to use state and have access to events in the components life, known as lifecycle methods.'
    }
];

const App = () => (
    <div className="container">
        <h1 className="center">React Examples</h1>

        <div className="example-container center basic-button-example">
            <h1>Example 1 - Button Functional Component</h1>
            <BasicButton text="Alert!" click={() => alert('The button was clicked')}/>
            <BasicButton backgroundColor="red" text="Are You Sure?" click={() => confirm('Are you sure you want to do this?')}/>
            <BasicButton backgroundColor="yellow" color="black" text="What's Your Name?" click={whatsYourName}/>
        </div>

        <div className="example-container center changing-color-example">
            <h1>Example 2 - Changing Color Button - Class Component</h1>

            <ChangingButton/>
        </div>

        <div className="example-container center modal-example">
            <h1>Example 3 - Modal - Class Component</h1>

            <Modal content={modalContent}/>
        </div>

        <div className="example-container center accordion-example">
            <h1>Example 4 - Accordion - Class Component</h1>

            <Accordion content={accordionContent}/>
        </div>
    </div>
);

export default App;
