import type { Product } from "@/types/types";

 const api = {
  match: {
    list: async (): Promise<Product[]> => {
      return fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkVHnsot25BjWlN6CH5XzRVH7vSyRMwJZfEWIBqmbcQNeLGew8NWP-BPLfLbpn3zS8XyQrDOU849r1/pub?output=tsv",
        {next: {tags: ["productos"]}},
      )
        .then((res) => res.text())
        .then((text) => {
          return text
            .split("\n")
            .slice(1)
            .map((row) => {
              const [id, name, description, image, marca, price, amount, subname, rubro, categorias, url, tituloCategoria, pricears] = row.split("\t");

              return {
                id: id.toString(),
                name,
                description: `${description}`,
                image: `/images/${image}`,
                marca,
                price: parseInt(price),
                amount: parseInt(amount),
                unitPrice: parseInt(price),
                stock: 4,
                rubro: rubro.split("zz"), 
                subname,
                subtitle: "TITULO ACA",
                urlCategory: categorias,
                urlProduct: url,
                titleCategory: tituloCategoria,
                pricears
              };
            });
        });
    },
  }
}

export default api;