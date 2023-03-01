const React = require('react');
//add Hello, World and Greet components here. refer to description if you are stuck. good luck :)
function Hello(){
    return <h1>Hello</h1>;
    
  console.log(Hello)
}

function World(){
    return <h2>World!</h2>;
    
  console.log(World)
}

class Greet extends React.Component {
    render() {
        return <div><Hello /><World /></div>;    
    }
}