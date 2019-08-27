import React from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
`;

const FlexColumn = styled(FlexDiv)`
  flex-direction: column;
`;

const FlexSpaceBetweenDiv = styled(FlexDiv)`
  justify-content: space-between;
  margin: 24px 0px; 
`;

const FlexEndDiv = styled(FlexDiv)`
  justify-content: flex-end;
`;

const ClearButton = styled.button`
  border: none;
  margin: 20px 10px;
  font-weight: 500;
  font-size: 13px;
  color: teal;
  :hover {
    text-decoration: underline;
  }
`;

const BigLetters = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const BigNumbers = styled(BigLetters)`
  margin: 0px 22px;
`;

const SmallLetters = styled.span`
  font-size: 14px;
  color: darkslategray;
`;

const OuterContainer = styled.div`
  width: 312px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
  border: 1px lightgray solid;
  border-radius: 3px;
`;

const InnerContainer = styled.div`
  margin: 24px;
`;

// add 0.3 for a in colors below for unselectable buttons
const Button = styled.button`
  border-radius: 50%;
  border: rgba(0, 132, 137) solid 1px;
  color: rgba(0, 132, 137);
  height: 32px;
  width: 32px;
`;

const Guests = () => (
  <OuterContainer>
    <InnerContainer>
      <FlexSpaceBetweenDiv>
        <div>
          <BigLetters>Adults</BigLetters>
        </div>
        <div>
          <Button type="button">-</Button>
          <BigNumbers>1</BigNumbers>
          <Button type="button">+</Button>
        </div>
      </FlexSpaceBetweenDiv>
      <FlexSpaceBetweenDiv>
        <FlexColumn>
          <BigLetters>Children</BigLetters>
          <SmallLetters>Ages 2–12</SmallLetters>
        </FlexColumn>
        <div>
          <Button type="button">-</Button>
          <BigNumbers>1</BigNumbers>
          <Button type="button">+</Button>
        </div>
      </FlexSpaceBetweenDiv>
      <FlexSpaceBetweenDiv>
        <FlexColumn>
          <BigLetters>Infants</BigLetters>
          <SmallLetters>Under 2</SmallLetters>
        </FlexColumn>
        <div>
          <Button type="button">-</Button>
          <BigNumbers>0</BigNumbers>
          <Button type="button">+</Button>
        </div>
      </FlexSpaceBetweenDiv>
      <div>
        <SmallLetters>
          2 guests maximum. Infants don’t count toward the number of guests.
        </SmallLetters>
      </div>
      <FlexEndDiv>
        <ClearButton type="button">Clear</ClearButton>
      </FlexEndDiv>
    </InnerContainer>
  </OuterContainer>
);

export default Guests;
