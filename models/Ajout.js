const cnx = require('../database/data');

class vol {

    static afficher(cb){
        cnx.query('SELECT * FROM vol', (error, result)=>{
            if(error) throw error
            cb (result)
        })
    }
  

}

module.exports = vol


