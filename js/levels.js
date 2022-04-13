const game = new Game();
const zombie = new Zombie();

class Levels {
    constructor(
    )
}

class Level2 extends Levels {
    constructor(){
        super()
}

// An option to make the next level harder 

    // runLevel2() {

    // game.timer = setInterval(() => {
    //   game.zombieArr.forEach((zombie) => {
    //     zombie.moveZombieRight();
    //     game.drawNewElement(zombie);
    //     zombie.detectZombieCollsion(zombie);
    //     zombie.deleteZombieMark(zombie);
    //     weapon.detectBulletCollisionLeft(zombie);
    //     weapon.detectBulletCollisionRight(zombie);
    //   });

    //   if (game.time % 20 === 0) {
    //     let slowZombie = new ZombieMark();
    //     slowZombie.div = game.createNewElement("zombieMark");
    //     game.drawNewElement(slowZombie);
    //     game.zombieArr.push(slowZombie);
    //   }

    //   if (this.time % 40 === 0) {
    //     let fastZombie = new ZombieKaren();
    //     fastZombie.div = game.createNewElement("zombieKaren");
    //     game.drawNewElement(fastZombie);
    //     game.zombieFasterArr.push(fastZombie);
    //   }

    //   if (game.time % 50 === 0) {
    //     let fastestZombie = new ZombieJay();
    //     fastestZombie.div = game.createNewElement("zombieJay");
    //     game.drawNewElement(fastestZombie);
    //     game.zombieFastestArr.push(fastestZombie);
    //   }

    //   game.zombieFasterArr.forEach((zombie) => {
    //     zombie.moveZombieLeftFaster();
    //     game.drawNewElement(zombie);
    //     zombie.detectZombieCollsion(zombie);
    //     zombie.deleteZombieKaren(zombie);
    //     weapon.detectBulletCollisionLeft(zombie);
    //     weapon.detectBulletCollisionRight(zombie);
    //   });

    //   game.zombieFastestArr.forEach((zombie) => {
    //     zombie.moveZombieDownFastest();
    //     game.drawNewElement(zombie);
    //     zombie.detectZombieCollsion(zombie);
    //     zombie.deleteZombieJay(zombie);
    //     weapon.detectBulletCollisionLeft(zombie);
    //     weapon.detectBulletCollisionRight(zombie);
    //   });

    //   weapon.bulletLeftArr.forEach((bullet) => {
    //     bullet.moveLeft();
    //     game.drawNewElement(bullet);
    //     weapon.deleteBulletLeft(bullet);
    //   });

    //   weapon.bulletRightArr.forEach((bullet) => {
    //     bullet.moveRight();
    //     game.drawNewElement(bullet);
    //     weapon.deleteBulletRight(bullet);
    //   });

    //   if (this.time % 200 === 0) {
    //     let water = new Water();
    //     water.div = game.createNewElement("water");
    //     game.drawNewElement(water);
    //     pickUp.waterArr.push(water);
       
    //   }

    //   pickUp.waterArr.forEach((water) => {
    //     pickUp.detectPickUpCollection(water);
    //   });

    //   if (this.time % 600 === 0) {
    //     let medkit = new Medkit();
    //     medkit.div = game.createNewElement("medkit");
    //     game.drawNewElement(medkit);
    //     pickUp.medkitArr.push(medkit);
        
    //   }

    //   pickUp.medkitArr.forEach((medkit) => {
    //     pickUp.detectPickUpCollection(medkit);
    //   });

    //   if (this.time % 500 === 0) {
    //     let parts = new Parts();
    //     parts.div = game.createNewElement("parts");
    //     game.drawNewElement(parts);
    //     pickUp.partsArr.push(parts);
     
    //   }

    //   pickUp.partsArr.forEach((parts) => {
    //     pickUp.detectPickUpCollection(parts);
    //   });

    //   game.time++;
    // }, 100);}



}
