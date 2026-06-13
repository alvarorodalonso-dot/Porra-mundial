# Carpeta de apuestas

Mete aquí los archivos **`.xlsx`** de las apuestas (el formato oficial de la
porra, el mismo que rellenan los participantes).

Luego, desde la carpeta del proyecto, ejecuta:

```bash
npm run importar
```

Esto lee TODOS los `.xlsx` de esta carpeta y regenera `lib/participantes.ts`
con todos los boletos. Después:

```bash
npm run build        # comprobar que todo compila
git add -A
git commit -m "Importadas N apuestas"
git push             # Vercel redespliega solo
```

### Notas
- El **número del boleto** se toma del principio del nombre del archivo
  (p. ej. `134 Apuesta2026 ...` → boleto 134).
- Si una persona tiene varias apuestas, se muestran como
  `Nombre (Apuesta 1)`, `Nombre (Apuesta 2)`, etc.
- Para ver qué leería sin escribir nada:  `npm run importar -- --dry-run`
- Los `.xlsx` de esta carpeta **no se suben a GitHub** (están en `.gitignore`);
  lo que se sube es el `lib/participantes.ts` generado.
