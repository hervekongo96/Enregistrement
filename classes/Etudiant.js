var db = require('../database/data');


class Etudiant{

    static ajouter(nom, postnom, prenom, adresse, telephone, email, nationalite, lieunaissance, datenaissance, sexe, faculte, departement, option, promotion, cb){
        db.query('INSERT INTO etudiant SET Nom=?,Postnom=?,Prenom=?, Adresse=?, Telephone=?, Email=?, Nationalite=?, lieunaissance=?, datenaissance=?, Sexe=?,Faculte=?,Departement=?,Option=?,Promotion=?',
        [(nom, postnom, prenom, adresse, telephone, email, nationalite, lieunaissance, datenaissance, sexe, faculte, departement, option, promotion)],(error,result)=>{
            if(error) throw error;
            cb(result);
        });
    }

    static afficher(cb){
        db.query('SELECT * FROM etudiant', 
        (error, result)=>{
            if(error) throw error;
            cb (result);
        });
    }

}

module.exports = Etudiant; 