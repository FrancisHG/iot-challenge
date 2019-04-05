
const uniqueIds = true;
const fs = require('fs');
const fileName = 'devices.json';

var devices = {

    // Params: fileName to retreive data
    // Return: Parsed JSON from file
    getData: function () {
        let rawdata = fs.readFileSync(fileName);
        return JSON.parse(rawdata);
    },

    // Summary: Eager load Device objects to Modules array, recursively for children
    // Params: array object containing {Id,Type} objects
    // Return: An object where the key/property is the `type` and the value is the device object
    normalizeModules:  function (m) {
        var preparedModules = {};

        // If the targetObject.module exists and contains additional devices
        if (m && m.length) {
            m.every(function(m) {
                // This will eagerly load all data recursively down the stack
                preparedModules[m.type] = devices.getById(m.id);
            });
        }

        return preparedModules;
    },

    // Params: id for lookup
    // Return: The found JSON object
    getById: function (id) {

        if (!id) return;
        
        let targetObject = {};

        let devicesArray = devices.getData();

        //Iterate the devices to find the matching id
        targetObject = devicesArray.find(x => x.id == id);

        if (targetObject && targetObject.modules)
            targetObject.modules = devices.normalizeModules(targetObject.modules);

        return targetObject;
    },

    // Params: type for lookup
    // Return: The found JSON objects matching type
    getByType: function (type) {

        if (!type) return;

        let targetObjects = [];

        let devicesArray = devices.getData();

        targetObjects = devicesArray.filter(x => x.type == type);

        if (targetObjects && targetObjects.length) {
            targetObjects.forEach(function(i) {
                if (i && i.modules)
                    i.modules = devices.normalizeModules(i.modules);
            });
        }
        return targetObjects;
    }
}

// Export these functions for consumption by Node.js
module.exports = {
    // Params: id for lookup
    // Return: The found JSON object
    getById: devices.getById,

    // Params: type for lookup
    // Return: The found JSON objects matching type
    getByType: devices.getByType
};