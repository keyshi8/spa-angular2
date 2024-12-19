
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/fakultas"
  },
  {
    "renderMode": 2,
    "route": "/prodi"
  },
  {
    "renderMode": 2,
    "route": "/mahasiswa"
  },
  {
    "renderMode": 2,
    "route": "/auth"
  },
  {
    "renderMode": 2,
    "redirectTo": "/auth",
    "route": "/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 4973, hash: 'a6c022d16fe445d4a9568270c4063f463303e59867f61a86a5b4ed24362a0e25', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1072, hash: '9dcb3cbc6210c11036d26800ae8604f3c06591bc3d6321a92234e524913249f5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['prodi/index.html', {size: 11300, hash: '847ed383ae4be5d08585e2c2600faa1d9b63f1ac54e1dca95554e7ba90ce422b', text: () => import('./assets-chunks/prodi_index_html.mjs').then(m => m.default)}], 
['fakultas/index.html', {size: 11300, hash: '847ed383ae4be5d08585e2c2600faa1d9b63f1ac54e1dca95554e7ba90ce422b', text: () => import('./assets-chunks/fakultas_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 11373, hash: '18ef787e16047d858b3a40b4b7d9a4a94ec63d3978851043b2cfe3520895e931', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['auth/index.html', {size: 17371, hash: '255fbc58050f03cef7f1a4a9baf0e997897674c9821cc9ffd6e60307b6b6129a', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)}], 
['mahasiswa/index.html', {size: 11300, hash: '847ed383ae4be5d08585e2c2600faa1d9b63f1ac54e1dca95554e7ba90ce422b', text: () => import('./assets-chunks/mahasiswa_index_html.mjs').then(m => m.default)}], 
['styles-DZ6UBGXD.css', {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
