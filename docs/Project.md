## **Project Documentation: Modular Portfolio Website System**

### **Executive Summary**

This portfolio website is built on a **modular section system** where pages are composed like Lego blocks. Each page is defined by a JSON configuration file that specifies which sections appear and what content they display. This approach enables:

- **Non-developers** to create new pages by editing JSON files
- **Designers** to see exactly which sections are active
- **Developers** to build reusable section components once
- **Content editors** to update content without touching code

---

## **Core Concept: The Modular Section System**

### **How It Works**

Think of building a page like assembling furniture from IKEA:

1. **The Catalog** (Section Registry): A master list of all available section components
2. **The Instructions** (JSON Files): Tells you which pieces to use and in what order
3. **The Pieces** (React Components): Pre-built sections ready to be assembled
4. **The Assembly** (Page Renderer): Automatically puts everything together based on instructions

### **The Three-Layer Architecture**

**Layer 1: Section Components** (`/components/sections/`)
- Pre-built, reusable page sections
- Each section is a self-contained React component
- Examples: Hero, About, Projects Grid, CTA

**Layer 2: Section Registry** (`/lib/section-registry.js`)
- A mapping file that connects section names to components
- Acts as a "phone book" for the page renderer
- Format: `"sectionName": SectionComponent`

**Layer 3: JSON Configuration** (`/data/*.json`)
- Defines which sections appear on each page
- Contains all content for each section
- Uses `enabled: true/false` to toggle sections on/off

---

## **Page Breakdown: What Creates Each Page**

### **1. Home Page** (`/`)

**Purpose**: Main landing page showcasing portfolio overview

**Created From**: `data/home.json`

**Sections** (in order of appearance):

1. **Hero Section** (`hero`)
   - **What it shows**: Large headline, subtitle with highlighted text, CTA button, decorative gradient graphic
   - **Purpose**: First impression, main value proposition
   - **Visual style**: Dark background with orange crystal graphics
   - **Key elements**: 
     - Main heading: "Smart systems build for real people"
     - Highlighted text: "HUMAN & AI"
     - Subtitle explaining the focus
     - Call-to-action button

2. **Logos Section** (`logos`)
   - **What it shows**: Horizontal strip of technology/tool logos
   - **Purpose**: Build credibility by showing tech stack
   - **Visual style**: Light background, grayscale logos
   - **Key elements**: 
     - "Tech we work with" heading
     - 5 logos in a row (scrollable on mobile)

3. **USPs Section** (`usps`)
   - **What it shows**: 4-column grid of value propositions
   - **Purpose**: Explain core services/capabilities
   - **Visual style**: Dark background with gradient, icon + text cards
   - **Key elements**: 
     - Section heading: "Building intelligence into your product"
     - 4 feature cards with icons, titles, descriptions
     - Examples: "AI Integration", "AI Chatbots", "Custom AI apps", "Product Design"

4. **Projects Section** (`projects`)
   - **What it shows**: 3-column grid of featured projects
   - **Purpose**: Showcase work samples
   - **Visual style**: Light background, project cards with images
   - **Key elements**: 
     - Section heading: "Machine Learning & AI"
     - Subtitle explaining focus
     - 3 project cards with image, title, description, metrics

5. **About Section** (`about`)
   - **What it shows**: Two-column layout with text and image
   - **Purpose**: Personal introduction
   - **Visual style**: Light background, text left, image right
   - **Key elements**: 
     - "for now" label
     - Heading: "One person team"
     - "I'm Gloria" introduction text
     - Profile photo

6. **Experiences Section** (`experiences`)
   - **What it shows**: 3-column grid of work experiences
   - **Purpose**: Highlight professional background
   - **Visual style**: Light background, experience cards
   - **Key elements**: 
     - Section heading: "Product Design"
     - Subtitle
     - 3 experience cards with metrics, company names, descriptions

7. **CTA Section** (`cta`)
   - **What it shows**: Large call-to-action with skill tags
   - **Purpose**: Encourage contact/engagement
   - **Visual style**: Dark background with gradient graphic
   - **Key elements**: 
     - Heading: "Interested in My Approach to ML Problem-Solving?"
     - Subtitle
     - Skill tag buttons (Machine Learning, Data Science, etc.)
     - Decorative orange gradient

