let products = [
    { id: '1', name: 'Paleta Wilsom', description: 'Descripcion 1', stock: 10, precio: '$7240', categoria: 'Paletas', foto: '../public/Sin título.png' },
    { id: '2', name: 'Paleta Adidas', description: 'Descripcion 2', stock: 20, precio: '$5370', categoria: 'Paletas', foto: '../public/Sin título.png' },
    { id: '3', name: 'Paleta Head', description: 'Descripcion 3', stock: 30, precio: '$6700', categoria: 'Paletas', foto: '../public/Sin título.png' },
    { id: '4', name: 'Paleta Babolat', description: 'Descripcion 4', stock: 40, precio: '$5980', categoria: 'Paletas', foto: '../public/Sin título.png' },
    { id: '5', name: 'Producto 5', description: 'Descripcion 5', stock: 50, precio: '$5560', categoria: 'Paletas', foto: '../public/Sin título.png' },
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