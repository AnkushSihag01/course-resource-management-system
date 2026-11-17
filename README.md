
cat > README.md <<'EOF'
# Course Resource Management System

## Description
A web application to manage educational resources such as notes, PDFs, assignments and video links.

## Technologies
- HTML, CSS, JavaScript
- Node.js and Express.js
- MongoDB
- Docker and Docker Compose
- Git and GitHub

## Application Components
- Frontend: HTML, CSS and JavaScript
- Backend: Node.js and Express
- Database: MongoDB

## Environment Variables
- PORT=3000
- MONGO_URI=mongodb://mongo:27017/course_resources

## Run the Project

Clone the repository:
    git clone YOUR_REPOSITORY_URL
    cd course-resource-management-system

Build and start containers:
    docker compose up --build -d

Check containers:
    docker compose ps

View logs:
    docker compose logs app

Access application:
    http://localhost:3000

Stop containers:
    docker compose down

## API Endpoints

| Method | Endpoint | Description |
| GET | /api/resources | View resources |
| POST | /api/resources | Add resource |
| DELETE | /api/resources/:id | Delete resource |

## Database
MongoDB stores all course resources.
Docker volume mongo_data provides persistent storage.

## Docker Configuration
Dockerfile defines the application image.
docker-compose.yml manages the application and MongoDB services.
EOF

