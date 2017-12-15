class Player extends PhysicalObject {
	constructor() {
		super();
		this.baseAcceleration = 500;
		$(window).on('keydown keyup', this.respondToKeyboardInput.bind(this))
	}

	respondToKeyboardInput(event) {
		const pressed = event.type === 'keydown';
		switch (event.key) {
			case 'ArrowUp':
				if (pressed) {
					this.acceleration.y = -this.baseAcceleration;
				} else if (this.acceleration.y < 0) {
					this.acceleration.y = 0;
				}
				break;
			case 'ArrowRight':
				if (pressed) {
					this.acceleration.x = this.baseAcceleration;
				} else if (this.acceleration.x > 0) {
					this.acceleration.x = 0;
				}
				break;
			case 'ArrowDown':
				if (pressed) {
					this.acceleration.y = this.baseAcceleration;
				} else if (this.acceleration.y > 0) {
					this.acceleration.y = 0;
				}
				break;
			case 'ArrowLeft':
				if (pressed) {
					this.acceleration.x = -this.baseAcceleration;
				} else if (this.acceleration.x < 0) {
					this.acceleration.x = 0;
				}
				break;
			case ' ':
				if (pressed) {
					this.brakeFactor = 0.9;
				} else {
					delete this.brakeFactor;
				}
		}
	}
}