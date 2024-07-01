(()=>{"use strict";const e=window.React,t=window.wp.blocks,a=window.wp.blockEditor,l=window.wp.components,n=window.wp.i18n,c=JSON.parse('{"UU":"epico/dynamic-year-block"}');(0,t.registerBlockType)(c.UU,{example:{viewportWidth:100},icon:{src:(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M3.097,11.731l-0.006,-0l0,0.269c0,4.917 3.992,8.909 8.909,8.909c2.755,-0 5.221,-1.254 6.855,-3.221l1.129,1.129c-1.926,2.253 -4.789,3.683 -7.984,3.683c-5.795,0 -10.5,-4.705 -10.5,-10.5c0,-1.613 0.364,-3.141 1.016,-4.508c-0,0 2.795,2.796 3.845,3.846l-3.244,0l-0.02,0.393Zm8.711,-1.043l0.19,0.191l3.637,-3.637c-0,0 1.143,1.144 1.143,1.144c0,-0 -3.971,3.971 -3.971,3.971l-0,5.028c-0,-0 -1.618,-0 -1.618,-0c0,-0 0,-5.028 0,-5.028l-3.967,-3.967c-0,-0 1.143,-1.144 1.143,-1.144c0,0 3.443,3.442 3.443,3.442Zm9.095,1.581l0.006,0l-0,-0.269c-0,-4.917 -3.992,-8.909 -8.909,-8.909c-2.755,0 -5.221,1.254 -6.855,3.221c0,0 -1.129,-1.129 -1.129,-1.129c1.926,-2.253 4.789,-3.683 7.984,-3.683c5.795,-0 10.5,4.705 10.5,10.5c0,1.613 -0.364,3.141 -1.016,4.508l-3.845,-3.846l3.244,-0c0.009,-0.131 0.016,-0.262 0.02,-0.393Z"}))},edit:function({attributes:{format:t,beforeElement:c,afterElement:r,alignment:o,displaySiteName:i},setAttributes:m}){const d=wp.date.dateI18n("y"),s=(0,a.useBlockProps)(),y=t||"Y",g=(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(l.PanelBody,{title:(0,n.__)("Settings","dynamic-year-block")},(0,e.createElement)(l.RadioControl,{className:"dynamic-year-block",label:(0,n.__)("Year format:","dynamic-year-block"),selected:y,options:[{label:(0,n.__)("Four digits","dynamic-year-block"),value:"Y"},{label:(0,n.__)("Two digits","dynamic-year-block"),value:"y"}],help:(0,n.sprintf)(/* translators: %1s and %2s are the two-digit current year. See http://php.net/date. */ /* translators: %1s and %2s are the two-digit current year. See http://php.net/date. */
(0,n.__)("The two-digit abbreviation is often used after an apostrophe (e.g., ’%1$s) or in a date range (e.g., 2021-%2$s).","dynamic-year-block"),d,d),onChange:e=>m({format:e})}),(0,e.createElement)(l.ToggleControl,{label:(0,n.__)("Text Before Date","dynamic-year-block"),checked:""!==c,help:(0,n.__)("Enable to prepend any custom text. Default: “© Copyright”. Toggling resets to default.","dynamic-year-block"),onChange:e=>m({beforeElement:e?c||(0,n.__)("© Copyright ","dynamic-year-block"):""})}),(0,e.createElement)(l.ToggleControl,{label:(0,n.__)("Site Name After Date","dynamic-year-block"),checked:i,help:(0,n.__)("Display the site name after the current year, linked to the homepage.","dynamic-year-block"),onChange:e=>m({displaySiteName:e})}),(0,e.createElement)(l.ToggleControl,{label:(0,n.__)("Text After Date","dynamic-year-block"),checked:""!==r,help:(0,n.__)("Enable to append custom text. Default: “All rights reserved”. Toggling resets to default.","dynamic-year-block"),onChange:e=>m({afterElement:e?r||(0,n.__)(" All rights reserved","dynamic-year-block"):""})}))),p=wp.date.dateI18n(y);return(0,e.createElement)(e.Fragment,null,g,(0,e.createElement)("style",null,'\n\t\t.dynamic-year-block > [id*="help"] {\n\t\t\tmargin-top: 15px !important;\n\t\t}\n\t'),(0,e.createElement)("div",{...s},(0,e.createElement)(a.BlockControls,null,(0,e.createElement)(a.AlignmentToolbar,{value:o,onChange:e=>m({alignment:void 0===e?"none":e})})),(0,e.createElement)("p",{className:"dynamic-year-"+p,style:{textAlign:o}},(0,e.createElement)(a.RichText,{tagName:"span",className:"dynamic-year-before",allowedFormats:["core/bold","core/italic","core/link"],placeholder:""!==c?(0,n.__)("Enter text","dynamic-year-block"):"",value:c,onChange:e=>m({beforeElement:e})}),p,i?(0,e.createElement)(e.Fragment,null," ",(0,e.createElement)("a",{onClick:e=>{e.preventDefault()},target:"_self",rel:"home",href:dynamicYearBlockData.siteUrl},dynamicYearBlockData.siteTitle)):null,(0,e.createElement)(a.RichText,{tagName:"span",className:"dynamic-year-after",allowedFormats:["core/bold","core/italic","core/link"],placeholder:""!==r?(0,n.__)("Enter text","dynamic-year-block"):"",value:r,onChange:e=>m({afterElement:e})}))))},save:()=>null})})();