import { render, screen } from "@testing-library/react";
import * as filmServer from '../../server/film';

import { MemoryRouter } from "react-router-dom";
import { Film } from "../../pages/Film";

describe('Film', () => {
  it('should render component correctly in loading', () => {
    jest.spyOn(filmServer, 'useFilm').mockReturnValue({
      film: undefined,
      isLoadingFilm: true,
      isError: undefined,
    });

    render(
      <MemoryRouter>
        <Film />
      </MemoryRouter>
    );
    const filmPageLabel = screen.getByText("Loading...");

    expect(filmPageLabel).toBeInTheDocument();
  });

  it('should render component correctly with error', () => {
    const mockedFilm = {
      Actors: "Daniel Radcliffe, Emma Watson, Rupert Grint",
      Awards: "Nominated for 3 Oscars. 47 wins & 94 nominations total",
      BoxOffice: "$381,447,587",
      Country: "United Kingdom, United States",
      DVD: new Date(),
      Director: "David Yates",
      Genre: "Adventure, Family, Fantasy",
      Language: "English, Latin",
      Metascore: "85",
      Plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      Production: "N/A",
      Rated: "PG-13",
      Ratings: [],
      Released: "15 Jul 2011",
      Response: true,
      Runtime: "130 min",
      Title: "Harry Potter and the Deathly Hallows: Part 2",
      Type: "movie",
      Website: "N/A",
      Writer: "Steve Kloves, J.K. Rowling",
      Year: "2011",
      imdbID: "tt1201607",
      imdbRating: 8.1,
      imdbVotes: 905,
    }
    jest.spyOn(filmServer, 'useFilm').mockReturnValue({
      film: mockedFilm,
      isLoadingFilm: false,
      isError: undefined,
    });

    render(
      <MemoryRouter>
        <Film />
      </MemoryRouter>
    );
    const filmPageFilmTitle = screen.getByText(mockedFilm.Title);
    const filmPageFilmPlot = screen.getByText(mockedFilm.Plot);

    expect(filmPageFilmTitle).toBeInTheDocument();
    expect(filmPageFilmPlot).toBeInTheDocument();
  });
});
