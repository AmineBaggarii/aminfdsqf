import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const socialLinks = {
        'github': 'https://github.com/AmineBaggarii',
        'instagram': 'https://github.com/amine.baggari1',
        'telegram': 'https://t.me/AmineBaggarii'
    }
    openLink(socialLinks[icon])
}

const sideElements = {
    emailButton: {
        label: 'afzalimdad9@gmail.com',
        onClick: () => openLink('mailto:afzalimdad9@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements