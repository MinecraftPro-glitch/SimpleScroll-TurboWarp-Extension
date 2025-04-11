# Simple Scroll Extension for Scratch

## Overview
The **Simple Scroll Extension** adds smooth scrolling physics to Scratch by introducing inertia, acceleration, and friction. This extension allows Scratch projects to detect scrolling motion with realistic behaviour, making interactions feel more natural.

## Features
- Detects scrolling with inertia, meaning movement continues briefly after scrolling stops.
- Provides the direction of the scroll movement (`up`, `down`, or `none`).
- Returns the current scroll inertia value, simulating real-world momentum.

## Installation
1. Open TurboWarp.
2. Download the file SimpleScroll.js
3. Load the extension via TurboWarp custom Javascript extensions in a custom extension environment. MAKE SURE TO TICK THE "**_RUN WITHOUT SANDBOX_**" TICK, OR THE EXTENSION WILL _NOT_ WORK!
4. The extension will now be available for use in your TurboWarp project.

## Blocks
### 1. Scroll Direction with Inertia
**Text:** `scroll direction with inertia`
**Type:** Reporter
**Description:** Returns `down`, `up`, or `none` based on the current inertia-adjusted scroll movement.

### 2. Scroll Inertia Value
**Text:** `scroll inertia value`
**Type:** Reporter
**Description:** Returns the current inertia value as a number (with two decimal places), indicating the velocity of the scroll.

### 3. Scroll Direction (Real-time) #CURRENTLY DOES NOT WORK!
**Text:** `scroll direction`
**Type:** Reporter
**Description:** Provides real-time scroll direction (`down`, `up`, or `none`) without inertia influence.

## How It Works
- The extension listens for mouse wheel events (`wheel`) and updates the scroll velocity.
- Acceleration is applied to simulate a natural movement effect.
- Friction gradually reduces velocity over time, mimicking real-world inertia.
- The extension updates scroll direction and inertia every 50ms to ensure smooth behavior.

## Example Usage
- Create scrolling backgrounds that feel more dynamic.
- Implement physics-based UI interactions in Scratch.
- Detect user scroll behavior to trigger animations or events.

## License
This extension is open-source and can be modified freely. Feel free to improve and extend its functionality!

