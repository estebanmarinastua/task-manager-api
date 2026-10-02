# Task Manager API

Una API REST moderna para gestionar tareas. Este proyecto está pensado para portfolio, GitHub y LinkedIn, con una estructura clara, código mantenible y fácil de ampliar.

## Características

- CRUD completo de tareas
- Validación básica de entradas
- Estructura modular y clean
- API REST con Express
- Listo para mostrar en LinkedIn y portfolio
- Preparado para ser extendido con base de datos, autenticación o frontend

## Tecnologías

- Node.js
- Express
- JavaScript
- CORS
- dotenv

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
```

## Ejecutar el proyecto

Modo producción:

```bash
npm start
```

Modo desarrollo:

```bash
npm run dev
```

## Endpoints

### GET /health

Verifica que la API esté funcionando.

### GET /api/tasks

Devuelve la lista completa de tareas.

### POST /api/tasks

Crea una nueva tarea.

Ejemplo:

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Aprender JavaScript",
    "description": "Estudiar APIs y async/await"
  }'
```

### PUT /api/tasks/:id

Actualiza una tarea existente.

### DELETE /api/tasks/:id

Elimina una tarea.

## Ejemplo de respuesta

```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Aprender JavaScript",
    "description": "Estudiar APIs y async/await",
    "completed": false,
    "createdAt": "2026-10-02T00:00:00.000Z",
    "updatedAt": "2026-10-02T00:00:00.000Z"
  }
}
```

## Proyectos recomendados para seguir mejorando

- Agregar autenticación con JWT
- Conectar a PostgreSQL o MongoDB
- Crear frontend con React
- Añadir tests con Jest o Node test runner
- Hacer deploy en Render, Railway o Vercel

## Licencia

MIT
