let products = [
    { id: '1', name: 'Producto 1', description: 'Descripcion 1', stock: 10 },
    { id: '2', name: 'Producto 2', description: 'Descripcion 2', stock: 20 },
    { id: '3', name: 'Producto 3', description: 'Descripcion 3', stock: 30 },
    { id: '4', name: 'Producto 4', description: 'Descripcion 4', stock: 40 },
    { id: '5', name: 'Producto 5', description: 'Descripcion 5', stock: 50 },
  ];

export const gFetch = () => new Promise((res, rej) => {
    let condition = true
        if (condition) {
            setTimeout(() => {
                res(products)
              }, 2000)
        } else {
            rej('Todo mal')
        }
  });