const vol = {
    listar: `SELECT * FROM vol`,

    vol: (Numero)=>{
            return `SELECT * FROM vol WHERE vol.Numero =${Numero}`
    },
    actualizar: (data)=>{
        return `UPDATE persona SET
        nom='${data.nom}',
        postnom='${data.postnom}',
        prenom='${data.prenom}'
        WHERE persona.id=${data.id}`
    },

    supprimer: (id)=>{
        return`DELETE FROM vol WHERE persona.id=${id}`
    },
};

module.exports = vol;


























