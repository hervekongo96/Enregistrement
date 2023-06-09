const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    key: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

//se connecter 
exports.login = async (req, res) =>{
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).render('login', {
                message: 'remplir les deux champs SVP!'
            });
        }
        db.query('SELECT * FROM users WHERE email=?', [email], async(_, results)=>{

                console.log(results);
           
            if(!results && !(await bcrypt.compare(password, results[0].password))){
                res.status(401).render('login',{
                    message: 'Email ou mot de Passe incorect'
                });
            }else{
                const id= results[0].id

                const token =jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("le token est :" + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                };
                res.cookie('jwt', token, cookieOptions);
                res.status(200).redirect("/enregistement");
            } 
        });

        }catch (error) 
        
        {
     console.log(error);
        }
     
};

//ouverture du compte
exports.registrer = (req, res)=>{
    console.log(req.body);

var {name, email, password, passwordconfirm} = req.body;

db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results)=>{
     if(error){
        console.log(error);
    }
    if(results.length > 0){
        return res.render('registrer', {
             message : 'le compte existe'
            });
        }else if(password !== passwordconfirm){
            return res.render('registrer', {
                message : 'mot de passe incorrect'
            });
        }
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        db.query('INSERT INTO users SET ?', {nom: name, email: email, password: password}, (error, results)=>{
            if(error){
                console.log(error)
            }else{
                console.log(results)
                return res.render('registrer',{
                    message: 'Enregistrement avec succès'
                });
            }
        });
    });

};

//envoi du fomulaire
exports.enregistrement = (req, res)=>{

    console.log(req);
    var Etudiant = require('../classes/Etudiant');
    
    var identite = {

        'Matricule'     : req.params.NumeroMatricule,
        'Nom'           : req.body.nom, 
        'Postnom'       : req.body.postnom, 
        'Prenom'        : req.body.prenom, 
        'Adresse'       : req.body.adresse, 
        'Telephone'     : req.body.telephone, 
        'Email'         : req.body.email, 
        'Nationalite'   : req.body.nationalite, 
        'LieuNaissance' : req.body.lieunaissance, 
        'DateNaissance' : req.body.datenaissance, 
        'Sexe'          : req.body.sexe, 
        'Faculte'       : req.body.faculte, 
        'Departement'   : req.body.departement, 
        'Option'        : req.body.option, 
        'Promotion'     : req.body.promotion
        
    }
    console.log(identite);

    Etudiant.ajouter(identite.Nom, identite.Postnom, identite.Prenom, identite.Sexe, identite.Etat_civil, identite.Date_naissance, identite.Age, identite.Niveau_etude, identite.Description, identite.Nationalite, identite.Adresse, identite.E_mail, identite.Telephone,
        ()=>{
        res.redirect('/enregistrement'); 
    });
};


