export interface ProductItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
// Define an interface for the metrics data
export interface BusinessMetrics {
  totalProfit: number;
  totalOrders: number;
  averagePrice: number;
  productsSold: number;
}







