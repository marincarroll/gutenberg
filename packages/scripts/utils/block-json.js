const scriptFields = new Set( [ 'viewScript', 'script', 'editorScript' ] );
const moduleFields = new Set( [ 'viewModule', 'module', 'editorModule' ] );

/**
 * @param {{}} blockJson
 * @return {null|Record<string, unknown>} Fields
 */
function getBlockJsonModuleFields( blockJson ) {
	let result = null;
	for ( const field of moduleFields ) {
		if ( Object.hasOwn( blockJson, field ) ) {
			if ( ! result ) {
				result = {};
			}
			result[ field ] = blockJson[ field ];
		}
	}
	return result;
}

/**
 * @param {{}} blockJson
 * @return {null|Record<string, unknown>} Fields
 */
function getBlockJsonScriptFields( blockJson ) {
	let result = null;
	for ( const field of scriptFields ) {
		if ( Object.hasOwn( blockJson, field ) ) {
			if ( ! result ) {
				result = {};
			}
			result[ field ] = blockJson[ field ];
		}
	}
	return result;
}

module.exports = {
	getBlockJsonModuleFields,
	getBlockJsonScriptFields,
};
