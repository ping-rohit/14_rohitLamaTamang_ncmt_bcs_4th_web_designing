# Color palette

The site uses a strict black-and-white palette, no other hues.

| Token | Hex | Used for |
|---|---|---|
| `--black` | `#000000` | Text, borders, sidebar background, filled buttons |
| `--white` | `#ffffff` | Page background, text on black |
| `--gray` | `#5a5a5a` | Secondary body text |
| `--gray-light` | `#8f8f8f` | Muted labels, meta text |
| `--line-light` | `#c9c9c9` | Hairlines, subtle dividers |

All values are defined once in `assets/css/style.css` under `:root` and
reused everywhere with `var(--token-name)`.
