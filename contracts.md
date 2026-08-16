# Adsvate Website - API Contracts & Integration Plan

## Current Status
✅ Frontend MVP Complete (Mock Data)
⏳ Backend Integration (Pending)

---

## Mock Data Location
File: `/app/frontend/src/mock.js`

### Mock Data Structure:

1. **services** (Array)
   - id, title, description, icon

2. **portfolioStats** (Array)
   - id, metric, description

3. **testimonials** (Array)
   - id, name, role, quote, image

4. **clientLogos** (Array)
   - id, name

---

## Backend Implementation Plan

### Database Schema (MongoDB)

#### 1. Services Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  icon: String,
  order: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### 2. Portfolio Stats Collection
```javascript
{
  _id: ObjectId,
  metric: String,
  description: String,
  order: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### 3. Testimonials Collection
```javascript
{
  _id: ObjectId,
  name: String,
  role: String,
  quote: String,
  image: String,
  companyName: String,
  order: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### 4. Client Logos Collection
```javascript
{
  _id: ObjectId,
  name: String,
  logo: String (URL),
  order: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### 5. Contact Submissions Collection (Optional)
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  message: String,
  source: String,
  status: String,
  createdAt: Date
}
```

---

## API Endpoints Required

### Public Endpoints (GET)

1. **GET /api/services**
   - Returns: List of active services
   - Response: `{ success: true, data: [...] }`

2. **GET /api/portfolio-stats**
   - Returns: List of portfolio statistics
   - Response: `{ success: true, data: [...] }`

3. **GET /api/testimonials**
   - Returns: List of active testimonials
   - Response: `{ success: true, data: [...] }`

4. **GET /api/client-logos**
   - Returns: List of client logos
   - Response: `{ success: true, data: [...] }`

### Contact Form Endpoint (POST)

5. **POST /api/contact**
   - Body: `{ name, email, phone, message }`
   - Returns: `{ success: true, message: "Terima kasih! Kami akan menghubungi Anda segera." }`

---

## Frontend Integration Steps

### Step 1: Remove Mock Data
- Remove import of mock.js from components
- Replace with API calls using axios

### Step 2: Update Components

**Example for ServicesSection.jsx:**
```javascript
// Before (Mock)
import { services } from '../mock';

// After (API)
const [services, setServices] = useState([]);

useEffect(() => {
  const fetchServices = async () => {
    const response = await axios.get(`${API}/services`);
    setServices(response.data.data);
  };
  fetchServices();
}, []);
```

### Step 3: Add Loading States
- Add skeleton loaders for each section
- Handle error states gracefully

### Step 4: Add Contact Form
- Create ContactForm component
- Integrate with POST /api/contact endpoint
- Add form validation
- Show success/error toast messages

---

## Environment Variables

### Backend (.env)
```
MONGO_URL=<existing>
DB_NAME=<existing>
```

### Frontend (.env)
```
REACT_APP_BACKEND_URL=<existing>
```

---

## Testing Checklist

### Backend Testing
- [ ] All GET endpoints return correct data
- [ ] POST /api/contact accepts and stores data
- [ ] Error handling for invalid requests
- [ ] CORS configured correctly

### Frontend Testing
- [ ] Services load from API
- [ ] Portfolio stats load from API
- [ ] Testimonials load from API
- [ ] Client logos load from API
- [ ] Contact form submission works
- [ ] Loading states display correctly
- [ ] Error states display correctly
- [ ] All buttons navigate/link correctly

---

## Notes
- All mock data is currently frontend-only
- No backend implementation yet
- WhatsApp link (https://wa.me/6287700040900) is functional
- Email (hello@adsvate.com) is functional
- All animations and interactions work without backend
