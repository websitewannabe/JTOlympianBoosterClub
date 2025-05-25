import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users schema (keeping from the template)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// News Items schema
export const newsItems = pgTable("news_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  date: timestamp("date").notNull().defaultNow(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  author: text("author"),
});

export const insertNewsItemSchema = createInsertSchema(newsItems).pick({
  title: true,
  excerpt: true,
  content: true,
  date: true,
  category: true,
  imageUrl: true,
  author: true,
});

export type InsertNewsItem = z.infer<typeof insertNewsItemSchema>;
export type NewsItem = typeof newsItems.$inferSelect;

// Events schema
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: timestamp("date").notNull(),
  time: text("time").notNull(),
  location: text("location").notNull(),
  registrationUrl: text("registration_url"),
  imageUrl: text("image_url"),
});

export const insertEventSchema = createInsertSchema(events).pick({
  title: true,
  description: true,
  date: true,
  time: true,
  location: true,
  registrationUrl: true,
  imageUrl: true,
});

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

// Membership Levels schema
export const membershipLevels = pgTable("membership_levels", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  color: text("color").notNull(),
  benefits: text("benefits").array().notNull(),
});

export const insertMembershipLevelSchema = createInsertSchema(membershipLevels).pick({
  name: true,
  price: true,
  color: true,
  benefits: true,
});

export type InsertMembershipLevel = z.infer<typeof insertMembershipLevelSchema>;
export type MembershipLevel = typeof membershipLevels.$inferSelect;

// Gallery Categories schema
export const galleryCategories = pgTable("gallery_categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const insertGalleryCategorySchema = createInsertSchema(galleryCategories).pick({
  name: true,
});

export type InsertGalleryCategory = z.infer<typeof insertGalleryCategorySchema>;
export type GalleryCategory = typeof galleryCategories.$inferSelect;

// Gallery Images schema
export const galleryImages = pgTable("gallery_images", {
  id: serial("id").primaryKey(),
  alt: text("alt").notNull(),
  thumbnailUrl: text("thumbnail_url").notNull(),
  fullUrl: text("full_url").notNull(),
  caption: text("caption"),
  categoryId: text("category_id").notNull(),
});

export const insertGalleryImageSchema = createInsertSchema(galleryImages).pick({
  alt: true,
  thumbnailUrl: true,
  fullUrl: true,
  caption: true,
  categoryId: true,
});

export type InsertGalleryImage = z.infer<typeof insertGalleryImageSchema>;
export type GalleryImage = typeof galleryImages.$inferSelect;

// Board Members schema
export const boardMembers = pgTable("board_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  children: text("children").notNull(),
  imageUrl: text("image_url").notNull(),
  order: integer("order").notNull(),
});

export const insertBoardMemberSchema = createInsertSchema(boardMembers).pick({
  name: true,
  position: true,
  children: true,
  imageUrl: true,
  order: true,
});

export type InsertBoardMember = z.infer<typeof insertBoardMemberSchema>;
export type BoardMember = typeof boardMembers.$inferSelect;

// Contact Form schema (for form validation)
export const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  sport: z.string().min(1, { message: "Please select a sport." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Membership Form schema (for form validation)
export const membershipFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().min(5, { message: "Please enter your street address." }),
  city: z.string().min(2, { message: "Please enter your city." }),
  state: z.string().min(2, { message: "Please enter your state." }),
  zipCode: z.string().min(5, { message: "Please enter a valid zip code." }),
  membershipLevel: z.string().min(1, { message: "Please select a membership level." }),
  studentName: z.string().optional(),
  studentGrade: z.string().optional(),
  studentSport: z.string().optional(),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions."
  }),
});

export type MembershipFormData = z.infer<typeof membershipFormSchema>;

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
