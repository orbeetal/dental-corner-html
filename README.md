# Dental Corner HTML to React Conversion Assignment

এই assignment-এর লক্ষ্য হলো existing static multi-page HTML project-টিকে **React-based single page application** এ convert করা, যেখানে reusable component, routing, asset management, এবং existing UI/UX behaviour ঠিকভাবে preserve করতে হবে.

## Assignment Objective

তোমাকে `Dental Corner` static HTML project-টি React-এ convert করতে হবে। Final output এমন হতে হবে যেন original design, content structure, responsiveness, এবং interactivity যতটা সম্ভব ঠিক থাকে, কিন্তু codebase হবে modern, component-driven, maintainable.

## Source Project Overview

বর্তমান project-এ মোট **10টি HTML page** আছে:

- `index.html`
- `about.html`
- `services.html`
- `appointment.html`
- `blog.html`
- `reviews.html`
- `videos.html`
- `gallery.html`
- `patient-stories.html`
- `contact.html`

Project-এ shared assets আছে:

- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/images/*`

Project-এ shared UI sections আছে:

- Top bar
- Navbar
- Mobile menu
- Footer
- Common CTA/button patterns
- Repeated content cards/section blocks

## Expected Outcome

Assignment complete হওয়ার পর project-টি এমন হবে:

- React দিয়ে build করা
- Multi-page HTML এর বদলে **React Router** based routing ব্যবহার করা
- Reusable components-এ ভাগ করা
- Assets properly import/use করা
- Existing JS interactions React-friendly way-এ implement করা
- Clean folder structure follow করা

## Required Stack

তুমি নিচের stack follow করবে:

- React
- Vite
- React Router DOM
- Existing design preserve করার জন্য Tailwind CSS setup করতে পারো
- Existing custom CSS (`styles.css`) প্রয়োজন অনুযায়ী migrate/adapt করতে পারো

## Main Tasks

### 1. React Project Setup

একটি নতুন React project initialize করতে হবে.

Minimum setup expectations:

- Vite দিয়ে project setup
- `react-router-dom` install ও configure
- Clean project structure তৈরি
- প্রয়োজন হলে Tailwind CSS configure

### 2. HTML Pages to React Routes

সব HTML page-কে পৃথক React page/component হিসেবে convert করতে হবে.

Expected route mapping:

- `/` → Home
- `/about` → About
- `/services` → Services
- `/appointment` → Appointment
- `/blog` → Blog
- `/reviews` → Reviews
- `/videos` → Videos
- `/gallery` → Gallery
- `/patient-stories` → Patient Stories
- `/contact` → Contact

## Componentization Requirements

Project convert করার সময় repeated অংশগুলোকে reusable component-এ ভাঙতে হবে.

Minimum expected shared components:

- `Layout`
- `TopBar`
- `Navbar`
- `MobileMenu`
- `Footer`
- `ScrollToTopButton`
- `WhatsAppButton` অথবা floating action component
- Common `SectionHeader`
- Common `Button`
- Reusable card components যেখানে applicable

যদি প্রয়োজন হয়, অতিরিক্ত reusable component তৈরি করবে যেমন:

- `PageBanner`
- `DoctorCard`
- `ServiceCard`
- `BlogCard`
- `ReviewCard`
- `GalleryItem`
- `VideoCard`

## Styling & Asset Migration

তোমাকে existing design preserve করতে হবে.

Requirements:

- Existing colors, spacing, typography, responsive behaviour maintain করতে হবে
- `assets/images` এর সব image properly migrate/use করতে হবে
- `styles.css` এর reusable styles React project-এ migrate করতে হবে
- Inline duplicate style বা unnecessary code repetition এড়িয়ে চলতে হবে

## JavaScript Behaviour to Convert

বর্তমান `assets/js/main.js`-এ থাকা behaviour-গুলো React way-এ implement করতে হবে.

At minimum নিচের feature-গুলো consider করতে হবে:

- Mobile menu toggle
- Navbar scroll effect
- Scroll to top button
- WhatsApp/floating tooltip toggle
- Hero slider
- Review carousel horizontal scroll
- Doctor modal open/close
- Gallery category filtering
- Image lightbox with previous/next support
- Keyboard interaction for lightbox
- Interactive star rating

## Important Implementation Rules

- Direct DOM manipulation যতটা সম্ভব avoid করতে হবে
- `document.getElementById`, `querySelector`, manual class toggle-এর বদলে React state/useEffect/useRef ব্যবহার করবে
- যদি event listener ব্যবহার করো, cleanup handle করতে হবে
- Route change এর পর page transition/functionality ভাঙা যাবে না
- UI যতটা সম্ভব pixel-consistent রাখতে হবে
- Broken image, broken link, empty route, বা console error থাকা যাবে না

## Suggested Folder Structure

নিচের structure follow করতে পারো:

```text
src/
  assets/
    images/
    styles/
  components/
    common/
    layout/
    home/
    services/
    reviews/
    gallery/
  data/
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    Appointment.jsx
    Blog.jsx
    Reviews.jsx
    Videos.jsx
    Gallery.jsx
    PatientStories.jsx
    Contact.jsx
  routes/
  App.jsx
  main.jsx
```

তুমি চাইলে slightly different structure ব্যবহার করতে পারো, তবে তা clean ও logical হতে হবে.

## Content Handling Rules

- Original content preserve করতে হবে
- Hardcoded repeated data থাকলে সেটাকে array/object আকারে organize করতে পারো
- Repeated cards/data map করে render করলে extra credit পাবে
- Unused code remove করতে হবে

## Functional Requirements Checklist

Final project-এ নিচের বিষয়গুলো অবশ্যই কাজ করতে হবে:

- All routes accessible
- Navbar links work correctly
- Active navigation state clearly visible
- Mobile menu works
- Responsive layout preserved
- Hero section/slider works if present
- Gallery filter works
- Lightbox works
- Modal works
- Rating interaction works
- Scroll-based UI works without errors

## Non-Functional Requirements

- Code should be readable
- Components should be small and purposeful
- Folder names and file names should be meaningful
- Repetition should be minimized
- No unnecessary library should be added
- App should run without modification after dependency install

## What You Must Not Do

- শুধু `index.html` convert করে assignment complete বলা যাবে না
- সব HTML file এক React component-এ dump করা যাবে না
- পুরো project-এ copy-paste duplication করা যাবে না
- Broken route রাখা যাবে না
- Assets path hardcode করে fragile setup করা যাবে না
- DOM manipulation heavy solution দেওয়া যাবে না যেখানে React state use করা উচিত

## Bonus Tasks

নিচের যেকোনো improvement করলে bonus marks পাবে:

- Common data files ব্যবহার করে cards/content render করা
- Reusable modal/lightbox component তৈরি করা
- SEO-friendly page title handling করা
- Route-wise code splitting করা
- Better accessibility যোগ করা
- Form validation improve করা
- Loading states বা smooth transitions যোগ করা
- Component props typing করা

## Submission Requirements

Submission-এর সময় নিচের জিনিসগুলো দিতে হবে:

- Complete React source code
- `README.md` with run instructions
- Route list
- Brief note on component breakdown
- Brief note on what JS features were converted
- If any feature incomplete থাকে, সেটা clearly mention করতে হবে

## Submission Checklist

Submit করার আগে নিজে verify করবে:

- [ ] Project installs successfully
- [ ] Project runs successfully
- [ ] All pages are converted into routes
- [ ] Shared layout extracted into components
- [ ] Assets are working correctly
- [ ] Interactive features are working
- [ ] Responsive layout is preserved
- [ ] No major console error
- [ ] Code is organized and readable
- [ ] README with setup instructions is included

## Evaluation Criteria

মোট **100 marks** ধরে evaluation করা হবে.

### 1. Project Setup & Runability — 10 marks

- Proper React setup
- Project runs correctly
- Routing configured properly

### 2. UI Conversion Accuracy — 25 marks

- Original HTML design accurately recreated
- Visual consistency maintained
- Responsiveness preserved

### 3. Componentization — 20 marks

- Shared sections extracted properly
- Good separation of concerns
- Reusable components created where appropriate

### 4. Routing & Page Structure — 10 marks

- All pages converted into routes
- Navigation works correctly
- Route naming is clean and logical

### 5. Interactive Feature Conversion — 20 marks

- JS interactions migrated properly
- React state/hooks used correctly
- No broken behaviour

### 6. Code Quality — 10 marks

- Clean structure
- Meaningful naming
- Minimal duplication
- Maintainable code

### 7. Documentation & Submission Quality — 5 marks

- Proper setup instructions
- Clear notes about implementation
- Complete submission

## Suggested Workflow

তুমি চাইলে নিচের flow follow করতে পারো:

1. New React app setup
2. Assets migrate
3. Routing setup
4. Shared layout extract
5. Pages convert one by one
6. Interactive features migrate
7. Final cleanup and testing
8. Submission prep

## Final Instruction

এই assignment-এ focus থাকবে শুধু UI copy করা নয়, বরং **HTML থেকে proper React architecture-এ migration** করা। তাই final output-এ design match করার পাশাপাশি clean component structure, maintainable code, এবং React best practice দেখা হবে.

---

**Deliverable:** A fully functional React version of the Dental Corner HTML project with reusable components, routing, preserved design, and working interactions.
