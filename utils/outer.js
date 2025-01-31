import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Amine Baggari,',
    decrypTexts: [
        'A Software Engineer',
        'A Full Stack Developer',
        'I build things for the web',
        'A Robotics Engineer',
        'An IoT Developer',
        'An AI Developer',
    ],
    desciption: `A dedicated and disciplined Full Stack engineer who love to create things for internet, having more than 4 years of field experience I've delivered projects to many happy clients over globe.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:aminebaggari12@gmail.com?subject=Project Inquiry')
    }
}

export default outer
