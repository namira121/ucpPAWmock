const express = require('express');
const router = express.Router();
const bibitroute = require('./bibit')

router.get('/', (req, res) => {res.json(bibitroute)});

router.post('/', (req, res) => {
    const newbibit = {
        id: bibitroute.length+1,
        nama: req.body.nama,
        jenis: req.body.jenis,
        jumlah: req.body.jumlah
    };
    bibitroute.push(newbibit);
    res.status(201).json(newbibit);
});

module.exports = router;

router.delete('/:id', (req, res) => {
    const bibitIndex = bibitroute.findIndex(t => t.id ===parseInt(req.params.id));
    if(bibitIndex === -1) return res.status(404).json({message: "Data bibit tidak ada"});

    const deletedBibit = bibitroute.splice(bibitIndex,1)[0];
    res.status(200).json({message: `Data bibit '${deletedBibit.nama}' telah dihapus`});
})

router.put('/:id', (req, res) => {
    const bibit = bibitroute.find(t => t.id ===parseInt(req.params.id));
    if(!bibit) return res.status(404).json({message: 'Data Bibit tidak ditemukan'});
    bibit.nama = req.body.nama || bibit.nama;

    

})


