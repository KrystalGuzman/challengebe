const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findBy,
    findByID,
    add,
    update,
	remove
}

function find(){
 return db('physical');
}

function findBy(filter) {
    return db("physical").where(filter);
  }

function findByID(id){
    return db('physical')
    .where({ id })
    .first();
}

function add(flashcard){
    return db("physical")
    .insert(flashcard, "id")
    .then(ids => {
      const [id] = ids;
      return findByID(id);
    });
}

function update(id, changes){
    return db('physical')
    .where({ id })
    .update(changes)
    .then(() =>{
        return findByID(id)
    });
}

function remove(id){
    return db("physical")
    .where("id", id)
    .del()
    .then(() =>{
        return id
    });
}