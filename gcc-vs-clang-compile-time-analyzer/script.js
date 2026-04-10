const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('wasm')||txt.includes('native')) out+='- WASM vs native comparison\n';
if(txt.includes('simd')||txt.includes('scalar')) out+='- SIMD vs scalar computation\n';
if(txt.includes('epoll')||txt.includes('io_uring')) out+='- IO model comparison\n';
if(txt.includes('glibc')||txt.includes('musl')) out+='- libc implementation comparison\n';
if(txt.includes('gcc')||txt.includes('clang')) out+='- Compiler comparison\n';
if(txt.includes('grpc')||txt.includes('rest')) out+='- API protocol comparison\n';
if(txt.includes('protobuf')||txt.includes('json')) out+='- Serialization format comparison\n';
if(txt.includes('thread')||txt.includes('async')) out+='- Concurrency model comparison\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Compare performance, latency, size, and scalability\n';

res.innerText=out;
}