# Tailwind CSS Typography Demo

### Overview

This is a comprehensive demonstration project for **Tailwind CSS Typography** plugin built with Next.js. It showcases various features and customization options available in the `@tailwindcss/typography` plugin through interactive examples.

### Features

-   **Size Modifiers**: Demonstrates built-in font size adjustment tools (`prose-sm`, `prose-base`, `prose-lg`, `prose-xl`, `prose-2xl`)
-   **Element Modifiers**: Shows how to customize individual elements using modifier classes
-   **Tailwind Config Customization**: Examples of customizing typography through `tailwind.config.js`
-   **Gray Scale Theme**: Demonstrates grayscale color schemes
-   **Max Width Override**: Shows how to override default maximum width constraints
-   **Style Undoing**: Examples of selectively removing prose styles

### Technology Stack

-   **Framework**: Next.js 15.3.5
-   **Styling**: Tailwind CSS 4.x
-   **Typography**: @tailwindcss/typography 0.5.16
-   **Language**: TypeScript
-   **Package Manager**: pnpm

### Quick Start

1. **Install dependencies**:

    ```bash
    pnpm install
    ```

2. **Start development server**:

    ```bash
    pnpm dev
    ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Project Structure

```
├── app/
│   ├── 1-size-modifiers/        # Size modifier examples
│   ├── 2-element-modifiers/     # Element modifier examples
│   ├── 3-tailwind-config-js/    # Config-based customization
│   ├── 4-gray-scale/           # Gray scale theme examples
│   ├── 5-override-max-width/   # Max width override examples
│   ├── 6-undo-style/           # Style undoing examples
│   ├── custom.css              # Custom styles
│   └── page.tsx                # Main demo page
├── tailwind.config.js          # Tailwind configuration
└── package.json               # Project dependencies
```

### Demo Pages

#### 1. Size Modifiers (`/1-size-modifiers`)

Demonstrates the built-in typography size classes:

-   `prose-sm` (14px) - for screens 640px and above
-   `prose-base` (16px) - default, for screens 768px and above
-   `prose-lg` (18px) - for screens 1024px and above
-   `prose-xl` (20px) - for screens 1280px and above
-   `prose-2xl` (24px) - for screens 1536px and above

#### 2. Element Modifiers (`/2-element-modifiers`)

Shows how to customize individual elements using classes like:

-   `prose-h1:text-blue-600` - Blue color for h1 elements
-   `prose-h2:text-base` - Base font size for h2 elements
-   `prose-p:italic` - Italic style for paragraphs
-   `prose-table:border` - Borders for tables

#### 3. Tailwind Config Customization (`/3-tailwind-config-js`)

Demonstrates customization through `tailwind.config.js` file, including:

-   Custom heading colors
-   Table styling
-   Border and padding adjustments

#### 4. Additional Features

-   **Gray Scale Theme**: Monochrome color schemes
-   **Max Width Override**: Custom width constraints
-   **Style Undoing**: Selective removal of prose styles

### Customization

The project includes a custom `tailwind.config.js` with extended typography settings:

```javascript
module.exports = {
	theme: {
		extend: {
			typography: () => ({
				DEFAULT: {
					css: {
						h1: { color: "var(--color-blue-600)" },
						h2: { fontSize: "var(--font-size-base)" },
						h3: {
							color: "var(--color-pink-400)",
							border: "1px solid var(--color-orange-600)",
							padding: "8px",
							borderRadius: "0.6rem",
						},
						// ... more customizations
					},
				},
			}),
		},
	},
}
```

### Build and Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Learn More

-   [Tailwind CSS Typography Documentation](https://tailwindcss.com/docs/typography-plugin)
-   [Next.js Documentation](https://nextjs.org/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
