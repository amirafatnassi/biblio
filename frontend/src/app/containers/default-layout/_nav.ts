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
    name: 'Utilisateurs',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Liste des utilisateurs',
        url: '/user'
      },
      {
        name: 'Ajouter un nouveau utilisateur',
        url: '/auth/register'
      },
    ]
  },
  {
    name: 'Catégories',
    url: '/categories/',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Liste des catégories',
        url: '/categorie'
      },
      {
        name: 'Ajouter nouvelle catégorie',
        url: '/categorie/add'
      },
    ]
  },
  {
    name: 'Livres',
    url: '/livre/',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Liste des livres',
        url: '/livre'
      },
      {
        name: 'Ajouter un nouveau livre',
        url: '/livre/add'
      }
    ]
  },
];
