const copyObject = obj => {
	const newObj = new obj.constructor();
	return Object.assign(newObj, obj);
}