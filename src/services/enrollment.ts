import { supabase } from '../lib/supabaseClient';

export type EnrollmentPayload = {
  name: string;
  phoneNumber: string;
  mail: string;
  message?: string;
};

export const getCourseTableName = (courseTitle: string): string => {
  // slugify course title to table name, e.g., "7 Days Professional PMU" -> "course_7_days_professional_pmu"
  const base = courseTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, '_');
  return `course_${base}`;
};

export async function enrollInCourse(courseTitle: string, data: EnrollmentPayload) {
  const table = getCourseTableName(courseTitle);
  const { error } = await supabase.from(table).insert({
    name: data.name,
    phone_number: data.phoneNumber,
    mail: data.mail,
    message: data.message || null,
  });
  if (error) throw error;
}


