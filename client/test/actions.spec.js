import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
// import Main from '../components/Main.component';
import * as actions from '../actions/actions.js';
import expect from 'expect';

//   describe('Login',()=>{
//  	var result, login;
// 	it('renders the spec',()=>{
// 		expect(login).toHaveBeenCalled();
	
// 		var component = ReactTestUtils.renderIntoDocument(
//    <MyComponent />
// );
//  var h1 = TestUtils.findRenderedDOMComponentWithTag(
//        component, 'h1'
//     );
// expect(h1.getDOMNode().textContent)
//         .toEqual("LOGIN");
// });
// 	});	
	
// describe('Login', ()=>{

// 	it('can render without error',()=>{
// 		var component, element;
// 		element= React.createElement(Login,{});
// 	expect(function(){
// 	compoenent = ReactTestUtils.renderIntoDocument(element);
// 	}).not.toThrow();
// });
// })

describe('actions', () => {
	//console.log(Login);
	var value = true;
	it('render', ()=> {
		const expectedActions = { type : 'DATA_HAS_ERRORED',
		hasErrored: value };
		expect(actions.dataHasErrored(value)).toEqual(expectedActions);

	})
})