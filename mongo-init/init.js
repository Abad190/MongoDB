// Connexió automàtica a la base de dades 'botiga'
db = db.getSiblingDB('botiga');

// =============================================================================
// 1. COL·LECCIÓ: productes (10 documents)
// =============================================================================
db.productes.insertMany([
  {
    nom: "Portàtil Pro 15",
    preu: 1299.99,
    categoria: "electrònica",
    estoc: 15,
    valoracio: 4.8,
    actiu: true,
    etiquetes: ["ordinador", "treball", "tech"],
    creat_el: new Date("2025-01-10")
  },
  {
    nom: "Smartphone X1",
    preu: 699.50,
    categoria: "electrònica",
    estoc: 30,
    valoracio: 4.5,
    actiu: true,
    etiquetes: ["mòbil", "5G", "oferta"],
    creat_el: new Date("2025-02-15")
  },
  {
    nom: "Auriculars Noise Cancelling",
    preu: 199.99,
    categoria: "electrònica",
    estoc: 50,
    valoracio: 4.7,
    actiu: true,
    etiquetes: ["àudio", "gadget"],
    creat_el: new Date("2025-03-01")
  },
  {
    nom: "Sudadera Cotó Orgànic",
    preu: 45.00,
    categoria: "roba",
    estoc: 100,
    valoracio: 4.2,
    actiu: true,
    etiquetes: ["moda", "hivern", "eco"],
    creat_el: new Date("2025-01-20")
  },
  {
    nom: "Pantalons Vaquers Slim",
    preu: 59.90,
    categoria: "roba",
    estoc: 0,
    valoracio: 3.9,
    actiu: false,
    etiquetes: ["moda", "casual"],
    creat_el: new Date("2024-11-12")
  },
  {
    nom: "Cafetera de Goteig",
    preu: 89.95,
    categoria: "llar",
    estoc: 22,
    valoracio: 4.4,
    actiu: true,
    etiquetes: ["cuina", "cafè"],
    creat_el: new Date("2025-02-28")
  },
  {
    nom: "Llum de peu LED",
    preu: 34.99,
    categoria: "llar",
    estoc: 40,
    valoracio: 4.1,
    actiu: true,
    etiquetes: ["il·luminació", "decoració"],
    creat_el: new Date("2025-04-05")
  },
  {
    nom: "Esterilla de Ioga",
    preu: 25.00,
    categoria: "esport",
    estoc: 60,
    valoracio: 4.6,
    actiu: true,
    etiquetes: ["fitnes", "benestar"],
    creat_el: new Date("2025-03-10")
  },
  {
    nom: "Bicicleta de Muntanya 29\"",
    preu: 549.00,
    categoria: "esport",
    estoc: 5,
    valoracio: 4.9,
    actiu: true,
    etiquetes: ["ciclisme", "exterior"],
    creat_el: new Date("2025-01-05")
  },
  {
    nom: "Rellotge Intel·ligent Sport",
    preu: 149.99,
    categoria: "esport",
    estoc: 25,
    valoracio: 4.3,
    actiu: true,
    etiquetes: ["wearable", "fitnes", "tech"],
    creat_el: new Date("2025-02-20")
  }
]);

// =============================================================================
// 2. COL·LECCIÓ: clients (10 documents)
// -----------------------------------------------------------------------------
// MODELITZACIÓ DE LES DADES MÍNIMES:
// - nom i email: Identificació i comunicació essencial amb l'usuari.
// - telefon: Per a avisos de l'empresa de repartiment.
// - adreça: Estructurada com a objecte insertat (Embedding) perquè és una dada 
//   pròpia i única del client, necessària per a enviar les comandes.
// - actiu: Estat del compte de l'usuari.
// =============================================================================
db.clients.insertMany([
  { _id: ObjectId("65f1a1a1a1a1a1a1a1a1a101"), nom: "Joan Garcia", email: "joan@email.com", telefon: "600111222", adreça: { carrer: "Gran Via 123", ciutat: "Barcelona", cp: "08001" }, actiu: true },
  { _id: ObjectId("65f1a1a1a1a1a1a1a1a1a102"), nom: "Marta Rovira", email: "marta@email.com", telefon: "600333444", adreça: { carrer: "Carrer Major 45", ciutat: "Girona", cp: "17001" }, actiu: true },
  { _id: ObjectId("65f1a1a1a1a1a1a1a1a1a103"), nom: "Pere Soler", email: "pere@email.com", telefon: "600555666", adreça: { carrer: "Av. Diagonal 89", ciutat: "Barcelona", cp: "08012" }, actiu: true },
  { _id: ObjectId("65f1a1a1a1a1a1a1a1a1a104"), nom: "Anna Puig", email: "anna@email.com", telefon: "600777888", adreça: { carrer: "Carrer Nou 8", ciutat: "Tarragona", cp: "43001" }, actiu: true },
  { _id: ObjectId("65f1a1a1a1a1a1a1a1a1a105"), nom: "Carlos Mendoza", email: "carlos@email.com", telefon: "611222333", adreça: { carrer: "Rambla Nova 12", ciutat: "Lleida", cp: "25002" }, actiu: true },
  { _id: ObjectId("65f1a1a1a1a1a1a1a1a1a106"), nom: "Laura Mas", email: "laura@email.com", telefon: "622333444", adreça: { carrer: "Carrer de la Pau 3", ciutat: "Manresa", cp: "08241" }, actiu: true },
  { _id: ObjectId("65f1a1a1a1a1a1a1a1a1a107"), nom: "Jordi Vila", email: "jordi@email.com", telefon: "633444555", adreça: { carrer: "Plaça de l'Església 5", ciutat: "Vic", cp: "08500" }, actiu: false },
  { _id: ObjectId("65f1a1a1a1a1a1a1a1a1a108"), nom: "Sílvia Martí", email: "silvia@email.com", telefon: "644555666", adreça: { carrer: "Carrer Ample 77", ciutat: "Mataró", cp: "08301" }, actiu: true },
  { _id: ObjectId("65f1a1a1a1a1a1a1a1a1a109"), nom: "Albert Roca", email: "albert@email.com", telefon: "655666777", adreça: { carrer: "Av. Catalunya 4", ciutat: "Reus", cp: "43201" }, actiu: true },
  { _id: ObjectId("65f1a1a1a1a1a1a1a1a1a110"), nom: "Elena Gomez", email: "elena@email.com", telefon: "666777888", adreça: { carrer: "Carrer del Mar 9", ciutat: "Badalona", cp: "08911" }, actiu: true }
]);

