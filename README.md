# 🚗 **Rydex – Smart Vehicle Booking & Trip Management Platform**

### 🔗 **Live Website:** [https://rydex.netlify.app](https://rydex.netlify.app)  
### 💾 **Client GitHub Repo:** [https://github.com/yourusername/rydex-client](https://github.com/yourusername/rydex-client)  
### ⚙️ **Server GitHub Repo:** [https://github.com/yourusername/rydex-server](https://github.com/yourusername/rydex-server)

---

## 🧭 **Project Overview**

**Rydex** is a modern, full-stack **MERN + Firebase Authentication** web platform designed for vehicle booking and trip management.  
It allows users to explore, add, update, and manage vehicles for rental or travel purposes.  
Authenticated users can list their own vehicles, update trip details, manage bookings, and delete their listings — all in one place.

---

## 🌟 **Key Features**

- 🚗 **Vehicle Management:** Add, update, and delete vehicles with image uploads and live availability status.  
- 🔐 **Firebase Authentication:** Secure login/register using Email & Google sign-in.  
- 🧭 **Protected Routes:** Only authenticated users can access Add Vehicle, My Vehicles, My Bookings, and Update Vehicle pages.  
- 🌗 **Dark/Light Mode:** Users can switch between light and dark themes, saved across sessions.  
- 💬 **Toast Notifications:** Smooth feedback for success or error (no default browser alerts).  
- ⚡ **Real-Time Data:** Vehicles are fetched dynamically from MongoDB using Axios/TanStack Query.  
- 📅 **date-fns Integration:** Displays readable creation and booking dates dynamically.  
- 🎞️ **Framer Motion Animations:** Adds elegant transitions and hover effects across the site.  
- 🧾 **Responsive Design:** Fully optimized for mobile, tablet, and desktop users.

---

## 🛠️ **Tech Stack**

| Category | Technologies Used |
|-----------|-------------------|
| **Frontend** | React 19, Vite 7, TailwindCSS 4, Framer Motion (motion), date-fns |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose |
| **Authentication** | Firebase Authentication (Email/Password + Google Login) |
| **Deployment** | Netlify (Client) & Vercel (Server) |
| **API Management** | Axios / TanStack Query |
| **State Management** | React Context API (Auth & Theme) |

---