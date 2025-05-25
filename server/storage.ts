import { 
  type User, 
  type InsertUser,
  type NewsItem,
  type InsertNewsItem,
  type Event,
  type InsertEvent,
  type MembershipLevel,
  type InsertMembershipLevel,
  type GalleryCategory,
  type InsertGalleryCategory,
  type GalleryImage,
  type InsertGalleryImage,
  type BoardMember,
  type InsertBoardMember,
  type ContactFormData,
  type MembershipFormData,
  type NewsletterData
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  // User methods (from template)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // News methods
  getAllNews(): Promise<NewsItem[]>;
  getNewsById(id: number): Promise<NewsItem | undefined>;
  createNews(news: InsertNewsItem): Promise<NewsItem>;
  
  // Events methods
  getAllEvents(): Promise<Event[]>;
  getEventById(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Membership levels methods
  getAllMembershipLevels(): Promise<MembershipLevel[]>;
  getMembershipLevelById(id: string): Promise<MembershipLevel | undefined>;
  
  // Gallery methods
  getAllGalleryCategories(): Promise<GalleryCategory[]>;
  getAllGalleryImages(): Promise<GalleryImage[]>;
  getGalleryImagesByCategory(categoryId: string): Promise<GalleryImage[]>;
  
  // Board members methods
  getAllBoardMembers(): Promise<BoardMember[]>;
  
  // Form submission methods
  submitContactForm(data: ContactFormData): Promise<boolean>;
  submitMembershipForm(data: MembershipFormData): Promise<boolean>;
  subscribeToNewsletter(data: NewsletterData): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private newsItems: Map<number, NewsItem>;
  private eventsData: Map<number, Event>;
  private membershipLevels: Map<string, MembershipLevel>;
  private galleryCategories: Map<string, GalleryCategory>;
  private galleryImages: Map<number, GalleryImage>;
  private boardMembers: Map<number, BoardMember>;
  private contactSubmissions: ContactFormData[];
  private membershipSubmissions: MembershipFormData[];
  private newsletterSubscriptions: NewsletterData[];
  
  private userId: number;
  private newsId: number;
  private eventId: number;
  private galleryImageId: number;
  private boardMemberId: number;

  constructor() {
    // Initialize maps and arrays
    this.users = new Map();
    this.newsItems = new Map();
    this.eventsData = new Map();
    this.membershipLevels = new Map();
    this.galleryCategories = new Map();
    this.galleryImages = new Map();
    this.boardMembers = new Map();
    this.contactSubmissions = [];
    this.membershipSubmissions = [];
    this.newsletterSubscriptions = [];
    
    // Initialize IDs
    this.userId = 1;
    this.newsId = 1;
    this.eventId = 1;
    this.galleryImageId = 1;
    this.boardMemberId = 1;
    
    // Seed some initial data
    this.seedData();
  }
  
  // User methods (from template)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // News methods
  async getAllNews(): Promise<NewsItem[]> {
    return Array.from(this.newsItems.values());
  }
  
  async getNewsById(id: number): Promise<NewsItem | undefined> {
    return this.newsItems.get(id);
  }
  
  async createNews(news: InsertNewsItem): Promise<NewsItem> {
    const id = this.newsId++;
    const newsItem: NewsItem = { ...news, id };
    this.newsItems.set(id, newsItem);
    return newsItem;
  }
  
  // Events methods
  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.eventsData.values());
  }
  
  async getEventById(id: number): Promise<Event | undefined> {
    return this.eventsData.get(id);
  }
  
  async createEvent(event: InsertEvent): Promise<Event> {
    const id = this.eventId++;
    const newEvent: Event = { ...event, id };
    this.eventsData.set(id, newEvent);
    return newEvent;
  }
  
  // Membership levels methods
  async getAllMembershipLevels(): Promise<MembershipLevel[]> {
    return Array.from(this.membershipLevels.values());
  }
  
  async getMembershipLevelById(id: string): Promise<MembershipLevel | undefined> {
    return this.membershipLevels.get(id);
  }
  
  // Gallery methods
  async getAllGalleryCategories(): Promise<GalleryCategory[]> {
    return Array.from(this.galleryCategories.values());
  }
  
  async getAllGalleryImages(): Promise<GalleryImage[]> {
    return Array.from(this.galleryImages.values());
  }
  
  async getGalleryImagesByCategory(categoryId: string): Promise<GalleryImage[]> {
    return Array.from(this.galleryImages.values()).filter(
      (image) => image.categoryId === categoryId
    );
  }
  
  // Board members methods
  async getAllBoardMembers(): Promise<BoardMember[]> {
    return Array.from(this.boardMembers.values());
  }
  
  // Form submission methods
  async submitContactForm(data: ContactFormData): Promise<boolean> {
    this.contactSubmissions.push(data);
    return true;
  }
  
  async submitMembershipForm(data: MembershipFormData): Promise<boolean> {
    this.membershipSubmissions.push(data);
    return true;
  }
  
  async subscribeToNewsletter(data: NewsletterData): Promise<boolean> {
    // Check if email already exists
    const emailExists = this.newsletterSubscriptions.some(
      (subscription) => subscription.email === data.email
    );
    
    if (!emailExists) {
      this.newsletterSubscriptions.push(data);
    }
    
    return true;
  }
  
  // Seed initial data
  private seedData() {
    // Seed membership levels
    const membershipLevels: MembershipLevel[] = [
      {
        id: "blue",
        name: "BLUE LEVEL",
        price: 50,
        color: "bg-lightblue text-white",
        benefits: [
          "Member decal",
          "Name in sports programs",
          "Email updates",
          "Voting privileges"
        ]
      },
      {
        id: "gold",
        name: "GOLD LEVEL",
        price: 100,
        color: "bg-secondary text-primary",
        benefits: [
          "All Blue Level benefits",
          "Booster Club t-shirt",
          "10% discount on spirit wear",
          "Early access to event tickets"
        ]
      },
      {
        id: "platinum",
        name: "PLATINUM LEVEL",
        price: 250,
        color: "bg-darkblue text-white",
        benefits: [
          "All Gold Level benefits",
          "Reserved parking at home games",
          "Two free tickets to sports banquet",
          "Name on Platinum Donors plaque"
        ]
      }
    ];
    
    membershipLevels.forEach(level => {
      this.membershipLevels.set(level.id, level);
    });
    
    // Seed board members
    const boardMembers: BoardMember[] = [
      {
        id: 1,
        name: "Michael Johnson",
        position: "President",
        children: "Sarah (Soccer)",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        order: 1
      },
      {
        id: 2,
        name: "Jennifer Martinez",
        position: "Vice President",
        children: "Alex (Basketball)",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        order: 2
      },
      {
        id: 3,
        name: "David Wilson",
        position: "Treasurer",
        children: "Emily (Volleyball)",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        order: 3
      },
      {
        id: 4,
        name: "Lisa Thompson",
        position: "Secretary",
        children: "Jason (Track)",
        imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        order: 4
      },
      {
        id: 5,
        name: "Robert Chen",
        position: "Fundraising Chair",
        children: "Michael (Swimming)",
        imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        order: 5
      },
      {
        id: 6,
        name: "Sophia Garcia",
        position: "Events Coordinator",
        children: "Daniel (Football)",
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
        order: 6
      }
    ];
    
    boardMembers.forEach(member => {
      this.boardMembers.set(member.id, member);
      this.boardMemberId = Math.max(this.boardMemberId, member.id + 1);
    });
    
    // Seed gallery categories
    const categories: GalleryCategory[] = [
      { id: "sports", name: "Sports" },
      { id: "events", name: "Events" },
      { id: "fundraisers", name: "Fundraisers" },
      { id: "celebrations", name: "Celebrations" }
    ];
    
    categories.forEach(category => {
      this.galleryCategories.set(category.id, category);
    });
    
    // Seed gallery images
    const galleryImages: GalleryImage[] = [
      {
        id: 1,
        alt: "Basketball team celebrating",
        thumbnailUrl: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fullUrl: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
        caption: "Basketball team celebrating their championship win",
        categoryId: "sports"
      },
      {
        id: 2,
        alt: "Football team huddle",
        thumbnailUrl: "https://pixabay.com/get/g790ac237370e72b0e605c539000358e2380c891ccb5130367cc1fb27d5dce1ed2ec71fc5df8dd479738cc7279cd4c0b872ea811e4c5f173da8897f634ffe5dd6_1280.jpg",
        fullUrl: "https://pixabay.com/get/g790ac237370e72b0e605c539000358e2380c891ccb5130367cc1fb27d5dce1ed2ec71fc5df8dd479738cc7279cd4c0b872ea811e4c5f173da8897f634ffe5dd6_1280.jpg",
        caption: "Football team huddle before the game",
        categoryId: "sports"
      },
      {
        id: 3,
        alt: "Soccer match",
        thumbnailUrl: "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fullUrl: "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
        caption: "Girls' soccer team in action",
        categoryId: "sports"
      },
      {
        id: 4,
        alt: "Swim meet",
        thumbnailUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fullUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
        caption: "Swim meet competition",
        categoryId: "sports"
      },
      {
        id: 5,
        alt: "Volleyball game",
        thumbnailUrl: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fullUrl: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
        caption: "Volleyball team in action during championship match",
        categoryId: "sports"
      },
      {
        id: 6,
        alt: "Track meet",
        thumbnailUrl: "https://pixabay.com/get/ge967a28100a127ef0caf60cd6bc33613ae394d6e14e58581d90c19126fb4086450ad81501523f6c7f13fc6048ef8d01c1d6cd5908f19e8d3420fb68b0d708f8d_1280.jpg",
        fullUrl: "https://pixabay.com/get/ge967a28100a127ef0caf60cd6bc33613ae394d6e14e58581d90c19126fb4086450ad81501523f6c7f13fc6048ef8d01c1d6cd5908f19e8d3420fb68b0d708f8d_1280.jpg",
        caption: "Track and field competition",
        categoryId: "sports"
      },
      {
        id: 7,
        alt: "School pep rally",
        thumbnailUrl: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fullUrl: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
        caption: "School spirit on display at the annual pep rally",
        categoryId: "events"
      },
      {
        id: 8,
        alt: "Fundraising event",
        thumbnailUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fullUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
        caption: "Annual Booster Club fundraising gala",
        categoryId: "fundraisers"
      },
      {
        id: 9,
        alt: "Golf tournament fundraiser",
        thumbnailUrl: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fullUrl: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
        caption: "Spring golf tournament fundraiser",
        categoryId: "fundraisers"
      },
      {
        id: 10,
        alt: "Awards banquet",
        thumbnailUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fullUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
        caption: "Annual sports awards banquet",
        categoryId: "celebrations"
      },
      {
        id: 11,
        alt: "Concession stand volunteers",
        thumbnailUrl: "https://images.unsplash.com/photo-1577301886075-36aa9ca775f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fullUrl: "https://images.unsplash.com/photo-1577301886075-36aa9ca775f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
        caption: "Booster club volunteers at the concession stand",
        categoryId: "events"
      },
      {
        id: 12,
        alt: "Scholarship recipients",
        thumbnailUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fullUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900",
        caption: "2023 Scholarship recipients",
        categoryId: "celebrations"
      }
    ];
    
    galleryImages.forEach(image => {
      this.galleryImages.set(image.id, image);
      this.galleryImageId = Math.max(this.galleryImageId, image.id + 1);
    });
    
    // Seed news items
    const newsItems: NewsItem[] = [
      {
        id: 1,
        title: "Track Team Wins Regional Championship",
        excerpt: "Congratulations to our track and field team for their outstanding performance at the regional championships last weekend.",
        content: "<p>Our track and field team has done it again! Last weekend, they dominated the regional championships, bringing home the first-place trophy and setting several new school records in the process.</p><p>Coach Williams praised the team's dedication, saying, \"These athletes have been training since November, often arriving before school starts and staying long after it ends. Their commitment has paid off, and I couldn't be prouder.\"</p><p>Standout performances included Sarah Johnson breaking the school record in the 800m, and the boys' 4x400m relay team qualifying for the state championships with their fastest time ever.</p><p>The team now advances to the state championships, which will be held on May 20-21. Let's all show our support by attending or sending encouraging messages to our athletes!</p>",
        date: new Date("2023-04-15"),
        category: "ATHLETICS",
        imageUrl: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=350",
        author: "Coach Williams"
      },
      {
        id: 2,
        title: "Spring Fundraiser Exceeds Goals",
        excerpt: "Our annual spring fundraiser was a huge success, raising over $15,000 for new athletic equipment.",
        content: "<p>We're thrilled to announce that our annual spring fundraiser has exceeded all expectations! Thanks to the incredible generosity of our community, we raised over $15,000 - surpassing our goal by more than 25%.</p><p>These funds will go directly toward purchasing new equipment for our athletic programs, including new soccer goals, volleyball standards, and track and field equipment. These upgrades will benefit hundreds of student-athletes across multiple sports.</p><p>The fundraiser's success wouldn't have been possible without our amazing volunteers, donors, and supporters. Special thanks to the Johnson family for hosting the event at their venue, and to all the local businesses that donated items for our auction.</p><p>Planning for next year's fundraiser will begin in the fall, and we welcome any suggestions or volunteers who want to get involved. Together, we're making a difference in the lives of our student-athletes!</p>",
        date: new Date("2023-04-08"),
        category: "FUNDRAISING",
        imageUrl: "https://pixabay.com/get/g0dd2c4083cad467a81a6aed9b8ddcc0be04f17b322b65907a3b2368c1fe61137dbb75910355156203930333f3d53d5487cb368d42edf736b70203f3ed94a95fe_1280.jpg",
        author: "Fundraising Committee"
      },
      {
        id: 3,
        title: "Volleyball Team Advances to State Finals",
        excerpt: "Our girls' volleyball team has secured their spot in the state finals after an impressive semifinal victory.",
        content: "<p>In an exciting match that went the full five sets, our girls' volleyball team defeated the previously unbeaten East High Hornets to advance to the state finals for the first time in school history!</p><p>The team showed incredible resilience after losing the first two sets, rallying to win three straight sets in a comeback that had the crowd on their feet. Captain Maria Rodriguez led the team with 23 kills and 4 blocks, while setter Emma Chen contributed 42 assists.</p><p>\"This is what we've been working toward all season,\" said Coach Garcia after the match. \"The girls never gave up, even when we were down. That's the kind of mental toughness we've been developing all year.\"</p><p>The state finals will be held next Saturday at Central University's arena at 6:00 PM. The Booster Club is organizing a fan bus for students and supporters who want to attend. Sign up in the main office by Wednesday if you're interested in reserving a spot.</p><p>Let's pack the stands and cheer our team to victory!</p>",
        date: new Date("2023-03-27"),
        category: "VOLLEYBALL",
        imageUrl: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=350",
        author: "Coach Garcia"
      }
    ];
    
    newsItems.forEach(item => {
      this.newsItems.set(item.id, item);
      this.newsId = Math.max(this.newsId, item.id + 1);
    });
    
    // Seed events
    const events: Event[] = [
      {
        id: 1,
        title: "Annual Sports Banquet",
        description: "Join us to celebrate our student-athletes' achievements throughout the year. Tickets are $25 per person and include dinner.",
        date: new Date("2023-05-15"),
        time: "6:00 PM - 9:00 PM",
        location: "School Gymnasium",
        registrationUrl: "/events/1/register",
        imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=350"
      },
      {
        id: 2,
        title: "Spring Golf Tournament",
        description: "Annual fundraising golf tournament with prizes, lunch, and a silent auction. Registration fee is $150 per golfer.",
        date: new Date("2023-05-22"),
        time: "8:00 AM - 2:00 PM",
        location: "Olympian Country Club",
        registrationUrl: "/events/2/register",
        imageUrl: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=350"
      },
      {
        id: 3,
        title: "Summer Sports Camp Registration",
        description: "In-person registration for our summer sports camps. Early registration discounts available. Online registration also open.",
        date: new Date("2023-06-08"),
        time: "9:00 AM - 12:00 PM",
        location: "School Cafeteria",
        registrationUrl: "/events/3/register",
        imageUrl: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=350"
      },
      {
        id: 4,
        title: "Fall Sports Kickoff BBQ",
        description: "Meet the coaches and athletes for the upcoming fall sports season. Free for Booster Club members, $5 for non-members.",
        date: new Date("2023-08-12"),
        time: "4:00 PM - 7:00 PM",
        location: "School Athletic Fields",
        registrationUrl: "/events/4/register",
        imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=350"
      },
      {
        id: 5,
        title: "Homecoming Game & Tailgate",
        description: "Join us for the annual homecoming football game and Booster Club tailgate party. Food, games, and school spirit!",
        date: new Date("2023-10-07"),
        time: "5:00 PM - 10:00 PM",
        location: "Football Stadium & Parking Lot",
        registrationUrl: "/events/5/register",
        imageUrl: "https://pixabay.com/get/g790ac237370e72b0e605c539000358e2380c891ccb5130367cc1fb27d5dce1ed2ec71fc5df8dd479738cc7279cd4c0b872ea811e4c5f173da8897f634ffe5dd6_1280.jpg"
      }
    ];
    
    events.forEach(event => {
      this.eventsData.set(event.id, event);
      this.eventId = Math.max(this.eventId, event.id + 1);
    });
  }
}

export const storage = new MemStorage();
