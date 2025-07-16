export const metadata = {
	title: "Tailwind Typography Grayscale Themes Demo",
	description: "A visual comparison of prose-gray, slate, zinc, neutral, and stone themes and their design intent.",
}

export default function GrayScalePage() {
	const generateHtmlCode = (proseClass: string, title: string = "Technical Documentation Title", subtitle: string = "Section Heading") => {
		return `<div class="${proseClass} dark:prose-invert">
            <h1>H1: ${title}</h1>
            <h2>H2: ${subtitle}</h2>
            <h3>H3: Subsection Heading</h3>
            <p>This is a paragraph to demonstrate the styles of the \`p\` tag, including line height, letter spacing, and paragraph spacing.</p>
            <p>
                You can write text that is <strong>bold</strong>, <em>italicized</em>, or contains <code>code snippets</code>.
            </p>
            <blockquote>This is a blockquote area.</blockquote>
            <ul>
                <li>Unordered List Item A</li>
                <li>Unordered List Item B</li>
            </ul>
            <ol>
                <li>Ordered List 1</li>
                <li>Ordered List 2</li>
            </ol>
            <pre><code>function greet(name) {
  return 'Hello, ' + name + '!';
}</code></pre>
            <table>
                <thead>
                    <tr><th>Item</th><th>Description</th></tr>
                </thead>
                <tbody>
                    <tr><td>HTML</td><td>Hypertext Markup Language</td></tr>
                    <tr><td>CSS</td><td>Cascading Style Sheets</td></tr>
                </tbody>
            </table>
        </div>`
	}

	const configurations = [
		{ proseClass: "prose-gray", title: "Grayscale Theme: gray", subtitle: "Gray Section" },
		{ proseClass: "prose-slate", title: "Slate Theme: slate", subtitle: "Slate Section" },
		{ proseClass: "prose-zinc", title: "Zinc Theme: zinc", subtitle: "Zinc Section" },
		{ proseClass: "prose-neutral", title: "Neutral Theme: neutral", subtitle: "Neutral Section" },
		{ proseClass: "prose-stone", title: "Stone Theme: stone", subtitle: "Stone Section" },
	]

	return (
		<div className="p-4 w-screen space-y-4">
			{/* Top explanatory text */}
			<section className="max-w-5xl prose dark:prose-invert">
				<h1>Tailwind Typography Grayscale Themes Comparison</h1>
				<p>
					Tailwind offers <code>5</code> grayscale typography themes designed to align with the gray tones of different design languages.
				</p>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Style</th>
							<th>Color Temperature</th>
							<th>Feel</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>gray</td>
							<td>Default / General</td>
							<td>Neutral-warm</td>
							<td>Most universal and traditional</td>
						</tr>
						<tr>
							<td>slate</td>
							<td>Cool / Tech-inspired</td>
							<td>Cool</td>
							<td>Slightly bluish, good for code-heavy documentation</td>
						</tr>
						<tr>
							<td>zinc</td>
							<td>Metallic / Minimalist</td>
							<td>Cool-gray</td>
							<td>Very neutral, suitable for UI component documentation</td>
						</tr>
						<tr>
							<td>neutral</td>
							<td>Pure neutral</td>
							<td>Extremely neutral</td>
							<td>Slightly grayish-yellow, visually the softest</td>
						</tr>
						<tr>
							<td>stone</td>
							<td>Natural / Soft</td>
							<td>Warm</td>
							<td>Resembles paper or stone, with a natural, vintage feel</td>
						</tr>
					</tbody>
				</table>

				<h2>Why do they all seem so similar?</h2>
				<p>
					The shared background color and smaller font size can mask the subtle color differences in details like blockquotes, list markers, code blocks, and table borders. But they do have
					subtle differences across themes.
				</p>
			</section>

			{/* Grayscale theme demonstration area */}
			<div className="flex flex-row space-x-2">
				{configurations.map((config, index) => (
					<div
						key={index}
						className={`w-1/5 prose dark:prose-invert p-2 rounded-lg border border-gray-300 shadow-sm ${config.proseClass}`}
						dangerouslySetInnerHTML={{
							__html: generateHtmlCode(config.proseClass, config.title, config.subtitle),
						}}
					/>
				))}
			</div>
		</div>
	)
}
