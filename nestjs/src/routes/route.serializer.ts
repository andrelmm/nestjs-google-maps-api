import { DirectionsResponseData } from "@googlemaps/google-maps-services-js";
import { Route } from "@prisma/client";

export class RouteSerializer implements Omit<Route, 'directions'> {
    source: { name: string; } & { location: { lat: number; lng: number; }; };
    destination: { name: string; } & { location: { lat: number; lng: number; }; };
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    distance: number;
    duration: number;
    directions: DirectionsResponseData & { request: any; };

    constructor(route: Route) {
        this.source = route.source;
        this.destination = route.destination;
        this.id = route.id;
        this.name = route.name;
        this.createdAt = route.createdAt;
        this.updatedAt = route.updatedAt;
        this.distance = route.distance;
        this.duration = route.duration;
        this.directions = JSON.parse(route.directions as string);
    }
}