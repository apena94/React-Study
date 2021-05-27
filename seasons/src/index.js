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
    // constructor(props) {
    //     super(props); // overrriding constructor Fx of React.Component parent class

    //     // only time we do direct assignment**
    //     this.state = { lat: null, errorMsg: '' };
    // }

    state = { lat: null, errorMsg: '' };

    componentDidMount() {

        // loads after jsx rendered, and set state causes jsx to rerender
        window.navigator.geolocation.getCurrentPosition(
            position => {
                //this.state.lat = x DOESNT WORK
                // this calls to auto render
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMsg: err.message });
            }
        );
    }

    // componentDidUpdate() {
    //     console.log('comp did uodate!!!')
    // }

    // react required, called frequently*
    render() {

        // conditional loading
        if (this.state.errorMsg && !this.state.lat) {
            return <div> Error: {this.state.errorMsg} </div>
        } else if (this.state.lat && !this.state.errorMsg) {
            return <div>Latitude: {this.state.lat}</div>
        } else {
            return <div>Loading!</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);