
use('BD3-NoSQL-AtlasMongoDB');

// db.getCollection('bd3-nosql-atv2').insertMany(
//     [
//         {
//           "cod_aluno": 1,
//           "cod_turma": 101,
//           "nome": "João Santos",
//           "rg": "123456789",
//           "telefone_aluno": "11987654321",
//           "telefone_responsavel": "11998765432",
//           "email": "joao.santos@gmail.com",
//           "data_nascimento": "2005-04-15 10:00:00"
//         },
//         {
//           "cod_aluno": 2,
//           "cod_turma": 101,
//           "nome": "Maria Oliveira",
//           "rg": "987654321",
//           "telefone_aluno": "21987654321",
//           "telefone_responsavel": "21998765432",
//           "email": "maria.oliveira@al.educacao.sp.gov.br",
//           "data_nascimento": "2004-08-22 08:30:00"
//         },
//         {
//           "cod_aluno": 3,
//           "cod_turma": 102,
//           "nome": "Carlos Silva",
//           "rg": "123123123",
//           "telefone_aluno": "31987654321",
//           "telefone_responsavel": "31998765432",
//           "email": "carlos.silva@gmail.com",
//           "data_nascimento": "2003-12-10 09:00:00"
//         },
//         {
//           "cod_aluno": 4,
//           "cod_turma": 103,
//           "nome": "Ana Costa",
//           "rg": "456456456",
//           "telefone_aluno": "41987654321",
//           "telefone_responsavel": "41998765432",
//           "email": "ana.costa@al.educacao.sp.gov.br",
//           "data_nascimento": "2002-03-05 11:45:00"
//         },
//         {
//           "cod_aluno": 5,
//           "cod_turma": 104,
//           "nome": "Pedro Almeida",
//           "rg": "789789789",
//           "telefone_aluno": "51987654321",
//           "telefone_responsavel": "51998765432",
//           "email": "pedro.almeida@gmail.com",
//           "data_nascimento": "2006-07-19 14:00:00"
//         },
//         {
//           "cod_aluno": 6,
//           "cod_turma": 104,
//           "nome": "Mariana Rocha",
//           "rg": "456789123",
//           "telefone_aluno": "61987654321",
//           "telefone_responsavel": "61998765432",
//           "email": "mariana.rocha@al.educacao.sp.gov.br",
//           "data_nascimento": "2005-11-10 09:30:00"
//         },
//         {
//           "cod_aluno": 7,
//           "cod_turma": 105,
//           "nome": "Rafael Costa",
//           "rg": "321654987",
//           "telefone_aluno": "71987654321",
//           "telefone_responsavel": "71998765432",
//           "email": "rafael.costa@gmail.com",
//           "data_nascimento": "2004-05-22 16:45:00"
//         },
//         {
//           "cod_aluno": 8,
//           "cod_turma": 105,
//           "nome": "Fernanda Lima",
//           "rg": "654987321",
//           "telefone_aluno": "81987654321",
//           "telefone_responsavel": "81998765432",
//           "email": "fernanda.lima@al.educacao.sp.gov.br",
//           "data_nascimento": "2003-09-13 12:15:00"
//         },
//         {
//           "cod_aluno": 9,
//           "cod_turma": 106,
//           "nome": "Lucas Ferreira",
//           "rg": "987321654",
//           "telefone_aluno": "91987654321",
//           "telefone_responsavel": "91998765432",
//           "email": "lucas.ferreira@gmail.com",
//           "data_nascimento": "2002-04-02 08:00:00"
//         },
//         {
//           "cod_aluno": 10,
//           "cod_turma": 107,
//           "nome": "Juliana Mendes",
//           "rg": "123789456",
//           "telefone_aluno": "11987654322",
//           "telefone_responsavel": "11998765433",
//           "email": "juliana.mendes@al.educacao.sp.gov.br",
//           "data_nascimento": "2005-07-17 10:25:00"
//         },
//         {
//           "cod_aluno": 11,
//           "cod_turma": 107,
//           "nome": "Carla Souza",
//           "rg": "654321987",
//           "telefone_aluno": "11987654323",
//           "telefone_responsavel": "11998765434",
//           "email": "carla.souza@gmail.com",
//           "data_nascimento": "2003-03-12 14:40:00"
//         },
//         {
//           "cod_aluno": 12,
//           "cod_turma": 108,
//           "nome": "Felipe Martins",
//           "rg": "987654123",
//           "telefone_aluno": "21987654322",
//           "telefone_responsavel": "21998765433",
//           "email": "felipe.martins@al.educacao.sp.gov.br",
//           "data_nascimento": "2002-06-20 08:50:00"
//         },
//         {
//           "cod_aluno": 13,
//           "cod_turma": 108,
//           "nome": "Sabrina Oliveira",
//           "rg": "123987654",
//           "telefone_aluno": "31987654322",
//           "telefone_responsavel": "31998765433",
//           "email": "sabrina.oliveira@gmail.com",
//           "data_nascimento": "2004-09-29 15:15:00"
//         },
//         {
//           "cod_aluno": 14,
//           "cod_turma": 109,
//           "nome": "Roberto Lima",
//           "rg": "321654123",
//           "telefone_aluno": "41987654322",
//           "telefone_responsavel": "41998765433",
//           "email": "roberto.lima@al.educacao.sp.gov.br",
//           "data_nascimento": "2003-11-01 13:30:00"
//         },
//         {
//           "cod_aluno": 15,
//           "cod_turma": 109,
//           "nome": "Júlia Mendes",
//           "rg": "654123987",
//           "telefone_aluno": "51987654322",
//           "telefone_responsavel": "51998765433",
//           "email": "julia.mendes@gmail.com",
//           "data_nascimento": "2002-02-14 10:05:00"
//         },
//         {
//           "cod_aluno": 16,
//           "cod_turma": 110,
//           "nome": "Gustavo Ferreira",
//           "rg": "789456123",
//           "telefone_aluno": "61987654322",
//           "telefone_responsavel": "61998765433",
//           "email": "gustavo.ferreira@al.educacao.sp.gov.br",
//           "data_nascimento": "2005-05-18 09:10:00"
//         },
//         {
//           "cod_aluno": 17,
//           "cod_turma": 110,
//           "nome": "Paula Ribeiro",
//           "rg": "321789654",
//           "telefone_aluno": "71987654322",
//           "telefone_responsavel": "71998765433",
//           "email": "paula.ribeiro@gmail.com",
//           "data_nascimento": "2004-07-25 16:50:00"
//                 },
//                 {
//                   "cod_aluno": 18,
//                   "cod_turma": 111,
//                   "nome": "Leonardo Almeida",
//                   "rg": "987321123",
//                   "telefone_aluno": "81987654322",
//                   "telefone_responsavel": "81998765433",
//                   "email": "leonardo.almeida@al.educacao.sp.gov.br",
//                   "data_nascimento": "2003-10-10 08:00:00"
//                 },
//                 {
//                   "cod_aluno": 19,
//                   "cod_turma": 111,
//                   "nome": "Isabela Rocha",
//                   "rg": "456789321",
//                   "telefone_aluno": "91987654322",
//                   "telefone_responsavel": "91998765433",
//                   "email": "isabela.rocha@gmail.com",
//                   "data_nascimento": "2002-12-24 12:45:00"
//                 },
//                 {
//                   "cod_aluno": 20,
//                   "cod_turma": 112,
//                   "nome": "André Nunes",
//                   "rg": "789123456",
//                   "telefone_aluno": "11987654324",
//                   "telefone_responsavel": "11998765435",
//                   "email": "andre.nunes@al.educacao.sp.gov.br",
//                   "data_nascimento": "2005-08-15 11:20:00"
//                 },
//                 {
//                   "cod_aluno": 21,
//                   "cod_turma": 113,
//                   "nome": "Luiza Gomes",
//                   "rg": "789321456",
//                   "telefone_aluno": "11987654325",
//                   "telefone_responsavel": "11998765436",
//                   "email": "luiza.gomes@gmail.com",
//                   "data_nascimento": "2004-09-03 14:00:00"
//                 },
//                 {
//                   "cod_aluno": 22,
//                   "cod_turma": 113,
//                   "nome": "Eduardo Silva",
//                   "rg": "123654789",
//                   "telefone_aluno": "21987654323",
//                   "telefone_responsavel": "21998765434",
//                   "email": "eduardo.silva@al.educacao.sp.gov.br",
//                   "data_nascimento": "2003-07-11 11:15:00"
//                 },
//                 {
//                     "cod_aluno": 23,
//                       "cod_turma": 114,
//                       "nome": "Bruna Oliveira",
//                       "rg": "456123789",
//                       "telefone_aluno": "31987654323",
//                       "telefone_responsavel": "31998765434",
//                       "email": "bruna.oliveira@gmail.com",
//                       "data_nascimento": "2005-02-20 09:45:00"
//                     },
//                     {
//                       "cod_aluno": 24,
//                       "cod_turma": 114,
//                       "nome": "Samuel Costa",
//                       "rg": "321789123",
//                       "telefone_aluno": "41987654323",
//                       "telefone_responsavel": "41998765434",
//                       "email": "samuel.costa@al.educacao.sp.gov.br",
//                       "data_nascimento": "2002-11-09 17:30:00"
//                     },
//                     {
//                       "cod_aluno": 25,
//                       "cod_turma": 115,
//                       "nome": "Natália Almeida",
//                       "rg": "987123456",
//                       "telefone_aluno": "51987654323",
//                       "telefone_responsavel": "51998765434",
//                       "email": "natalia.almeida@gmail.com",
//                       "data_nascimento": "2004-05-04 10:20:00"
//                     },
//                     {
//                       "cod_aluno": 26,
//                       "cod_turma": 115,
//                       "nome": "Henrique Ribeiro",
//                       "rg": "654987321",
//                       "telefone_aluno": "61987654323",
//                       "telefone_responsavel": "61998765434",
//                       "email": "henrique.ribeiro@al.educacao.sp.gov.br",
//                       "data_nascimento": "2003-03-16 08:10:00"
//                     },
//                     {
//                       "cod_aluno": 27,
//                       "cod_turma": 116,
//                       "nome": "Aline Nascimento",
//                       "rg": "321654987",
//                       "telefone_aluno": "71987654323",
//                       "telefone_responsavel": "71998765434",
//                       "email": "aline.nascimento@gmail.com",
//                       "data_nascimento": "2005-08-28 12:50:00"
//                     },
//                     {
//                       "cod_aluno": 28,
//                       "cod_turma": 116,
//                       "nome": "Renato Teixeira",
//                       "rg": "456321789",
//                       "telefone_aluno": "81987654323",
//                       "telefone_responsavel": "81998765434",
//                       "email": "renato.teixeira@al.educacao.sp.gov.br",
//                       "data_nascimento": "2002-06-12 14:35:00"
//                     },
//                     {
//                       "cod_aluno": 29,
//                       "cod_turma": 117,
//                       "nome": "Viviane Rocha",
//                       "rg": "789654123",
//                       "telefone_aluno": "91987654323",
//                       "telefone_responsavel": "91998765434",
//                       "email": "viviane.rocha@gmail.com",
//                       "data_nascimento": "2003-01-08 09:20:00"
//                     },
//                     {
//                       "cod_aluno": 30,
//                       "cod_turma": 117,
//                       "nome": "Anderson Melo",
//                       "rg": "123456789",
//                       "telefone_aluno": "11987654326",
//                       "telefone_responsavel": "11998765437",
//                       "email": "anderson.melo@al.educacao.sp.gov.br",
//                       "data_nascimento": "2004-10-21 11:00:00"
//                     },

