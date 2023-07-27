import { render, screen } from "@testing-library/react";
import * as filmsServer from '../../server/films';
import * as utils from '../../utils';

import { MemoryRouter } from "react-router-dom";
import { Films } from "../../pages/Films";

describe('Films', () => {
  it('should render component correctly without search', () => {
    jest.spyOn(filmsServer, 'useFilms').mockReturnValue({
      films: undefined,
      isLoadingFilms: false,
      isError: undefined,
    });

    render(
      <MemoryRouter>
        <Films />
      </MemoryRouter>
    );
    const filmsPageTitle = screen.getByText("Don't know what to search?");
    const filmsPageSubtitle = screen.getByText("Here's an offer you can't refuse");

    expect(filmsPageTitle).toBeInTheDocument();
    expect(filmsPageSubtitle).toBeInTheDocument();
  });

  it('should render component correctly in loading state', () => {
    jest.spyOn(filmsServer, 'useFilms').mockReturnValue({
      films: undefined,
      isLoadingFilms: true,
      isError: undefined,
    });

    jest.spyOn(utils, 'useDebounce').mockReturnValue('Ola');

    render(
      <MemoryRouter>
        <Films />
      </MemoryRouter>
    );
    const filmsPageLabel = screen.getByText("Loading results...");

    expect(filmsPageLabel).toBeInTheDocument();
  });

  it('should render component correctly in no results state', () => {
    jest.spyOn(filmsServer, 'useFilms').mockReturnValue({
      films: {
        Search: [],
        Response: true,
        totalResults: 0,
      },
      isLoadingFilms: false,
      isError: undefined,
    });

    jest.spyOn(utils, 'useDebounce').mockReturnValue('Ola');

    render(
      <MemoryRouter>
        <Films />
      </MemoryRouter>
    );
    const filmsPageLabel = screen.getByText("No results found for: Ola");

    expect(filmsPageLabel).toBeInTheDocument();
  });

  it('should render component correctly in results state', () => {
    jest.spyOn(filmsServer, 'useFilms').mockReturnValue({
      films: {
        Search: [{
          Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
          Title: "Harry Potter and the Deathly Hallows: Part 2",
          Type: "movie",
          Year: 2011,
          imdbID: "tt1201607",
        }],
        Response: true,
        totalResults: 0,
      },
      isLoadingFilms: false,
      isError: undefined,
    });

    jest.spyOn(utils, 'useDebounce').mockReturnValue('Ola');

    render(
      <MemoryRouter>
        <Films />
      </MemoryRouter>
    );
    const filmsPageLabel = screen.getByText("Harry Potter and the Deathly Hallows: Part 2");

    expect(filmsPageLabel).toBeInTheDocument();
  });
});
