# React Keycloak App
## To run keycloak docker image
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e DB_VENDOR=H2 jboss/keycloak

Navigate to:
 http://localhost:8080/auth/admin
userName: admin
pwd: admin

Create a demo Realm
export the Realm json file(keycloak.json), which will go into the public dir
Create a user and set password for the user

Run the React app
