# School Website

## Current State
New project. No existing code. Starting from scratch.

## Requested Changes (Diff)

### Add
- Full multi-page school website with React Router navigation
- Home Page: hero section, welcome message, quick stats, announcements ticker
- About Us: school history, mission/vision, core values, principal's message, achievements
- Academics: curriculum overview, subjects by grade, academic calendar, exam schedule, results
- Admissions: process steps, eligibility, required documents, fee structure table, inquiry form
- Faculty & Staff: teacher profiles with photo placeholders, qualifications, departments
- Students: student life, clubs/activities, sports, cultural events, student council, gallery
- Parents Portal: parent notices, PT meeting schedule, school rules, transport info
- News & Events: news cards, upcoming events calendar, past events gallery
- Contact Us: address, phone, email, map placeholder, contact form
- Responsive navigation with dropdown menus
- Footer with quick links, contact info, social media icons
- Sample/placeholder data for all content sections
- Admission inquiry form (frontend only, stored in backend)
- Contact form (frontend only, stored in backend)
- Announcements/notice board management (admin can add announcements)
- Backend stores: announcements, contact inquiries, admission inquiries

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan
1. Backend: Motoko canister to store announcements, contact form submissions, admission inquiries; expose query/update APIs
2. Frontend structure: React Router with pages for each section
3. Shared components: Header with dropdown nav, Footer, HeroSection
4. Home page: hero, stats counter, announcements ticker, news highlights
5. About page: history timeline, mission/vision cards, principal message, achievements
6. Academics page: curriculum table, grade-level subjects, calendar, exam schedule
7. Admissions page: steps wizard display, docs list, fee table, inquiry form
8. Faculty page: staff grid with profile cards, department filter
9. Students page: life highlights, clubs grid, sports list, gallery grid
10. Parents Portal page: notice board, PT schedule, rules list, transport routes
11. News & Events page: news card grid, event cards with dates
12. Contact page: info cards, map placeholder, contact form wired to backend
13. Admission form wired to backend
14. All pages use sample data constants
