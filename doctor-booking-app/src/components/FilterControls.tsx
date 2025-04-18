import React from 'react';

interface FilterControlsProps {
  specialties: string[];
  selectedSpecialty: string;
  onSpecialtyChange: (specialty: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  specialties,
  selectedSpecialty,
  onSpecialtyChange
}) => {
  return (
    <div className="mb-8" role="search" aria-label="Doctor filters">
      <label htmlFor="specialty-filter" className="block text-gray-700 font-medium mb-2">
        Filter by Specialty:
      </label>
      <select
        id="specialty-filter"
        value={selectedSpecialty}
        onChange={(e) => onSpecialtyChange(e.target.value)}
        className="w-full md:w-64 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        aria-controls="doctor-list"
      >
        {specialties.map((specialty) => (
          <option key={specialty} value={specialty}>
            {specialty}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterControls;