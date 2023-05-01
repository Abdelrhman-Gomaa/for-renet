import { registerEnumType } from '@nestjs/graphql';

export enum CarsBrandEnum {
    BMW = 'BMW',
    MERCEDES_BENZ = 'MERCEDES_BENZ',
    FORD = 'FORD',
    CHEVROLET = 'CHEVROLET',
    CADILLAC = 'CADILLAC',
    BUICK = 'BUICK',
    TOYOTA = 'TOYOTA',
    AUDI = 'AUDI',
    JEEP = 'JEEP',
    HONDA = 'HONDA',
    ALFA_ROMEO = 'ALFA_ROMEO',
    VOLKSWAGEN = 'VOLKSWAGEN',
    LEXUS = 'LEXUS',
    PORSCHE = 'PORSCHE',
    NISSAN = 'NISSAN',
    TESLA = 'TESLA',
    MINI = 'MINI',
    HYUNDAI = 'HYUNDAI',
    KIA = 'KIA',
    VOLVO = 'VOLVO',
    MAZDA = 'MAZDA',
    JAGUAR = 'JAGUAR',
    LAND_ROVER = 'LAND_ROVER'
}
registerEnumType(CarsBrandEnum, { name: 'CarsBrandEnum' });

export enum CarrierTypeEnum {
    AUTOMATIC = 'AUTOMATIC',
    MANUAL = 'MANUAL'
}
registerEnumType(CarrierTypeEnum, { name: 'CarrierTypeEnum' });

export enum RentTypeEnum {
    HOUR = 'HOUR',
    DAY = 'DAY',
    MONTH = 'MONTH',
}
registerEnumType(RentTypeEnum, { name: 'RentTypeEnum' });

export enum CarStatusEnum {
    AVAILABLE = 'AVAILABLE',
    RENTED = 'RENTED',
    IN_MAINTENANCE = 'IN_MAINTENANCE'
}
registerEnumType(CarStatusEnum, { name: 'CarStatusEnum' });