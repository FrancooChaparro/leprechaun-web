import type { Product } from "@/types/types";

// const api = {
//   match: {
//     list: async (): Promise<Product[]> => {
//       return fetch(
//         "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkVHnsot25BjWlN6CH5XzRVH7vSyRMwJZfEWIBqmbcQNeLGew8NWP-BPLfLbpn3zS8XyQrDOU849r1/pub?output=tsv",
//         {next: {tags: ["productos"]}},
//       )
//         .then((res) => res.text())
//         .then((text) => {
//           return text
//             .split("\n")
//             .slice(1)
//             .map((row) => {
//               const [id, name, description, image, price, amount] = row.split("\t");

//               return {
//                 id: id,
//                 name,
//                 description,
//                 image, 
//                 price: parseInt(price),
//                 amount: parseInt(amount),
//                 unitPrice: 10,
//                 stock: 10,
//               };
//             });
//         });
//     },
//   }
// }
"https://docs.google.com/spreadsheets/d/1-B59DSjDTqGMIKevd-FDU1LGCkcI666YXRpZCZL495U/edit?gid=0#gid=0"

// "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkVHnsot25BjWlN6CH5XzRVH7vSyRMwJZfEWIBqmbcQNeLGew8NWP-BPLfLbpn3zS8XyQrDOU849r1/pub?output=tsv"
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
              const [id, name, description, image, marca, price, amount, subname, rubro] = row.split("\t");

              return {
                id,
                name,
                description: `${description} - ${marca}`,
                image: `/images/${image}`,
                // image: "https://acdn.mitiendanube.com/stores/001/374/737/products/party-summer1-984881b4d1fa58278616716538018280-640-0.png",
                marca,
                price: parseInt(price),
                amount: parseInt(amount),
                unitPrice: parseInt(price),
                stock: 4,
                rubro: rubro.split("zz"), 
                subname
              };
            });
        });
    },
  }
}

export default api;