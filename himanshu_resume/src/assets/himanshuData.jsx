// resumeData.js

const ResumeData = () => {
  const resume = {
    personalInfo: {
      name: 'Himanshu Kar',
      age: 30,
      address: {
        street: 'Anystreet',
        city: 'Anytown',
        state: 'Anystate',
      },
    },
    workExperience: [
      {
        company: 'The Catalyst',
        position: 'Software Engineer',
        startDate: '10-04-2018',
        endDate: '26-Nov-2019',
        description: 'My role was to develop an application based Industry 4.0 technology and deliver a complete product.',
      },
      {
        company: 'Tikona',
        position: 'Java Developer',
        startDate: '04-11-2019',
        endDate: '20-11-2021',
        description: 'My role was to develop, test and deploy full stack web application.',
      },
      {
        company: 'Wipro',
        position: 'Full Stack Developer',
        startDate: '01-12-2021',
        endDate: '11-10-2023',
        description: 'My role was build backend java services for bulk trancsactions, handling business logic and engage on complete software life cycle activities.',
      },
      {
        company: 'Hitachi Energy',
        position: 'Developer',
        startDate: '04-11-2019',
        endDate: '20-11-2021',
        description: 'My role is to develiver product following quality standards and timely devlivery.',
      },
    ],
    education: [
      {
        institution: 'Army Public School',
        degree: 'Class of 12',
        fieldOfStudy: 'Science',
        startDate: 'inception',
        endDate: '2011',
        description: 'My thing was sports, music, travel and litlle bit of study.',
      },
      {
        institution: 'VIT University, Vellore',
        degree: 'Engineering',
        fieldOfStudy: 'Computer Science',
        startDate: '2011',
        endDate: '2015',
        description: 'My thing was sports, music, travel and litlle bit of study.',
      },
      {
        institution: 'VIT University, Vellore',
        degree: 'Master of Sciences',
        fieldOfStudy: 'Software Engineering',
        startDate: '2015',
        endDate: '2017',
        description: 'My thing was sports, music, travel and litlle bit of study.',
      },
    ],
    skills: [
      'JavaScript',
      'React',
      'HTML/CSS',
      'Node.js',
      'Python',
      'VS Code',
      'intelliJ'
    ],
    projects: [
      {
        title: 'Undisclosed',
        description: 'Web Application.',
        technologiesUsed: ['Struts2', 'Oracle','html', 'JSP','javascript'],
      },
      {
        title: 'Undisclosed',
        description: 'Backend service',
        startDate: '2021-01-01',
        endDate: '2021-06-30',
        technologiesUsed: ['Python', 'Java', 'Django', 'PostgreSQL'],
      },
      {
        title: 'Undisclosed',
        description: 'full stack service (micro Front-end,mciro Back-end)',
        startDate: '2021-01-01',
        endDate: '2021-06-30',
        technologiesUsed: ['React.js', 'Node.js', 'MongoDB'],
      },
    ],
  };

  return resume;
};

export default ResumeData;