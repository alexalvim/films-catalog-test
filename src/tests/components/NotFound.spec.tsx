import { render, screen } from "@testing-library/react";

import { NotFound } from "../../components/NotFound";
import { MemoryRouter } from "react-router-dom";

const mockedProps = {
  label: 'Label text',
}

describe('NotFound', () => {
  it('should render component correctly', () => {
    render(
      <MemoryRouter>
        <NotFound {...mockedProps} />
      </MemoryRouter>
    );
    const notFoundLabel = screen.getByText(mockedProps.label);
    const notFoundLink = screen.getByText('Return to list page');

    expect(notFoundLabel).toBeInTheDocument();
    expect(notFoundLink).toBeInTheDocument();
    expect(notFoundLink).toHaveAttribute('href', `/films`)
  });
});
