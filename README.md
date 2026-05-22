# Pràctica: Docker + MongoDB

## Descripció breu del projecte
Aquest projecte tècnic consisteix en el disseny, desplegament i optimització d'una base de dades NoSQL utilitzant MongoDB i Docker.

L'objectiu principal és orquestrar l'entorn de desenvolupament mitjançant Docker Compose, assegurant la persistència de la informació a través de la configuració de volums. Sobre aquesta infraestructura, es desenvolupa i documenta de forma professional un sistema complet d'operacions CRUD i consultes avançades (aplicant filtres, projeccions i operadors complexos), així com la creació i gestió d'índexs per a l'optimització del rendiment de la base de dades.

---

## Prerequisits (programari i versions)

Per poder replicar, aixecar i operar aquest entorn correctament, és necessari que el vostre sistema tingui instal·lat el següent programari amb les versions mínimes indicades:

* **Git** (Versió 2.20 o superior): Necessari per a clonar el repositori i gestionar el control de versions del projecte.
* **Docker Desktop** o **Docker Engine** (Versió 20.10 o superior): El motor de contenidors indispensable per a virtualitzar els serveis de MongoDB i Mongo Express de forma aïllada.
* **Docker Compose v2** (Versió 2.0 o superior): L'eina d'orquestració que permetrà aixecar tots els serveis definits en el fitxer `docker-compose.yml` amb una sola comanda.

### Verificació de l'entorn

Abans de continuar amb la instal·lació, podeu comprovar si teniu instal·lades aquestes eines i quines versions teniu executant les següents comandes a la vostra terminal o línia d'ordres:

```bash
# Comprovar la versió de Git
git --version

# Comprovar la versió de Docker
docker --version

# Comprovar la versió de Docker Compose
docker compose version
```

## Instruccions d'instal·lació i posada en marxa
Seguiu aquests passos de manera ordenada per clonar el projecte, configurar el directori i aixecar l'entorn complet de treball:

### Pas 1: Clonar el repositori
Obriu la vostra terminal, desplaceu-vos fins a la carpeta on voleu desar el projecte i executeu la següent comanda per clonar el dipòsit remot:
```bash
git clone https://github.com/Heros190/MongoDB.git
```
Un cop clonat, entreu a la carpeta del projecte:
```bash
cd MongoDB
```

### Pas 2: Crear l'estructura local requerida
El fitxer .gitignore podria estar ometent la carpeta de persistència local data/. El motor de Docker la crearà automàticament si no existeix, però si voleu assegurar-vos de tenir l'estructura idònia abans d'arrancar, podeu comprovar que la carpeta mongo-init/ conté el fitxer init.js necessari per a la primera càrrega.

### Pas 3: Aixecar l'entorn amb Docker Compose
Per descarregar les imatges oficials (mongo:7.0 i mongo-express:1.0) i arrancar els contenidors en segon pla (mode detached), executeu la següent comanda des de l'arrel del projecte:
```bash
docker compose up -d
```

### Pas 4: Verificació de la posada en marxa
Podeu comprovar que els dos contenidors estan funcionant correctament executant:
```bash
docker compose ps
```

### Pas 5: Accés a l'entorn
* **Base de dades (MongoDB):** Està disponible localment a `localhost:27017`. Hi podeu connectar qualsevol client extern com *MongoDB Compass* o l'extensió de MongoDB per a *VS Code* utilitzant les següents credencials administratives:
  * **Usuari:** `admin`
  * **Contrasenya:** `password123`
  * **Base de dades d'autenticació:** `admin`

