import { NavLinkItem, FooterLinkItem } from '../types/navigation';

export const MAIN_NAV_LINKS: NavLinkItem[] = [
  { label: 'Beliefs', href: '#beliefs' },
  { label: 'Visit', href: '#visit' }
];

export const MOBILE_MENU_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '#top' },
  { label: 'Beliefs', href: '#beliefs' },
  { label: 'Plan a Visit', href: '#visit' },
  { label: 'Give', href: '#give' }
];

export const FOOTER_LINKS_LEFT: FooterLinkItem[] = [
  { label: 'Contact', href: 'mailto:hello@yourchurch.org' },
  { label: 'Volunteer', href: '#' },
  { label: 'Prayer Request', href: '#' }
];

export const FOOTER_LINKS_RIGHT: FooterLinkItem[] = [
  { label: 'Sermons', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' }
];

export const SOCIAL_LINKS = [
  { label: 'FB', href: '#', ariaLabel: 'Facebook' },
  { label: 'IG', href: '#', ariaLabel: 'Instagram' },
  { label: 'YT', href: '#', ariaLabel: 'YouTube' }
];
