class Level {
  constructor() {}

  // An option to make individual levels - I could put all the levels together in one and have switch case for player.level and determine amount of zombies and pickups etc
  // This is something I will consider doing to condense the code, but for now just having individual methods per level

  runLevel1() {
   
    game.timer = setInterval(() => {
      game.zombieArr.forEach((zombie) => {
        zombie.moveZombieRight();
        game.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieMark(zombie);
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      if (game.time % 60 === 0) {
        let slowZombie = new ZombieMark();
        slowZombie.div = game.createNewElement("zombieMark");
        game.drawNewElement(slowZombie);
        game.zombieArr.push(slowZombie);
      }

      if (game.time % 85 === 0) {
        let fastZombie = new ZombieKaren();
        fastZombie.div = game.createNewElement("zombieKaren");
        game.drawNewElement(fastZombie);
        game.zombieFasterArr.push(fastZombie);
      }

      if (game.time % 75 === 0) {
        let fastestZombie = new ZombieJay();
        fastestZombie.div = game.createNewElement("zombieJay");
        game.drawNewElement(fastestZombie);
        game.zombieFastestArr.push(fastestZombie);
      }

      game.zombieFasterArr.forEach((zombie) => {
        zombie.moveZombieLeftFaster();
        game.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieKaren(zombie);
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      game.zombieFastestArr.forEach((zombie) => {
        zombie.moveZombieDownFastest();
        game.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieJay(zombie);
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      weapon.bulletLeftArr.forEach((bullet) => {
        bullet.moveLeft();
        game.drawNewElement(bullet);
        weapon.deleteBulletLeft(bullet);
      });

      weapon.bulletRightArr.forEach((bullet) => {
        bullet.moveRight();
        game.drawNewElement(bullet);
        weapon.deleteBulletRight(bullet);
      });

      if (game.time % 100 === 0) {
        let water = new Water();
        water.div = game.createNewElement("water");
        game.drawNewElement(water);
        pickUp.waterArr.push(water);
      }

      pickUp.waterArr.forEach((water) => {
        pickUp.detectPickUpCollection(water);
      });

      if (game.time % 250 === 0) {
        let medkit = new Medkit();
        medkit.div = game.createNewElement("medkit");
        game.drawNewElement(medkit);
        pickUp.medkitArr.push(medkit);
      }

      pickUp.medkitArr.forEach((medkit) => {
        pickUp.detectPickUpCollection(medkit);
      });

      if (game.time % 200 === 0) {
        let parts = new Parts();
        parts.div = game.createNewElement("parts");
        game.drawNewElement(parts);
        pickUp.partsArr.push(parts);
      }

      pickUp.partsArr.forEach((parts) => {
        pickUp.detectPickUpCollection(parts);
      });

      if (player.score > 1500) {
        game.pauseGame()
        document.getElementById('levelup-container').style.display = 'block'
        player.level += 1;
        
      }

      game.time++;
    }, 100);
  }

  runLevel2() {
  
    game.timer = setInterval(() => {
      game.zombieArr.forEach((zombie) => {
        zombie.moveZombieRight();
        game.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieMark(zombie);
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      if (game.time % 20 === 0) {
        let slowZombie = new ZombieMark();
        slowZombie.div = game.createNewElement("zombieMark");
        game.drawNewElement(slowZombie);
        game.zombieArr.push(slowZombie);
      }

      if (game.time % 60 === 0) {
        let fastZombie = new ZombieKaren();
        fastZombie.div = game.createNewElement("zombieKaren");
        game.drawNewElement(fastZombie);
        game.zombieFasterArr.push(fastZombie);
      }

      if (game.time % 50 === 0) {
        let fastestZombie = new ZombieJay();
        fastestZombie.div = game.createNewElement("zombieJay");
        game.drawNewElement(fastestZombie);
        game.zombieFastestArr.push(fastestZombie);
      }

      game.zombieFasterArr.forEach((zombie) => {
        zombie.moveZombieLeftFaster();
        game.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieKaren(zombie);
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      game.zombieFastestArr.forEach((zombie) => {
        zombie.moveZombieDownFastest();
        game.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieJay(zombie);
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      weapon.bulletLeftArr.forEach((bullet) => {
        bullet.moveLeft();
        game.drawNewElement(bullet);
        weapon.deleteBulletLeft(bullet);
      });

      weapon.bulletRightArr.forEach((bullet) => {
        bullet.moveRight();
        game.drawNewElement(bullet);
        weapon.deleteBulletRight(bullet);
      });

      if (game.time % 200 === 0) {
        let water = new Water();
        water.div = game.createNewElement("water");
        game.drawNewElement(water);
        pickUp.waterArr.push(water);
      }

      pickUp.waterArr.forEach((water) => {
        pickUp.detectPickUpCollection(water);
      });

      if (game.time % 300 === 0) {
        let medkit = new Medkit();
        medkit.div = game.createNewElement("medkit");
        game.drawNewElement(medkit);
        pickUp.medkitArr.push(medkit);
      }

      pickUp.medkitArr.forEach((medkit) => {
        pickUp.detectPickUpCollection(medkit);
      });

      if (game.time % 400 === 0) {
        let parts = new Parts();
        parts.div = game.createNewElement("parts");
        game.drawNewElement(parts);
        pickUp.partsArr.push(parts);
      }

      pickUp.partsArr.forEach((parts) => {
        pickUp.detectPickUpCollection(parts);
      });

      if (player.score > 3000) {
        player.level += 1;
        document.location.href = "../nextlevel.html";
        console.log(player.score);
      }

      game.time++;
    }, 100);
  }

  runLevel3() {
    playGameAudio()
    game.timer = setInterval(() => {
      game.zombieArr.forEach((zombie) => {
        zombie.moveZombieRight();
        game.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieMark(zombie);
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      if (game.time % 20 === 0) {
        let slowZombie = new ZombieMark();
        slowZombie.div = game.createNewElement("zombieMark");
        game.drawNewElement(slowZombie);
        game.zombieArr.push(slowZombie);
      }

      if (game.time % 40 === 0) {
        let fastZombie = new ZombieKaren();
        fastZombie.div = game.createNewElement("zombieKaren");
        game.drawNewElement(fastZombie);
        game.zombieFasterArr.push(fastZombie);
      }

      if (game.time % 50 === 0) {
        let fastestZombie = new ZombieJay();
        fastestZombie.div = game.createNewElement("zombieJay");
        game.drawNewElement(fastestZombie);
        game.zombieFastestArr.push(fastestZombie);
      }

      game.zombieFasterArr.forEach((zombie) => {
        zombie.moveZombieLeftFaster();
        game.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieKaren(zombie);
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      game.zombieFastestArr.forEach((zombie) => {
        zombie.moveZombieDownFastest();
        game.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieJay(zombie);
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      weapon.bulletLeftArr.forEach((bullet) => {
        bullet.moveLeft();
        game.drawNewElement(bullet);
        weapon.deleteBulletLeft(bullet);
      });

      weapon.bulletRightArr.forEach((bullet) => {
        bullet.moveRight();
        game.drawNewElement(bullet);
        weapon.deleteBulletRight(bullet);
      });

      if (game.time % 250 === 0) {
        let water = new Water();
        water.div = game.createNewElement("water");
        game.drawNewElement(water);
        pickUp.waterArr.push(water);
      }

      pickUp.waterArr.forEach((water) => {
        pickUp.detectPickUpCollection(water);
      });

      if (game.time % 350 === 0) {
        let medkit = new Medkit();
        medkit.div = game.createNewElement("medkit");
        game.drawNewElement(medkit);
        pickUp.medkitArr.push(medkit);
      }

      pickUp.medkitArr.forEach((medkit) => {
        pickUp.detectPickUpCollection(medkit);
      });

      if (game.time % 450 === 0) {
        let parts = new Parts();
        parts.div = game.createNewElement("parts");
        game.drawNewElement(parts);
        pickUp.partsArr.push(parts);
      }

      pickUp.partsArr.forEach((parts) => {
        pickUp.detectPickUpCollection(parts);
      });

      if (player.score > 6000) {
        player.level += 1;
        document.location.href = "../nextlevel.html";
      }

      game.time++;
    }, 100);
  }

  runLevel4() {
    game.timer = setInterval(() => {
      game.zombieArr.forEach((zombie) => {
        zombie.moveZombieRight();
        game.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieMark(zombie);
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      if (game.time % 15 === 0) {
        let slowZombie = new ZombieMark();
        slowZombie.div = game.createNewElement("zombieMark");
        game.drawNewElement(slowZombie);
        game.zombieArr.push(slowZombie);
      }

      if (game.time % 30 === 0) {
        let fastZombie = new ZombieKaren();
        fastZombie.div = game.createNewElement("zombieKaren");
        game.drawNewElement(fastZombie);
        game.zombieFasterArr.push(fastZombie);
      }

      if (game.time % 40 === 0) {
        let fastestZombie = new ZombieJay();
        fastestZombie.div = game.createNewElement("zombieJay");
        game.drawNewElement(fastestZombie);
        game.zombieFastestArr.push(fastestZombie);
      }

      game.zombieFasterArr.forEach((zombie) => {
        zombie.moveZombieLeftFaster();
        game.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieKaren(zombie);
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      game.zombieFastestArr.forEach((zombie) => {
        zombie.moveZombieDownFastest();
        game.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieJay(zombie);
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      weapon.bulletLeftArr.forEach((bullet) => {
        bullet.moveLeft();
        game.drawNewElement(bullet);
        weapon.deleteBulletLeft(bullet);
      });

      weapon.bulletRightArr.forEach((bullet) => {
        bullet.moveRight();
        game.drawNewElement(bullet);
        weapon.deleteBulletRight(bullet);
      });

      if (game.time % 300 === 0) {
        let water = new Water();
        water.div = game.createNewElement("water");
        game.drawNewElement(water);
        pickUp.waterArr.push(water);
      }

      pickUp.waterArr.forEach((water) => {
        pickUp.detectPickUpCollection(water);
      });

      if (game.time % 400 === 0) {
        let medkit = new Medkit();
        medkit.div = game.createNewElement("medkit");
        game.drawNewElement(medkit);
        pickUp.medkitArr.push(medkit);
      }

      pickUp.medkitArr.forEach((medkit) => {
        pickUp.detectPickUpCollection(medkit);
      });

      if (game.time % 500 === 0) {
        let parts = new Parts();
        parts.div = game.createNewElement("parts");
        game.drawNewElement(parts);
        pickUp.partsArr.push(parts);
      }

      pickUp.partsArr.forEach((parts) => {
        pickUp.detectPickUpCollection(parts);
      });

      if (player.score > 10000) {
        player.level += 1;
        document.location.href = "../youwin.html";

      }

      game.time++;
    }, 100);
  }
}
