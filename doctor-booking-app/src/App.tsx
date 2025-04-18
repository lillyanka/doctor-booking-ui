import React, { useState } from 'react';
import { doctors, specialties } from './data/mockData';
import { Doctor, Appointment } from './types/types';
import DoctorCard from './components/DoctorCard';
import FilterControls from './components/FilterControls';
import BookingModal from './components/BookingModal';
import AppointmentsList from './components/AppointmentsList';

const App: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [activeTab, setActiveTab] = useState<'doctors' | 'appointments'>('doctors');

  const filteredDoctors = selectedSpecialty === 'All' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === selectedSpecialty);

  const handleBookAppointment = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleConfirmBooking = (timeSlot: string) => {
    if (!selectedDoctor) return;
    
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      date: timeSlot.split(' ')[0], // Extract day
      time: timeSlot.split(' ').slice(1).join(' '), // Extract time
      location: selectedDoctor.location
    };
    
    setAppointments([...appointments, newAppointment]);
    setSelectedDoctor(null);
  };

  const handleCancelAppointment = (id: string) => {
    setAppointments(appointments.filter(appt => appt.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Doctor Appointment Booking</h1>
        
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('doctors')}
            className={`px-4 py-2 font-medium ${activeTab === 'doctors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            aria-current={activeTab === 'doctors' ? 'page' : undefined}
          >
            Find Doctors
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2 font-medium ${activeTab === 'appointments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            aria-current={activeTab === 'appointments' ? 'page' : undefined}
          >
            My Appointments
          </button>
        </div>
        
        {activeTab === 'doctors' ? (
          <>
            <FilterControls
              specialties={specialties}
              selectedSpecialty={selectedSpecialty}
              onSpecialtyChange={setSelectedSpecialty}
            />
            <div id="doctor-list" className="grid md:grid-cols-2 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onBookAppointment={handleBookAppointment}
                />
              ))}
            </div>
          </>
        ) : (
          <AppointmentsList
            appointments={appointments}
            onCancel={handleCancelAppointment}
          />
        )}
        
        {selectedDoctor && (
          <BookingModal
            doctor={selectedDoctor}
            onClose={() => setSelectedDoctor(null)}
            onConfirm={handleConfirmBooking}
          />
        )}
      </div>
    </div>
  );
};

export default App;