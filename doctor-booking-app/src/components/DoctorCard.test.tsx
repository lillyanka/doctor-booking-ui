import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DoctorCard from './DoctorCard';
import { Doctor } from '../types/types';

const mockDoctor: Doctor = {
  id: '1',
  name: 'Dr. Sarah Johnson',
  specialty: 'Cardiology',
  rating: 4.8,
  availability: ['Mon 9:00 AM', 'Wed 2:00 PM'],
  location: 'Main Hospital',
  photoUrl: 'https://example.com/photo.jpg'
};

test('renders doctor information correctly', () => {
  const mockOnBook = jest.fn();
  render(<DoctorCard doctor={mockDoctor} onBookAppointment={mockOnBook} />);
  
  expect(screen.getByText(mockDoctor.name)).toBeInTheDocument();
  expect(screen.getByText(mockDoctor.specialty)).toBeInTheDocument();
  expect(screen.getByText(mockDoctor.rating)).toBeInTheDocument();
  expect(screen.getByText(mockDoctor.location)).toBeInTheDocument();
});

test('calls onBookAppointment when button clicked', () => {
  const mockOnBook = jest.fn();
  render(<DoctorCard doctor={mockDoctor} onBookAppointment={mockOnBook} />);
  
  fireEvent.click(screen.getByText('Book Appointment'));
  expect(mockOnBook).toHaveBeenCalledWith(mockDoctor);
});