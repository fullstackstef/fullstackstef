export interface ITab {
    id: number
    label: string
  }

export interface TabInfo {
    id: number
    company: string
    companyUrl: string
    positions: Positions[]
}

export interface Positions {
    id: number
    title: string
    fulltime: boolean
    startDate: string
    endDate: string
    current: boolean
    tasks: string[]
    techStackImg: Img
}

interface Img {
    width: number
    height: number
    src: string
}

export const tabInfo: TabInfo[] = [
    {
        id: 1,
        company: 'Block Renovation',
        companyUrl: "https://www.blockrenovation.com/",
        positions: [
            {
                id: 1,
                title: 'Senior Software Developer',
                fulltime: true,
                startDate: 'January 2022',
                endDate: 'January 2023',
                current: false,
                tasks: [
                    'On the Scope Squad to help ensure the internal administrative application made correct home renovation estimations that allowed for a smooth process from measurements to design.',
                    'Engineering lead on the Labor V2 initiative to help reorganize how we categorize and display labor items for our contractors. This initiative spanned across Block’s admin tool, homeowner dashboard, and contractor mobile application.',
                    'Engineered the admin web application, homeowner dashboard web application, contractor mobile application, and backend API with TypeScript, NextJS, React, React Native, Apollo GraphQL, NodeJS, and PostgreSQL.',
                    'Led initiatives to help improve collaboration between engineers and product designers, which most recently was implementing Chromatic in the CircleCI pipeline to deploy our Storybook components.'
                ],
                techStackImg: {
                    width: 541,
                    height: 72,
                    src: '/images/blockrenovationTechStack.png'
                }
            }
        ]
    },
    {
        id: 2,
        company: 'Planned',
        companyUrl: "https://planned.com/",
        positions: [
            {
                id: 1,
                title: 'Senior Software Developer',
                fulltime: true,
                startDate: 'October 2020',
                endDate: 'December 2021',
                current: false,
                tasks: [
                    'On the Planned Marketplace team to assist event planners search, filter, and find the best suited vendors and venues for their next event.',
                    'Engineered the events admin web application and marketplace with TypeScript, NextJS, React, Redux, Firebase, and NodeJS.'
                ],
                techStackImg: {
                    width: 479,
                    height: 72,
                    src: '/images/plannedTechStack.png'
                }
            }
        ]
    },
    {
        id: 3,
        company: 'BrainStation',
        companyUrl: "https://www.brainstation.io/",
        positions: [
            {
                id: 1,
                title: 'Web Development Instructor',
                fulltime: false,
                startDate: 'July 2020',
                endDate: 'January 2021',
                current: false,
                tasks: [
                    'Taught BrainStation’s 12-week Web Development Diploma program.',
                    'Delivered lectures and provide expert technical guidance to students who are building exciting projects using HTML, CSS, and JavaScript.'
                ],
                techStackImg: {
                    width: 330,
                    height: 33,
                    src: '/images/brainstationTechStack.png'
                }
            }
        ]
    },
    {
        id: 4,
        company: 'Let’s  Warp Inc.',
        companyUrl: "https://lets-warp.com/",
        positions: [
            {
                id: 1,
                title: 'Software Developer',
                fulltime: true,
                startDate: 'December 2019',
                endDate: 'October 2020',
                current: false,
                tasks: [
                    'Engineered WILBUR™, the progressive web application with TypeScript, React, Redux, Java, SpringBoot, and PostgreSQL.',
                    'Managed and mentored Junior developers.'
                ],
                techStackImg: {
                    width: 469,
                    height: 72,
                    src: '/images/letswarpincTechStack.png'
                }
            }
        ]
    },
    {
        id: 5,
        company: 'Detour UX',
        companyUrl: "https://www.wearedetour.com/",
        positions: [
            {
                id: 1,
                title: 'Technical Lead',
                fulltime: true,
                startDate: 'April 2019',
                endDate: 'August 2019',
                current: false,
                tasks: [
                    'Ran daily scrums with fellow developers, managed and oversight on all development projects, and mentored junior developers.',
                    'Managed and completed my own individual full stack development projects while also assisting UX and Design Department with any technical requirements.',
                    'Interacted with clients and helped them align their business goals with technical requirements.'
                ],
                techStackImg: {
                    width: 483,
                    height: 72,
                    src: '/images/detouruxTechStack.png'
                }
            },
            {
                id: 2,
                title: 'Software Developer',
                fulltime: true,
                startDate: 'November 2017',
                endDate: 'April 2019',
                current: false,
                tasks: [
                    'Engineered full stack development projects with TypeScript, Angular, Redux, NodeJS, and Firebase.',
                    'Managed and completed my own individual full stack development projects while also assisting UX and Design Department with any technical requirements.',
                    'Attended daily scrums with fellow developers and followed an agile methodology.'
                ],
                techStackImg: {
                    width: 483,
                    height: 72,
                    src: '/images/detouruxTechStack.png'
                }
            }
        ]
    },
    
]