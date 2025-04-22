import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterControls from './FilterControls';

test('renders filter dropdown with options', () => {
  const specialties = ['All', 'Cardiology', 'Neurology'];
  const mockOnChange = jest.fn();
  
  render(
    <FilterControls 
      specialties={specialties}
      selectedSpecialty="All"
      onSpecialtyChange={mockOnChange}
    />
  );
  
  const select = screen.getByLabelText('Filter by Specialty:');
  expect(select).toBeInTheDocument();
  
  specialties.forEach(specialty => {
    expect(screen.getByText(specialty)).toBeInTheDocument();
  });
});

test('triggers onSpecialtyChange when selection changes', () => {
  const mockOnChange = jest.fn();
  render(
    <FilterControls 
      specialties={['All', 'Cardiology']}
      selectedSpecialty="All"
      onSpecialtyChange={mockOnChange}
    />
  );
  
  fireEvent.change(screen.getByLabelText('Filter by Specialty:'), {
    target: { value: 'Cardiology' }
  });
  
  expect(mockOnChange).toHaveBeenCalledWith('Cardiology');
});