import React, { useState, useEffect, useMemo } from "react";
import { FilterDataProps } from "./types";
import styles from "./FilterData.module.css";

export const FilterData = <T extends Record<string, any>>({
  data,
  config,
  onFilter,
  placeholder = "Buscar...",
}: FilterDataProps<T>) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Extraer categorías únicas dinámicamente
  const categories = useMemo(() => {
    if (!config.categoryProperty) return [];
    const sets = new Set(
      data.map((item) => String(item[config.categoryProperty!])),
    );
    return Array.from(sets);
  }, [data, config.categoryProperty]);

  // Lógica de filtrado
  useEffect(() => {
    const filtered = data.filter((item) => {
      const matchesSearch = String(item[config.searchProperty])
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        String(item[config.categoryProperty!]) === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    onFilter(filtered);
  }, [searchTerm, selectedCategory, data, config]);

  return (
    <div className={styles.filterContainer}>
      <div className={styles.searchWrapper}>
        <span className={styles.icon}>🔍</span>
        <input
          type="text"
          className={styles.searchInput}
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {config.categoryProperty && (
        <select
          className={styles.categorySelect}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
