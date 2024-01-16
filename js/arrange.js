

;(function() { "use strict";

	var
		/**
		 * The parsed output string, in HTML format.
		 * @type {String}
		 */
		output = "",

		BLOCK = "block",
		INLINE = "inline",

		/**
		 * Used to attach MarkdownToHtml object to `window` in browser
		 * context, or as an AMD module where appropriate.
		 * @type {Object}
		 */
		exports,

		/**
		 * An array of parse rule descriptor objects. Each object has two keys;
		 * pattern (the RegExp to match), and replace (the replacement string or
		 * function to execute).
		 * @type {Array}
		 */
		parseMap = [
			{
				// mathjax \[ \]
				// works over multiple lines
				pattern: /(\$\$)((?:.|\n)*?)\1/g,
				replace: "\\[$2\\]",
				type: INLINE,
			},
			{
				// mathjax \( \)
				// works over multiple lines
				pattern: /(\$)((?:.|\n)*?)\1/g,
				replace: "\\($2\\)",
				type: INLINE,
			}
		],
	$$;

	/**
	 * Self-executing function to handle exporting the parse function for
	 * external use.
	 */
	(function go() {
		// Export AMD module if possible.
		if(typeof module !== "undefined"
		&& typeof module.exports !== "undefined") {
			exports = module.exports;
		}
		// Otherwise check for browser context.
		else if(typeof window !== "undefined") {
			window.MarkdownToHtml = {};
			exports = window.MarkdownToHtml;
		}

		exports.parse = parse;
	})();

	/**
	 * Parses a provided Markdown string into valid HTML.
	 *
	 * @param  {string} string Markdown input for transformation
	 * @return {string}        Transformed HTML output
	 */
	function parse(string) {
		// Pad with newlines for compatibility.
		output = "\n" + string + "\n";

		parseMap.forEach(function(p) {
			// Replace all matches of provided RegExp pattern with either the
			// replacement string or callback function.
			output = output.replace(p.pattern, function() {
				// console.log(this, arguments);
				return replace.call(this, arguments, p.replace, p.type);
			});
		});

		// Perform any post-processing required.
		output = clean(output);
		// Trim for any spaces or newlines.
		output = output.trim();
		// Tidy up newlines to condense where more than 1 occurs back to back.
		output = output.replace(/[\n]{1,}/g, "\n");
		return output;
	}

	function replace(matchList, replacement, type) {
		var
			i,
		$$;

		for(i in matchList) {
			if(!matchList.hasOwnProperty(i)) {
				continue;
			}

			// Replace $n with the matching regexp group.
			replacement = replacement.split("$" + i).join(matchList[i]);
			// Replace $Ln with the matching regexp group's string length.
			replacement = replacement.split("$L" + i).join(matchList[i].length);
		}

		if(type === BLOCK) {
			replacement = replacement.trim() + "\n";
		}

		return replacement;
	}

	function clean(string) {
		var cleaningRuleArray = [
			{
				match: /<\/([uo]l)>\s*<\1>/g,
				replacement: "",
			},
			{
				match: /(<\/\w+>)<\/(blockquote)>\s*<\2>/g,
				replacement: "$1",
			},
		];

		cleaningRuleArray.forEach(function(rule) {
			string = string.replace(rule.match, rule.replacement);
		});

		return string;
	}

})();


function main() {
	let elems = document.getElementsByClassName("md-conv");
	Array.from(elems).forEach((elem) => {
		// elem.innerHTML = MarkdownToHtml.parse(elem.innerHTML);
		let e = elem.innerHTML.replace(/(\n|^)\&gt;/g, "$1>")
		// let e = elem.innerHTML.replace(/\&lt; /g, "< ")
		e = marked.parse(e);
		// console.log(e);
		elem.innerHTML = MarkdownToHtml.parse(e);
		// elem.innerHTML = elem.textContent;
	});
	let code = document.getElementsByTagName("code");
	Array.from(code).forEach((c) => {
		// console.log(c);
		c.textContent = c.textContent.replace(/\&amp;/g, "&");
		c.textContent = c.textContent.replace(/\&gt;/g, ">");
		c.textContent = c.textContent.replace(/\&lt;/g, "<");
	})
}



main();


