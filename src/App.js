import React, { Component } from 'react';
import CardView from './components/cardView';


class App extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      images: [
        "https://randomuser.me/api/portraits/women/10.jpg",
        "https://randomuser.me/api/portraits/men/70.jpg",
        "https://randomuser.me/api/portraits/men/20.jpg",
        "https://randomuser.me/api/portraits/men/3.jpg",
        "https://randomuser.me/api/portraits/women/7.jpg",
        "https://randomuser.me/api/portraits/women/50.jpg",
        "https://randomuser.me/api/portraits/women/11.jpg",
        "https://randomuser.me/api/portraits/women/18.jpg",
        "https://randomuser.me/api/portraits/men/10.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
      ]
    };
  }

  async componentDidMount() {
    const api = fetch('https://jsonplaceholder.typicode.com/users')
    const data = await api;
    const response = await data.json();

    this.setState({
      data: [...this.state.data, ...response]
    });
  };

  render() {
    return (
      <div>
        <CardView data={this.state.data} images={this.state.images} />
      </div>
    );
  }
}



export default App;