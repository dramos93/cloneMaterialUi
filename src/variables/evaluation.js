let categories = [
  {
    id: "f344c85e-de4d-4c48-9015-03f700ed4f63",
    name: "Primeira Skill",
    categoryParentId: null,
    global: false,
    active: true,
    filho: [
      {
        id: "5244a3a9-8cb8-4afe-8fbb-1",
        name: "Scrum A",
        categoryParentId: "f344c85e-de4d-4c48-9015-03f700ed4f63",
        global: false,
        active: true,
        neto: [
          {
            id: "skill1",
            name: "Habilidade Scrum 1A",
            categoryParentId: "5244a3a9-8cb8-4afe-8fbb-1",
            global: false,
            active: true,
          },
          {
            id: "skill2",
            name: "Habilidade Scrum 2A",
            categoryParentId: "5244a3a9-8cb8-4afe-8fbb-1",
            global: false,
            active: true,
          },
        ],
      },
      {
        id: "5244a3a9-8cb8-4afe-8fbb-2",
        name: "Solid A",
        categoryParentId: "f344c85e-de4d-4c48-9015-03f700ed4f63",
        global: false,
        active: true,
        neto: [
          {
            id: "skill3",
            name: "Habilidade Solid 1A",
            categoryParentId: "5244a3a9-8cb8-4afe-8fbb-2",
            global: false,
            active: true,
          },
          {
            id: "skill4",
            name: "Habilidade Solid 2A",
            categoryParentId: "5244a3a9-8cb8-4afe-8fbb-2",
            global: false,
            active: true,
          },
        ],
      },
      {
        id: "5244a3a9-8cb8-4afe-8fbb-3",
        name: "Negócios A",
        categoryParentId: "f344c85e-de4d-4c48-9015-03f700ed4f63",
        global: false,
        active: true,
        neto: [
          {
            id: "skill5",
            name: "Habilidade negócios 1A",
            categoryParentId: "5244a3a9-8cb8-4afe-8fbb-3",
            global: false,
            active: true,
          },
          {
            id: "skill6",
            name: "Habilidade negócios 2A",
            categoryParentId: "5244a3a9-8cb8-4afe-8fbb-3",
            global: false,
            active: true,
          },
        ],
      },
    ],
  },
  {
    id: "f344c85e-de4d-4c48-9015-03f700ed4f64",
    name: "Segunda Skill",
    categoryParentId: null,
    global: false,
    active: true,
    filho: [
      {
        id: "5244a3a9-8cb8-4afe-8fbb-6",
        name: "Scrum B",
        categoryParentId: "f344c85e-de4d-4c48-9015-03f700ed4f64",
        global: false,
        active: true,
        neto: [
          {
            id: "skill7",
            name: "Habilidade Scrum 1B",
            categoryParentId: "5244a3a9-8cb8-4afe-8fbb-6",
            global: false,
            active: true,
          },
          {
            id: "skill8",
            name: "Habilidade Scrum 2B",
            categoryParentId: "5244a3a9-8cb8-4afe-8fbb-6",
            global: false,
            active: true,
          },
        ],
      },
      {
        id: "5244a3a9-8cb8-4afe-8fbb-7",
        name: "Solid B",
        categoryParentId: "f344c85e-de4d-4c48-9015-03f700ed4f64",
        global: false,
        active: true,
        neto: [
          {
            id: "skill9",
            name: "Habilidade Solid 1B",
            categoryParentId: "5244a3a9-8cb8-4afe-8fbb-7",
            global: false,
            active: true,
          },
          {
            id: "skill10",
            name: "Habilidade Solid 2B",
            categoryParentId: "5244a3a9-8cb8-4afe-8fbb-7",
            global: false,
            active: true,
          },
        ],
      },
      {
        id: "5244a3a9-8cb8-4afe-8fbb-8",
        name: "Negócios B",
        categoryParentId: "f344c85e-de4d-4c48-9015-03f700ed4f64",
        global: false,
        active: true,
        neto: [
          {
            id: "skill11",
            name: "Habilidade negócios 1B",
            categoryParentId: "5244a3a9-8cb8-4afe-8fbb-8",
            global: false,
            active: true,
          },
          {
            id: "skill12",
            name: "Habilidade negócios 2B",
            categoryParentId: "5244a3a9-8cb8-4afe-8fbb-8",
            global: false,
            active: true,
          },
        ],
      },
    ],
  },
];

