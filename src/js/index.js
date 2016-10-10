import React from 'react';
import ReactDom from 'react-dom';
require('../css/secondComponet.scss');
require('../css/mainComponent.scss');
class MainComponent extends React.Component {
	static defaultProps() {
		console.log('cycle::MianComponent getDefaultProps');
		return {
			text: 'ranjan'
		}
	}
	constructor() {
		console.log('cycle::MianComponent getInitialState');
		super();
		this.state = {
			text: MainComponent.defaultProps()
		}
	}
	componentWillReceiveProps(nextProps) {
		console.log('cycle::MianComponent componentWillReceiveProps '+ nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('cycle::MianComponent shouldComponentUpdate '+ nextProps);
		return true;
	}
	componentWillUpdate() {
		console.log('cycle::MianComponent componentWillUpdate');
		
	}
	componentWillMount () {
		console.log('cycle::MianComponent componentWillMount');
		this.state.text = 'Hello changed';
		setTimeout(() => {
			this.setState({
			text: 'Hello changed again'
			})
		}, 3000)
	}
	componentDidUpdate () {
		console.log('cycle::MianComponent componentDidUpdate');
		this.state.text = 'Hello changed';
		let mainDom = ReactDom.findDOMNode(this);
		// console.log(mainDom);
	}
	componentDidMount(){
		console.log('cycle::MianComponent componentDidMount');
		let mainDom = ReactDom.findDOMNode(this);
		// console.log(mainDom);
		
	}
	componentWillUnmount() {
		console.log('cycle::MianComponent componentWillUnmount');
	}
	render() {
		console.log('cycle::MianComponent render');
		return (<div className='main-component' ref='main'>
				<h1>Main component:  {this.state.text}</h1>
				
				<SecondComponent secondCompStates ={this.state.text}/>
				<ThirdComponent thirdCompStates ={this.state.text}/>
			</div>);
	}
}
class SecondComponent extends React.Component {
	componentWillReceiveProps(nextProps) {
		console.log('cycle::SecondComponent componentWillReceiveProps '+ nextProps.secondCompStates);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('cycle::SecondComponent shouldComponentUpdate '+ nextProps);
		return true;
	}
	componentWillUpdate() {
		console.log('cycle::SecondComponent componentWillUpdate');
		
	}
	componentWillMount () {
		console.log('cycle::SecondComponent componentWillMount');
		
		
	}
	componentDidUpdate () {
		console.log('cycle::SecondComponent componentDidUpdate');
		
	}
	componentDidMount(){
		console.log('cycle::SecondComponent componentDidMount');
		let secondDom = ReactDom.findDOMNode(this);
		// console.log(secondDom);
		
	}
	componentWillUnmount() {
		console.log('cycle::SecondComponent componentWillUnmount');
	}
	
	render() {
		console.log('cycle::SecondComponent render');
		return (<div className='second-component' ref='second'>
				<h2>First Child component: {this.props.secondCompStates}</h2>
			</div>);
	}
}

class ThirdComponent extends React.Component {
	componentWillReceiveProps(nextProps) {
		console.log('cycle::ThirdComponent componentWillReceiveProps '+ nextProps.thirdCompStates);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('cycle::ThirdComponent shouldComponentUpdate '+ nextProps);
		return true;
	}
	componentWillUpdate() {
		console.log('cycle::ThirdComponent componentWillUpdate');
		
	}
	componentWillMount () {
		console.log('cycle::ThirdComponent componentWillMount');
		
		
	}
	componentDidUpdate () {
		console.log('cycle::ThirdComponent componentDidUpdate');
		
	}
	componentDidMount(){
		console.log('cycle::ThirdComponent componentDidMount');
		let thirdDom = ReactDom.findDOMNode(this);
		// console.log(thirdDom);
		
	}
	componentWillUnmount() {
		console.log('cycle::ThirdComponent componentWillUnmount');
	}
	
	render() {
		console.log('cycle::ThirdComponent render');
		return (<div className='second-component' ref='third'>
				<h2>Second Child component: {this.props.thirdCompStates}</h2>
			</div>);
	}
}
ReactDom.render(<MainComponent />, document.getElementById('reactApp'));