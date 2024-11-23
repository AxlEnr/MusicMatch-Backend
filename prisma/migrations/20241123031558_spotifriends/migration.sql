-- CreateTable
CREATE TABLE `User` (
    `idUsers` CHAR(36) NOT NULL,
    `firstName` VARCHAR(30) NOT NULL,
    `lastName` VARCHAR(30) NOT NULL,
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
CREATE TABLE `Music` (
    `idMusic` CHAR(36) NOT NULL,
    `songName` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`idMusic`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Artist` (
    `idArtist` CHAR(36) NOT NULL,
    `artistName` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`idArtist`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArtistMusic` (
    `id` CHAR(36) NOT NULL,
    `artistID` VARCHAR(191) NOT NULL,
    `musicID` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ArtistMusic_artistID_musicID_key`(`artistID`, `musicID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserMusicPreference` (
    `idPreference` CHAR(36) NOT NULL,
    `userID` VARCHAR(191) NOT NULL,
    `musicID` VARCHAR(191) NOT NULL,
    `artistID` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserMusicPreference_userID_musicID_artistID_key`(`userID`, `musicID`, `artistID`),
    PRIMARY KEY (`idPreference`)
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
    `idMusic` VARCHAR(191) NULL,
    `idArtist` VARCHAR(191) NULL,

    UNIQUE INDEX `MatchDetail_idMatch_idMusic_idArtist_key`(`idMatch`, `idMusic`, `idArtist`),
    PRIMARY KEY (`idDetail`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserSocialLink` ADD CONSTRAINT `UserSocialLink_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArtistMusic` ADD CONSTRAINT `ArtistMusic_artistID_fkey` FOREIGN KEY (`artistID`) REFERENCES `Artist`(`idArtist`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArtistMusic` ADD CONSTRAINT `ArtistMusic_musicID_fkey` FOREIGN KEY (`musicID`) REFERENCES `Music`(`idMusic`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserMusicPreference` ADD CONSTRAINT `UserMusicPreference_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserMusicPreference` ADD CONSTRAINT `UserMusicPreference_musicID_fkey` FOREIGN KEY (`musicID`) REFERENCES `Music`(`idMusic`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserMusicPreference` ADD CONSTRAINT `UserMusicPreference_artistID_fkey` FOREIGN KEY (`artistID`) REFERENCES `Artist`(`idArtist`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_user1ID_fkey` FOREIGN KEY (`user1ID`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_user2ID_fkey` FOREIGN KEY (`user2ID`) REFERENCES `User`(`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatchDetail` ADD CONSTRAINT `MatchDetail_idMatch_fkey` FOREIGN KEY (`idMatch`) REFERENCES `Match`(`idMatch`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatchDetail` ADD CONSTRAINT `MatchDetail_idMusic_fkey` FOREIGN KEY (`idMusic`) REFERENCES `Music`(`idMusic`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatchDetail` ADD CONSTRAINT `MatchDetail_idArtist_fkey` FOREIGN KEY (`idArtist`) REFERENCES `Artist`(`idArtist`) ON DELETE CASCADE ON UPDATE CASCADE;