**JSON Structure Example**:
```
home.json contains 7 section objects:
- hero: { heading, subtitle, cta, image }
- logos: [ array of logo paths ]
- usps: [ array of 4 feature objects ]
- projects: [ array of 3 project previews ]
- about: { label, heading, text, image }
- experiences: [ array of 3 experience previews ]
- cta: { heading, subtitle, tags, image }
```

---

### **2. Projects Template Page** (`/projects/[id]`)

**Purpose**: Detailed case study for individual projects

**Created From**: `data/projects.json`

**Sections** (available, can be toggled per project):

1. **Project Hero Section** (`projectHero`)
   - **What it shows**: Project title, subtitle, metadata box
   - **Purpose**: Introduce the project
   - **Visual style**: Dark background with gradient
   - **Key elements**: 
     - Large project title
     - Subtitle/tagline
     - Metadata card (Role, Timeline, Tools)
   - **Always enabled**: Yes (required for all projects)

2. **Project Goal Section** (`projectGoal`)
   - **What it shows**: Project objectives and success metrics
   - **Purpose**: Explain what the project aimed to achieve
   - **Visual style**: Light background, 3-column metrics
   - **Key elements**: 
     - "The Goal" heading
     - Description paragraph
     - 3 metric cards (e.g., "95% Accuracy", "2s Response Time")
   - **Toggle example**: Enabled for technical projects, disabled for design-only projects

3. **Project Challenge Section** (`projectChallenge`)
   - **What it shows**: Problems that needed solving
   - **Purpose**: Provide context for the solution
   - **Visual style**: Light background, bullet points + visual
   - **Key elements**: 
     - "The Challenge" heading
     - Bullet point list of challenges
     - Diagram or illustration
   - **Toggle example**: Enabled when problem context is important

4. **Project Approach Section** (`projectApproach`)
   - **What it shows**: Solution methodology comparison
   - **Purpose**: Explain decision-making process
   - **Visual style**: Light background with gradient accent, 2x2 card grid
   - **Key elements**: 
     - "Selecting a right approach" heading
     - Description
     - 4 approach cards comparing options
   - **Toggle example**: Enabled for projects with multiple solution paths

5. **Project Architecture Section** (`projectArchitecture`)
   - **What it shows**: Technical system design
   - **Purpose**: Show technical depth
   - **Visual style**: Light background, flowchart/diagram
   - **Key elements**: 
     - "The Architecture" heading
     - Bullet points explaining components
     - System architecture diagram
   - **Toggle example**: Enabled for technical projects, disabled for design projects

6. **Project Results Section** (`projectResults`)
   - **What it shows**: Outcomes and impact
   - **Purpose**: Demonstrate success
   - **Visual style**: Dark background
   - **Key elements**: 
     - "Results & Impact" heading
     - Description of outcomes
     - Embedded CTA component
   - **Always enabled**: Yes (every project should show results)

7. **Project CTA Box** (`projectCTA`)
   - **What it shows**: Interactive discussion prompt
   - **Purpose**: Encourage deeper conversation
   - **Visual style**: Dark background, chat interface mockup
   - **Key elements**: 
     - "Ask me anything about [Project Name]" heading
     - Description
     - Visual chat interface
   - **Toggle example**: Enabled for projects open to discussion

8. **Project Outcomes Grid** (`projectOutcomes`)
   - **What it shows**: Detailed results in two categories
   - **Purpose**: Break down impact
   - **Visual style**: Light background, 2-column grid
   - **Key elements**: 
     - 2 outcome cards (e.g., "Quantifiable Outcomes", "Stakeholder Value")
     - Each with icon, title, bullet points
   - **Toggle example**: Enabled when detailed metrics are available

9. **Project Tech Stack** (`projectTechStack`)
   - **What it shows**: Technologies used
   - **Purpose**: Show technical skills
   - **Visual style**: Light background, tag grid
   - **Key elements**: 
     - "Tech Stack" heading
     - Description
     - Grid of technology badges
   - **Toggle example**: Enabled for technical projects

