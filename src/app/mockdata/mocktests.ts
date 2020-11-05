export const mockTestsMaster = [
    {
        code: 'AWS-SAA-1',
        details: {
            title: 'AWS Certified Solutions Architect - Associate',
            subtitle: 'Practice Test 1',
            price: 1000,
            description: 'The AWS Certified Solutions Architect – Associate exam is intended for individuals who perform a solutions architect role with one or more years of hands-on experience managing and operating systems on AWS.',
            imgURL: '/assets/img/AWSSAA.png'
        }
    },
    {
        code: 'AWS-SAP-1',
        details: {
            title: 'AWS Certified Solutions Architect - Professional',
            subtitle: 'Practice Test 1',
            price: 1000,
            description: 'The AWS Certified Solutions Architect – Professional exam is intended for individuals who perform a solutions architect role with two or more years of hands-on experience managing and operating systems on AWS.',
            imgURL: '/assets/img/AWSSAP.png'
        }
      }
  ];

 export const mockTestQuestions = [
    {
        question: 'What is AWS?',
        options: [
                'Apna Waala Sahi',
                'Amazon Wala Sale',
                'Aur Woh Soch',
                'Amazon Web Services',
        ],
        multipleoption: false
    },
    {
        question: 'What is the capital of United Kingdom?',
        options: [
                'Addis Ababa',
                'Mogadishu',
                'London',
                'Worcestershire',
        ],
        multipleoption: false
    },
    {
        question: 'Which of the following are gas giants',
        options: [
                'Jupiter',
                'Saturn',
                'Mars',
                'Mercury',
        ],
        multipleoption: true
    },
    {
        question: 'Who is the Prime Minister of India?',
        options: [
                'Donald Trump',
                'Narendra Modi',
                'Emmanuel Macron',
                'Scott Morrison',
        ]
    }
  ];