-- AlterTable
ALTER TABLE `usermusicpreference` ADD COLUMN `preferenceType` VARCHAR(191) NOT NULL DEFAULT 'track';

-- CreateTable
CREATE TABLE `Album` (
    `idAlbum` CHAR(36) NOT NULL,
    `albumName` VARCHAR(100) NOT NULL,
    `artistID` VARCHAR(191) NULL,
    `releaseDate` DATETIME(3) NULL,
    `coverUrl` VARCHAR(255) NULL,

    PRIMARY KEY (`idAlbum`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserAlbum` (
    `id` CHAR(36) NOT NULL,
    `userID` VARCHAR(191) NOT NULL,
    `albumID` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserAlbum_userID_albumID_key`(`userID`, `albumID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Playlist` (
    `idPlaylist` CHAR(36) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `coverUrl` VARCHAR(255) NULL,
    `ownerID` VARCHAR(191) NULL,

    PRIMARY KEY (`idPlaylist`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserPlaylist` (
    `id` CHAR(36) NOT NULL,
    `userID` VARCHAR(191) NOT NULL,
    `playlistID` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserPlaylist_userID_playlistID_key`(`userID`, `playlistID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Album` ADD CONSTRAINT `Album_artistID_fkey` FOREIGN KEY (`artistID`) REFERENCES `Artist`(`idArtist`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAlbum` ADD CONSTRAINT `UserAlbum_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAlbum` ADD CONSTRAINT `UserAlbum_albumID_fkey` FOREIGN KEY (`albumID`) REFERENCES `Album`(`idAlbum`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserPlaylist` ADD CONSTRAINT `UserPlaylist_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserPlaylist` ADD CONSTRAINT `UserPlaylist_playlistID_fkey` FOREIGN KEY (`playlistID`) REFERENCES `Playlist`(`idPlaylist`) ON DELETE CASCADE ON UPDATE CASCADE;
