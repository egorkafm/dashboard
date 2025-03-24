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
├── api/              # API functions
├── assets/           # Static assets (e.g. images, icons)
├── components/       # Reusable UI components (Table, Drawer, Modal, etc.)
├── hooks/            # Custom React hooks
├── pages/            # Pages (Dashboard, Login, Profile, etc.)
├── store/            # Redux store and slices
├── types/            # Shared TypeScript types
├── App.tsx
└── index.tsx
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

MIT © [Yehor Lashchenko](mailto:your@email.com)

---

## 📚 Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)
- [React Docs](https://reactjs.org/)
