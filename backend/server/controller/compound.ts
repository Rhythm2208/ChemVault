import * as compoundService from "../services/compound.ts";

export const getCompounds = async (req: any, res: any) => {
  const page = parseInt(req.query.page) || 1;
  try {
    const data = await compoundService.getPaginatedCompounds(page);
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getCompound = async (req: any, res: any) => {
  try {
    const compound = await compoundService.getCompoundById(req.params.id);
    if (!compound)
      return res.status(404).json({ message: "Compound not found" });
    res.json(compound);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const createCompound = async (req: any, res: any) => {
  try {
    const newCompound = await compoundService.createCompound(req.body);
    res.status(201).json(newCompound);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateCompound = async (req: any, res: any) => {
  try {
    const updatedCompound = await compoundService.updateCompound(
      req.params.id,
      req.body
    );
    res.json(updatedCompound);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteCompound = async (req: any, res: any) => {
  try {
    await compoundService.deleteCompound(req.params.id);
    res.json({ message: "Compound deleted successfully" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
