/*const offre = {
    listar: `SELECT * FROM offre`,

    offre: (Numero)=>{
            return `SELECT * FROM offre WHERE offre.Numero =${Numero}`
    },
    actualizar: (data)=>{
        return `UPDATE offre SET
        Date='${data.Date}',
        Date_limite='${data.Date_limite}',
        Description='${data.Description}'
        WHERE offre.Numero=${data.Numero}`
    },

    supprimer: (Numero)=>{
        return`DELETE FROM persona WHERE persona.id=${Numero}`
    },

    ajouter: (data)=>{
        return `INSERT INTO offre
        (Numero, Date, Date_limite, Description) VALUES
        (NULL, '${data.Date}', '${data.Description}', '${data.Description}')`
    }
};

module.exports = offre;*/