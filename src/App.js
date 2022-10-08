import { Component } from "react";
import Form from "./Components/Form/Form";

class App extends Component {
  onSubmit = (data) => {
    console.log(data);
  }
  render(){
    return (
    <div className="App">
      <Form name={'Name'} onSubmit={this.onSubmit}/>
    </div>
  );}
}

export default App;
