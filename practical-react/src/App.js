import React from 'react';

import './App.css';

import {Header} from "./components/Header";
import {Body} from "./components/Body";
import Counter from "./components/Counter";



function App() {
  return (
    <div className="App">
		<Header
			title = "Hello"
			num={7}myArr={[10,2,3]}
			myObj={{
				a: 5,
				b: 6
			}} 
		/>
		<Body />
		<Counter />
	</div>
	
  );
}

export default App;
