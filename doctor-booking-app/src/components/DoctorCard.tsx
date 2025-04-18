import React from 'react';
import { Doctor } from '../types/types';

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctor: Doctor) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookAppointment }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 mb-6 transition-transform hover:scale-105"
      aria-labelledby={`doctor-${doctor.id}-name`}
      role="article"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <img 
          src={doctor.photoUrl} 
          alt={`Portrait of ${doctor.name}`}
          className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
          aria-hidden="true"
        />
        <div className="flex-1">
          <h3 
            id={`doctor-${doctor.id}-name`}
            className="text-xl font-semibold text-gray-800"
          >
            {doctor.name}
          </h3>
          <p className="text-gray-600 mb-2">{doctor.specialty}</p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-gray-700">{doctor.rating}</span>
          </div>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Location:</span> {doctor.location}
          </p>
          <div className="mb-4">
            <p className="font-medium text-gray-700">Availability:</p>
            <ul className="list-disc list-inside text-gray-600">
              {doctor.availability.map((slot, index) => (
                <li key={index}>{slot}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={() => onBookAppointment(doctor)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        aria-label={`Book appointment with ${doctor.name}`}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;