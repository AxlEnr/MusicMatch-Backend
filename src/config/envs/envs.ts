import "dotenv/config";
import { get } from "env-var";

export const envs = {
    PORT: get("PORT").required().asPortNumber(), // Puerto en el que estara activo el servicio    DATABASE_URL: get("DATABASE_URL").required().asString(), // Direccion sql de la base de datos
    PUBLIC_PATH: get("PUBLIC_PATH").default("public").asString(), // Directorio donde se encuentra el contenido estatico que ser servido
    JWT_SEED: get("JWT_SEED").required().asString(), // Clave secreta para la firma de los jwt
    API_SERVICE: get("API_SERVICE").required().asUrlString(), // Direccion o dominio donde se encuentra escuchando el servicio
    FRONTEND_URL: get("FRONTEND_URL").required().asUrlString(), // Frontend
    SPOTIFY_CLIENT_ID : get("SPOTIFY_CLIENT_ID").required().asString(),
    SPOTIFY_CLIENT_SECRET : get("SPOTIFY_CLIENT_SECRET").required().asString(),
    REDIRECT_URI : get("REDIRECT_URI").required().asString(),
}