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
 return db('mental');
}

function findBy(filter) {
    return db("mental").where(filter);
  }

function findByID(id){
    return db('mental')
    .where({ id })
    .first();
}

function add(flashcard){
    return db("mental")
    .insert(flashcard, "id")
    .then(ids => {
      const [id] = ids;
      return findByID(id);
    });
}

function update(id, changes){
    return db('mental')
    .where({ id })
    .update(changes)
    .then(() =>{
        return findByID(id)
    });
}

function remove(id){
    return db("mental")
    .where("id", id)
    .del()
    .then(() =>{
        return id
    });
}