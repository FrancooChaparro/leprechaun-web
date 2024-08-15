import type { Product } from "@/types/types";

const api = {
  match: {
    list: async (): Promise<Product[]> => {
      return fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkVHnsot25BjWlN6CH5XzRVH7vSyRMwJZfEWIBqmbcQNeLGew8NWP-BPLfLbpn3zS8XyQrDOU849r1/pub?output=tsv",
        {next: {tags: ["products"]}},
      )
        .then((res) => res.text())
        .then((text) => {
          return text
            .split("\n")
            .slice(1)
            .map((row) => {
              const [id, name, description, image, price, amount] = row.split("\t");

              return {
                id: parseInt(id),
                name,
                description,
                image, 
                price: parseInt(price),
                amount: parseInt(amount)
              };
            });
        });
    },
  }
}

export default api;