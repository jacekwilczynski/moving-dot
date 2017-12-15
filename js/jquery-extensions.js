jQuery.fn.findCenter = function() {
	return {
		x: this.width() / 2,
		y: this.height() / 2
	}
};

jQuery.fn.transformCenter = function() {
	return this.css('transform', 'translate(50%, 50%)');
};