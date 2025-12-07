export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Dimensions {
  width?: number;
  height?: number;
  depth?: number;
}

export interface Meta {
  createdAt?: string;
  updatedAt?: string;
  barcode?: string;
  qrCode?: string;
}

export interface ProductItem {
  id: number;
  title: string;
  description?: string;
  category?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: Dimensions;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: Review[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: Meta;
  thumbnail?: string;
  images?: string[];
}

/**
 * Type alias for an ISO 8601 compliant date string 
 * (e.g., "2025-12-07T13:48:00.000Z")
 */
type ISODateString = string;

/**
 * Interface representing a Product entity.
 */
export interface IProductDelete {
  id: number;
  title: string;
  // You should add other properties here based on your actual data structure
  // Example placeholder for other data:
  description?: string;
  price?: number;
  category?: string;

  isDeleted: boolean;
  /**
   * The timestamp when the item was deleted, present only if isDeleted is true.
   */
  deletedOn?: ISODateString; // The '?' makes this property optional
}
