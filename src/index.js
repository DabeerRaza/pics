import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './search.css';


class Main extends React.Component{
	render(){
		return(
			<div>
				<App />
			</div>
		);
	};
}

ReactDOM.render(<Main />, document.querySelector('#root'));