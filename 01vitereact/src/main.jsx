import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function Myapp(){
    return(
        <h1>hello bhaiya</h1>
    );
}

const ReactElement ={
    type:'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit'
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const another = " - yes"

const reactelement = React.createElement(
    'a',
    {
        href:"https://google.com",
        target: "_blank"

    },
    "click me for google",
    another

)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    // <Myapp />
    // <ReactElement />
    // anotherElement
    reactelement


    
)
