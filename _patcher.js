const fs=require("fs");
const LT=String.fromCharCode(60);
const GT=String.fromCharCode(62);
const DS=String.fromCharCode(36);
const BT=String.fromCharCode(96);
const Q=String.fromCharCode(34);
const NL=String.fromCharCode(10);

let sb=fs.readFileSync("finexio-website/components/home/StatsBar.tsx","utf8");
// Fix CountUp signature
const sbIdx=sb.indexOf("function CountUp(");
const sbEnd=sb.indexOf(") {",sbIdx);
let newSig="function CountUp({";
newSig+=NL+"  end,";
newSig+=NL+"  format,";
newSig+=NL+"}: {";
newSig+=NL+"  end: number;";
newSig+=NL+"  format: (n: number) => string;";
newSig+=NL+"}";
sb=sb.substring(0,sbIdx)+newSig+sb.substring(sbEnd+3);
sb=sb.replace("const increment = to / steps;","const increment = end / steps;");
sb=sb.replace("current = Math.min(current + increment, to);","current = Math.min(current + increment, end);");
sb=sb.replace("if (current >= to) clearInterval(timer);","if (current >= end) clearInterval(timer);");
sb=sb.replace(", [inView, to]);",", [inView, end]);");
let retOld=LT+"span ref={ref}"+GT;
retOld+=NL+"      {prefix}{count.toLocaleString()}{suffix}";
retOld+=NL+"    "+LT+"/span"+GT;
const retNew=LT+"span ref={ref}"+GT+"{format(count)}"+LT+"/span"+GT;
sb=sb.replace(retOld,retNew);
// Fix the return ( wrapper around span
let rw="  return (";
rw+=NL+"    "+LT+"span ref={ref}"+GT;
rw+=NL+"      {prefix}{count.toLocaleString()}{suffix}";
rw+=NL+"    "+LT+"/span"+GT;
rw+=NL+"  );"
const rwNew="  return "+LT+"span ref={ref}"+GT+"{format(count)}"+LT+"/span"+GT+";";
sb=sb.replace(rw,rwNew);
// Replace stats array
const statsStart=sb.indexOf("const stats = [");
const statsEnd=sb.indexOf("];",statsStart)+2;
let ns="const stats = [";
ns+=NL+"  { label: "+Q+"Payment Volume Processed"+Q+", end: 58, format: (n: number) => "+BT+DS+"{(n / 10).toFixed(1)}B+"+BT+" },";
ns+=NL+"  { label: "+Q+"Active Buyers"+Q+", end: 1300, format: (n: number) => n.toLocaleString() + "+Q+"+"+Q+" },";
ns+=NL+"  { label: "+Q+"Enrolled Suppliers"+Q+", end: 3, format: (n: number) => n + "+Q+"M+"+Q+" },";
ns+=NL+"  { label: "+Q+"Partner Customers"+Q+", end: 4700, format: (n: number) => n.toLocaleString() + "+Q+"+"+Q+" },";
ns+=NL+"  { label: "+Q+"Partners Lost Since Launch"+Q+", end: 0, format: () => "+Q+"0"+Q+" },";
ns+=NL+"];"
sb=sb.substring(0,statsStart)+ns+sb.substring(statsEnd);
const cuOld=LT+"CountUp to={stat.value} suffix={stat.suffix} prefix={stat.prefix} /"+GT;
const cuNew=LT+"CountUp end={stat.end} format={stat.format} /"+GT;
sb=sb.replace(cuOld,cuNew);
sb=sb.replace("stats.map((stat, i) => (","stats.map((stat) => (");
sb=sb.replace("Backed by J.P. Morgan "+String.fromCharCode(183)+" Visa Commercial Partner "+String.fromCharCode(183)+" SOC 2 Type II Certified","Backed by J.P. Morgan &middot; Visa Commercial Partner &middot; SOC 2 Type II Certified");
fs.writeFileSync("finexio-website/components/home/StatsBar.tsx",sb);
console.log("StatsBar done");
