export const state = () => ({
  open: false,
  mainMenu: [
    {
      title: 'sidebar.main.categories.title',
      options: [
        {
          label: 'sidebar.main.categories.nightclubs',
          to: '',
          options: [
            {
              label: 'Inicio',
              to: '/',
            },
          ],
        },
        {
          label: 'sidebar.main.categories.bars',
          to: '',
          options: [
            {
              label: 'Inicio',
              to: '/',
            },
          ],
        },
        {
          label: 'sidebar.main.categories.restaurants',
          to: '',
          options: [
            {
              label: 'Inicio',
              to: '/auth/register',
            },
          ],
        },
        {
          label: 'sidebar.main.categories.stores',
          to: '/',
          options: [
            {
              label: 'Inicio',
              to: '/auth/register',
            },
          ],
        },
      ],
    },
    {
      title: 'sidebar.main.others.title',
      options: [
        {
          label: 'sidebar.main.others.registerTrade',
          to: '/auth/commerce',
        },
        {
          label: 'sidebar.main.others.faqs',
          to: '/faqs',
        },
        {
          label: 'sidebar.main.others.plans',
          to: '/plans',
        },
      ],
    },
  ],
})

export type SidebarState = ReturnType<typeof state>
