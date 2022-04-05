
// // onclick outside the button tag

// import React, { Component } from 'react'
// export default class ShoppingList extends Component {
// constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0
//     }
//   }
//   onClick = () => {
//     this.setState((prevState, _) => ({ counter: prevState.counter + 1 }))
//     console.log(this.state.counter)
//   }
//   render() {
//     return(
//       <button onClick={this.onClick}>Click Me</button>
//     );
//   }
// }


// onclick outside the button tag

// import React, { Component , ReactDOM} from 'react'
// export default class ShoppingList extends Component {
//      componentWillUnmount(){
//          console.log('Execute before the component is mount')
//          ReactDOM.findDOMNode(this)
//      }
//      componentDidMount(){
//         console.log('Execute after the component is mount')
//         ReactDOM.findDOMNode(this)
//     }
//     constructor(props){
//         super(props)
//         this.state = {value : new Date()}
//         console.log(this.state.value);
//     }
//     onClick = ()=> console.log(this.setState({value: 'okay'}))

//   render() {
//     return(
//       <button onClick={this.onClick}>Click Me</button>
//     );
//   }
// }

import React, { Component, ReactDOM } from 'react'
export default class ShoppingList extends Component {

    constructor(props){
        super(props)
        this.state = {posts: []}
    }
    componentDidMount() {
        const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => this.setState({posts: data}));
      }
    render() {
        return (
            <div>
             {this.state.posts.map(post=> <div> {post.name} </div>)}
            </div>

        )
 }
}