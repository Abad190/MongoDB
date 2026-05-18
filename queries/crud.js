// Connexió a la base de dades 'botiga'
db = db.getSiblingDB('botiga');

// =============================================================================
// 3.1 Create (Inserció)
// =============================================================================

// 1. Insereix un nou producte individual amb insertOne()
db.productes.insertOne({
  nom: "Teclat Mecànic RGB",
  preu: 85.50,
  categoria: "electrònica",
  estoc: 12,
  valoracio: 4.6,
  actiu: true,
  etiquetes: ["perifèrics", "gaming", "tech"],
  creat_el: new Date() // S'assigna la data i hora actual de la inserció
});

print("Producte individual insertat correctament.");

// 2. Insereix 3 productes nous de la categoria 'ofertes' amb insertMany()
db.productes.insertMany([
  {
    nom: "Pack 3 Mitjons Esportius",
    preu: 9.99,
    categoria: "ofertes",
    estoc: 150,
    valoracio: 4.0,
    actiu: true,
    etiquetes: ["roba", "esport", "pack"],
    creat_el: new Date()
  },
  {
    nom: "Ratolí Inalàmbric Basic",
    preu: 14.95,
    categoria: "ofertes",
    estoc: 85,
    valoracio: 4.2,
    actiu: true,
    etiquetes: ["perifèrics", "oficina", "tech"],
    creat_el: new Date()
  },
  {
    nom: "Batedora de Mà 600W",
    preu: 29.90,
    categoria: "ofertes",
    estoc: 40,
    valoracio: 4.5,
    actiu: true,
    etiquetes: ["cuina", "llar", "electrodomèstic"],
    creat_el: new Date()
  }
]);

print("Els 3 productes en oferta s'han insertat correctament.");

// =============================================================================
// 3.2 Read (Lectura)
// =============================================================================

// 3. Llista tots els productes de la col·lecció mostrant tota la seva informació
db.productes.find({});

// 4. Cerca tots els productes amb preu inferior a 50 €. Mostra tota la informació del producte
db.productes.find({ preu: { $lt: 50 } });

// 5. Cerca productes d'una categoria específica (ex: 'electrònica') amb estoc > 0. Mostra tota la informació del producte
db.productes.find({
  categoria: "electrònica",
  estoc: { $gt: 0 }
});

print("Consulta de productes amb estoc per categoria preparada.");

// 6. Cerca productes amb valoració >= 4.0, mostrant només nom, preu i valoració (projecció)
db.productes.find(
  { valoracio: { $gte: 4.0 } }, // Filtre: valoració més gran o igual a 4.0
  { nom: 1, preu: 1, valoracio: 1, _id: 0 } // Projecció: 1 per mostrar, 0 per amagar
);

print("Consulta de projecció per valoració preparada.");

// 7. Cerca productes per etiqueta (ex: 'tech')
db.productes.find({
  etiquetes: "tech"
});

print("Consulta de cerca per etiqueta preparada.");

// =============================================================================
// 3.3 Update (Actualització)
// =============================================================================

// 8. Actualitza el preu d'un producte específic amb updateOne()
db.productes.updateOne(
  { nom: "Teclat Mecànic RGB" }, // Filtre per trobar el producte
  { $set: { preu: 79.99 } }       // Modificació: establim el nou preu
);
// 9. Augmenta l'estoc de tots els productes d'una categoria en 10 unitats amb updateMany()
db.productes.updateMany(
  { categoria: "ofertes" }, // Filtre: tots els de la categoria 'ofertes'
  { $inc: { estoc: 10 } }   // Modificació: incrementem el camp estoc en 10
);

print("Operació repetida d'increment d'estoc preparada.");

// 10. Afegeix una nova etiqueta a un producte existent
db.productes.updateOne(
  { nom: "Teclat Mecànic RGB" },             // Filtre per trobar el producte específic
  { $push: { etiquetes: "edicio-limitada" } } // Modificació: afegim una nova etiqueta a la llista
);

print("Operació de nova etiqueta (punt 10) preparada.");

// 11. Desactiva (actiu: false) tots els productes sense estoc amb updateMany()
db.productes.updateMany(
  { estoc: 0 },              // Filtre: productes amb estoc igual a zero
  { $set: { actiu: false } } // Modificació: canviem el camp actiu a false
);

print("Operació de desactivació de productes sense estoc (punt 11) preparada.");

// =============================================================================
// 3.4 Delete (Eliminació)
// =============================================================================

// 12. Elimina un producte pel seu nom
db.productes.deleteOne({
  nom: "Pack 3 Mitjons Esportius"
});

print("Operació d'eliminació individual de producte preparada.");

// 13. Elimina tots els productes de la categoria 'ofertes' que has creat anteriorment
db.productes.deleteMany({
  categoria: "ofertes"
});

print("Operació d'eliminació massiva per categoria preparada.");
