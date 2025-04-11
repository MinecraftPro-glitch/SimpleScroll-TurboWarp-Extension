#Name - Scroll Detector Extension
#Author - Maxolian2010
#Version - 2.0

class ScrollInertiaExtension {
    constructor() {
        this.velocity = 0;
        this.acceleration = 0.3; 
        this.friction = 0.88; // Slightly reduced friction for smoother scrolling
        this.lastDirection = 'none';

        // For touch devices
        this.lastTouchY = null;

        // Event Listeners
        window.addEventListener('wheel', (event) => this.handleScroll(event.deltaY));
        window.addEventListener('touchstart', (event) => this.handleTouchStart(event));
        window.addEventListener('touchmove', (event) => this.handleTouchMove(event));

        // Use requestAnimationFrame for smoother updates
        this.animate();
    }

    handleScroll(deltaY) {
        this.velocity += deltaY * this.acceleration;
        this.updateDirection();
    }

    handleTouchStart(event) {
        if (event.touches.length === 1) {
            this.lastTouchY = event.touches[0].clientY;
        }
    }

    handleTouchMove(event) {
        if (event.touches.length === 1 && this.lastTouchY !== null) {
            const currentY = event.touches[0].clientY;
            const deltaY = this.lastTouchY - currentY;
            this.handleScroll(deltaY);
            this.lastTouchY = currentY;
        }
    }

    updateDirection() {
        if (this.velocity > 1) {
            this.lastDirection = 'down';
        } else if (this.velocity < -1) {
            this.lastDirection = 'up';
        } else {
            this.lastDirection = 'none';
        }
    }

    animate() {
        this.velocity *= this.friction;
        if (Math.abs(this.velocity) < 0.05) {
            this.velocity = 0;
            this.lastDirection = 'none';
        }
        requestAnimationFrame(() => this.animate());
    }

    getInfo() {
        return {
            id: 'scrollInertia',
            name: 'Scroll Detection (Improved)',
            blocks: [
                {
                    opcode: 'getScrollDirectionWithInertia',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'scroll direction with inertia',
                },
                {
                    opcode: 'getScrollInertiaValue',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'scroll inertia value',
                },
                {
                    opcode: 'getScrollDirection',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'scroll direction',
                }
            ]
        };
    }

    getScrollDirectionWithInertia() {
        return this.lastDirection;
    }

    getScrollInertiaValue() {
        return this.velocity.toFixed(2);
    }

    getScrollDirection() {
        return this.lastDirection;
    }
}

Scratch.extensions.register(new ScrollInertiaExtension());
