export interface Property {
    id: number | string;
    title?: string;
    price?: number;
    address?: string;
    // location?: string;
    city?: string;
    province?: string;
    property_type?: string;
    status?: string;
    sqm_total?: number;
    sqm_built?: number;
    bedrooms?: number;
    bathrooms?: number;
    antiquity_years?: number | string;
    description?: string;
    features?: string[];
    latitude?: number | null;
    longitude?: number | null;
    coordinates?: { lat: number; lng: number };
    updated_at?: string;
    images?: string[];
    videos?: string[];
    totalArea?: number;
    constructionArea?: number;
}

export type Coordinates = { lat: number; lng: number };
