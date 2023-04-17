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
                    'On the Scope Squad to help ensure the internal administrative application made correct home renovation estimations a smooth process from measurements to design.',
                    'Engineering lead on the Labor V2 initiative to help reorganize how we categorize and display labour items for our contractors. This initiative spanned Block’s admin tool, homeowner dashboard, and the contractor/builder mobile application.',
                    'Led initiatives to help improve collaboration between engineers and product designers, which most recently was implementing Chromatic in the CircleCI pipeline to deploy our Storybook components. '
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
                    'On the Planned Marketplace team to assist event planners having the ability to search, filter, and find the best-suited vendors and venues for their next event.',
                    'Attended daily stand-up, contributed to product road mapping, and provided insight into shortterm and long-term technical solutions.',
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
                    'Taught BrainStation’s twelve week Web Development Diploma program.',
                    'Delivered lectures and provided expert technical guidance to students building exciting projects using HTML, CSS, and JavaScript.',
                    'During the 12-week session, I provided guidance, consistent feedback, and assessment for all students to ensure they were on track to complete their diploma.'
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
                    'Attended daily stand-up, contributed to product road mapping, and provided insight into short-term and long-term technical solutions.',
                    'I managed a team of six junior developers, provided peer coding sessions, one-on-one feedback sessions, and overall guidance.'
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
                    'Internally managed junior developers, oversight all development-related projects, and ran daily scrums/followed agile methodology.',
                    'Ran daily scrums with fellow developers, managed and oversight all development projects, and mentored junior developers.',
                    'On a day-to-day basis, I would attend client meetings and stand-ups to provide context and updates on a given project while creating alignment for their business goals and deliverables.',
                    'I managed and completed my own full-stack development projects while assisting UX and Design Department with any technical requirements.'
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
                    'I provided consulting and technical solutions to clients in the e-commerce, healthcare, and insurance space.',
                    'Attended daily scrums with fellow developers/consultants, worked directly with product managers and owners, and ensured deliverables were on time.',
                    'I managed and completed my own full-stack development while assisting UX and Design Department with any technical requirements.'
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