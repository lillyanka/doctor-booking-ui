# doctor-booking-ui
## Setup Instructions

### 1. Create a new React project with TypeScript

```bash
npx create-react-app doctor-booking-app --template typescript
cd doctor-booking-app

```

### 2. Install required dependencies

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npm install --save-dev @types/node

```

### 3. Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

## Running the App

### Start the development server

```bash
npm start

```

This will automatically open the app in your default browser at `http://localhost:3000`

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (not recommended unless you need full control)

To serve a static version of the app, run `serve -s build`

