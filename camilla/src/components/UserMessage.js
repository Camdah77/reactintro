import React from 'react';

function UserMessage(props) {
  return (
    <div>
      {
      props.isLoggedIn ? (
        <div>
          <p>Welcome to ArtSpot! Please complete the steps below to join the family:</p>
          <ol>
            <li>Confirm your Email</li>
            <li>Complete your profile</li>
            <li>Subscribe to the newsletter</li>
          </ol>
        </div>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}

export default UserMessage;