# Bash Commands

## Installation

```bash
npm i
```

## Development

```bash
npm run develop
```

## Hosting

```bash
npm run build
npm run start
```

# Database Hosting

- You will need to run **MySQL** server _(this is where the data will be stored)_

> **Note**: Never connect the live hosted database on AWS to locally hosted database -- else database will **crash** and you will have to recreate it.

- Details regarding database have to be put into **.env** -- by default, MySQL will start database @ **127.0.0.1** + **3306**.

> **Note**: After creating database, make sure you create a collection called **tanthetaadb** in it - then, start strapi.

# Editing hardcoded parameters

- `./config/api.js` - change default, max & count parameters for apis
- `./config/middleware.js` - change data limits
- `./config/plugins.js` - change upload limits

# Common Problems

## 1. Strapi stops working due to same field names.

- **Never** give same name to different fields -- if you did it by mistake, then just go to `./src/api` & find your _collection name_. Under the collection folder, go to `content-types` directory + edit **schema.json**. There, just **edit** the fields with same names -- it will be shown in the _console error_.

> **Note**: Do not change any other fields except those which are giving errors -- **otherwise** database will become corrupted.

## 2. Strapi is giving long table/collection name error.

- By default, Strapi gives **long names** to components + relations. Then, while making its corresponding tables, Strapi will _club_ those names together & form newer names.

- Now, **SQL** databases _(like MySQL, Postgres, etc.)_ have a table name limit of **128** characters. Thus, you will have to _manually rename_ those long names.

- To do that, go to `./src/components/shared` & find your corresponding collection -- then, only edit `collectionName` -- nothing else. This will resolve the error.

> **Note**: After renaming, add them `changesInCollectionNames.md` file for **reference** to others.


