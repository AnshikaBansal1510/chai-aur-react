# 🌗 Theme Switcher with Context API

A simple React app that demonstrates how to use the **Context API** to switch between **Light Mode** and **Dark Mode** without prop drilling.

---

## 🚀 Why Context API?

Normally, passing theme state (`light` / `dark`) through multiple nested components causes **prop drilling**.  
With **Context API**, we can store theme state globally and access it anywhere in the component tree.

---

# 📌 Key Points

- Context API solves prop drilling by providing global state.

- ThemeProvider manages the theme state (light / dark).

- useTheme() (custom hook) makes consuming context easy.

- Any component inside the ThemeProvider can toggle or read the theme.
