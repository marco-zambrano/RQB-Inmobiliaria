export interface Property {
    id: string;
    title: string;
    price: number;
    address: string;
    city: string;
    province: string;
    property_type: string;
    status?: string;
    sqm_total?: number;
    sqm_built?: number;
    bedrooms?: number;
    bathrooms?: number;
    antiquity_years?: number | string;
    description: string;
    features?: string[];
    interest_level?: number;
    sold_at?: string | null;
    images?: string[];
    videos?: string[];
    map_url?: string;
}