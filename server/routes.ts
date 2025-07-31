import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  contactFormSchema, 
  membershipFormSchema,
  newsletterSchema
} from "@shared/schema";
import { ZodError } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve sitemap.xml specifically to avoid catch-all interference
  app.get("/sitemap.xml", (req, res) => {
    const sitemapPath = path.resolve(import.meta.dirname, "..", "client", "public", "sitemap.xml");
    
    if (fs.existsSync(sitemapPath)) {
      res.set({
        'Content-Type': 'application/xml',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      });
      res.sendFile(sitemapPath);
    } else {
      res.status(404).send('Sitemap not found');
    }
  });

  // prefix all routes with /api
  
  // News routes
  app.get("/api/news", async (req, res) => {
    try {
      const news = await storage.getAllNews();
      res.json(news);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch news" });
    }
  });
  
  app.get("/api/news/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
      
      const newsItem = await storage.getNewsById(id);
      if (!newsItem) {
        return res.status(404).json({ message: "News item not found" });
      }
      
      res.json(newsItem);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch news item" });
    }
  });
  
  // Events routes
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getAllEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });
  
  app.get("/api/events/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
      
      const event = await storage.getEventById(id);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });
  
  // Membership levels routes
  app.get("/api/membership-levels", async (req, res) => {
    try {
      const membershipLevels = await storage.getAllMembershipLevels();
      res.json(membershipLevels);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch membership levels" });
    }
  });
  
  // Gallery routes
  app.get("/api/gallery-categories", async (req, res) => {
    try {
      const categories = await storage.getAllGalleryCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery categories" });
    }
  });
  
  app.get("/api/gallery", async (req, res) => {
    try {
      const images = await storage.getAllGalleryImages();
      res.json(images);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery images" });
    }
  });
  
  // Board members routes
  app.get("/api/board-members", async (req, res) => {
    try {
      const boardMembers = await storage.getAllBoardMembers();
      res.json(boardMembers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch board members" });
    }
  });
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactFormSchema.parse(req.body);
      await storage.submitContactForm(contactData);
      res.status(200).json({ message: "Contact form submitted successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });
  
  // Membership form submission
  app.post("/api/membership", async (req, res) => {
    try {
      const membershipData = membershipFormSchema.parse(req.body);
      await storage.submitMembershipForm(membershipData);
      res.status(200).json({ message: "Membership form submitted successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to submit membership form" });
    }
  });
  
  // Newsletter subscription
  app.post("/api/subscribe", async (req, res) => {
    try {
      const newsletterData = newsletterSchema.parse(req.body);
      await storage.subscribeToNewsletter(newsletterData);
      res.status(200).json({ message: "Subscribed to newsletter successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid email", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
