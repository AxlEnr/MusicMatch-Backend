-- CreateTable
CREATE TABLE `User` (
    `idUsers` CHAR(36) NOT NULL,
    `username` VARCHAR(30) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `profileImg` VARCHAR(255) NULL,
    `userPass` VARCHAR(255) NOT NULL,
    `userDesc` VARCHAR(255) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`idUsers`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserSocialLink` (
    `idLink` CHAR(36) NOT NULL,
    `platformName` VARCHAR(50) NOT NULL,
    `profileLink` VARCHAR(255) NOT NULL,
    `userID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idLink`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MusicPreference` (
    `idMusic` CHAR(36) NOT NULL,
    `songName` VARCHAR(100) NOT NULL,
    `artistId` VARCHAR(191) NOT NULL,
    `idUser` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idMusic`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArtistPreference` (
    `idArtist` CHAR(36) NOT NULL,
    `artistName` VARCHAR(100) NOT NULL,
    `idUser` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idArtist`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Album` (
    `idAlbum` CHAR(36) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `artistId` VARCHAR(191) NOT NULL,

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

-- CreateTable
CREATE TABLE `Match` (
    `idMatch` CHAR(36) NOT NULL,
    `user1ID` VARCHAR(191) NOT NULL,
    `user2ID` VARCHAR(191) NOT NULL,
    `matchDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idMatch`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MatchDetail` (
    `idDetail` CHAR(36) NOT NULL,
    `idMatch` VARCHAR(191) NOT NULL,
    `musicId` VARCHAR(191) NULL,
    `artistId` VARCHAR(191) NULL,

    UNIQUE INDEX `MatchDetail_idMatch_musicId_artistId_key`(`idMatch`, `musicId`, `artistId`),
    PRIMARY KEY (`idDetail`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserSocialLink` ADD CONSTRAINT `UserSocialLink_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MusicPreference` ADD CONSTRAINT `MusicPreference_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `ArtistPreference`(`idArtist`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MusicPreference` ADD CONSTRAINT `MusicPreference_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArtistPreference` ADD CONSTRAINT `ArtistPreference_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Album` ADD CONSTRAINT `Album_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `ArtistPreference`(`idArtist`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAlbum` ADD CONSTRAINT `UserAlbum_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAlbum` ADD CONSTRAINT `UserAlbum_albumID_fkey` FOREIGN KEY (`albumID`) REFERENCES `Album`(`idAlbum`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserPlaylist` ADD CONSTRAINT `UserPlaylist_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserPlaylist` ADD CONSTRAINT `UserPlaylist_playlistID_fkey` FOREIGN KEY (`playlistID`) REFERENCES `Playlist`(`idPlaylist`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_user1ID_fkey` FOREIGN KEY (`user1ID`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_user2ID_fkey` FOREIGN KEY (`user2ID`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatchDetail` ADD CONSTRAINT `MatchDetail_idMatch_fkey` FOREIGN KEY (`idMatch`) REFERENCES `Match`(`idMatch`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatchDetail` ADD CONSTRAINT `MatchDetail_musicId_fkey` FOREIGN KEY (`musicId`) REFERENCES `MusicPreference`(`idMusic`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatchDetail` ADD CONSTRAINT `MatchDetail_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `ArtistPreference`(`idArtist`) ON DELETE CASCADE ON UPDATE CASCADE;
