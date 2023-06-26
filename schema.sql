-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema movietube
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema movietube
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `movietube` DEFAULT CHARACTER SET utf8 ;
USE `movietube` ;

-- -----------------------------------------------------
-- Table `movietube`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movietube`.`items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `channelTitle` VARCHAR(60) NOT NULL,
  `channelIcon` LONGTEXT NOT NULL,
  `videoTitle` LONGTEXT NOT NULL,
  `publishedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `videoImage` LONGTEXT NOT NULL,
  `duration` INT NOT NULL,
  `description` LONGTEXT NOT NULL,
  `category` MEDIUMTEXT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `link` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
