import Link from "next/link"
import "../custom.css"

export default function TailwindConfigJS() {
	return (
		<div className="flex flex-row space-x-6 items-start justify-center h-screen w-screen p-8">
			<div className="prose dark:prose-invert">
				<h1>⚙️ Tailwind Config JS Styles</h1>
				<h2>H2: Section Heading</h2>
				<h3>H3: Subsection Heading</h3>
				<p>This content does not use Typography styles, and instead uses the browser&rsquo;s default styles, also known as the User Agent Stylesheet.</p>
				<p>
					You can write text that is <span style={{ fontWeight: "bold" }}>bold</span>, <em>italicized</em>, or contains <code>code snippets</code>.
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
				<pre>
					<code>{`function greet(name) {
  return 'Hello, ' + name + '!';
}`}</code>
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
				</table>

				<h4>Feature Showcase</h4>
				<ul>
					<li>
						<Link href="/1-size-modifiers">Size Modifiers (Built-in Font Size Adjustment Tools)</Link>
					</li>
					<li>
						<Link href="/2-element-modifiers">Element Modifiers (Customization)</Link>
					</li>
					<li>
						<Link href="/3-tailwind-config-js">Tailwind Config JS Customization</Link>
					</li>
					<li>
						<Link href="/4-gray-scale">Grayscale Theme</Link>
					</li>
					<li>
						<Link href="/5-override-max-width">Override Default Max-Width</Link>
					</li>
					<li>
						<Link href="/6-undo-style">Undo Prose Styles</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
