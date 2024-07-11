import Address from "../models/Address";

export const createAdd = async (req, res) => {
    try {
        console.log("address")
        const newAdd = await Address.create(req.body);
        res.status(200).json(newAdd);
    } catch (error) {
        console.error("Error creating address:", error);
        res.status(500).json({ error: "Failed to create address" });
    }
};
