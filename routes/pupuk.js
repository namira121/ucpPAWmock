import express, {Router} from "express";

const router = express.Router();

const pupuk = [
    {
        idP: 1,
        nama: "Pupuk Kandang",
        jenis: "Organik",
        jumlah: "15"
    },
    {
        idP:2,
        nama: "Pupuk Kompos",
        jenis: "Organik",
        jumlah: "10"
    },
    {
        idP:3,
        nama: "SP-36",
        jenis: "Anorganik",
        jumlah: "5"
    },
    {
        idP:4,
        nama: "NPK",
        jenis: "Anorganik",
        jumlah: "7"
    }
];

router.get("/", (req, res) => {
    res.send(pupuk);
});
export default router;