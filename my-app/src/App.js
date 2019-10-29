import React from 'react';
import axios from 'axios';
// import this.state.usersCards from './components/UserCards';
import styled from 'styled-components';
import './App.css';

const Cards = styled.div`
  display: flex;
  width: 45%;
  margin: 0 auto;
  margin-bottom: 1%;
  border: 2px solid khaki;
  border-radius: 5px;
  background-color: rgba(65, 105, 225, 0.362);
  color: ivory;
`;
const ImageDiv = styled.div`
  width: 150px;
  height: 150px;
  margin: 2%;
  border: 2px solid khaki;
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
`;
const ContentDiv = styled.div`
  width: 100%;
  height: 150px;  
  margin: 0% 0% 0% 2%;
  line-height: .75;
`;
const Big = styled.big`
  color: coral;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: []
    };
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/vpagano10')
      // .get('')
      .then(res => {
        console.log(res);
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        console.log('Error with data', err)
      })

      axios
        .get('https://api.github.com/users/vpagano10/followers')
        .then(res => {
          console.log(res);
          this.setState({
            followers: res.data
          })
        })
        .catch(err => {
          console.log('Error with followers data', err)
        })
  };

  render() {
    return (
      <div>
        <h1>GitHub User Cards</h1>
        {this.state.users.length === 0 && <p>Loading Users...</p>}
        {/* <UserCards users={this.state.users} /> */}
        <div>
          <Cards key={this.state.users.id}>
            <ImageDiv>
              <Img src={this.state.users.avatar_url} alt={this.state.users.name} />
            </ImageDiv>
            <ContentDiv>
              <h3>{this.state.users.name}</h3>
              <p><Big>GitHub Name: </Big>{this.state.users.login}</p>
              <p><Big>Bio: </Big>{this.state.users.bio}</p>
              <p><Big>Followers: </Big>{this.state.users.followers}</p>
              <p><Big>Following: </Big>{this.state.users.following}</p>
            </ContentDiv>
          </Cards>
        </div>
        <div>
          {this.state.followers.map(follower => (
            <Cards key={follower.id}>
              <ImageDiv>
                <Img src={follower.avatar_url} alt={follower.name} />
              </ImageDiv>
              <ContentDiv>
                <h3>{follower.name}</h3>
                <p><Big>GitHub Name: </Big>{follower.login}</p>
                {/* <p><Big>Bio: </Big>{follower.bio}</p>
                <p><Big>Followers: </Big>{follower.follower}</p>
                <p><Big>Following: </Big>{follower.following}</p> */}
              </ContentDiv>
            </Cards>
          ))}
        </div>
      </div>
    )};
};

export default App;
