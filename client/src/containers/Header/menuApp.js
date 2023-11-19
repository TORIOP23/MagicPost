export const adminMenu = [
     //quan li nguoi dung
     {
          name: 'Manage Account',
          menus: [
               {
                    name: 'Create Account',
                    link: '/system/director/create/account/admin-transaction-or-collection',
               },
          ],
     },
     {
          name: 'Manage Collection & Transaction',
          menus: [
               {
                    name: 'Manage Collection',
                    link: '/system/admin/management-collection',
               },
               {
                    name: 'Manage Transaction',
                    link: '/system/admin/management-transaction',
               },
          ],
     },
     {
          name: 'Statistic parcel',
          menus: [
               {
                    name: 'Statistic',
                    link: '/system/director/statistics/parcels',
                    // subMenus: [
                    //      {
                    //           name: 'Thach nhe',
                    //           link: '/system/user-crud',
                    //      },
                    // ],
               },
          ],
     },
];