// =============================================================================
// 3. COL·LECCIÓ: comandes (10 documents)
// -----------------------------------------------------------------------------
// MODELITZACIÓ DE LES DADES MÍNIMES I ESTRATÈGIA:
// - client_id (REFERÈNCIA): S'utilitza el camp `client_id` enllaçat amb l'ID del 
//   client. Com que un client pot tenir infinitat de comandes, no les fiquem dins 
//   del client per evitar que el document superi el límit de 16MB de Mongo.
// - data i estat: Per controlar el cicle de vida de la comanda.
// - productes (EMBEDDING): Fem un array d'objectes amb les dades dels productes 
//   en el moment exacte de la compra (nom, quantitat i preu unitari històric). 
//   Això es fa així perquè si el preu del catàleg puja o baixa demà, la factura 
//   del client ha de seguir registrant el preu antic que realment va pagar.
// - total: El càlcul final monetari per agilitzar consultes de facturació.
// =============================================================================
db.comandes.insertMany([
  {
    client_id: ObjectId("65f1a1a1a1a1a1a1a1a1a101"),
    data: new Date("2025-04-10"),
    estat: "lliurat",
    productes: [
      { nom: "Portàtil Pro 15", quantitat: 1, preu_unitari: 1299.99 }
    ],
    total: 1299.99
  },
  {
    client_id: ObjectId("65f1a1a1a1a1a1a1a1a1a102"),
    data: new Date("2025-04-12"),
    estat: "lliurat",
    productes: [
      { nom: "Sudadera Cotó Orgànic", quantitat: 2, preu_unitari: 45.00 },
      { nom: "Esterilla de Ioga", quantitat: 1, preu_unitari: 25.00 }
    ],
    total: 115.00
  },
  {
    client_id: ObjectId("65f1a1a1a1a1a1a1a1a1a103"),
    data: new Date("2025-04-15"),
    estat: "en procés",
    productes: [
      { nom: "Smartphone X1", quantitat: 1, preu_unitari: 699.50 }
    ],
    total: 699.50
  },
  {
    client_id: ObjectId("65f1a1a1a1a1a1a1a1a1a104"),
    data: new Date("2025-04-18"),
    estat: "lliurat",
    productes: [
      { nom: "Llum de peu LED", quantitat: 2, preu_unitari: 34.99 },
      { nom: "Cafetera de Goteig", quantitat: 1, preu_unitari: 89.95 }
    ],
    total: 159.93
  },
  {
    client_id: ObjectId("65f1a1a1a1a1a1a1a1a1a105"),
    data: new Date("2025-04-20"),
    estat: "cancel·lat",
    productes: [
      { nom: "Auriculars Noise Cancelling", quantitat: 1, preu_unitari: 199.99 }
    ],
    total: 199.99
  },
  {
    client_id: ObjectId("65f1a1a1a1a1a1a1a1a1a106"),
    data: new Date("2025-04-22"),
    estat: "enviat",
    productes: [
      { nom: "Rellotge Intel·ligent Sport", quantitat: 1, preu_unitari: 149.99 }
    ],
    total: 149.99
  },
  {
    client_id: ObjectId("65f1a1a1a1a1a1a1a1a1a108"),
    data: new Date("2025-04-25"),
    estat: "lliurat",
    productes: [
      { nom: "Esterilla de Ioga", quantitat: 2, preu_unitari: 25.00 }
    ],
    total: 50.00
  },
  {
    client_id: ObjectId("65f1a1a1a1a1a1a1a1a1a109"),
    data: new Date("2025-04-28"),
    estat: "en procés",
    productes: [
      { nom: "Bicicleta de Muntanya 29\"", quantitat: 1, preu_unitari: 549.00 },
      { nom: "Rellotge Intel·ligent Sport", quantitat: 1, preu_unitari: 149.99 }
    ],
    total: 698.99
  },
  {
    client_id: ObjectId("65f1a1a1a1a1a1a1a1a1a110"),
    data: new Date("2025-05-02"),
    estat: "lliurat",
    productes: [
      { nom: "Cafetera de Goteig", quantitat: 1, preu_unitari: 89.95 }
    ],
    total: 89.95
  },
  {
    client_id: ObjectId("65f1a1a1a1a1a1a1a1a1a101"),
    data: new Date("2025-05-05"),
    estat: "enviat",
    productes: [
      { nom: "Auriculars Noise Cancelling", quantitat: 1, preu_unitari: 199.99 },
      { nom: "Sudadera Cotó Orgànic", quantitat: 1, preu_unitari: 45.00 }
    ],
    total: 244.99
  }
]);

print("S'ha completat la inicialització de la base de dades 'botiga' amb èxit.");
