
<body>
    <h1>Hotel App Documentation</h1>
    <div class="section">
        <h2>Overview</h2>
        <p>The Hotel App consists of two parts:</p>
        <ul>
            <li><strong>API</strong>: Backend for serving hotel data.</li>
            <li><strong>Frontend</strong>: React-based app for displaying hotel details.</li>
        </ul>
    </div>
    <div class="section">
        <h2>Front-end Folder Structure</h2>
        <p>The Fron-end is organized as follows:</p>
        <pre>
            src/
├── app/                           # App Router Pages
│   ├── hotel-details/             # Main Hotel Details Route
│   │   ├── [slug]/                # Dynamic Slug Route
│   │   │   ├── [hotel-id]/        # Dynamic Hotel ID Route
│   │   │   │   ├── page.tsx       # Dynamic Page Component for Hotel Details
│   │   │   │   └── head.tsx       # Head Component for Meta/SEO
│   │   │   └── layout.tsx         # Nested Layout (Optional, e.g., for slug-specific UI)
│   │   └── layout.tsx             # Root Layout for Hotel Details Section
│   ├── error.tsx                  # Custom Error Page
│   ├── not-found.tsx              # Custom 404 Page
│   ├── layout.tsx                 # Root Layout for Entire App
│   └── globals.css                # Global Styles
│
├── components/                    # Reusable React Components
│   ├── Navbar/                    # Navbar Component
│   │   ├── Navbar.tsx             # React Component
│   │   └── Navbar.module.css      # Scoped Styles for Navbar
│   ├── Gallery/                   # Gallery Component
│   │   ├── Gallery.tsx            # React Component
│   │   └── Gallery.module.css     # Scoped Styles for Gallery
│   ├── PropertyDetails/           # Property Details Component
│   │   ├── PropertyDetails.tsx    # React Component
│   │   └── PropertyDetails.module.css # Scoped Styles
│   ├── Amenities/                 # Amenities Component
│   │   ├── Amenities.tsx          # React Component
│   │   └── Amenities.module.css   # Scoped Styles
│   ├── BookingCard/               # Booking Card Component
│   │   ├── BookingCard.tsx        # React Component
│   │   └── BookingCard.module.css # Scoped Styles
│   └── Modals/                    # Modal Components
│       ├── ShareModal.tsx         # Share Modal Component
│       ├── SettingsModal.tsx      # Settings Modal Component
│       └── Modals.module.css      # Scoped Styles
│
├── lib/                           # Utility Functions
│   ├── api.ts                     # API Utilities (fetch logic)
│   └── helpers.ts                 # General Helper Functions
│
├── styles/                        # Global and Common Styles
│   ├── variables.module.css       # CSS Variables
│   └── mixins.module.css          # CSS Mixins
│
├── types/                         # TypeScript Types
│   └── hotel.ts                   # Hotel Data Types
│
├── public/                        # Public Assets
│   └── images/                    # Image Asset
│
├── tests/                         # Unit and Integration Tests
│   └── components/                # Component Test
│
├── .eslintrc.json                 # ESLint Configuration
├── .gitignore                     # Git Ignore File
├── jest.config.js                 # Jest Configuration
├── next.config.js                 # Next.js Configuration
├── package.json                   # Dependencies
├── README.md                      # Project Documentation
├── tsconfig.json                  # TypeScript Configuration
└── yarn.lock                      # Yarn Lock File
        </pre>
        <h2>1. API Instructions</h2>
        <h3>1.1 Installation</h3>
        <pre>
git clone https://github.com/SHINO-01/W3_Assignment_03.git<API_REPO_URL>
cd W3_Assignment_03<API_FOLDER>
npm install
        </pre>
        <h3>1.2 Running the API</h3>
        <pre>
# run in development mode
npm run dev
        </pre>
        <p>The API will be accessible at <span class="code">http://localhost:3000</span>.</p>
        <h3>1.3 Sample Endpoints</h3>
        <ul>
            <li><code>GET /api/hotel/:hotelId</code> - Fetch details for a specific hotel.</li>
            <li><code>POST /api/hotel</code> - Create a new hotel.</li>
            <li><code>PUT /api/hotel/:hotelId</code> - Update an existing hotel.</li>
        </ul>
        <h3>1.4 Testing the API</h3>
        <p>Run tests using Jest:</p>
        <pre>
npm test
        </pre>
        <p>Example test command:</p>
        <pre>
npx jest ./source/__tests__/hotel_GET.test.ts
        </pre>
        <h3>1.5 Known Issues</h3>
        <ul>
            <li>Images must be stored in the <code>uploads/images</code> folder for static file serving.</li>
            <li>Images must be stored in the test-img folder for the POST(Create Hotel) Function to work</li>
            <li>Ensure <code>cors</code> is properly configured when accessing the API from a different origin.</li>
        </ul>
    </div>
    <div class="section">
        <h2>2. Frontend Instructions</h2>
        <h3>2.1 Installation</h3>
        <pre>
git clone https://github.com/SHINO-01/shino-hotel-app.git<FRONTEND_REPO_URL>
cd shino-hotel-app<FRONTEND_FOLDER>
npm install
        </pre>
        <h3>2.2 Running the Frontend</h3>
        <pre>
npm run dev
        </pre>
        <p>The frontend will be accessible at <span class="code">http://localhost:3001</span>.</p>
        <h3>2.3 Testing the Frontend</h3>
        <p>Run tests using Jest:</p>
        <pre>
npm test
        </pre>
        <h3>2.4 Sample Use</h3>
        <ul>
            <li>Visit <span class="code">http://localhost:3000</span> to access the homepage.</li>
            <li>Navigate to <span class="code">/hotel-details/:slug/:hotelId</span> for hotel details.</li>
            <li>Ensure the API is running for dynamic data rendering.</li>
        </ul>
        <h3>2.5 Known Issues</h3>
        <ul>
            <li>The frontend assumes the API is hosted at <span class="code">http://localhost:3000</span>. Update the API base URL in <span class="code">lib/api.ts</span> for different environments.</li>
            <li>Make sure the Front end is requesting an existing record through the variable in <b>public/src/app/page.tsx</b> (const hotelId = "KWF755" has already been done for you)</li>
            <li>Static file serving errors for missing images may break the gallery view.</li>
            <li>Test files are missing</li>
            <li>Failed to achieve Targeted code test coverage</li>
        </ul>
    </div>
    <div class="section">
        <h2>3. General Notes</h2>
        <ul>
            <li>Ensure Node.js (>=14.x) and npm are installed.</li>
            <li>Use separate terminals for running the API and frontend during running in development mode.</li>
        </ul>
    </div>
    <div class="section">
        <h2>4. Troubleshooting</h2>
        <ul>
            <li>If tests fail, ensure all dependencies are installed and the server is running.</li>
            <li>Check console logs for detailed error messages.</li>
            <li>Verify network requests in the browser developer tools for frontend API calls.</li>
            <li>Make sure there are test hotel Record in the API and the Front end is requesting that hotel record through http://localhost:3000/api/hotel/KWF755</li>
        </ul>
    </div>
</body>
