# Portfolio Backend

Backend FastAPI pour récupérer automatiquement les projets GitHub favoris avec leurs images de branding.

## 🚀 Installation

1. **Créer un environnement virtuel Python**
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate  # Linux/Mac
   # ou
   venv\Scripts\activate  # Windows
   ```

2. **Installer les dépendances**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configuration**
   
   Copier `.env.example` vers `.env` et configurer :
   ```bash
   cp .env.example .env
   ```
   
   Éditer `.env` :
   ```env
   GITHUB_USERNAME=votre_nom_utilisateur
   GITHUB_TOKEN=votre_token_optionnel
   CACHE_TTL_SECONDS=3600
   MAX_PROJECTS=5
   ```

## 🔑 GitHub Token (Optionnel mais recommandé)

Pour éviter les limites de rate limiting (60 req/h sans token vs 5000 avec token) :

1. Aller sur https://github.com/settings/tokens
2. Générer un nouveau token (classic)
3. Sélectionner les scopes : `public_repo`, `read:user`
4. Copier le token dans `.env`

## 🏃 Démarrage

```bash
# Depuis le dossier backend
uvicorn main:app --reload --port 8000
```

Le serveur démarre sur http://localhost:8000

## 📡 Endpoints

### `GET /api/portfolio`
Récupère les projets du portfolio (avec cache)

**Réponse :**
```json
{
  "projects": [
    {
      "name": "awesome-project",
      "description": "Description du projet",
      "url": "https://github.com/user/awesome-project",
      "homepage": "https://demo.com",
      "image_base64": "data:image/png;base64,...",
      "technologies": ["Python", "FastAPI"],
      "stars": 42,
      "category": "Web"
    }
  ],
  "total": 5,
  "cached": true
}
```

### `GET /api/portfolio/refresh`
Force le rafraîchissement des données (bypass cache)

### `GET /health`
Health check

### `GET /docs`
Documentation interactive Swagger

## 🖼️ Images de Branding

Le backend cherche automatiquement les images dans le dossier `branding/` de chaque repo GitHub :

- `preview.png`
- `thumbnail.png`
- `cover.png`
- `banner.png`
- `preview.jpg`
- `thumbnail.jpg`

Les images sont encodées en base64 et retournées directement dans la réponse.

## 🔄 Cache

- **TTL par défaut :** 1 heure (3600 secondes)
- **Configurable via :** `CACHE_TTL_SECONDS` dans `.env`
- **Bypass :** Utiliser `/api/portfolio/refresh`

## 🛠️ Structure

```
backend/
├── main.py                 # Application FastAPI
├── requirements.txt        # Dépendances
├── .env.example           # Template configuration
├── .env                   # Configuration (git ignored)
├── models/
│   ├── __init__.py
│   └── portfolio.py       # Modèles Pydantic
└── services/
    ├── __init__.py
    └── github_service.py  # Service GitHub API
```

## 🐛 Debugging

Activer les logs détaillés :
```bash
uvicorn main:app --reload --log-level debug
```

## 📝 Notes

- Les repos starred sont triés par date de mise à jour
- Seuls les `MAX_PROJECTS` premiers sont retournés
- Les technologies sont extraites du champ `language` de GitHub
- La catégorie est basée sur le premier topic du repo
