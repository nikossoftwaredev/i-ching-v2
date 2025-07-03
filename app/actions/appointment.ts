'use server';

interface AppointmentRequest {
  name: string;
  phone: string;
  email?: string;
  service: string;
  preferredDate?: string;
  message?: string;
}

export async function sendAppointmentRequest(data: AppointmentRequest) {
  // TODO: Implement Viber API integration
  // For now, log the request and prepare for future Viber integration
  console.log('Appointment request received:', data);
  
  // Validate phone number
  const phoneRegex = /^(\+30)?6\d{9}$/;
  if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
    return {
      success: false,
      message: 'Παρακαλώ εισάγετε έγκυρο ελληνικό κινητό τηλέφωνο'
    };
  }
  
  // Future implementation:
  // - Send Viber message to business number
  // - Store in database
  // - Send confirmation email
  
  return {
    success: true,
    message: 'Το αίτημά σας ελήφθη. Θα επικοινωνήσουμε μαζί σας σύντομα!'
  };
}