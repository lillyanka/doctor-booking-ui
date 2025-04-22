import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { doctors } from '../data/mockData';
import { Doctor } from '../types/types';

test('complete booking flow', async () => {
  render(<App />);
  
  // Verify initial doctor listing
  expect(screen.getByText('Find Doctors')).toBeInTheDocument();
  doctors.forEach((doctor: Doctor) => {
    expect(screen.getByText(doctor.name)).toBeInTheDocument();
  });
  
  // Click book button
  const firstBookButton = screen.getAllByText('Book Appointment')[0];
  fireEvent.click(firstBookButton);
  
  // Verify modal opens with correct doctor
  expect(screen.getByText(`Book Appointment with ${doctors[0].name}`)).toBeInTheDocument();
  
  // Select time slot and confirm
  const firstTimeSlot = screen.getByRole('radio', {name: doctors[0].availability[0]});
  fireEvent.click(firstTimeSlot);
  fireEvent.click(screen.getByText('Confirm Appointment'));
  
  // Switch to appointments tab
  fireEvent.click(screen.getByText('My Appointments'));
  
  // Verify appointment was created
  expect(screen.getByText(`${doctors[0].name} - ${doctors[0].specialty}`)).toBeInTheDocument();
});