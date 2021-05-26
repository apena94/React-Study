import React from 'react';
import ReactDOM from 'react-dom';

// will determine location + month
// const App = () => {
//     // first param success callback, second failure callback
//     // async
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );

//     return <div>Hi There</div>
// };


//valid class based component 1) JS class, extends(subclass react comp), render method returning JSX
class App extends React.Component {
    // js not requ
    constructor(props) {
        super(props); // overrriding constructor Fx of React.Component parent class

        // only time we do direct assignment**
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                //this.state.lat = x DOESNT WORK
                // this calls to auto render
                this.setState({ lat: position.coords.latitude });
            },
            err => console.log(err)
        );
    }

    // react required, called frequently*
    render() {

        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);