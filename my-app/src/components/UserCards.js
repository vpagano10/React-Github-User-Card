// import React from 'react';
// import styled from 'styled-components';

// const Cards = styled.div`
//     display: flex;
//     width: 45%;
//     margin: 0 auto;
//     border: 2px solid khaki;
//     border-radius: 5px;
//     background-color: rgba(65, 105, 225, 0.362);
//     color: ivory;
// `;
// const ImageDiv = styled.div`
//     margin: 2%;
//     border: 2px solid khaki;
// `;
// const ContentDiv = styled.div`
//     margin: 2%;
// `;

// class UserCards extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             users: []
//         };
//     };
// // function UserCards(props) {
//     render() {
//         return (
//             <>
//                 {this.state.users.map(user => (
//                     <Cards key={user.id}>
//                         <ImageDiv>
//                             <img src={user.avatar_url} alt={user.name} />
//                         </ImageDiv>
//                         <ContentDiv>
//                             <h3>Name: {user.name}</h3>
//                             <p>GitHub Name: {user.login}</p>
//                             <p>Bio: {user.bio}</p>
//                             <p>Followers: {user.followers}</p>
//                             <p>Following: {user.following}</p>
//                         </ContentDiv>
//                     </Cards>
//                 ))}
//             </>
//         );
//     };
// };

// export default UserCards;