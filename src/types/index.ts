

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  employmentStatus: string;

  phoneNumber: string;
  email: string;
  address: string;
  addressLineTwo?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  addressValid: boolean;

  allergies: string[];
  medicalHistory: string[];
  familyHistory: string[];
  goalWeight: number;
  prescriptions: string[];

  medications: Medication[];
  measurements: Measurement[];

  isOnboardingComplete: boolean;
  createdDate: string;
}


export interface Measurement {
  id: string;
  patientId: string;
  type: 'WEIGHT' | 'HEIGHT' | 'BLOOD PRESSURE' | string;
  value: number | string;
  unit: string;
  date: string;
}

export interface Medication {
  id: string;
  patientId: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate: string | null;
  active: boolean;
}

export interface DoctorsNote {
  id: string;
  createdDate: string;
  summary: string;
  content: string;
  providerNames: string[];
  aiGenerated: boolean;
  version: number;
}

export interface NotificationI {
  id: string;
  type: string;
  data: any;
  createdDate: string;
  actionRequired: boolean;
  tags: { id: string; name: string }[];
}

export interface PaymentData {
  id: string;
  description: string;
  total: number;
  totalOutstanding?: number;
  payments?: {
    createdDate: string;
    paymentMethod?: {
      brand: string;
      last4: string;
    };
  }[];
  patient: {
    firstName: string;
    lastName: string;
  };
  items: {
    item_id: string;
    item: {
      name: string;
      price: number;
      category?: string;
    };
  }[];
  comment?: string | null;
  status: string;
}

export interface Memo {
  id: string;
  note: string;
  createdDate: string;
  creator: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Attendee {
  user: User;
  inviteStatus: 'ACCEPTED' | 'PENDING' | 'DECLINED' | string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isVirtual: boolean;
  meetingLink: string | null;
}

export interface AppointmentDetails {
  id: string;
  eventId: string;
  patientId: string;
  providerId: string;
  reason: string;
  confirmationStatus: 'CONFIRMED' | 'CANCELLED' | 'PENDING';
  confirmationDate: string;
  checkedInDate: string | null;
  appointmentType: 'FOLLOW_UP' | 'INITIAL' | 'CONSULTATION' | string;
}

export interface AppointmentEvent {
  id: string;
  title: string;
  organizer: User;
  start: string;
  end: string;
  type: string;
  status: string;
  meetingLink: string | null;
  attendees: Attendee[];
  location: Location;
  formCompleted: boolean;
  appointment: AppointmentDetails;
}
