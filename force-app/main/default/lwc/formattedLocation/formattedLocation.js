import { LightningElement, api } from 'lwc';

const MAX_LONGITUDE = 180.0;
const MAX_LATITUDE = 90.0;

function isNumber(value) {
    return value !== '' && value !== null && isFinite(value);
}

function isLongitude(longitude) {
    return isNumber(longitude) && Math.abs(longitude) <= MAX_LONGITUDE;
}

function isLatitude(latitude) {
    return isNumber(latitude) && Math.abs(latitude) <= MAX_LATITUDE;
}

export default class cFormattedLocation extends LightningElement {
    @api latitude;

    @api longitude;

    get isValid() {
        const valid = isLatitude(this.latitude) && isLongitude(this.longitude);

        if (!valid) {
            console.warn(
                `<lightning-formatted-location> expects latitude in range [-90.0, 90.0], longitude in range [-180.0, 180.0].`
            );
        }
        return valid;
    }
}
