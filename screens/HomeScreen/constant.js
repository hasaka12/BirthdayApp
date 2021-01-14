import THUMB_1 from '../../images/home-thumb-1.jpg';
import THUMB_2 from '../../images/home-thumb-2.jpg';

export const MENU_ITEMS = [
  {
    img: THUMB_1,
    description: 'Find Your Gifts',
    navTo: 'Find Your Gifts',
  },
  {
    img: THUMB_2,
    description: 'Birthday Quotes',
    navTo: 'Quotes',
  },
  {
    img: THUMB_1,
    description: 'Our Gallery',
    navTo: 'Our Gallery',
  },
  {
    img: THUMB_2,
    description: 'Our Story',
    navTo: 'Our Story',
  },
].map((item, index) => ({ ...item, key: index }));
