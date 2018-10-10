// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// The Player Class
class Player {
    constructor() {
        //properties for constructor method
        this.sprite = 'images/char-cat-girl.png';
        this.move = 101;
        this.jump = 83;
        this.startX = this.move * 2;
        this.startY = (this.jump * 4) + 65;
        this.x = this.startX;
        this.y = this.startY;
    }

    // Draw Player sprite
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    // handleInput() method - Handling the keyboard inputs
    handleInput(input) {
        if (input == 'left' && this.x > 0) {
            this.x -= this.move;
        }
        if (input == 'up' && this.y > 0) {
            this.y -= this.jump;
        }
        if (input == 'right' && this.x < 360) {
            this.x += this.move;
        }
        if (input == 'down' && this.y < 332) {
            this.y += this.jump;
        }
    }
    
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const player = new Player();

// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});