**JSON Structure Example**:
```
projects.json contains array of project objects:
- Each project has:
  - id, slug, title, subtitle
  - sections: {
      projectHero: { enabled: true, data: {...} }
      projectGoal: { enabled: true, data: {...} }
      projectChallenge: { enabled: false, data: null }
      projectApproach: { enabled: true, data: {...} }
      // ... etc
    }
```

**Real-World Example**:
- **Project 1** (RAG System): All sections enabled - it's a complex technical project
- **Project 2** (UI Redesign): Only hero, goal, results, outcomes enabled - simpler scope
- **Project 3** (Research): Hero, challenge, approach, results enabled - no architecture needed

---

### **3. Experiences Template Page** (`/experiences/[id]`)

**Purpose**: Detailed view of work experience/role

**Created From**: `data/experiences.json`

**Sections** (available, can be toggled per experience):

1. **Experience Hero Section** (`experienceHero`)
   - **What it shows**: Job title, company info, metadata
   - **Purpose**: Introduce the role
   - **Visual style**: Dark background
   - **Key elements**: 
     - Job title (e.g., "Senior Product Designer")
     - Company tagline
     - Metadata (Timeline, Location, Team size)
   - **Always enabled**: Yes (required for all experiences)

2. **Experience Overview Section** (`experienceOverview`)
   - **What it shows**: Role summary
   - **Purpose**: Quick snapshot of responsibilities
   - **Visual style**: Light background, simple text
   - **Key elements**: 
     - "In a nutshell" heading
     - 2-3 paragraph description
   - **Always enabled**: Yes (provides context)

3. **Experience Highlights Section** (`experienceHighlights`)
   - **What it shows**: Key achievements or focus areas
   - **Purpose**: Showcase impact
   - **Visual style**: Light background, multiple cards
   - **Key elements**: 
     - Multiple highlight cards
     - Each with title and description
     - Examples: "Cross-functional impact", "Command collaboration"
   - **Toggle example**: Enabled when there are distinct achievements

4. **Experience Work Section** (`experienceWork`)
   - **What it shows**: Selected work samples from this role
   - **Purpose**: Visual proof of work
   - **Visual style**: Light background, varies by content
   - **Key elements**: 
     - "Selected Work" heading
     - Description
     - Work showcase (could be images, frameworks, mockups)
   - **Toggle example**: Enabled when work samples are available

5. **Experience Detail Section** (`experienceDetail`)
   - **What it shows**: Deep dive into specific projects/initiatives
   - **Purpose**: Show depth of work
   - **Visual style**: Light background, varies by content
   - **Key elements**: 
     - Project-specific content
     - Could include: frameworks, mobile mockups, achievement lists
     - Examples: "Communication Framework", "Admin redesign", "Home Page Redesign"
   - **Toggle example**: Can be repeated multiple times for different projects
   - **Special note**: This section is **repeatable** - you can have multiple instances

6. **Experience Closing Section** (`experienceClosing`)
   - **What it shows**: Reflection or key takeaway
   - **Purpose**: Wrap up the experience story
   - **Visual style**: Dark background
   - **Key elements**: 
     - "Keep in mind" heading
     - Closing thoughts
     - Description text
   - **Toggle example**: Enabled when there's a meaningful reflection

**JSON Structure Example**:
```
experiences.json contains array of experience objects:
- Each experience has:
  - id, slug, title, company, description
  - sections: {
      experienceHero: { enabled: true, data: {...} }
      experienceOverview: { enabled: true, data: {...} }
      experienceHighlights: { enabled: true, data: {...} }
      experienceWork: { enabled: true, data: {...} }
      experienceDetail: { 
        enabled: true, 
        data: [
          { project: "Communication Framework", ... },
          { project: "Admin Redesign", ... },
          { project: "Home Page Redesign", ... }
        ]
      }
      experienceClosing: { enabled: true, data: {...} }
    }
```

**Real-World Example**:
- **Experience 1** (Senior Designer): All sections enabled, 3 detail sections for major projects
- **Experience 2** (Freelance): Hero, overview, work, closing enabled - no highlights section
- **Experience 3** (Internship): Hero, overview, highlights enabled - limited work samples

---

## **Global Components**

These components appear on **every page** and maintain consistency across the entire site.

### **1. Header/Navigation Component**

**Location**: Top of every page

