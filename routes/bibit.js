import express, {Router} from "express";

const router = express.Router();

const bibit = [
    {
        id: 1,
        nama: "Cabai",
        jenis: "Buah",
        jumlah: "50"
    },
    {
        id:2,
        nama: "Tomat",
        jenis: "Buah",
        jumlah: "35"
    },
    {
        id:3,
        nama: "Mawar",
        jenis: "Hias",
        jumlah: "10"
    },
    {
        id:4,
        nama: "Anggrek",
        jenis: "Hias",
        jumlah: "10"
    }
];

router.get("/", (req, res) => {
    res.send(bibit);
});


router.post("/", (req, res) => {
    const newbibit = {
        id: bibit.length + 1, 
        nama: req.body.nama,
        jenis: req.body.jenis,
        jumlah: req.body.jumlah,
    };
    bibit.push(newbibit); 
    res.status(201).json(newbibit);
});
router.delete("/:id", (req, res) => {
    const bibitIndex = bibit.findIndex((t) => t.id === parseInt(req.params.id)); // Cari index berdasarkan ID
    if (bibitIndex === -1) return res.status(404).json({ message: "Data bibit tidak ada" });

    const deletedBibit = bibit.splice(bibitIndex, 1)[0]; // Hapus data berdasarkan index
    res.status(200).json({ message: `Data bibit '${deletedBibit.nama}' telah dihapus` });
});

router.put("/:id", (req, res) => {
    const itemBibit = bibit.find((t) => t.id === parseInt(req.params.id)); 
    if (!itemBibit) return res.status(404).json({ message: "Data Bibit tidak ditemukan" });

    // Perbarui hanya data yang dikirimkan
    itemBibit.nama = req.body.nama || itemBibit.nama;
    itemBibit.jenis = req.body.jenis || itemBibit.jenis;
    itemBibit.jumlah = req.body.jumlah || itemBibit.jumlah;

    res.status(200).json({
        message: `Data bibit dengan ID ${itemBibit.id} telah diperbarui`,
        updatedbibit: itemBibit,
    });
});

export default router;