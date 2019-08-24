import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
`;

const StarRatings = styled.span`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size 14px;
  unicode-bidi: bidi-override;
  color: gray;
  height: 25px;
  width: 62px;
  position: relative;
  margin-right: 5px;
`;

const TopStars = styled(StarRatings)`
  color: teal;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const BottomStars = styled(StarRatings)`
  padding: 0;
  display: block;
  z-index: 0;
`;

const OuterContainer = styled.div`
  position: fixed;
  top: 75px;
  margin-left: 45px;
  width: 376px;
  border: 1px lightgray solid;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

const StaticWord = styled.span`
  margin-right: 5px;
  font-size 14px;
`;

const Cost = styled.span`
  font-size: 22px;
  font-weight: 700;
  margin-right: 5px;
`;


const App = ({ listing }) => {
  const chargePerNight = `$${listing.chargePerNight}`;
  const review = `${listing.numberOfRatings}`;
  const width = `${listing.rating * 10}%`;

  return (
    <OuterContainer>
      <InnerContainer>
        <div>
          <Cost>{chargePerNight}</Cost>
          <StaticWord>per night</StaticWord>
        </div>
        <Flex>
          <StarRatings>
            <TopStars style={{ width }}>
              <span>★★★★★</span>
            </TopStars>
            <BottomStars>
              <span>★★★★★</span>
            </BottomStars>
          </StarRatings>
          <StaticWord>{review}</StaticWord>
        </Flex>
      </InnerContainer>
    </OuterContainer>
  );
};

App.propTypes = {
  listing: PropTypes.shape({
    maxGuests: PropTypes.number,
    maxInfants: PropTypes.number,
    chargePerNight: PropTypes.number,
    cleaningFee: PropTypes.number,
    serviceFee: PropTypes.number,
    occupancyFee: PropTypes.number,
    rating: PropTypes.number,
    numberOfRatings: PropTypes.number,
  }),
};

App.defaultProps = {
  listing: {
    maxGuests: 5,
    maxInfants: 3,
    chargePerNight: 150,
    cleaningFee: 10,
    serviceFee: 10,
    occupancyFee: 10,
    rating: 9,
    numberOfRatings: 300,
  },
};

export default App;
