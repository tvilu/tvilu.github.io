(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var n,r=i(a("PJYZ")),l=i(a("VbXa")),s=i(a("8OQS")),o=i(a("pVnL")),d=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,i=p(t||a||[]);return i&&i.src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,v=E&&window.IntersectionObserver,b=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:r}),a&&d.default.createElement("source",{media:n,srcSet:a,sizes:r}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function C(e,t){var a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?i:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var T=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+d+l+s+a+i+t+r+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=d.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,n=e.generateSources,r=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(k,(0,o.default)({ref:t,src:a},r,{ariaHidden:l}));return i.length>1?d.default.createElement("picture",null,n(i),s):s})),k=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:i,src:n},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||E&&(y||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=T(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,b=e.itemProp,S=e.loading,C=e.draggable,T=g||h;if(!T)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,o.default)({opacity:j?1:0,transition:O?"opacity "+E+"ms":"none"},s),z="boolean"==typeof y?"lightgray":y,V={transitionDelay:E+"ms"},H=(0,o.default)({opacity:this.state.imgLoaded?0:1},O&&V,s,f),P={title:t,alt:this.state.isVisible?"":a,style:H,className:m,itemProp:b},F=this.state.isHydrated?p(T):T[0];if(g)return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:F.maxWidth?F.maxWidth+"px":null,maxHeight:F.maxHeight?F.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(F.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/F.aspectRatio+"%"}}),z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&V)}),F.base64&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:F.base64,spreadProps:P,imageVariants:T,generateSources:I}),F.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:F.tracedSVG,spreadProps:P,imageVariants:T,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,x(T),d.default.createElement(k,{alt:a,title:t,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:S,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:S},F,{imageVariants:T}))}}));if(h){var B=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},r);return"inherit"===r.display&&delete B.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},z&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:z,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},O&&V)}),F.base64&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:F.base64,spreadProps:P,imageVariants:T,generateSources:I}),F.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:F.tracedSVG,spreadProps:P,imageVariants:T,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,x(T),d.default.createElement(k,{alt:a,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:S,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:S},F,{imageVariants:T}))}}))}return null},t}(d.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),N=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function z(e){return function(t,a,i){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",i)}}j.propTypes={resolutions:O,sizes:N,fixed:z(c.default.oneOfType([O,c.default.arrayOf(O)])),fluid:z(c.default.oneOfType([N,c.default.arrayOf(N)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=j;t.default=V},FRRc:function(e,t,a){e.exports=a.p+"static/Mockup teddy-0caa0d934054c8bf70bc485e91a7f295.png"},HTvl:function(e,t,a){e.exports=a.p+"static/tvilu-app-1-064edd23af70bd5591922fe93404bd9f.png"},JO0v:function(e,t,a){e.exports=a.p+"static/iPhone X mockup tilt front back copy-bb9b348854572b3b5a45cd1213e56089.png"},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=(a("Wbzz"),a("wBNj")),l=a("Bl7J"),s=function(e){var t=e.children;return n.a.createElement("div",{className:"index-icon"},t)},o=(a("9eSz"),a("vrFN")),d=(a("cOBI"),a("VEqf")),c=a.n(d),u=a("dAfd"),f=a.n(u),m=a("jyiI"),p=a.n(m),g=a("SO4r"),h=a.n(g),y=(a("FRRc"),a("y9XA")),E=a.n(y),v=(a("JO0v"),a("HTvl")),b=a.n(v),x=(a("97MT"),a("RX7p")),S=a.n(x),w=a("oJsp"),I=a.n(w),C=a("Qad/"),T=a.n(C),R=a("+4UD"),L=a.n(R);t.default=function(){return n.a.createElement(l.a,null,n.a.createElement(o.a,{title:"Home"}),n.a.createElement("div",{className:"section"},n.a.createElement(r.Row,{style:{width:"100%"}},n.a.createElement(r.Col,{md:6,style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement("div",null,n.a.createElement("div",{className:"homeText"},"What's the best Salon"),n.a.createElement("div",{className:"homeText"},"around you?"),n.a.createElement("div",{className:"homeText"},"Explore & book it."),n.a.createElement("div",{className:"availText"},"Find the nearest Salons and Beauty Palors. Book with your favourite stylists and keep updated with Products and Salon posts"),n.a.createElement("div",{className:"availText"},"Available on"),n.a.createElement("img",{src:c.a,style:{marginRight:20},width:"177"}),n.a.createElement("img",{src:f.a,style:{},width:"177"}))),n.a.createElement(r.Col,{md:6},n.a.createElement("img",{src:b.a,style:{marginLeft:100,width:351}})))),n.a.createElement("div",{className:"section"},n.a.createElement(r.Row,null,n.a.createElement(r.Col,{style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement("div",{class:"homeFeature"},"Tvilu, a mobile app to find your stylist!")),n.a.createElement(r.Col,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},n.a.createElement("div",{class:"availText"}," Find the nearest Salons and Beauty Palors. Book with your favourite stylists and keep updated with Products and Salon posts "),n.a.createElement("div",{class:"availText"}," Find the nearest Salons and Beauty Palors. Book with your favourite stylists and keep updated with Products and Salon posts ")))),n.a.createElement("div",{className:"section"},n.a.createElement(r.Row,null,n.a.createElement(r.Col,{style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement("div",{class:"homeFeature"},"How Tvilu Works"))),n.a.createElement(r.Row,null,n.a.createElement(r.Col,{md:4,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement(s,null,"1"),n.a.createElement("div",{style:{marginLeft:30,width:200}},n.a.createElement("div",{class:"subText"},"Sign In To Tvilu"),n.a.createElement("div",{class:"paraText"},"Use your phone number to sign in to Tvilu"))),n.a.createElement("div",{style:{marginTop:100,display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement(s,null,"2"),n.a.createElement("div",{style:{marginLeft:30,width:200}},n.a.createElement("div",{class:"subText"},"Select a Nearby Salon"),n.a.createElement("div",{class:"paraText"},"Use your phone number to sign in to Tvilu"))),n.a.createElement("div",{style:{marginTop:100,display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement(s,null,"3"),n.a.createElement("div",{style:{marginLeft:30,width:200}},n.a.createElement("div",{class:"subText"},"Select Stylists ",n.a.createElement("br",null),"& Services"),n.a.createElement("div",{class:"paraText"},"Use your phone number to sign in to Tvilu")))),n.a.createElement(r.Col,{md:4,style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement("img",{src:p.a,style:{height:"70%",borderRadius:20},className:"app-shadow"})),n.a.createElement(r.Col,{md:4,style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement("div",{style:{marginRight:30,width:200}},n.a.createElement("div",{class:"subText"},"Select Your Payment Method"),n.a.createElement("div",{class:"paraText"},"Use your phone number to sign in to Tvilu")),n.a.createElement(s,null,"4")),n.a.createElement("div",{style:{marginTop:100,display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement("div",{style:{marginRight:30,width:200}},n.a.createElement("div",{class:"subText"},"Book Your Appointment"),n.a.createElement("div",{class:"paraText"},"Use your phone number to sign in to Tvilu")),n.a.createElement(s,null,"5"))))),n.a.createElement("div",{style:{backgroundColor:"#F6FBF6"}},n.a.createElement("div",{className:"section",style:{backgroundColor:"#F6FBF6",height:760}},n.a.createElement(r.Row,null,n.a.createElement(r.Col,{md:5,style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement("div",{class:"homeFeature"},"Booking your favourite stylist was never too easy"),n.a.createElement("div",{class:"paraText"},"Find different stylists that you like. Check their portfolio. And get amazing discounts!")),n.a.createElement(r.Col,{md:7,style:{display:"flex",alignItems:"flex-end",justifyContent:"center"}},n.a.createElement("img",{src:E.a,style:{height:740}}))))),n.a.createElement("div",{style:{backgroundColor:"#2E9E79"}},n.a.createElement("div",{className:"section",style:{padding:0}},n.a.createElement(r.Row,null,n.a.createElement(r.Col,{md:5,style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}},n.a.createElement("div",{class:"homeFeature",style:{paddingLeft:0,color:"#fff"}},"Be the first to get the app!"),n.a.createElement("div",{class:"paraText",style:{paddingLeft:0,color:"#fff",marginTop:20}},"Use your phone number to sign in to Tvilu"),n.a.createElement(r.Row,null,n.a.createElement(r.Col,{style:{display:"flex",alignItems:"flex-start"}},n.a.createElement("img",{src:c.a,style:{width:170,margin:"20px 0px 0px 0px"}}),n.a.createElement("img",{src:f.a,style:{width:170,margin:"20px 0px 0px 20px"}})))),n.a.createElement(r.Col,{md:7,style:{display:"flex",alignItems:"flex-end",justifyContent:"center"}},n.a.createElement("img",{src:h.a,style:{height:"100%"}}))))),n.a.createElement("div",{className:"section",style:{color:"#000000"}},n.a.createElement(r.Row,null,n.a.createElement(r.Col,{md:6,style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}},n.a.createElement("div",{class:"subText"},"Subscribe to get notified!"),n.a.createElement(r.Row,null,n.a.createElement(r.Col,{style:{display:"flex",alignItems:"flex-end"}},n.a.createElement("input",{class:"subInput",placeholder:"Enter your email"}),n.a.createElement("button",{class:"subButton"},"Subscribe"))),n.a.createElement(r.Row,null,n.a.createElement(r.Col,{style:{display:"flex",alignItems:"flex-end"}},n.a.createElement("div",{class:"subText1",style:{display:"inline"}},"Stay in touch with us."),n.a.createElement("img",{src:L.a,style:{margin:"0px 0px 0px 68px"},width:"21.06",height:"21.06"}),n.a.createElement("img",{src:T.a,style:{margin:"0px 0px 0px 19.3px"},width:"12",height:"24"}),n.a.createElement("img",{src:I.a,style:{margin:"0px 0px 0px 19.3px"},width:"21.72",height:"15.21"}),n.a.createElement("img",{src:S.a,style:{margin:"0px 0px 0px 19.3px"},width:"21.56",height:"17.65"})))),n.a.createElement(r.Col,{md:6,style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}}))))}},SO4r:function(e,t,a){e.exports=a.p+"static/tvilu-app-6-875610c21a78285e96aa34cfe31298e3.png"},cOBI:function(e,t,a){e.exports=a.p+"static/iPhone X mockup hover seperated copy-932a2fc4bea7e324583e2bc0f646f582.png"},jyiI:function(e,t,a){e.exports=a.p+"static/tvilu-app-2-dc38ab337c1499739c38f3b4b9f7bd23.png"},y9XA:function(e,t,a){e.exports=a.p+"static/tvilu-app-3-3b6648f3d25214880bc5579e47c005f8.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-ac5fd4dbff45b7082fd2.js.map