import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
    margin: 0,
    padding: 0,
})

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box',
})

globalStyle('html, body', {
    height: '100%',
    width: '100%',
})

globalStyle('body', {
    WebkitFontSmoothing: 'antialiased',
})

globalStyle('img, picture, video, canvas', {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
})

globalStyle('svg', {
    display: 'block',
    width: '100%',
})

globalStyle('input, button, textarea, select', {
    font: 'inherit',
})

globalStyle('li', {
    listStyle: 'none',
})
