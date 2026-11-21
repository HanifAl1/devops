# traindevops

Landing page simpel untuk latihan perintah git.

## Menjalankan

Buka `index.html` di browser, atau:

```bash
python -m http.server 8000
```

## Latihan Git

```bash
git add .
git commit -m "feat: landing page awal"
git branch fitur-baru
git switch fitur-baru
# edit sesuatu
git diff
git add .
git commit -m "feat: tambah fitur"
git switch main
git merge fitur-baru
git log --oneline --graph
```
