# Majors Marks

A web app for viewing YTU majors, admission marks, and detailed department information, built with React and Vite.

## Features

- عرض علامات القبول للأقسام الجامعية
- تعريف الأقسام مع عرض ملف PDF تفاعلي لكل قسم
- بحث وتصفية للأقسام
- واجهة عربية متجاوبة وسهلة الاستخدام
- روابط مباشرة لبوت تلجرام للمساعدة

## Live Link
https://majors-marks-ytuasu.pages.dev/

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [@react-pdf-viewer/core](https://react-pdf-viewer.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/majors-marks.git
   cd majors-marks
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```


## Project Structure

```
src/
  components/    # Reusable UI components (Navbar, Datatable, etc.)
  pages/         # Main pages (MajorsDetails, etc.)
  assets/        # Static files (PDFs, images)
  App.jsx        # Main app component
  main.jsx       # Entry point
```

## Customization

- To update the majors or marks, edit the data in `src/components/Datatable.jsx`.
- To update the majors guide PDF, replace the file at `public/assets/majors-guide.pdf`.

