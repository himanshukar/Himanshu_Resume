import React from 'react';

const ResumeData = () => {
  const resume = {
    personalInfo: {
      name: 'Himanshu kar',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'Anystate',
      },
    },
    workExperience: [
      {
        company: 'ABC Company',
        position: 'Software Engineer',
        startDate: '2018-01-01',
        endDate: '2020-12-31',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        company: 'XYZ Corporation',
        position: 'Frontend Developer',
        startDate: '2021-01-01',
        endDate: 'Present',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
    education: [
      {
        institution: 'University of ABC',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        startDate: '2015-09-01',
        endDate: '2019-06-30',
        description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      },
      {
        institution: 'College of XYZ',
        degree: 'Associate of Arts',
        fieldOfStudy: 'Graphic Design',
        startDate: '2012-09-01',
        endDate: '2015-06-30',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
    skills: [
      'JavaScript',
      'React',
      'HTML/CSS',
      'Node.js',
      'Python',
    ],
    projects: [
      {
        title: 'Project A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        startDate: '2020-07-01',
        endDate: '2020-12-31',
        technologiesUsed: ['React', 'Node.js', 'MongoDB'],
      },
      {
        title: 'Project B',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        startDate: '2021-01-01',
        endDate: '2021-06-30',
        technologiesUsed: ['Python', 'Django', 'PostgreSQL'],
      },
    ],
  };
};

  export default ResumeData;