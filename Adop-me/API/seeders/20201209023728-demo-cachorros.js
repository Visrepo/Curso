'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   down: async (queryInterface, Sequelize) => {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cachorros', [{
      Nombre: 'Rolly',
      sexo: 'Femea',
      edad: '2 meses',
      porte: 'alto',
      temperamento: 'alegre',
      saude: 'vacinado y vermifugado',
      foto: 'assets/img/355332430_8.jpg',
      adoptado: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Nombre: 'Boxer',
      sexo: 'Macho',
      edad: '6 meses',
      porte: 'medio',
      temperamento: 'pasivo',
      saude: 'vacinado',
      foto: 'assets/img/opening.jpg',
      adoptado: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Nombre: 'Baleia',
      sexo: 'Femea',
      edad: '2 meses',
      porte: 'bajo',
      temperamento: 'timido',
      saude: 'vacinado y vermifugado',
      foto: 'assets/img/Baleia.jpeg',
      adoptado: 'pendiente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cachorros', null, {});
  }
};
