import express, {Router} from "express";

const router = express.Router();

const pupuk = [
    {
        id: 1,
        nama: "Pupuk Kandang",
        jenis: "Organik",
        jumlah: "15"
    },
    {
        id:2,
        nama: "Pupuk Kompos",
        jenis: "Organik",
        jumlah: "10"
    },
    {
        id:3,
        nama: "SP-36",
        jenis: "Anorganik",
        jumlah: "5"
    },
    {
        id:4,
        nama: "NPK",
        jenis: "Anorganik",
        jumlah: "7"
    }
];

router.get("/", (req, res) => {
    res.send(pupuk);
});

router.post("/", (req, res) => {
    const newpupuk = {
        id: pupuk.length + 1, 
        nama: req.body.nama,
        jenis: req.body.jenis,
        jumlah: req.body.jumlah,
    };
    pupuk.push(newpupuk); 
    res.status(201).json(newpupuk);
});
router.delete("/:id", (req, res) => {
    const pupukIndex = pupuk.findIndex((t) => t.id === parseInt(req.params.id)); // Cari index berdasarkan ID
    if (pupukIndex === -1) return res.status(404).json({ message: "Data pupuk tidak ada" });

    const deletedPupuk = pupuk.splice(pupukIndex, 1)[0]; 
    res.status(200).json({ message: `Data pupuk '${deletedPupuk.nama}' telah dihapus` });
});

router.put("/:id", (req, res) => {
    const itempupuk = pupuk.find((t) => t.id === parseInt(req.params.id)); 
    if (!itempupuk) return res.status(404).json({ message: "Data pupuk tidak ditemukan" });

    // Perbarui hanya data yang dikirimkan
    itempupuk.nama = req.body.nama || itempupuk.nama;
    itempupuk.jenis = req.body.jenis || itempupuk.jenis;
    itempupuk.jumlah = req.body.jumlah || itempupuk.jumlah;

    res.status(200).json({
        message: `Data pupuk dengan ID ${itempupuk.id} telah diperbarui`,
        updatedpupuk: itempupuk,
    });
});

export default router;