let grades = [
  {
    id: 14534535430,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill1",
    userSquadId: 1,
  },
  {
    id: 2453543540,
    grade: 3,
    comment: "comentário",
    categorySkillId: "skill2",
    userSquadId: 1,
  },
  {
    id: 34535430,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill3",
    userSquadId: 1,
  },
  {
    id: 44535430,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill4",
    userSquadId: 1,
  },
  {
    id: 54535430,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill5",
    userSquadId: 1,
  },
  {
    id: 64535430,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill6",
    userSquadId: 1,
  },
  {
    id: 74534530,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill7",
    userSquadId: 1,
  },
  {
    id: 84534530,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill8",
    userSquadId: 1,
  },
  {
    id: 94535430,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill9",
    userSquadId: 1,
  },
  {
    id: 10543543540,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill10",
    userSquadId: 1,
  },
  {
    id: 11453453540,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill11",
    userSquadId: 1,
  },
  {
    id: 14534535420,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill12",
    userSquadId: 1,
  },
  {
    id: 134534530,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill1",
    userSquadId: 2,
  },
  {
    id: 13546540,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill2",
    userSquadId: 2,
  },
  {
    id: 150453543,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill3",
    userSquadId: 2,
  },
  {
    id: 160453543,
    grade: 3,
    comment: "comentário",
    categorySkillId: "skill4",
    userSquadId: 2,
  },
  {
    id: 170453543,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill5",
    userSquadId: 2,
  },
  {
    id: 184534530,
    grade: 1,
    comment: "comentário",
    categorySkillId: "skill6",
    userSquadId: 2,
  },
  {
    id: 1231231,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill7",
    userSquadId: 2,
  },
  {
    id: 11213120,
    grade: 1,
    comment: "comentário",
    categorySkillId: "skill8",
    userSquadId: 2,
  },
  {
    id: 546546,
    grade: 3,
    comment: "comentário",
    categorySkillId: "skill1",
    userSquadId: 3,
  },
  {
    id: 45654654,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill2",
    userSquadId: 3,
  },
  {
    id: 45605460546,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill3",
    userSquadId: 3,
  },
  {
    id: 450654068,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill4",
    userSquadId: 3,
  },
  {
    id: 15065465460,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill5",
    userSquadId: 3,
  },
  {
    id: 775020,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill6",
    userSquadId: 3,
  },
  {
    id: 8705687820,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill1",
    userSquadId: 4,
  },
  {
    id: 978069780,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill2",
    userSquadId: 4,
  },
  {
    id: 1078500,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill3",
    userSquadId: 4,
  },
  {
    id: 174025810,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill4",
    userSquadId: 4,
  },
  {
    id: 17024820,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill5",
    userSquadId: 4,
  },
  {
    id: 14702830,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill6",
    userSquadId: 4,
  },
  {
    id: 14740280,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill1",
    userSquadId: 5,
  },
  {
    id: 1025450,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill2",
    userSquadId: 5,
  },
  {
    id: 1602450,
    grade: 3,
    comment: "comentário",
    categorySkillId: "skill3",
    userSquadId: 5,
  },
  {
    id: 1702540,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill4",
    userSquadId: 5,
  },
  {
    id: 1025480,
    grade: 1,
    comment: "comentário",
    categorySkillId: "skill5",
    userSquadId: 5,
  },
  {
    id: 1025490,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill6",
    userSquadId: 5,
  },
  {
    id: 2040560,
    grade: 3,
    comment: "comentário",
    categorySkillId: "skill1",
    userSquadId: 6,
  },
  {
    id: 2178060,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill2",
    userSquadId: 6,
  },
  {
    id: 220786780,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill3",
    userSquadId: 6,
  },
  {
    id: 7896230,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill4",
    userSquadId: 6,
  },
  {
    id: 2430770,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill5",
    userSquadId: 6,
  },
  {
    id: 257805870,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill6",
    userSquadId: 6,
  },
  {
    id: 2678060,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill1",
    userSquadId: 7,
  },
  {
    id: 272780450,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill2",
    userSquadId: 7,
  },
  {
    id: 24502880,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill3",
    userSquadId: 7,
  },
  {
    id: 295460870,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill4",
    userSquadId: 7,
  },
  {
    id: 3075408727870,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill5",
    userSquadId: 7,
  },
  {
    id: 3175402870,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill6",
    userSquadId: 7,
  },
  {
    id: 3786780220,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill1",
    userSquadId: 8,
  },
  {
    id: 3785208730,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill2",
    userSquadId: 8,
  },
  {
    id: 370828740,
    grade: 3,
    comment: "comentário",
    categorySkillId: "skill3",
    userSquadId: 8,
  },
  {
    id: 370287850,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill4",
    userSquadId: 8,
  },
  {
    id: 375028760,
    grade: 1,
    comment: "comentário",
    categorySkillId: "skill5",
    userSquadId: 8,
  },
  {
    id: 3707082,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill6",
    userSquadId: 8,
  },
  {
    id: 78028380,
    grade: 3,
    comment: "comentário",
    categorySkillId: "skill1",
    userSquadId: 9,
  },
  {
    id: 70822390,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill2",
    userSquadId: 9,
  },
  {
    id: 708278400,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill3",
    userSquadId: 9,
  },
  {
    id: 47860789,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill4",
    userSquadId: 9,
  },
  {
    id: 42530270,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill5",
    userSquadId: 9,
  },
  {
    id: 4798069730,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill6",
    userSquadId: 9,
  },
  {
    id: 479069370240,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill1",
    userSquadId: 10,
  },
  {
    id: 4709369750,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill2",
    userSquadId: 10,
  },
  {
    id: 474125860,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill3",
    userSquadId: 10,
  },
  {
    id: 4775860,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill4",
    userSquadId: 10,
  },
  {
    id: 487458367540,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill5",
    userSquadId: 10,
  },
  {
    id: 4745863754890,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill6",
    userSquadId: 10,
  },
  {
    id: 745867548500,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill1",
    userSquadId: 11,
  },
  {
    id: 578678510,
    grade: 4,
    comment: "comentário",
    categorySkillId: "skill2",
    userSquadId: 11,
  },
  {
    id: 52074867856,
    grade: 3,
    comment: "comentário",
    categorySkillId: "skill3",
    userSquadId: 11,
  },
  {
    id: 53786758630,
    grade: 2,
    comment: "comentário",
    categorySkillId: "skill4",
    userSquadId: 11,
  },
  {
    id: 57867583640,
    grade: 1,
    comment: "comentário",
    categorySkillId: "skill5",
    userSquadId: 11,
  },
  {
    id: 55786375840,
    grade: 5,
    comment: "comentário",
    categorySkillId: "skill6",
    userSquadId: 11,
  },
];

let usersSquad = [
  { id: 1, user: { fisrtName: "Daniel", photo: "Foto" } },
  { id: 2, user: { fisrtName: "Fernando", photo: "Foto" } },
  { id: 3, user: { fisrtName: "Ronaldo", photo: "Foto" } },
  { id: 4, user: { fisrtName: "Ronaldinho", photo: "Foto" } },
  { id: 5, user: { fisrtName: "Bebeto", photo: "Foto" } },
  { id: 6, user: { fisrtName: "Romário", photo: "Foto" } },
  {
    id: 7,
    user: { fisrtName: "Cristiano Ronaldo Ronaldo Ronaldo", photo: "Foto" },
  },
  { id: 8, user: { fisrtName: "Julio Cesar", photo: "Foto" } },
  { id: 9, user: { fisrtName: "Kaka", photo: "Foto" } },
  { id: 10, user: { fisrtName: "Cebolinha", photo: "Foto" } },
  { id: 11, user: { fisrtName: "Monica", photo: "Foto" } },
  { id: 12, user: { fisrtName: "Cafu", photo: "Foto" } },
];
Object.freeze(categories);

module.exports = {
  categories,
  grades,
  usersSquad,
};
