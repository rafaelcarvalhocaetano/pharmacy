import { Menu } from '../model/menu';

export const listMenu: Menu [] = [
  {
    title: 'CATEGORIES',
    listItems: [
      {
        icon: 'fas fa-syringe',
        description: 'Medication',
        code: 1
      },
      {
        icon: 'fas fa-flask',
        description: 'Vitamine',
        code: 2
      },
      {
        icon: 'fas fa-feather-alt',
        description: 'Medical cosmetics',
        code: 3
      },
      {
        icon: 'fas fa-stethoscope',
        description: 'Medical products',
        code: 4
      }
    ]
  },
  {
    title: 'MY PRODUCTS',
    listItems: [
      {
        icon: 'fas fa-suitcase',
        description: 'Drogarie',
        code: 5
      },
      {
        icon: 'fas fa-pump-medical',
        description: 'My medication list',
        code: 6
      },
      {
        icon: 'fas fa-user-md',
        description: 'Account user',
        code: 7
      }
    ]
  }
]