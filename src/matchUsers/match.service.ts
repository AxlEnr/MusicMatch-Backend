import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid'; // Para generar un id único para el match

@Injectable()
export class MatchesService {
  constructor(private prisma: PrismaService) {}

  async findMatchesForUser(userId: string) {
    // Obtener las preferencias del usuario
    const userPreferences = await this.prisma.userMusicPreference.findMany({
      where: { userID: userId },
      include: { music: true, artist: true },
    });

    // Obtener las preferencias de otros usuarios
    const otherUsersPreferences = await this.prisma.userMusicPreference.findMany({
      where: { userID: { not: userId } },
      include: { music: true, artist: true, user: true },
    });

    // Comparar las preferencias
    const matches = otherUsersPreferences.filter((otherPreference) =>
      userPreferences.some(
        (preference) =>
          (preference.musicID === otherPreference.musicID ||
            preference.artistID === otherPreference.artistID) &&
          preference.userID !== otherPreference.userID, // Evitar matching consigo mismo
      ),
    );

    // Crear los matches en la base de datos
    for (const match of matches) {
      // Verificar si ya existe un match entre estos usuarios
      const existingMatch = await this.prisma.match.findFirst({
        where: {
          OR: [
            { user1ID: userId, user2ID: match.user.idUsers },
            { user1ID: match.user.idUsers, user2ID: userId },
          ],
        },
      });

      // Si no existe, crearlo
      if (!existingMatch) {
        await this.prisma.match.create({
          data: {
            idMatch: uuidv4(),
            user1ID: userId,
            user2ID: match.user.idUsers,
          },
        });
      }
    }

    // Formatear resultados
    const result = matches.map((match) => ({
      matchedUser: match.user.username,
      artist: match.artist?.artistName,
      song: match.music?.songName,
    }));

    return result;
  }

  async createMatches() {
    // Obtener todas las preferencias
    const allPreferences = await this.prisma.userMusicPreference.findMany({
      include: { music: true, artist: true },
    });

    // Crear un mapa de preferencias por usuario
    const preferencesByUser = allPreferences.reduce((acc, preference) => {
      if (!acc[preference.userID]) {
        acc[preference.userID] = { music: new Set(), artists: new Set() };
      }
      acc[preference.userID].music.add(preference.musicID);
      acc[preference.userID].artists.add(preference.artistID);
      return acc;
    }, {});

    const userIds = Object.keys(preferencesByUser);
    const matches = [];

    // Comparar preferencias entre todos los usuarios
    for (let i = 0; i < userIds.length; i++) {
      for (let j = i + 1; j < userIds.length; j++) {
        const user1 = userIds[i];
        const user2 = userIds[j];

        // Obtener intersecciones de música y artistas
        const sharedMusic = [...preferencesByUser[user1].music].filter((music) =>
          preferencesByUser[user2].music.has(music),
        );
        const sharedArtists = [...preferencesByUser[user1].artists].filter((artist) =>
          preferencesByUser[user2].artists.has(artist),
        );

        // Calcular porcentaje de match
        const totalItems =
          preferencesByUser[user1].music.size +
          preferencesByUser[user1].artists.size +
          preferencesByUser[user2].music.size +
          preferencesByUser[user2].artists.size;

        const matchPercentage = ((sharedMusic.length + sharedArtists.length) / totalItems) * 100;

        if (matchPercentage > 0) {
          // Verificar si el match ya existe
          const existingMatch = await this.prisma.match.findFirst({
            where: {
              OR: [
                { user1ID: user1, user2ID: user2 },
                { user1ID: user2, user2ID: user1 },
              ],
            },
          });

          // Si no existe, crearlo
          if (!existingMatch) {
            matches.push({
              idMatch: uuidv4(),
              user1ID: user1,
              user2ID: user2,
              matchDate: new Date(),
              matchPercentage,
            });

            await this.prisma.match.create({
              data: {
                idMatch: uuidv4(),
                user1ID: user1,
                user2ID: user2,
                matchDate: new Date(),
              },
            });
          }
        }
      }
    }

    return {
      message: 'Matches creados con éxito',
      matches,
    };
  }
}
