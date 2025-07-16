export default function UndoStyle() {
	return (
		<div className="flex flex-row space-x-6 items-start justify-center h-screen w-screen p-8">
			<div className="prose dark:prose-invert">
				<h1>✅ With Typography</h1>
				<h2>H2: Section Heading</h2>
				<h3>H3: Subsection Heading</h3>
				<p>This is a paragraph to demonstrate typography styles, showing the visual effects of line height, letter spacing, and paragraph spacing.</p>
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
			</div>

			<div className="prose dark:prose-invert">
				<h1 className="not-prose">❌ Undo Some Typography Styles</h1>
				<h2>H2: not-prose</h2>
				<h3>H3: Subsection Heading</h3>
				<p>This is a paragraph to demonstrate typography styles, showing the visual effects of line height, letter spacing, and paragraph spacing.</p>
				<p>
					You can write text that is <span style={{ fontWeight: "bold" }}>bold</span>, <em>italicized</em>, or contains <code>code snippets</code>.
				</p>
				<blockquote>This is a blockquote area.</blockquote>
				<ul className="not-prose">
					<li>Unordered List Item A</li>
					<li>Unordered List Item B</li>
					<li className="text-red-500">Add the `not-prose` class to undo typography styles</li>
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
				<table className="not-prose">
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
						<tr>
							<td className="text-red-500">Add the `not-prose` class to undo typography styles</td>
							<td className="text-red-500">Add the `not-prose` class to undo typography styles</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
