import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { PageNotFound } from "../../pages/PageNotFound";

describe('PageNotFound', () => {
  it('should render component correctly', () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );
    const pageNotFoundLabel = screen.getByText('Page not found');
    const pageNotFoundLink = screen.getByText('Return to list page');

    expect(pageNotFoundLabel).toBeInTheDocument();
    expect(pageNotFoundLink).toBeInTheDocument();
    expect(pageNotFoundLink).toHaveAttribute('href', `/films`)
  });
});
