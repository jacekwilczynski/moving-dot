class PhysicalObject {
	constructor() {
		this.$element = $('<div>')
			.transformCenter()
			.width(20)
			.height(20)
			.css({
				'background-color': 'red',
				'border-radius': '50%',
				'position': 'fixed'
			})
			.appendTo($(document.body));

		this.position = new XY({
			onxchange: value => this.$element.css('left', value + 'px'),
			onychange: value => this.$element.css('top', value + 'px'),
		});
		this.position.xy = $(window).findCenter(); // px

		this.velocity = new XY(); // px/s

		this.acceleration = new XY(); // px/s/s

		this.updateRate = 50; // Hz
		this.updateInterval = 1000 / this.updateRate; // ms

		window.setInterval(function() {
			this.position.inc(this.velocity.multiplied(1 / this.updateRate));
			this.velocity.inc(this.acceleration);
			this.velocity.multiply(this.brakeFactor || 1)
		}.bind(this), this.updateInterval);
	}
}