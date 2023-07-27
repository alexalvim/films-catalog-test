import { fireEvent, render, screen } from "@testing-library/react";

import { Poster } from '../../components/Poster';
import { MemoryRouter } from "react-router-dom";

const mockedFilm = {
  Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  Title: "Harry Potter and the Deathly Hallows: Part 2",
  Type: "movie",
  Year: 2011,
  imdbID: "tt1201607",
}

describe('Poster', () => {
  it('should render component correctly', () => {
    render(
      <MemoryRouter>
        <Poster
          film={mockedFilm}
          isFavorite={false}
          showFavorite={false}
          onFavorite={() => {}}
          onUnfavorite={() => {}}/>
      </MemoryRouter>
    );
    const posterTitle = screen.getByText(mockedFilm.Title);
    const posterImage = screen.getByAltText(`${mockedFilm.Title} poster`);

    expect(posterImage).toHaveAttribute('src', mockedFilm.Poster);
    expect(posterTitle).toBeInTheDocument();
  });

  it('should render component correctly with favorite button', () => {
    render(
      <MemoryRouter>
        <Poster
          film={mockedFilm}
          isFavorite={false}
          showFavorite={true}
          onFavorite={() => {}}
          onUnfavorite={() => {}}/>
      </MemoryRouter>
    );

    const favoriteButtonIcon = screen.getByTestId('FavoriteBorderIcon');
    expect(favoriteButtonIcon).toBeInTheDocument();
  });

  it('should render component correctly with favorite button favorited', () => {
    render(
      <MemoryRouter>
        <Poster
          film={mockedFilm}
          isFavorite={true}
          showFavorite={true}
          onFavorite={() => {}}
          onUnfavorite={() => {}}/>
      </MemoryRouter>
    );

    const favoriteButtonIcon = screen.getByTestId('FavoriteIcon');
    expect(favoriteButtonIcon).toBeInTheDocument();
  });

  it('should call favorite function correctly', () => {
    const mockFavoriteFunction = jest.fn(() => {});
    render(
      <MemoryRouter>
        <Poster
          film={mockedFilm}
          isFavorite={false}
          showFavorite={true}
          onFavorite={mockFavoriteFunction}
          onUnfavorite={() => {}}/>
      </MemoryRouter>
    );

    const favoriteButtonIcon = screen.getByTestId('FavoriteBorderIcon');
    fireEvent.click(favoriteButtonIcon);

    expect(mockFavoriteFunction).toHaveBeenCalled();
  });

  it('should call unfavorite function correctly', () => {
    const mockUnfavoriteFunction = jest.fn(() => {});
    render(
      <MemoryRouter>
        <Poster
          film={mockedFilm}
          isFavorite={true}
          showFavorite={true}
          onFavorite={() => {}}
          onUnfavorite={mockUnfavoriteFunction}/>
      </MemoryRouter>
    );

    const favoriteButtonIcon = screen.getByTestId('FavoriteIcon');
    fireEvent.click(favoriteButtonIcon);

    expect(mockUnfavoriteFunction).toHaveBeenCalled();
  });

  it('should verify the link to film page is correct', () => {
    render(
      <MemoryRouter>
        <Poster
          film={mockedFilm}
          isFavorite={false}
          showFavorite={false}
          onFavorite={() => {}}
          onUnfavorite={() => {}}/>
      </MemoryRouter>
    );

    const posterTitle = screen.getByText(mockedFilm.Title);

    expect(posterTitle).toHaveAttribute('href', `/films/${mockedFilm.imdbID}`)
  });
});
