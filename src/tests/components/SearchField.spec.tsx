import { fireEvent, render, screen } from "@testing-library/react";

import { SearchField } from "../../components/SearchField";

const mockOnChange = jest.fn((newValue) => {});

const mockedProps = {
  onChange: mockOnChange,
  placeholder: 'placeholder',
  value: '',
}

describe('SearchField', () => {
  it('should render component correctly', () => {
    render(
      <SearchField {...mockedProps} />
    );
    const searchFieldInput = screen.getByPlaceholderText(mockedProps.placeholder);

    expect(searchFieldInput).toBeInTheDocument();
  });

  it('should render component correctly with text', () => {
    const mockValue = 'foo';
    render(
      <SearchField {...mockedProps} value={mockValue} />
    );
    const searchFieldInput = screen.getByPlaceholderText(mockedProps.placeholder);

    expect(searchFieldInput).toHaveAttribute('value', mockValue);
  });

  it('should call on change funcion correctly', () => {
    render(
      <SearchField {...mockedProps}/>
    );
    const newValue = 'new value';
    const searchFieldInput = screen.getByPlaceholderText(mockedProps.placeholder);
    fireEvent.change(searchFieldInput, {
      target: { value: newValue }
    });

    expect(mockOnChange).toHaveBeenCalledWith(newValue);
  });
});
