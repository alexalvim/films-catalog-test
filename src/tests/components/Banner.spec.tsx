import { render, screen } from "@testing-library/react";

import { Banner } from "../../components/Banner";

const mockedProps = {
  image: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
  title: 'Harry Potter and the Deathly Hallows: Part 2',
  subtitle: '2011',
  alt: 'alt example'
}

describe('Banner', () => {
  it('should render component correctly', () => {
    render(
      <Banner {...mockedProps} />
    );
    const bannerTitle = screen.getByText(mockedProps.title);
    const bannerSubtitle = screen.getByText(mockedProps.subtitle);
    const bannerImage = screen.getByAltText(mockedProps.alt);

    expect(bannerImage).toHaveAttribute('src', mockedProps.image);
    expect(bannerTitle).toBeInTheDocument();
    expect(bannerSubtitle).toBeInTheDocument();
  });
});
