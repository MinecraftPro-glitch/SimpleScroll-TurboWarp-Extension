class ScrollInertiaExtension {
    constructor() {
        this.velocity = 0; // Start with no velocity
        this.acceleration = 0.3; // Acceleration factor for smooth movement
        this.friction = 0.85; // Friction to slow down gradually
        this.lastDirection = 'none'; // Tracks the last direction (up/down/none)

        // Listen for scrolling anywhere on the page
        window.addEventListener('wheel', (event) => {
            // Detect scroll direction and apply acceleration
            this.velocity += event.deltaY * this.acceleration;
            
            // Update last direction based on velocity
            if (this.velocity > 0) {
                this.lastDirection = 'down';
            } else if (this.velocity < 0) {
                this.lastDirection = 'up';
            }
        });

        // Interval to simulate inertia even after scrolling stops
        setInterval(() => {
            this.velocity *= this.friction; // Apply friction to slow down gradually
            // If the velocity is small enough, consider it as "none"
            if (Math.abs(this.velocity) < 0.1) {
                this.lastDirection = 'none';
            }
        }, 50);
    }

    getInfo() {
        return {
            id: 'scrollInertia',
            name: 'Scroll Inertia',
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
        if (this.velocity > 2) {
            return 'down'; // Scrolling down
        } else if (this.velocity < -2) {
            return 'up'; // Scrolling up
        }
        return 'none'; // No movement detected
    }

    getScrollInertiaValue() {
        return this.velocity.toFixed(2); // Return inertia as a number with 2 decimal places
    }

    getScrollDirection() {
        return this.lastDirection; // Real-time direction (up, down, or none)
    }
}

Scratch.extensions.register(new ScrollInertiaExtension());
