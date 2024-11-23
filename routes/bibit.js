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
    res.send(pupuk);
});
export default router;