**Purpose**: Primary navigation and branding

**Elements**:
- **Logo**: "Fractals" branding (top left)
- **Navigation Menu**: 
  - Home
  - Products (dropdown possible)
  - Resources (dropdown possible)
  - Pricing
- **Auth Buttons**: 
  - "Log In" (secondary style)
  - "Sign Up" (primary style)
- **Mobile Menu**: Hamburger icon for responsive view

**Behavior**:
- Sticky/fixed positioning (stays visible on scroll)
- Transparent on hero sections, solid on scroll
- Mobile: Collapses to hamburger menu
- Active state for current page

**Design Tokens Used**:
- Background: Dark (`#1A1A1A`) or transparent
- Text: White
- Buttons: Primary orange gradient, secondary outlined
- Height: 80px
- Max-width: 1200px centered

---

### **2. Footer Component**

**Location**: Bottom of every page

**Purpose**: Social links and legal info

**Elements**:
- **Social Links**: 
  - LinkedIn icon + link
  - Dribbble icon + link
  - Behance icon + link
  - (Icons are clickable, open in new tab)
- **Copyright**: "© 2025 Fractals. All rights reserved."
- **Optional Legal Links**: Privacy Policy, Terms of Service

**Behavior**:
- Always at bottom of page
- Links open in new tab
- Hover states on icons

**Design Tokens Used**:
- Background: Dark (`#0D0D0D`)
- Text: Muted gray
- Icons: White with hover effect
- Padding: 40px vertical
- Max-width: 1200px centered

---

## **How to Create a New Project Page**

This is the **step-by-step workflow** for adding a new project without touching code:

### **Step 1: Open `data/projects.json`**

You'll see an array of existing projects. Each project is an object.

### **Step 2: Copy an Existing Project Structure**

Find a project similar to what you want to create and copy its entire object.

### **Step 3: Update Basic Info**

Change these fields:
- `id`: Unique identifier (e.g., "new-project-2025")
- `slug`: URL-friendly version (e.g., "new-project-2025")
- `title`: Display title (e.g., "My New Project")
- `subtitle`: Short description

### **Step 4: Configure Sections**

For each section in the `sections` object:

**To ENABLE a section:**
```
"projectGoal": {
  "enabled": true,
  "data": {
    "heading": "The Goal",
    "description": "Your description here...",
    "metrics": [...]
  }
}
```

**To DISABLE a section:**
```
"projectChallenge": {
  "enabled": false,
  "data": null
}
```

### **Step 5: Fill in Content**

For each enabled section, fill in the `data` object with your content:
- Text fields: Write your copy
- Image fields: Add path to image (e.g., "/images/projects/my-project/hero.png")
- Arrays: Add list items, metrics, tags, etc.

### **Step 6: Save and Test**

- Save the JSON file
- Navigate to `/projects/your-slug`
- The page automatically renders with your configuration

### **Common Patterns**

**Minimal Project** (Design work):
- Enable: Hero, Goal, Results, Tech Stack
- Disable: Challenge, Approach, Architecture, CTA, Outcomes

**Technical Project** (Full case study):
- Enable: All sections
- Provide detailed data for each

**Research Project**:
- Enable: Hero, Challenge, Approach, Results, Outcomes
- Disable: Architecture, Tech Stack

---

## **Benefits of This System**

### **For Developers**
- Build each section component once
- No repetitive page creation
- Easy to add new section types
- Clear separation of concerns

### **For Designers**
- See exactly which sections are active
- Consistent design system usage
- Easy to prototype new layouts
- Visual components match JSON structure

### **For Content Editors**
- No code knowledge required
- Clear structure to follow
- Can't break the site
- Immediate preview of changes

### **For Product Managers**
- Understand site structure at a glance
- Plan new pages easily
- Estimate effort accurately
- Communicate clearly with team

---

## **Design System Integration**

Every component uses the centralized design system:

**Colors**: Defined once in `tailwind.config.js`, used everywhere
**Typography**: Consistent heading sizes, font weights, line heights
**Spacing**: Standardized padding, margins, gaps
**Components**: Reusable UI elements (Button, Card, Badge, etc.)

**Result**: Changing one value in the design system updates the entire site automatically.
