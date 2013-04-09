define({
	name : "Late Sunset",
	preview : "",

	passes : [{
		name : "Main",
		shader : "imagelookup.essl",

		uniforms : {
			lookup : {
				type : "t",
				value : "texture(lookups/images/latesunset.png)"
			}
		}
	}]
})