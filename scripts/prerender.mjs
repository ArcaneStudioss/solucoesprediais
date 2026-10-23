// Gera o HTML pronto da home (Google e visitante sem JavaScript veem a página inteira).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const dist = resolve('dist')
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const tpl = readFileSync(resolve(dist, 'index.html'), 'utf8')
const html = tpl.replace('<!--app-->', render()).replace(/<span data-ano>\d{4}<\/span>/, `<span data-ano>${new Date().getFullYear()}</span>`)
writeFileSync(resolve(dist, 'index.html'), html)
rmSync(resolve('dist-ssr'), { recursive: true, force: true })
console.log('prerender ok:', (html.length / 1024).toFixed(1), 'KB')
