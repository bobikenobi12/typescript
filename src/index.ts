interface Car {
  brand: string;
  model: string;
  topSpeed: number;
  color: string;
  isAllWheelDrive: boolean;
  isFrontWheelDrive: boolean;
  isRearWheelDrive: boolean;
  owners: Owner[];
}
interface Owner {
  name: string;
  countryOfOrigin: string;
  age: number;
}
type CarBrand = Pick<Car, 'brand' | 'model'>;
function getCarBrand(car: Car): CarBrand {
  return {
    brand: car.brand,
    model: car.model,
  };
}
console.log(
  getCarBrand({
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
  })
);
