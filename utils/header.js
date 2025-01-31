import { openLink, scrollTo } from "./methods";


const header = {
    menus: [
        { title: 'Home', id: 'home' },
        { title: 'My Self', id: 'my-self' },
        { title: 'Experience', id: 'experience' },
        { title: 'My Work', id: 'my-work' },
        { title: 'Reviews', id: 'reviews' },
        { title: 'Certifications', id: 'certifications' },
        // { title: 'Contribution', id: 'contributions' },
        { title: 'Contact', id: 'contact' },
    ],
    logo: {
        src: '/assets/profile.jpg',
        alt: 'aminebaggari'
    },
    handleIconClick: () => scrollTo('home'),
    handleItemSelect: (menu) => scrollTo(menu.id),
}

export default header