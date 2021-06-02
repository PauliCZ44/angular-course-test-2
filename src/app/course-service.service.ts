import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  courses = [
    {
      name: 'Course1',
      isLiked: false,
      likesCount: 15
    },
    {
      name: 'Course2',
      isLiked: false,
      likesCount: 7
    },
    {
      name: 'Course3',
      isLiked: false,
      likesCount: 1
    }
  ];
  getAuthors() {
    return this.courses;
  }
}