* **Interfície Gràfica (Mongo Express):** Obriu el vostre navegador web i accediu a: [http://localhost:8081](http://localhost:8081). 
  * Si la interfície us demana credencials d'accés web (HTTP Basic Auth), utilitzeu:
    * **Usuari:** `admin`
    * **Contrasenya:** `password123`
  * Des d'aquí podreu visualitzar i gestionar de forma interactiva la base de dades `botiga` i les seves col·leccions.

### Pas 6: Aturar l'entorn
Quan acabeu de treballar, podeu aturar i destruir els contenidors sense perdre les dades (gràcies a la configuració de volums) executant:
```bash
docker compose down
```

## Estructura de fitxers:

```text
practica-mongodb/
├── docker-compose.yml       # Definició dels serveis
├── mongo-init/
│   └── init.js              # Script d'inicialització
├── queries/
│   ├── crud.js              # Operacions CRUD
│   └── advanced.js          # Consultes avançades
├── data/                    # Volum de dades (auto-generat)
├── README.md                # Documentació del projecte
└── practica.md              # Resposta a les preguntes + captures
```

## Comandes principals per operar l'entorn (com fer consultes i crear dades)

Ens situem a la carpeta MongoD

```bash
# Executar les operacions CRUD bàsiques (Inserció, Lectura, Actualització i Eliminació)
docker exec -i mongodb-botiga mongosh -u admin -p password123 --authenticationDatabase admin botiga --quiet < queries/crud.js

# Executar les consultes avançades, agregacions i gestió d'índexs
docker exec -i mongodb-botiga mongosh -u admin -p password123 --authenticationDatabase admin botiga --quiet < queries/advanced.js
```

## Explicació dels volums i xarxes configurats

Per dotar l'entorn de robustesa, modularitat i seguretat, s'ha definit una arquitectura basada en dos pilars fonamentals de Docker: la persistència de dades mitjançant volums i l'aïllament del trànsit mitjançant xarxes virtuals independents.

### 1. Volums i Estratègies de Persistència
MongoDB emmagatzema tota la informació en memòria i en la capa interna del contenidor. Si no s'utilitzessin volums, en aturar els serveis amb `docker compose down` es perdria absolutament tot. Per evitar-ho, s'han configurat dues estratègies diferents d'enllaç de dades:

* **Persistència de Dades (Directori `./data`):**
    Es connecta la carpeta local `./data` de la màquina amfitriona amb el directori intern del contenidor `/data/db`. Això assegura que totes les col·leccions (`productes`, `clients` i `comandes`), els índexs i les configuracions generades es mantinguin totalment fora del cicle de vida del contenidor. Podeu esborrar, reconstruir o actualitzar la imatge de MongoDB, i les dades continuaran intactes en tornar a aixecar l'entorn.

* **Inicialització de l'Entorn (Directori `./mongo-init`):**
    Aquest directori utilitza un muntatge de tipus *Bind Mount* cap a la ruta interna `/docker-entrypoint-initdb.d`. El contenidor oficial de MongoDB està programat per comprovar aquesta ruta la **primera vegada** que s'inicia la base de dades des de zero. En trobar-hi l'script `init.js`, l'executa automàticament creant l'estructura de dades requerida. Això permet que qualsevol desenvolupador pugui modificar l'script des de l'IDE del host i replicar l'entorn amb les mateixes dades inicials.

---

### 2. Disseny de la Xarxa Virtual (`xarxa-botiga`)
En lloc d'utilitzar la xarxa *bridge* genèrica que Docker proporciona per defecte, s'ha creat una xarxa aïllada i personalitzada anomenada `xarxa-botiga`. Els motius tècnics d'aquesta tria són:

* **Seguretat i Aïllament:**
    Els contenidors només es poden comunicar amb aquells serveis que comparteixen exactament la mateixa xarxa. Això protegeix el motor de bases de dades de qualsevol altra aplicació o contenidor que estigui corrent en el sistema de manera aliena al projecte.

* **Resolució automàtica de noms per DNS intern:**
    Dins d'una xarxa personalitzada, Docker munta un servidor DNS integrat. Gràcies a això, el servei de gestió web `mongo-express` no necessita conèixer l'adreça IP dinàmica i volàtil del contenidor de MongoDB per connectar-s'hi. En el seu fitxer de configuració s'utilitza directament el nom del servei com a *hostname* (`mongodb-botiga:27017`). Docker s'encarrega de traduir aquest nom en l'adreça IP correcta en temps real, garantint estabilitat i facilitat de rèplica.