import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AppointmentsList from './AppointmentsList';
import { Appointment } from '../types/types';

const mockAppointments: Appointment[] = [{
  id: '1',
  doctorId: '1',
  doctorName: 'Dr. Sarah Johnson',
  specialty: 'Cardiology',
  date: 'Mon May 12th',
  time: '9:00 AM',
  location: 'Main Hospital'
}];

test('displays "no appointments" message when empty', () => {
    render(<AppointmentsList appointments={[]} onCancel={() => {}} />);
    expect(screen.getByText('You have no upcoming appointments.')).toBeInTheDocument();
});

test('lists upcoming appointments correctly', () => {
  const mockOnCancel = jest.fn();
  render(<AppointmentsList appointments={mockAppointments} onCancel={mockOnCancel} />);
  
  expect(screen.getByText(`${mockAppointments[0].doctorName} - ${mockAppointments[0].specialty}`)).toBeInTheDocument();
  expect(screen.getByText(`${mockAppointments[0].date} at ${mockAppointments[0].time}`)).toBeInTheDocument();
  expect(screen.getByText(mockAppointments[0].location)).toBeInTheDocument();
});

test('calls onCancel when button clicked', () => {
  const mockOnCancel = jest.fn();
  render(<AppointmentsList appointments={mockAppointments} onCancel={mockOnCancel} />);
  
  fireEvent.click(screen.getByText('Cancel Appointment'));
  expect(mockOnCancel).toHaveBeenCalledWith(mockAppointments[0].id);
});