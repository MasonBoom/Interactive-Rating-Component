import React, { useState } from 'react';
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
import Confirmation from './components/Confirmation'
import star from './assets/star.svg';

function App() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const toggleButton = index => {
    const buttons = document.getElementsByClassName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    buttons[index].classList.add('active');
    setRating(index + 1);
  }

  console.log(rating)

  return (
    <>
      {!submitted ? (
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
              <Button onClick={() => toggleButton(i)} id={`button${i}`} className='button' key={i}>{i+1}</Button>
            ))}
          </ButtonRow>
          <Submit onClick={() => setSubmitted(true)} >Submit</Submit>
        </RatingContainer>
      </Main>
      ) : <Confirmation rating={rating} />
      }
    </>
  );
}


export default App;
