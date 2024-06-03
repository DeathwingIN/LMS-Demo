export interface StudentSubmission {
  studentId: string;
  submissionDetails: string; // Add fields as needed for submission details
}

export interface Assignment {
  assignmentId: string;
  lessonId: string; // Reference to the lesson ID
  title: string;
  description: string;
  dueDate: Date;
  studentSubmissions: StudentSubmission[];
}
