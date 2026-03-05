import { useState, useEffect } from "react";

export const getAllCharacters = async (page = 1) => {
  const response = await fetch(
    `http://localhost:8080/my-api/characters?page=${page}`,
  );

   if (!response.ok) {
    throw new Error("Erro ao buscar dados do servidor");
  }

  return await response.json();
};

export const getCharacterById = async (id) => {
  const response = await fetch(`http://localhost:8080/my-api/character/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar dados do servidor");
  }

  const data = await response.json();
  console.log(data);
  return data;
};
