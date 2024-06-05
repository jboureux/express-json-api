# Utiliser une image Node.js comme base
FROM node:lts-slim AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Installer les dépendances avec PNPM
RUN npm install

# Construire l'application
RUN npm run build

# Utiliser une image légère pour le déploiement
FROM nginx:alpine

# Copier les fichiers de construction depuis l'étape de build
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer le serveur nginx
CMD ["nginx", "-g", "daemon off;"]