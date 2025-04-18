export interface Doctor {
        id: string;
        name: string;
        specialty: string;
        rating: number;
        availability: string[];
        location: string;
        photoUrl: string;
    }

    export interface Appointment {
        id: string;
        doctorId: string;
        doctorName: string;
        specialty: string;
        date: string;
        time: string;
        location: string;
    }