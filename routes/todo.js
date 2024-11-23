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

    
})


