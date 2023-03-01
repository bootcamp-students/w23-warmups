const React = require('react');

function Hello(){
    return <h1>Hello</h1>;
}

function World(){
    return <h2>World!</h2>;
}

class Greet extends React.Component {
    render() {
        return <div><Hello /><World /></div>; 
    
    }
}

//Create three components (following provided rules)
//Parent Component: className = Greet, 
  //should contain components 1 and 2 inside of div
//Component 1: named Hello should return 'Hello' wrapped inside h1
//Component 2: named World should return'World!' wrapped inside h2
//
