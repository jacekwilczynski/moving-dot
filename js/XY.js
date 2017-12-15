class XY {
	// constructor
	constructor(initial = {}) {
		this._x = initial.x || 0;
		this._y = initial.y || 0;
		this.onxchange = initial.onxchange || function() {};
		this.onychange = initial.onychange || this.onxchange;
	}

	// getters and setters
	get x() { return this._x; }
	set x(value) {
		this._x = value;
		this.onxchange(value, this);
	}

	get y() { return this._y; }
	set y(value) {
		this._y = value;
		this.onychange(value, this);
	}

	get xy() {
		return {
			x: this._x,
			y: this._y
		};
	}
	set xy(xy) {
		this.x = xy.x;
		this.y = xy.y;
	}

	// destructive methods
	// return this for method chaining
	set(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}

	inc(x, y) {
		if (typeof x === 'object') {
			y = x.y;
			x = x.x;
		}
		this.x += x;
		this.y += y;
		return this;
	}

	multiply(factor) {
		this.x *= factor;
		this.y *= factor;
		return this;
	}

	// non-destructive methods
	multiplied(factor) {
		return copyObject(this).multiply(factor);
	}
}