import {AppIcon} from "@/components/ui/AppIcon";

export const GA_TRACKING_ID = 'G-77ML118EGM'
export const isProduction = process.env.NODE_ENV === 'production'
export const hasGoneLive = true
export const disableHeaderNavigations = true
export const appTitle = 'Portfolio'
export const appUrl: string = (process.env.NETLIFY ? process.env.URL : process.env.APP_URL) || ''
export const appDescription = 'Full Stack Engineer with 8+ years of experience building scalable web applications, data platforms, and automated systems.'
export const person = {
    userFullName: "Bruce Wilcoxon",
    email: 'brucewilcoxon.d@gmail.com',
    userPhoto: "/images/bruce.jpg",
    userHeadline: 'Senior Full Stack Engineer',
    about: "I’m a Senior Full Stack Engineer with 8+ years of experience leading cross-functional teams, architecting enterprise-level solutions, and delivering high-impact projects across healthcare, robotics, and interactive technology.",
};


export const platformLinks = [
    { link: "https://linkedin.com/in/bruce-wilcoxon-b5207b192", label: "LinkedIn", icon: [AppIcon, {name: 'linked-in'}] },
    { link: "https://github.com/brucewilcoxon", label: "Github", icon: [AppIcon, {name: 'github'}] },
    { link: `mailto:${person.email}`, label: "Email", icon: [AppIcon, {name: 'envelope'}] },
];

export const navLinks = [
    { label: 'About', link: ''},
    { label: 'Skills', link: ''},
    { label: 'Projects', link: ''},
    { label: 'Contact', link: ''},
]
