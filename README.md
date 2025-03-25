# Dashboard App

A responsive admin dashboard built with **React**, **TypeScript**, and **Ant Design**.  
Includes features such as user management, table editing, drawer views, pagination, and error handling.

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧰 Tech Stack

- ⚛️ **React** (via Create React App)
- 🟦 **TypeScript**
- 🎨 **Ant Design** UI components
- 🧠 **Redux Toolkit** for state management
- 📡 **Axios** for API requests
- 💡 **Custom Hooks** (e.g. `useAuth`, `useDashboard`, `useDisclosure`)
- 🧱 Feature-based folder structure
- 🔐 **Error Boundaries** (`react-error-boundary`)

---

## 📂 Project Structure

```
src/
├── api/              # API requests and TypeScript types
├── assets/           # Static assets (images, icons, fonts, etc.)
├── components/       # Reusable UI components (Table, Drawer, Modal, etc.)
├── hooks/            # Custom React hooks (e.g. useDashboard, useDisclosure)
├── pages/            # Application pages (Dashboard, Profile, Login, etc.)
├── providers/        # Context providers
├── routes/           # Route configuration and AppRoutes
├── store/            # Redux store and slices
├── styles/           # Global styles, variables, mixins (SASS)
├── App.tsx           # Root component
└── index.tsx         # Entry point of the application

```

---

## 📜 Scripts

| Command              | Description                            |
|----------------------|----------------------------------------|
| `npm start`          | Run development server                 |
| `npm run build`      | Build app for production               |
| `npm run test`       | Launch test runner                     |
| `npm run eject`      | Eject CRA config (⚠️ irreversible)     |

---

## 🔐 API

This app uses the [DummyJSON Auth API](https://dummyjson.com/docs/auth) to simulate login functionality.

### 🔑 Test Credentials

```
username: emilys
password: emilyspass
```

You can also find additional users and passwords in the [DummyJSON Users List](https://dummyjson.com/users).

---

## 🌍 Environment Variables

Create a `.env` file in the root of the project with the following:

```env
REACT_APP_API_URL=https://api.example.com
```

*(You can rename `.env.example` as a template.)*

---

## ✅ Features

- ✅ User CRUD via dummyjson API
- ✅ Editable table with sorting and pagination
- ✅ Drawer for user details
- ✅ Modular reusable components
- ✅ Toast notifications via Ant Design
- ✅ Error handling with `react-error-boundary`
- ✅ Type safety throughout the project

---

## 📦 Deployment

Build the app for production:

```bash
npm run build
```

The output will be in the `/build` folder — ready for deployment.

---

## 📝 License

MIT © [Yehor Lashchenko](mailto:lashchenko.ys@gmail.com)

---

## 📚 Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)
- [React Docs](https://reactjs.org/)
