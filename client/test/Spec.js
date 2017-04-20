// Spec.js
var context = require.context('./src', true, /-test\.jsx?$/);
context.keys().forEach(context);

it("renders an h1", function () {
    var component = TestUtils.renderIntoDocument(
        <Login/>
    );

    var h1 = TestUtils.findRenderedDOMComponentWithTag(
       component, 'h1'
    );

    expect(h1.getDOMNode().textContent)
        .toEqual("LOGIN");
});


// The cool part is that TestUtils lets us trigger user events as well.For a click event, we’d write something like this : 

// var node = component
//     .findRenderedDOMComponentWithTag('button')
//     .getDOMNode();

// TestUtils
//     .Simulate
//     .click(node);