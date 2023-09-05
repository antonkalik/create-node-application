#!/usr/bin/env node
var r=require("fs"),i=require("path"),{exec:w,execSync:y}=require("child_process");function k(n){console.log("Creating Koa app...")}var v={express:j,koa:k};function d(n,e,s,o){let c=w(n,{cwd:e});c.stdout.on("data",t=>{s(t)}),c.stderr.on("data",t=>{s(t)}),c.on("exit",o)}function u(n,e=50){process.stdout.write(n+" ");let s=0,o=setInterval(()=>{s<e?(process.stdout.write("."),s++):clearInterval(o)},500);return o}function j(n){let e=i.join(process.cwd(),n);r.existsSync(e)||(r.mkdirSync(e,{recursive:!0}),r.mkdirSync(i.join(e,"src"))),y("npm init -y",{cwd:e});let s=["express"],o=["typescript","@types/node","@types/express","ts-node","nodemon"],c=u("Installing core dependencies");d(`npm install ${s.join(" ")}`,e,t=>{},()=>{clearInterval(c),console.log(" Done!");let t=u("Installing development dependencies");d(`npm install -D ${o.join(" ")}`,e,l=>{},()=>{clearInterval(t),console.log(" Done!");let l={compilerOptions:{target:"ES2020",module:"commonjs",outDir:"./dist",strict:!0,esModuleInterop:!0},include:["src/**/*.ts"],exclude:["node_modules"]};r.writeFileSync(i.join(e,"tsconfig.json"),JSON.stringify(l,null,2));let p=i.join(e,"package.json"),a=require(p);a.scripts={start:"node dist/index.js",dev:"nodemon src/index.ts",build:"tsc"},r.writeFileSync(p,JSON.stringify(a,null,2));let x=`
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
    console.log(\`App listening at http://localhost:\${PORT}\`);
});
`;r.writeFileSync(i.join(e,"src","index.ts"),x.trim()),console.log(`${n} - Express app created successfully!`)})})}var m=process.argv.slice(2),S=m[0];function I(n){let e=n.findIndex(s=>s==="--framework"||s==="-fw");return e!==-1&&n[e+1]?n[e+1]:null}var g=I(m);g||(console.log("No framework specified."),process.exit(1));var f=v[g];f?f(S):console.log("Unsupported framework or no framework specified.");
