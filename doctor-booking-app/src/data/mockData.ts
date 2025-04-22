import { Doctor } from '../types/types';

export const doctors: Doctor[] = [
  {
    id: 'doc-101',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    rating: 4.8,
    availability: [
      'Mon 9:00 AM', 'Mon 2:00 PM', 
      'Wed 10:00 AM', 'Wed 3:00 PM',
      'Fri 11:00 AM'
    ],
    location: 'Main Hospital, Floor 3, Room 310',
    photoUrl: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    id: 'doc-102',
    name: 'Dr. Michael Brown',
    specialty: 'Neurology',
    rating: 4.6,
    availability: [
      'Tue 11:00 AM', 'Tue 4:00 PM',
      'Thu 9:00 AM', 'Thu 2:00 PM', 
      'Sat 10:00 AM'
    ],
    location: 'North Clinic, Floor 1, Room 105',
    photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 'doc-103',
    name: 'Dr. Emily Wilson',
    specialty: 'Pediatrics',
    rating: 4.9,
    availability: [
      'Mon 1:00 PM', 'Mon 4:00 PM',
      'Wed 9:00 AM', 'Wed 1:00 PM',
      'Fri 3:00 PM'
    ],
    location: 'Children\'s Wing, Floor 2, Room 215',
    photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 'doc-104',
    name: 'Dr. Robert Davis',
    specialty: 'Orthopedics',
    rating: 4.7,
    availability: [
      'Tue 8:00 AM', 'Tue 1:00 PM',
      'Thu 10:00 AM', 'Thu 3:00 PM',
      'Sat 9:00 AM'
    ],
    location: 'West Building, Floor 1, Room 120',
    photoUrl: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    id: 'doc-105',
    name: 'Dr. Angie Smith',
    specialty: 'Dermatology',
    rating: 4.8,
    availability: [
      'Mon 10:00 AM', 'Mon 3:00 PM',
      'Wed 8:00 AM', 'Wed 2:00 PM',
      'Fri 9:00 AM', 'Fri 4:00 PM'
    ],
    location: 'Skin Care Center, Floor 2, Room 205',
    photoUrl: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 'doc-106',
    name: 'Dr. James Wilson',
    specialty: 'Cardiology',
    rating: 4.5,
    availability: [
      'Tue 9:00 AM', 'Tue 2:00 PM',
      'Thu 11:00 AM', 'Thu 4:00 PM'
    ],
    location: 'Main Hospital, Floor 3, Room 315',
    photoUrl: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    id: 'doc-107',
    name: 'Dr. Olivia Martin',
    specialty: 'Pediatrics',
    rating: 4.9,
    availability: [
      'Mon 8:00 AM', 'Mon 1:00 PM',
      'Wed 10:00 AM', 'Wed 3:00 PM',
      'Fri 9:00 AM'
    ],
    location: 'Children\'s Wing, Floor 2, Room 220',
    photoUrl: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    id: 'doc-108',
    name: 'Dr. David Johnson',
    specialty: 'Neurology',
    rating: 4.7,
    availability: [
      'Tue 10:00 AM', 'Tue 3:00 PM',
      'Thu 8:00 AM', 'Thu 1:00 PM',
      'Sat 11:00 AM'
    ],
    location: 'North Clinic, Floor 1, Room 110',
    photoUrl: 'https://randomuser.me/api/portraits/men/28.jpg'
  }
];

export const specialties = [
  'All',
  'Cardiology',
  'Neurology',
  'Pediatrics',
  'Orthopedics',
  'Dermatology',
  'General Medicine',
  'Ophthalmology',
  'ENT'
];
