import React from 'react';
import {
  Main,
  StarFrame,
  Star,
  RatingContainer,
  Header,
  SubHeader,
  ButtonRow,
  Button,
  Submit,
} from './app.styles';
import star from './assets/star.svg';

function App() {
  
  return (
    <Main>
      <StarFrame>
        <Star src={star} alt="star" />
      </StarFrame>
      <RatingContainer>
        <Header>How did we do?</Header>
        <SubHeader>
          Please let us know how we did with your support 
          request. All feedback is appreciated to help us 
          improve our offering!
        </SubHeader>
        <ButtonRow>
          {Array(5).fill(0).map((_, i) => (
            <Button key={i}>{i+1}</Button>
          ))}
        </ButtonRow>
        <Submit>Submit</Submit>
      </RatingContainer>
    </Main>
  );
}

export default App;
