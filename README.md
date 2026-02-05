# Canteen Connect

A **college canteen pre-ordering system** that reduces queues, lets students pre-order food, and helps canteen staff manage orders efficiently. Suitable as a DBMS / OOP mini project, resume showcase, or academic submission.

---

## Problem statement

Long canteen queues waste students’ time and make it hard for staff to manage rushes. There is a need for a system where:

- Students can **pre-order** meals and **pick up at the counter** when ready.
- **Real-time order status** (e.g. Order Placed → Preparing → Ready for Pickup → Collected) is visible to students.
- Canteen staff can **manage incoming orders** and **update status** from a single dashboard.
- **Menu management** (add / edit / remove items) is handled in one place.

Canteen Connect addresses this by providing a student-facing web app and a staff-facing admin panel, both talking to the same backend APIs.

---

## Abstract

Canteen Connect is a full-stack web application for college canteen pre-ordering. The **student frontend** allows users to browse the canteen menu by category, add items to a virtual tray (cart), place an order with contact details, and track order status (Order Placed, Preparing, Ready for Pickup, Collected). The **admin (canteen staff) UI** provides an order dashboard for incoming student orders, status controls (Preparing / Ready for Pickup / Collected), and menu management (add and remove items). The system uses **existing backend APIs** without any change to routes, payloads, or database logic; only the frontend and admin UIs have been refactored and rebranded for the college canteen use case.

---

## Tech stack

- **Backend:** Node.js, Express, MongoDB (unchanged; do not modify).
- **Student frontend:** React (Vite), React Router, Axios, React Toastify.
- **Admin (staff) UI:** React (Vite), React Router, Axios, React Toastify.

---

## Student (frontend) features

| Feature | Description |
|--------|-------------|
| **Student login / signup** | Register or sign in; labels and copy refer to “Student”. |
| **Canteen menu** | Browse food items by category (Breakfast / Lunch / Snacks / Beverages-style categories; exact categories come from backend). |
| **Cart (tray)** | Add/remove items, see quantity and total; “Service fee” and “Tray total” wording. |
| **Place order** | Enter pickup & contact details; pay at counter or Stripe; “Pre-order from canteen” flow. |
| **Order tracking** | “My canteen orders” list with status: **Preparing** → **Ready for Pickup** → **Collected**. “Refresh status” re-fetches orders so students see updates. |
| **Verify** | Post-Stripe payment verification; redirects to My orders. |

---

## Admin (canteen staff) features

| Feature | Description |
|--------|-------------|
| **Canteen staff login** | Admin UI branded as “Canteen Staff” / “Canteen Connect — Staff”. |
| **Order dashboard** | View incoming student orders; update status (Preparing / Ready for Pickup / Collected). Backend still receives the same status values; only labels are canteen-friendly. |
| **Menu management** | Add new menu items (name, description, category, price, image); list and remove items. |

---

## How the frontend interacts with the backend

The **backend is not modified**. All API endpoints, request bodies, and response shapes stay the same. The frontend and admin only change:

- **UI text and labels** (e.g. “User” → “Student”, “Delivery” → “Pickup from counter”).
- **Component and route names** (e.g. Home → StudentDashboard, MyOrders used as “My canteen orders”).
- **Display mapping** for order status (e.g. backend `"Food Processing"` shown as “Preparing”, `"Out for delivery"` as “Ready for Pickup”, `"Delivered"` as “Collected”).

**Key API usage (unchanged):**

- **Auth:** `POST /api/user/login`, `POST /api/user/register` (same payloads).
- **Food:** `GET /api/food/list`; admin: `POST /api/food/add`, `POST /api/food/remove`.
- **Cart:** `POST /api/cart/add`, `POST /api/cart/remove`, `POST /api/cart/get` (with token).
- **Orders:** `POST /api/order/place`, `POST /api/order/placecod`, `POST /api/order/userorders` (student), `GET /api/order/list`, `POST /api/order/status` (admin), `POST /api/order/verify` (payment).

The student app uses **StoreContext** for cart, token, and food list; order tracking is done by refetching orders (e.g. “Refresh status”) so students see the latest status without any backend change.

---

## Running the project

1. **Backend** (from `backend/`):  
   `npm install` then `npm run dev` (or your usual start command). Ensure MongoDB is running and `.env` is set.

2. **Student frontend** (from `frontend/`):  
   `npm install` then `npm run dev`. Uses `http://localhost:4000` for API (configurable in `StoreContext.jsx`).

3. **Admin (staff) UI** (from `admin/`):  
   `npm install` then `npm run dev`. Uses same backend URL in `assets.js`.

---

## Project structure (relevant to this refactor)

- **`frontend/`** – Student UI (Canteen Connect): dashboard, menu, cart, place order, my orders, verify.
- **`admin/`** – Canteen staff UI: add/list menu items, incoming orders, order status control.
- **`backend/`** – **Do not modify**; all routes, controllers, and DB logic remain as-is.

---

## Validation checklist

- [x] Backend runs without changes.
- [x] All API calls from frontend and admin remain valid (same URLs, methods, payloads).
- [x] UI reflects a college canteen system (pre-order, pickup, order tracking, staff dashboard).
- [x] Suitable for DBMS / OOP mini project, resume showcase, or academic submission.
