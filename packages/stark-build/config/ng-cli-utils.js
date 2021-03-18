const path = require("path");
const fs = require("fs");
const cliUtilConfig = require("@angular/cli/utilities/config");

function isDirectory(pathToCheck) {
	try {
		return fs.statSync(pathToCheck).isDirectory();
	} catch (_) {
		return false;
	}
}

function getDirectoriesNames(source) {
	return fs.readdirSync(source).filter((name) => isDirectory(path.join(source, name)));
}

function getAngularCliAppConfig(angularCliAppConfigPath) {
	if (fs.existsSync(angularCliAppConfigPath)) {
		const angularCliConfig = require(angularCliAppConfigPath);
		const cliConfig = validateAngularCLIConfig(angularCliConfig);
		if (cliConfig) {
			if (cliConfig.defaultProject && cliConfig.projects[cliConfig.defaultProject]) {
				return cliConfig.projects[cliConfig.defaultProject];
			} else {
				throw new Error(
					"The configuration of the default project in angular.json is wrong. Please adapt it to follow Angular CLI guidelines."
				);
			}
		} else {
			throw new Error("Parsing " + angularCliAppConfigPath + " failed. Please make sure that the file is valid JSON.");
		}
	} else {
		throw new Error("angular.json is not present. Please add this at the root your project because stark-build needs this.");
	}
}

/**
 * Validate passed angular cli config based on schema: @angular/cli/lib/config/schema.json
 * If the serialized file is equal to the passed json, return the serialized config.
 * Otherwise, it returns false.
 *
 * @param jsonConfig
 * @returns {*}
 */
function validateAngularCLIConfig(jsonConfig) {
	// FIXME Adapt usage for Angular CLI 6
	return jsonConfig;

	// const SchemaClassFactory = require("@ngtools/json-schema").SchemaClassFactory;
	// const schema = require("@angular/cli/lib/config/schema.json");
	//
	// const config = new (SchemaClassFactory(schema))(jsonConfig);
	// try {
	// 	const serializedConfig = JSON.parse(config.$$serialize("application/json"));
	// 	return serializedConfig;
	// } catch (error) {
	// 	return false;
	// }
}

function getNgCliAction() {
	const stringifiedArgs = process.argv.join(" ");
	const cliActionRegex = new RegExp("ng\\s([\\w\\d]+)(\\s|)");
	return stringifiedArgs.match(cliActionRegex)[1];
}

function getWorkspace() {
	return cliUtilConfig.getWorkspace();
}

function hasNgCliCommandOption(option) {
	const stringifiedArgs = process.argv.join(" ");
	/**
	 * NG CLI options could be passed in different ways
	 * 1. `--someOption`
	 * 2. `--someOption someValue`
	 * 3. `--someOption=someValue`
	 * 4. `-c someValue`
	 * 5. `-c=someValue`
	 */
	const cliOptionRegex = new RegExp("-{1,2}" + option + "(=|\\s|)");

	return cliOptionRegex.test(stringifiedArgs);
}

function getNgCliCommandOption(option) {
	if (hasNgCliCommandOption(option)) {
		const stringifiedArgs = process.argv.join(" ");
		/**
		 * NG CLI options could be passed in different ways
		 * 1. `--someOption`
		 * 2. `--someOption someValue`
		 * 3. `--someOption=someValue`
		 * 4. `-c someValue`
		 * 5. `-c=someValue`
		 */
		const cliOptionValueRegex = new RegExp("-{1,2}" + option + "(=|\\s)\\S*($|\\S)");

		const result = stringifiedArgs.match(cliOptionValueRegex);
		if (!!result && result.length > 0) {
			// the value is on the right side of the "=" or " "
			return result[0].split(/=|\s/)[1];
		} else {
			// if command option is and there is no value, the default is true
			return "true";
		}

	} else {
		return null; // the flag was not passed to the current command
	}
}

exports.getAngularCliAppConfig = getAngularCliAppConfig;
exports.getDirectoriesNames = getDirectoriesNames;
exports.getWorkspace = getWorkspace;
exports.getNgCliAction = getNgCliAction;
exports.getNgCliCommandOption = getNgCliCommandOption;
exports.hasNgCliCommandOption = hasNgCliCommandOption;
exports.isDirectory = isDirectory;
exports.validateAngularCLIConfig = validateAngularCLIConfig;
