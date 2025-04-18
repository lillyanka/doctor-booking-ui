import React, { useState } from 'react';
import { Doctor } from '../types/types';

interface BookingModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onConfirm: (timeSlot: string) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ doctor, onClose, onConfirm }) => {
  const [selectedSlot, setSelectedSlot] = useState<string>('');

  if (!doctor) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="text-xl font-semibold text-gray-800">
            Book Appointment with {doctor.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">Select an available time slot:</p>
          <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-labelledby="modal-title">
            {doctor.availability.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`p-3 border rounded-md text-center ${selectedSlot === slot ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                role="radio"
                aria-checked={selectedSlot === slot}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(selectedSlot)}
            disabled={!selectedSlot}
            className={`px-4 py-2 rounded-md text-white ${!selectedSlot ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            aria-disabled={!selectedSlot}
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;