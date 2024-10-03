import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "./logo192.png";
import "./style.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

// const element = <div>Hello</div>;
// root.render(element);
// console.log(element)

function Card(props) {
    console.log(props);

    return (
        <div>
            <img src={logo}></img>
            <p>Description</p>
        </div>
    );
}

function Form() {
    const printLog = (e) => {
        e.prevetDefault();
        console.log(e.target.value);
        console.log("ONCHANGE");

    }
    return (
        <div>
             <form>
            <input type='text' onChange={printLog} />
           <Button />
            </form>
        </div>
    )
}

function Button() {

const printLog = (e) => {
    e.prevetDefault();
    console.log("click");
};

    return (<button onClick={printLog} className='btn2'>Button</button>);
}

function App(param) {
    return (
        <div>
            <h1>Hello React</h1>
            <form>
                <input type='text'></input>
                <button>Button</button>
            </form>
            <Card />
            <Form abracadabra="some value"/>
        </div>
    );
}
root.render(<App />);

const elem = React.createElement(
    "h1",
    { className: "testClass" },
    "Hello"
)
console.log(elem)



// root.render(

//     <App />

// );
