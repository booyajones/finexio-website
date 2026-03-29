const fs=require("fs");

// TASK 4: StatsBar
let sb=fs.readFileSync("finexio-website/components/home/StatsBar.tsx","utf8");

// Fix function signature - using fromCharCode for problematic chars
