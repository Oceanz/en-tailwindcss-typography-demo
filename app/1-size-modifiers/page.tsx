export const metadata = {
	title: "Size Modifiers",
	description: "Size Modifiers",
}

export default function SizeModifiersPage() {
	const generateHtmlCode = (title: string = "Technical Documentation Title", subtitle: string = "Section Heading") => {
		return `
            <h1>H1: ${title}</h1>
            <h2>H2: ${subtitle}</h2>
            <h3>H3: Subsection Heading</h3>
            <p>Tailwind CSS follows a mobile-first design principle. This means that, by default, CSS rules without any modifiers (like text-blue-500 or p-4) are applied to all screen sizes, including the smallest mobile device screens. When you use breakpoint prefixes such as sm:, md:, or lg:, you are adding or overriding styles for screens that are larger than (or equal to) that size. Breakpoints are cumulative and overriding. If you only use sm: and not md: or lg:, the sm: styles will be active from 640px and will continue to apply indefinitely (or until a different breakpoint style overrides them).</p>
            <p>
                You can write text that is <span style="font-weight: bold;">bold</span>, <em>italicized</em>, or contains <code>code snippets</code>.
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
}</code>
            </pre>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HTML</td>
                        <td>Hypertext Markup Language</td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>Cascading Style Sheets</td>
                    </tr>
                </tbody>
            </table>`
	}

	const configurations = [
		{ proseClass: "prose-sm", title: "prose-sm 0.875rem (14px)", subtitle: "For screens 640px and up" },
		{ proseClass: "prose-base", title: "prose-base 1rem (16px)", subtitle: "Can also be written as 'prose', this is the default and applies to screens 768px and up" },
		{ proseClass: "prose-lg", title: "prose-lg 1.125rem (18px)", subtitle: "For screens 1024px and up" },
		{ proseClass: "prose-xl", title: "prose-xl 1.25rem (20px)", subtitle: "For screens 1280px and up" },
		{ proseClass: "prose-2xl", title: "prose-2xl 1.5rem (24px)", subtitle: "For screens 1536px and up" },
	]

	return (
		<div className="flex flex-row space-x-4 p-3">
			{configurations.map((config, index) => (
				<div
					key={index}
					className={`w-1/5 border-1 border-gray-300 p-2 prose dark:prose-invert ${config.proseClass}`}
					dangerouslySetInnerHTML={{
						__html: generateHtmlCode(config.title, config.subtitle),
					}}
				/>
			))}
		</div>
	)
}
