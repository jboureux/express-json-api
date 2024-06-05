# Utiliser une image Node.js comme base
FROM node:lts-slim AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Installer les dépendances avec PNPM
RUN npm install

EXPOSE 3334

# Démarrer le serveur nginx
CMD ["npm", "run", "dev"]