# Slotwise — Product Requirements Document

**Tagline:** Shared resources, smarter booking.

## Product Summary
Slotwise is a shared-resource booking application for rooms, vehicles, equipment, workspaces, and other company resources.

## Goals
- Make availability obvious.
- Prevent double bookings.
- Support responsive calendar-based booking.
- Keep the product intentionally simple.

## Roles
- User
- Resource Manager
- Administrator

## Core User Flow
`Select resource → View availability → Select date/time → Book → Confirmation`

## Required Screens
- Sign in
- Dashboard
- Resource list
- Resource detail
- Calendar
- New booking
- Booking detail
- Resource management
- Reports
- Mobile booking view

## Resource Fields
Name, type, location, capacity, description, status, image.

## Resource Types
Room, vehicle, equipment, workspace, other.

## Booking Fields
`resource_id`, `user_id`, `starts_at`, `ends_at`, `title`, `description`, `status`.

## Booking Statuses
`confirmed`, `cancelled`, `pending`.

## Conflict Rule
Two active bookings for the same resource must never overlap. This must be enforced server-side, not only in the UI.

## Calendar
Support day, week, and month views.

## Resource Detail
Show photo, description, capacity, location, amenities, current status, upcoming bookings, and available time ranges.

## Data Model
- `users`
- `resources`
- `resource_types`
- `resource_amenities`
- `bookings`
- `booking_attendees`
- `booking_activities`

## Files
Use Cloudflare R2 for resource images.

## Email
Use Resend for booking confirmation, cancellation, and reminders.

## Reporting
Total bookings, utilization, bookings by resource, bookings by type, cancellations.

## Testing
### Vitest
Overlap detection, date validation, status logic, availability calculations.

### Playwright
Create booking, reject overlapping booking, cancel booking, resource manager creates resource.

## Technology Baseline
Astro, SolidJS, TypeScript, Vite, Node.js, Tailwind CSS, Neon Postgres, Neon Auth, direct SQL, Zod, Cloudflare R2, Resend, Vitest, Playwright, ESLint, Prettier, Sentry, GitHub Actions, Netlify, Cloudflare DNS.

## MVP Acceptance Criteria
- Resources can be created.
- Users can inspect availability.
- Users can make bookings.
- Overlapping bookings are blocked.
- Cancellation works.
- Calendar reflects current bookings.
- Confirmation email works.
- Mobile layout is usable.
