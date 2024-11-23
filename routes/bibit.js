import express, {Router} from "express";

const router = express.Router();

const bibit = [
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
export default router;