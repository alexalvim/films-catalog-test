import { render, screen } from "@testing-library/react";

import { Rate } from "../../components/Rate";

const mockedProps = {
  rating: '50%',
  color: '#ffffff',
  image: 'image-url',
}

describe('Rate', () => {
  it('should render component correctly', () => {
    render(
      <Rate {...mockedProps} />
    );
    const rateRating = screen.getByText(mockedProps.rating);
    const rateImage = screen.getByAltText('rate logo');
    const rateImageHolder = screen.getByTestId('rate-image-section')

    expect(rateImage).toHaveAttribute('src', mockedProps.image);
    expect(rateRating).toBeInTheDocument();
    expect(rateImageHolder).toHaveStyle({ backgroundColor: mockedProps.color })
  });
});