//                         {
//                           "cod_aluno": 31,
//                           "cod_turma": 118,
//                           "nome": "Helena Figueira",
//                           "rg": "789123654",
//                           "telefone_aluno": "11987654327",
//                           "telefone_responsavel": "11998765438",
//                           "email": "helena.figueira@gmail.com",
//                           "data_nascimento": "2005-04-14 09:30:00"
//                         },
//                         {
//                           "cod_aluno": 32,
//                           "cod_turma": 118,
//                           "nome": "Victor Souza",
//                           "rg": "456987123",
//                           "telefone_aluno": "21987654324",
//                           "telefone_responsavel": "21998765435",
//                           "email": "victor.souza@al.educacao.sp.gov.br",
//                           "data_nascimento": "2004-12-01 12:10:00"
//                         },
//                         {
//                           "cod_aluno": 33,
//                           "cod_turma": 119,
//                           "nome": "Camila Barbosa",
//                           "rg": "321654789",
//                           "telefone_aluno": "31987654324",
//                           "telefone_responsavel": "31998765435",
//                           "email": "camila.barbosa@gmail.com",
//                           "data_nascimento": "2003-06-23 15:45:00"
//                         },
//                         {
//                           "cod_aluno": 34,
//                           "cod_turma": 119,
//                           "nome": "Fernando Lima",
//                           "rg": "654321987",
//                           "telefone_aluno": "41987654324",
//                           "telefone_responsavel": "41998765435",
//                           "email": "fernando.lima@al.educacao.sp.gov.br",
//                           "data_nascimento": "2005-08-11 10:25:00"
//                         },
//                         {
//                           "cod_aluno": 35,
//                           "cod_turma": 120,
//                           "nome": "Alice Nunes",
//                           "rg": "789456321",
//                           "telefone_aluno": "51987654324",
//                           "telefone_responsavel": "51998765435",
//                           "email": "alice.nunes@gmail.com",
//                           "data_nascimento": "2002-01-30 14:15:00"
//                         },
//                         {
//                           "cod_aluno": 36,
//                           "cod_turma": 120,
//                           "nome": "Bruno Ferreira",
//                           "rg": "987654123",
//                           "telefone_aluno": "61987654324",
//                           "telefone_responsavel": "61998765435",
//                           "email": "bruno.ferreira@al.educacao.sp.gov.br",
//                           "data_nascimento": "2004-03-05 08:50:00"
//                         },
//                         {
//                           "cod_aluno": 37,
//                           "cod_turma": 121,
//                           "nome": "Débora Ribeiro",
//                           "rg": "123456987",
//                           "telefone_aluno": "71987654324",
//                           "telefone_responsavel": "71998765435",
//                           "email": "debora.ribeiro@gmail.com",
//                           "data_nascimento": "2003-09-14 16:40:00"
//                         },
//                         {
//                           "cod_aluno": 38,
//                           "cod_turma": 121,
//                           "nome": "Ricardo Gomes",
//                           "rg": "987123654",
//                           "telefone_aluno": "81987654324",
//                           "telefone_responsavel": "81998765435",
//                           "email": "ricardo.gomes@al.educacao.sp.gov.br",
//                           "data_nascimento": "2002-04-26 11:30:00"
//                         },
//                         {
//                           "cod_aluno": 39,
//                           "cod_turma": 122,
//                           "nome": "Lorena Rocha",
//                           "rg": "456321789",
//                           "telefone_aluno": "91987654324",
//                           "telefone_responsavel": "91998765435",
//                           "email": "lorena.rocha@gmail.com",
//                           "data_nascimento": "2005-07-17 09:20:00"
//                         },
//                         {
//                           "cod_aluno": 40,
//                           "cod_turma": 122,
//                           "nome": "Daniel Melo",
//                           "rg": "321789456",
//                           "telefone_aluno": "11987654328",
//                           "telefone_responsavel": "11998765439",
//                           "email": "daniel.melo@al.educacao.sp.gov.br",
//                           "data_nascimento": "2004-10-09 13:50:00"
//                         },
//                             {
//                               "cod_aluno": 41,
//                               "cod_turma": 123,
//                               "nome": "Beatriz Souza",
//                               "rg": "987654321",
//                               "telefone_aluno": "11987654329",
//                               "telefone_responsavel": "11998765440",
//                               "email": "beatriz.souza@gmail.com",
//                               "data_nascimento": "2003-05-12 14:30:00"
//                             },
//                             {
//                               "cod_aluno": 42,
//                               "cod_turma": 123,
//                               "nome": "Renan Oliveira",
//                               "rg": "654321987",
//                               "telefone_aluno": "21987654325",
//                               "telefone_responsavel": "21998765436",
//                               "email": "renan.oliveira@al.educacao.sp.gov.br",
//                               "data_nascimento": "2004-11-07 09:45:00"
//                             },
//                             {
//                               "cod_aluno": 43,
//                               "cod_turma": 124,
//                               "nome": "Sofia Costa",
//                               "rg": "123789456",
//                               "telefone_aluno": "31987654325",
//                               "telefone_responsavel": "31998765436",
//                               "email": "sofia.costa@gmail.com",
//                               "data_nascimento": "2005-01-18 08:20:00"
//                             },
//                             {
//                               "cod_aluno": 44,
//                               "cod_turma": 124,
//                               "nome": "Rogério Lima",
//                               "rg": "321456789",
//                               "telefone_aluno": "41987654325",
//                               "telefone_responsavel": "41998765436",
//                               "email": "rogerio.lima@al.educacao.sp.gov.br",
//                               "data_nascimento": "2002-09-26 11:50:00"
//                             },
//                             {
//                               "cod_aluno": 45,
//                               "cod_turma": 125,
//                               "nome": "Tatiana Ribeiro",
//                               "rg": "789654123",
//                               "telefone_aluno": "51987654325",
//                               "telefone_responsavel": "51998765436",
//                               "email": "tatiana.ribeiro@gmail.com",
//                               "data_nascimento": "2003-02-14 13:15:00"
//                             },
//                             {
//                               "cod_aluno": 46,
//                               "cod_turma": 125,
//                               "nome": "Marcelo Almeida",
//                               "rg": "456123789",
//                               "telefone_aluno": "61987654325",
//                               "telefone_responsavel": "61998765436",
//                               "email": "marcelo.almeida@al.educacao.sp.gov.br",
//                               "data_nascimento": "2004-07-08 15:00:00"
//                             },
//                             {
//                               "cod_aluno": 47,
//                               "cod_turma": 126,
//                               "nome": "Larissa Mendes",
//                               "rg": "123456987",
//                               "telefone_aluno": "71987654325",
//                               "telefone_responsavel": "71998765436",
//                               "email": "larissa.mendes@gmail.com",
//                               "data_nascimento": "2005-06-21 10:30:00"
//                             },
//                             {
//                               "cod_aluno": 48,
//                               "cod_turma": 126,
//                               "nome": "Fábio Teixeira",
//                               "rg": "987123654",
//                               "telefone_aluno": "81987654325",
//                               "telefone_responsavel": "81998765436",
//                               "email": "fabio.teixeira@al.educacao.sp.gov.br",
//                               "data_nascimento": "2003-08-04 08:55:00"
//                             },
//                             {
//                               "cod_aluno": 49,
//                               "cod_turma": 127,
//                               "nome": "Carolina Rocha",
//                               "rg": "654789321",
//                               "telefone_aluno": "91987654325",
//                               "telefone_responsavel": "91998765436",
//                               "email": "carolina.rocha@gmail.com",
//                               "data_nascimento": "2002-12-12 14:10:00"
//                             },
//                             {
//                               "cod_aluno": 50,
//                               "cod_turma": 127,
//                               "nome": "Alexandre Melo",
//                               "rg": "321987654",
//                               "telefone_aluno": "11987654330",
//                               "telefone_responsavel": "11998765441",
//                               "email": "alexandre.melo@al.educacao.sp.gov.br",
//                               "data_nascimento": "2004-10-05 12:45:00"
//                             }

//       ]
// )


//////////////////////////////////////////////////// update exercicio/////////////////////////////////////////////////////////////////////

// db.getCollection('bd3-nosql-atv2').updateOne(
//   {'cod_aluno':1},
//   {
//       $set: { "cod_aluno": 52,
//         "cod_turma": 110,
//         "nome": "Jonas Santos",
//         "rg": "432056789",
//         "telefone_aluno": "11980324301",
//         "telefone_responsavel": "11988762572",
//         "email": "jonas.santos@gmail.com",
//         "data_nascimento": "2025-04-15 20:45:25"}
//   }
//   );

//////////////////////////////////////////////////// delete exercicio/////////////////////////////////////////////////////////////////////

// db.getCollection('bd3-nosql-atv2').deleteOne(
//   {'cod_aluno':52});


//////////////////////////////////////////////////// find gmail exercicio/////////////////////////////////////////////////////////////////////

// db.getCollection('bd3-nosql-atv2').find(
//   {'email': /gmail/});


