const devices = require('./devices');

var constants = {
    ABC123: 'ABC123',
    WarpDriveType: "warpdrive",
    NacelleType: "nacelle",
}

test('getById Assertion', () => {
    expect(devices.getById(constants.ABC123).id).toBe(constants.ABC123);
});

devices.getByType(constants.WarpDriveType).forEach(function (i) {
    test('getByType Assertion: Is ' + i.id.toString() + ' a warpdrive type?', 
        () => { expect(i.type).toBe(constants.WarpDriveType); }); 
});

devices.getByType(constants.NacelleType).forEach(function (i) {
    test('getByType Assertion: Is ' + i.id.toString() + ' a nacelle type?', 
        () => { expect(i.type).toBe(constants.NacelleType); }); 
});

test('getById - Try to retreive a null', () => {
    expect(devices.getById()).toBe();
});

test('getByType - Try to retreive a null', () => {
    expect(devices.getByType()).toBe();
});