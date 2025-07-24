# Instrucciones para subir un proyecto a la nube

## Trabajando con VITE. Descarga de dependencias

```sh
npm i # npm install
```

## Arrancar el servidor de desarrollo

```sh
npm run dev
```

## Detener el servidor de desarrollo

Ctrl + C

## Subir un proyecto a la nube (netlify)

```sh
npm run build
```

## Previsualizar el resultado (El build) -> Lo que está dentro de la carpeta dist

```sh
npm run preview
```

## Creando y subiendo un proyecto con GIT

```sh
git init
```

```sh
git add .
```

```sh
git commit -m <mensaje>
git commit -m "Subiendo el proyecto netlify"
```

## Agrego el remoto al repo local

```sh
git remote add origin https://github.com/mlapeducacionit/vite-formu.git
```

## Subo la rama local al remoto

```sh
git push -u origin main
# Si no hacen este comando -> git branch -M main
git push -u origin master 
```

