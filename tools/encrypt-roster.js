#!/usr/bin/env node
// Encrypts data/students.xlsx → data/roster.enc using AES-256-CBC
// Key derived via PBKDF2 (matching Web Crypto API on the client side)
//
// Usage: node tools/encrypt-roster.js

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PASSPHRASE = "teaching_roster_key_2026";
const SALT = "roster_salt";
const ITERATIONS = 100000;
const INPUT = path.join(__dirname, "..", "data", "students.xlsx");
const OUTPUT = path.join(__dirname, "..", "data", "roster.enc");

const raw = fs.readFileSync(INPUT);

const key = crypto.pbkdf2Sync(PASSPHRASE, SALT, ITERATIONS, 32, "sha256");
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
const encrypted = Buffer.concat([cipher.update(raw), cipher.final()]);

// Format: 16-byte IV + encrypted data, base64 encoded
const payload = Buffer.concat([iv, encrypted]).toString("base64");
fs.writeFileSync(OUTPUT, payload, "utf8");

console.log(`Encrypted ${INPUT} -> ${OUTPUT} (${raw.length} bytes -> ${payload.length} chars)`);
console.log("You can now remove data/students.xlsx from the deployed site.");
