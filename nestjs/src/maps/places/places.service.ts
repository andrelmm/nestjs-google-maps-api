import { Client as GoogleMapsClient, PlaceInputType } from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PlacesService {

    constructor(
        private configService: ConfigService,
        private googleMapsClient: GoogleMapsClient
    ) { }

    async findPlace(text: string) {
        const { data } = await this.googleMapsClient.findPlaceFromText({
            params: {
                key: this.configService.get('GOOGLE_MAPS_API_KEY'),
                input: text,
                inputtype: PlaceInputType.textQuery,
                fields: ['formatted_address', 'name', 'geometry', 'place_id'],
            },
        });

        return data;
    }
}
