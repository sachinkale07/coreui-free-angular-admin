import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'HubSpot',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Hub Company',
        url: '/base/accordion'
      },
    ]
  },
  {
    name: 'PWS',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'PWS Accounts',
        url: '/buttons/buttons'
      }
    ]
  },
];
