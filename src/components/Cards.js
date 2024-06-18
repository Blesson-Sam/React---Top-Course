import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const[likeCourse, setLikeCourse]=useState([]);

    function getCourse (){

      if(category==="All")
      {
        let allCourseData = [];
        
            Object.values(courses).forEach(courseCategory => {
              courseCategory.forEach(courseData => {
                allCourseData.push(courseData);
              });
            });
          
          return allCourseData;
        }
        else
        {
          return courses[category];
        }
      }
    

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourse().map(course =>
                <Card key={course.id} course={course} likeCourse={likeCourse} setLikeCourse={setLikeCourse}/>)
        }
    </div>
  );
};

export default Cards;
