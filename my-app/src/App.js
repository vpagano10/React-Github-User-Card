import React from 'react';
import axios from 'axios';
// import UserCards from './components/UserCards';
import styled from 'styled-components';
import './App.css';

const Cards = styled.div`
    display: flex;
    width: 45%;
    margin: 0 auto;
    border: 2px solid khaki;
    border-radius: 5px;
    background-color: rgba(65, 105, 225, 0.362);
    color: ivory;
`;
const ImageDiv = styled.div`
    margin: 2%;
    border: 2px solid khaki;
`;
const ContentDiv = styled.div`
    margin: 2%;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  };

  componentDidMount() {
    axios
      // .get('https://api.github.com/users/vpagano10')
      .get('')
      .then(res => {
        console.log(res);
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        console.log('Error with data', err)
      })
  };

  render() {
    return (
      <div>
        <h1>GitHub User Cards</h1>
        {this.state.users.length === 0 && <p>Loading Users...</p>}
        {/* <UserCards users={this.state.users} /> */}
        <div>
        {this.state.users.map(user => (
          <Cards key={user.id}>
            <ImageDiv>
              <img src={user.avatar_url} alt={user.name} />
            </ImageDiv>
            <ContentDiv>
              <h3>Name: {user.name}</h3>
              <p>GitHub Name: {user.login}</p>
              <p>Bio: {user.bio}</p>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
            </ContentDiv>
          </Cards>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
