"use strict";(self.webpackChunkyang_template=self.webpackChunkyang_template||[]).push([[810],{3486:(e,t,r)=>{r.d(t,{d:()=>s});var o=r(1563);const s=()=>{const e=new o.cPb(75,1,.1,1e4);return e.position.set(5,5,20),e.lookAt(0,0,0),e}},239:(e,t,r)=>{r.d(t,{z:()=>s});var o=r(1563);const s=()=>{const e=new o.DvJ(5,5,5),t=new o.Wid({color:"0xf00"});return new o.Kj0(e,t)}},2375:(e,t,r)=>{r.d(t,{o:()=>s});var o=r(1563);const s=()=>{const e=new o.CP7({antialias:!0});return e.physicallyCorrectLights=!0,e}},9055:(e,t,r)=>{r.d(t,{a:()=>s});var o=r(1563);const s=()=>{const e=new o.xsS;return e.background=new o.Ilk("0xeee"),e}},2783:(e,t,r)=>{function o(e,t,r){e.aspect=r.clientWidth/r.clientHeight,e.updateProjectionMatrix(),t.setSize(r.clientWidth,r.clientHeight),t.setPixelRatio(window.devicePixelRatio)}r.d(t,{t:()=>s});class s{constructor(e,t,r){o(e,t,r),window.addEventListener("resize",(()=>{o(e,t,r),this.onResize()}))}onResize(){}}},7810:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var o=r(571),s=r(2783),n=r(2375),i=r(9055),a=r(3486),d=r(239),c=r(1563);var l=r(8871),u=r(5380);const h=new c.dpR,f="/yang-admin",y=new l.E,w=async()=>{new u._;const e=await y.loadAsync("/yang-admin/models/person/LeePerrySmith.glb");console.log("personData",e);return(e=>{const t=e.scene.children[0];console.log("model",t);const r=h.load(f+"/models/person/Map-COL.jpg");return h.load(f+"/models/person/Map-SPEC.jpg"),h.load(f+"/models/person/Infinite-Level_02_Tangent_SmoothUV.jpg"),t.material=new c.Wid({map:r}),console.log("map",t.material),t})(e)};var p=r(4828);const g=async e=>{const t=(0,n.o)(),r=(0,i.a)();r.background=new c.Ilk(0);const o=(0,a.d)();(0,d.z)().material=new c.Wid({color:16777215});const l=await w(),{light1:u,light2:h}=(()=>{const e=new c.Ox3(16777215,5);e.position.set(5,5,0);const t=new c.Ox3(16777215,5);return t.position.set(-5,5,0),{light1:e,light2:t}})();r.add(l,u,h);const f=document.querySelector(e);if(f){new p.z(o,t.domElement).addEventListener("change",(()=>{t.render(r,o)}));return new s.t(o,t,f).onResize=()=>{t.render(r,o)},f.append(t.domElement),t.render(r,o),{renderer:t}}throw Error("\u627e\u4e0d\u5230\u5143\u7d20")};var m=r(3140);const b=()=>{let e={};return(0,o.useEffect)((()=>((async()=>{e=await g("#container")})(),()=>{})),[]),(0,m.jsx)("div",{className:"bg-white h-full",id:"container"})}},5380:(e,t,r)=>{r.d(t,{_:()=>n});var o=r(1563);const s=new WeakMap;class n extends o.aNw{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,r,s){const n=new o.hH6(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,(e=>{const r={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(e,r).then(t).catch(s)}),r,s)}decodeDracoFile(e,t,r,o){const s={attributeIDs:r||this.defaultAttributeIDs,attributeTypes:o||this.defaultAttributeTypes,useUniqueIDs:!!r};this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){for(const s in t.attributeTypes){const e=t.attributeTypes[s];void 0!==e.BYTES_PER_ELEMENT&&(t.attributeTypes[s]=e.name)}const r=JSON.stringify(t);if(s.has(e)){const t=s.get(e);if(t.key===r)return t.promise;if(0===e.byteLength)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let o;const n=this.workerNextTaskID++,i=e.byteLength,a=this._getWorker(n,i).then((r=>(o=r,new Promise(((r,s)=>{o._callbacks[n]={resolve:r,reject:s},o.postMessage({type:"decode",id:n,taskConfig:t,buffer:e},[e])}))))).then((e=>this._createGeometry(e.geometry)));return a.catch((()=>!0)).then((()=>{o&&n&&this._releaseTask(o,n)})),s.set(e,{key:r,promise:a}),a}_createGeometry(e){const t=new o.u9r;e.index&&t.setIndex(new o.TlE(e.index.array,1));for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r],n=s.name,i=s.array,a=s.itemSize;t.setAttribute(n,new o.TlE(i,a))}return t}_loadLibrary(e,t){const r=new o.hH6(this.manager);return r.setPath(this.decoderPath),r.setResponseType(t),r.setWithCredentials(this.withCredentials),new Promise(((t,o)=>{r.load(e,t,void 0,o)}))}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e="object"!==typeof WebAssembly||"js"===this.decoderConfig.type,t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then((t=>{const r=t[0];e||(this.decoderConfig.wasmBinary=t[1]);const o=i.toString(),s=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([s]))})),this.decoderPending}_getWorker(e,t){return this._initDecoder().then((()=>{if(this.workerPool.length<this.workerLimit){const e=new Worker(this.workerSourceURL);e._callbacks={},e._taskCosts={},e._taskLoad=0,e.postMessage({type:"init",decoderConfig:this.decoderConfig}),e.onmessage=function(t){const r=t.data;switch(r.type){case"decode":e._callbacks[r.id].resolve(r);break;case"error":e._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(e)}else this.workerPool.sort((function(e,t){return e._taskLoad>t._taskLoad?-1:1}));const r=this.workerPool[this.workerPool.length-1];return r._taskCosts[e]=t,r._taskLoad+=t,r}))}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map((e=>e._taskLoad)))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function i(){let e,t;function r(e,t,r,o,s,n){const i=n.num_components(),a=r.num_points()*i,d=a*s.BYTES_PER_ELEMENT,c=function(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}(e,s),l=e._malloc(d);t.GetAttributeDataArrayForAllPoints(r,n,c,d,l);const u=new s(e.HEAPF32.buffer,l,a).slice();return e._free(l),{name:o,array:u,itemSize:i}}onmessage=function(o){const s=o.data;switch(s.type){case"init":e=s.decoderConfig,t=new Promise((function(t){e.onModuleLoaded=function(e){t({draco:e})},DracoDecoderModule(e)}));break;case"decode":const o=s.buffer,n=s.taskConfig;t.then((e=>{const t=e.draco,i=new t.Decoder,a=new t.DecoderBuffer;a.Init(new Int8Array(o),o.byteLength);try{const e=function(e,t,o,s){const n=s.attributeIDs,i=s.attributeTypes;let a,d;const c=t.GetEncodedGeometryType(o);if(c===e.TRIANGULAR_MESH)a=new e.Mesh,d=t.DecodeBufferToMesh(o,a);else{if(c!==e.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");a=new e.PointCloud,d=t.DecodeBufferToPointCloud(o,a)}if(!d.ok()||0===a.ptr)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const l={index:null,attributes:[]};for(const u in n){const o=self[i[u]];let d,c;if(s.useUniqueIDs)c=n[u],d=t.GetAttributeByUniqueId(a,c);else{if(c=t.GetAttributeId(a,e[n[u]]),-1===c)continue;d=t.GetAttribute(a,c)}l.attributes.push(r(e,t,a,u,o,d))}c===e.TRIANGULAR_MESH&&(l.index=function(e,t,r){const o=r.num_faces(),s=3*o,n=4*s,i=e._malloc(n);t.GetTrianglesUInt32Array(r,n,i);const a=new Uint32Array(e.HEAPF32.buffer,i,s).slice();return e._free(i),{array:a,itemSize:1}}(e,t,a));return e.destroy(a),l}(t,i,a,n),o=e.attributes.map((e=>e.array.buffer));e.index&&o.push(e.index.array.buffer),self.postMessage({type:"decode",id:s.id,geometry:e},o)}catch(d){console.error(d),self.postMessage({type:"error",id:s.id,error:d.message})}finally{t.destroy(a),t.destroy(i)}}))}}}}}]);