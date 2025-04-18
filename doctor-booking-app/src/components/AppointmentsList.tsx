import React from 'react';
import { Appointment } from '../types/types';

interface AppointmentsListProps {
  appointments: Appointment[];
  onCancel: (id: string) => void;
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointments, onCancel }) => {
  if (appointments.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <p className="text-gray-600">You have no upcoming appointments.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" role="list" aria-label="Upcoming appointments">
      {appointments.map((appointment) => (
        <div 
          key={appointment.id}
          className="bg-white rounded-lg shadow-md p-6"
          role="listitem"
          aria-labelledby={`appointment-${appointment.id}-title`}
        >
          <h3 
            id={`appointment-${appointment.id}-title`}
            className="text-lg font-semibold text-gray-800 mb-2"
          >
            {appointment.doctorName} - {appointment.specialty}
          </h3>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Date & Time:</span> {appointment.date} at {appointment.time}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-medium">Location:</span> {appointment.location}
          </p>
          <button
            onClick={() => onCancel(appointment.id)}
            className="text-red-600 hover:text-red-800 font-medium"
            aria-label={`Cancel appointment with ${appointment.doctorName}`}
          >
            Cancel Appointment
          </button>
        </div>
      ))}
    </div>
  );
};

export default AppointmentsList;