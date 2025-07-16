export default function OverrideMaxWidth() {
	return (
		<div className="flex flex-col space-y-8 p-8">
			<div className="prose dark:prose-invert">
				<h1>Default Behavior</h1>
				<p>
					Overriding Max Width: Every size modifier includes a built-in `max-width` to maintain content readability. However, this may not always be the desired effect, as sometimes you
					might want the content to fill its container's full width. In these cases, you just need to add `max-w-none` to your content to override the built-in max-width. Summary: The
					default behavior of the `prose` class (e.g., `prose-lg`, `prose-xl`, etc.) in Tailwind CSS is to apply a `max-width` constraint. The purpose of this default `max-width` is to
					improve the readability of text content by preventing lines from becoming too long. The need to override arises when you want the content to fill the full available width of its
					parent container. The solution is simple: to make the content fill the container completely, just add the `max-w-none` Tailwind CSS utility class to the element that already has
					the `prose` class. The `max-w-none` class removes the default maximum width constraint set by `prose`.
				</p>
			</div>
			<div className="prose dark:prose-invert max-w-none">
				<h1>Override Max Width</h1>
				<p>
					Overriding Max Width: Every size modifier includes a built-in `max-width` to maintain content readability. However, this may not always be the desired effect, as sometimes you
					might want the content to fill its container's full width. In these cases, you just need to add `max-w-none` to your content to override the built-in max-width. Summary: The
					default behavior of the `prose` class (e.g., `prose-lg`, `prose-xl`, etc.) in Tailwind CSS is to apply a `max-width` constraint. The purpose of this default `max-width` is to
					improve the readability of text content by preventing lines from becoming too long. The need to override arises when you want the content to fill the full available width of its
					parent container. The solution is simple: to make the content fill the container completely, just add the `max-w-none` Tailwind CSS utility class to the element that already has
					the `prose` class. The `max-w-none` class removes the default maximum width constraint set by `prose`.
				</p>
			</div>
		</div>
	)
}
