# 🎨 DeltaQuest - Color Guide

This document defines the **color theme** to be used for the **DeltaQuest** website.  
It is based on the logo and the Tailwind colors already in use (blue, gray, dark mode).

---

## 🌐 Primary Colors (Branding)

| Name            | Color | HEX     | Usage |
|-----------------|-------|---------|-------|
| **Primary**     | 🔵    | `#1E63C4` | Primary buttons, links, accents |
| **Primary Dark**| 🔵    | `#1453A6` | Hover for primary buttons and links |
| **Secondary**   | 🔵    | `#4BA8FF` | Secondary elements, highlights |
| **Accent (White)** | ⚪ | `#FFFFFF` | Contrast, inverted text |

---

## ⚪ Neutral Colors (Text & Backgrounds)

| Name                  | Color | HEX     | Usage |
|-----------------------|-------|---------|-------|
| **Text Primary**      | ⚫    | `#111827` | Main text, headings |
| **Text Secondary**    | ⚫    | `#6B7280` | Paragraphs, subtitles |
| **Background Light**  | ⚪    | `#F9FAFB` | Light background |
| **Background Dark**   | ⚫    | `#111827` | Dark background (dark mode) |

---

## 🔴 States & Feedback

| State           | Color | HEX     | Usage |
|-----------------|-------|---------|-------|
| **Success**     | 🟢    | `#10B981` | Success messages, validations |
| **Warning**     | 🟡    | `#F59E0B` | Moderate alerts |
| **Error**       | 🔴    | `#EF4444` | Error messages |

---

## 📌 Usage Examples

- **Primary Button (CTA)**
    - Background: `Primary`
    - Text: `White`
    - Hover: `Primary Dark`

- **Secondary Button**
    - Border: `Primary`
    - Text: `Primary`
    - Hover: `Secondary` with light background (`bg-blue-100`)

- **Headings (H1, H2, H3)**
    - Light mode: `Text Primary`
    - Dark mode: `Gray-100`

- **Paragraphs**
    - `Text Secondary`

- **Links**
    - Text: `Primary`
    - Hover: `Primary Dark`

- **Alerts**
    - Success: background `green-100`, text `green-700`
    - Warning: background `yellow-100`, text `yellow-700`
    - Error: background `red-100`, text `red-700`

---

## 🌑 Dark Mode

- Primary text: `gray-100`
- Secondary text: `gray-400`
- Backgrounds: `Background Dark`
- Primary buttons: `dark:bg-blue-500` → hover `dark:bg-blue-600`

---

✍️ **Note:**  
This guide can be extended in `tailwind.config.js` with a custom palette for easier usage (e.g., `text-primary`, `bg-primary`, etc.).
