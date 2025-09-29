module.exports = {
content: [
'./src/app//*.{js,ts,jsx,tsx,mdx}',
'./src/components//.{js,ts,jsx,tsx,mdx}',
'./app/**/.{js,ts,jsx,tsx,mdx}',
'./components/**/.{js,ts,jsx,tsx,mdx}'
],
theme: { extend: {} },
plugins: [],
safelist: [
{ pattern: /bg-var\(--color-(background|foreground|accent)\)/ },
{ pattern: /text-var\(--color-(background|foreground|accent)\)/ },
{ pattern: /border-var\(--color-(background|foreground|accent)\)/ },
{ pattern: /backdrop-blur./ }
]
}