import { Doctor } from '../types/types';

export const doctors: Doctor[] = [
    {
        id: '1',
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiology',
        rating: 4.8,
        availability: ['Mon 9:00 AM', 'Wed 2:00 PM', 'Fri 10:00 AM'],
        location: 'Main Hospital, Floor 3',
        photoUrl: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
        id: '2',
        name: 'Dr. Michael Chen',
        specialty: 'Neurology',
        rating: 4.6,
        availability: ['Tue 11:00 AM', 'Thu 3:00 PM', 'Sat 9:00 AM'],
        location: 'North Clinic, Floor 1',
        photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        id: '3',
        name: 'Dr. Emily Wilson',
        specialty: 'Pediatrics',
        rating: 4.9,
        availability: ['Mon 1:00 PM', 'Wed 10:00 AM', 'Fri 4:00 PM'],
        location: 'Children\'s Wing, Floor 2',
        photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
];

export const specialties = ['All', 'Cardiology', 'Neurology', 'Pediatrics'];