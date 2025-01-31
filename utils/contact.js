import { openLink } from "./methods"

const contact = {
    label: `Need a Developer?`,
    heading: `Let's Build Something Amazing Together`,
    description: `Looking for a skilled developer to bring your ideas to life? From AI-powered bots to secure network solutions, I can help turn your vision into reality. Available for freelance projects, technical consultations, and long-term collaborations. Let's discuss your project!`,
    button: {
        label: 'Message Me',
        onClick: () => openLink('https://t.me/aminebaggarii')
    },
    email: {
        label: 'Or email me at:',
        address: 'aminebaggari12@gmail.com',
        onClick: () => openLink('mailto:aminebaggari12@gmail.com?subject=Project Inquiry')
    },
    designAndBuiltBy: 'Designed & Built By Amine Baggari',
    handleBuiltByClick: () => openLink('https://github.com/aminebaggari')
}

export default contact
