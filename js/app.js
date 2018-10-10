/*
* Enemies our player must avoid
*/

var Enemy = function (x, y, speed) {
    this.sprite = 'images/enemy-bug.png'; // The image/sprite for the enemies
    this.x = x;
    this.y = y + 65;
    this.move = 101;
    this.limit = this.move * 5;
    this.speed = speed;
    this.resetPos = -this.move;
};

/*
* Updating the enemy's position
*/

// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // multiplying any movement by the dt parameter to ensure
    // the game runs at the same speed for all computers
    if(this.x < this.limit) {
        this.x += this.speed * dt;
    }
    else {
        this.x = this.resetPos;
    }
};

/*
* Drawing the enemy on the screen
*/

Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// The Player class requires an update(), render(), reset() and
// a handleInput() method.

/*
* The Player class
*/

class Player {
    constructor() {
        this.sprite = 'images/char-cat-girl.png'; // The image/sprite for the player
        this.move = 101;
        this.jump = 83;
        this.startX = this.move*2;
        this.startY = (this.jump*4) + 65;
        this.x = this.startX;
        this.y = this.startY;
    }

    /*
    * Methods for the Player class
    */
    
    // render() method - Drawing the Player on screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    // reset() method - Resets the Player's position
    reset() {
        this.x = this.startX;   // OR this.x = 200;
        this.y = this.startY;   // OR this.y = 400;
    }

    // update() method - checking collisions
    update() {
        for (let enemy of allEnemies) {
            if (this.y === enemy.y && (enemy.x + enemy.move/2 > this.x
                && enemy.x < this.x + this.move/2)) {
                alert('Game Over..!');
                this.reset();
            }
        }
    }

    // handleInput() method - Handling the keyboard inputs
    handleInput(input) {
        if(input == 'left' && this.x > 0) {
            this.x -= this.move;
        }
        if(input == 'up' && this.y > 0) {
            this.y -= this.jump;
        }
        if (input == 'right' && this.x < 360) {
            this.x += this.move;
        }
        if(input == 'down' && this.y < 332) {
            this.y += this.jump;
        }
        
        // When the player reaches the water level, the game resets.
        if(this.y < 0) {
            setTimeout(() => {
                alert('***YOU WON!***');
                this.reset();
            }, 300);
        };
    }
}


/* 
* Initializing the objects
*/

// Placing the player object in a variable called player
const player = new Player();

// Placing all enemy objects in an array called allEnemies
const enemy1 = new Enemy((-101*2), 0, 330);
const enemy2 = new Enemy(101, 0, 330);
const enemy3 = new Enemy(80, 83, 300);
const enemy4 = new Enemy((-150*2), 83, 300);
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3, enemy4);
console.log(allEnemies);


/*
* Listening for key presses
*/

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]); //sends the keys(inputs) to your Player's handleInput() method
});