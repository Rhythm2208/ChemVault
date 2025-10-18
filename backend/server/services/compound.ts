import { Compound } from "../model/compound.ts";

export const getPaginatedCompounds = async (page=1, limit=10 ) => {
  const offset = (page - 1) * limit;
  const { count, rows } = await Compound.findAndCountAll({
    limit,
    offset,
    order: [["createdAt", "DESC"]],
  });

  return {
    total: count,
    compounds: rows,
    currentPage: page,
    totalPages: Math.ceil(count / limit),
  };
};

export const getCompoundById = async (id: any) => {
  return await Compound.findByPk(id);
};

export const createCompound = async (data: any) => {
  return await Compound.create(data);
};

export const updateCompound = async (id: any, data: any) => {
  const compound = await Compound.findByPk(id);
  if (!compound) throw new Error("Compound not found");
  return await compound.update(data);
};

export const deleteCompound = async (id: any) => {
  const compound = await Compound.findByPk(id);
  if (!compound) throw new Error("Compound not found");
  await compound.destroy();
  return true;
};
