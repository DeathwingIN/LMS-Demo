export interface Assignment {
  assignmentId: string;
  lessonId: string;
  title: string;
  description: string;
  dueDate: Date;
  studentSubmissions: any[]; // Define a proper type for student submissions
}

export interface Submission {
  studentId: string;
  submissionDetails: any; // Define the structure for submission details
}
