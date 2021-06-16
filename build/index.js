function getCarBrand(car) {
    return {
        brand: car.brand,
        model: car.model,
    };
}
console.log(getCarBrand({
    brand: 'Mercedes',
    model: 'S 500',
    topSpeed: 60,
    color: 'purple',
    isAllWheelDrive: true,
    isFrontWheelDrive: false,
    isRearWheelDrive: false,
    owners: [
        {
            name: 'Petar Metodiev',
            countryOfOrigin: 'Kazanluk',
            age: 31,
        },
    ],
}));
