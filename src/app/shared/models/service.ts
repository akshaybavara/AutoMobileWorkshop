export interface WorkshopService {
  id: number;
  name: string;
  slug: string;          // URL-friendly name (example: "car-wash")
  category: string;      // Example: "Engine", "Maintenance"
  price: number;         // Base price in INR
  durationMinutes: number; // Duration in minutes
  description: string;   // Short description
  imageUrl: string;      // Service image
  tags: string[];        // Extra labels like ["Quick Fix", "Engine", "Popular"]
}
