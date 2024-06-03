export interface Course {
  courseId: string;
  title: string;
  description: string;
  teacherId: string; // Reference to the user ID of the teacher
}
