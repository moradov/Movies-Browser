(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,a,n){e.exports=n(56)},56:function(e,a,n){"use strict";n.r(a);var i=n(0),s=n.n(i),t=n(25),_=n.n(t),l=n(6),o=Object(i.createContext)(),r=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],m=Object(l.f)((function(e){e.movieData;var a=e.movieData,n=a.poster_path,i=a.id,t=a.vote_average,_=a.genre_ids,l=a.release_date,o=a.title,m=e.history;return s.a.createElement("div",{className:"movies-item",onClick:function(){return m.push("/details/".concat(i))}},s.a.createElement("span",{className:"rating"},t),s.a.createElement("img",{alt:"poster img",src:"https://image.tmdb.org/t/p/w200".concat(n)}),s.a.createElement("h2",{className:"title"},o,s.a.createElement("span",null," ",l?"(".concat(l.slice(0,4),") "):null)),s.a.createElement("div",{className:"genre"},_?_.slice(0,2).map((function(e){return s.a.createElement("span",{key:e}," ",function(e){if(_)return r.filter((function(a){return a.id===e}))[0].name}(e)," ")})):null))})),c=function(){return s.a.createElement("div",{className:"loader"},"loadin..")},g=function(e){var a,n=e.totalPages,t=Object(i.useContext)(o),_=t.setCurrentPage,l=t.currentPage,r=[];if(n<10)for(a=1;a<=n;a++)r.push(a);else for(a=1;a<=10;a++)r.push(a);return s.a.createElement("div",{className:"pagination"},s.a.createElement("div",{className:"prev",style:{cursor:"pointer"},onClick:function(){return 1!==l?_(l-1):"disabled"}},s.a.createElement("i",{className:"fa fa-arrow-left"})),r?r.map((function(e){return s.a.createElement("div",{key:e,onClick:function(){return _(e)},style:e===l?{color:"#ffb100",cursor:"pointer"}:null},e)})):null,s.a.createElement("div",{className:"next",style:{cursor:"pointer"},onClick:function(){return l!==r.length?_(l+1):null}},s.a.createElement("i",{className:"fa fa-arrow-right"})))},h=function(){return s.a.createElement("div",{className:"not-found",style:{textAlign:"center",color:"#FFF"}},s.a.createElement("h2",null,"Oops ! "),s.a.createElement("h3",null,"Results Not Found"))},u=function(e){var a=e.showSpineer,n=e.moviesList,t=e.totalPages,_=e.pageTitle;return s.a.createElement(i.Fragment,null,s.a.createElement("h2",{className:"content-title"},_," "),s.a.createElement("div",{className:"content-grid"},a?null:n.map((function(e){return e.poster_path?s.a.createElement(m,{key:e.id,movieData:e}):null}))),a?s.a.createElement(c,null):null,a||t<=1?null:s.a.createElement(g,{totalPages:t}),0!==t||a?null:s.a.createElement(h,null))},d=function(){var e=Object(i.useContext)(o),a=e.err,n=e.getMovies,t=e.getMovieDetails,_=e.getRandomMovie;6===a&&_();return s.a.createElement("div",{className:"err-hund"},s.a.createElement("h3",null," Something Went Wrong "),s.a.createElement("button",{onClick:function(){switch(a){case 1:n();break;case 2:t();break;case 3:n("top_rated");break;case 4:n("upcoming");break;case 5:_();break;default:return null}}},"Try again"))},E=function(){var e=Object(i.useContext)(o),a=e.getMovies,n=e.searchKey,t=e.moviesList,_=e.loading,l=e.err,r=e.currentPage,m=e.setCurrentPage,c=e.clearMovies,g=e.totalPages,h=e.setCurrentPagePath,E=e.currentPagePath,p=e.searchKeyHund;return Object(i.useEffect)((function(){a(),c(),h("Home")}),[n,r]),Object(i.useEffect)((function(){m(1),p("")}),[]),s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:"content-body"},l?s.a.createElement(d,null):s.a.createElement(u,{totalPages:g,showSpineer:_,moviesList:t,pageTitle:E})))},p=[{iso_3166_1:"AD",english_name:"Andorra"},{iso_3166_1:"EN",english_name:"English"},{iso_3166_1:"AE",english_name:"United Arab Emirates"},{iso_3166_1:"AF",english_name:"Afghanistan"},{iso_3166_1:"AG",english_name:"Antigua and Barbuda"},{iso_3166_1:"AI",english_name:"Anguilla"},{iso_3166_1:"AL",english_name:"Albania"},{iso_3166_1:"AM",english_name:"Armenia"},{iso_3166_1:"AN",english_name:"Netherlands Antilles"},{iso_3166_1:"AO",english_name:"Angola"},{iso_3166_1:"AQ",english_name:"Antarctica"},{iso_3166_1:"AR",english_name:"Argentina"},{iso_3166_1:"AS",english_name:"American Samoa"},{iso_3166_1:"AT",english_name:"Austria"},{iso_3166_1:"AU",english_name:"Australia"},{iso_3166_1:"AW",english_name:"Aruba"},{iso_3166_1:"AZ",english_name:"Azerbaijan"},{iso_3166_1:"BA",english_name:"Bosnia and Herzegovina"},{iso_3166_1:"BB",english_name:"Barbados"},{iso_3166_1:"BD",english_name:"Bangladesh"},{iso_3166_1:"BE",english_name:"Belgium"},{iso_3166_1:"BF",english_name:"Burkina Faso"},{iso_3166_1:"BG",english_name:"Bulgaria"},{iso_3166_1:"BH",english_name:"Bahrain"},{iso_3166_1:"BI",english_name:"Burundi"},{iso_3166_1:"BJ",english_name:"Benin"},{iso_3166_1:"BM",english_name:"Bermuda"},{iso_3166_1:"BN",english_name:"Brunei Darussalam"},{iso_3166_1:"BO",english_name:"Bolivia"},{iso_3166_1:"BR",english_name:"Brazil"},{iso_3166_1:"BS",english_name:"Bahamas"},{iso_3166_1:"BT",english_name:"Bhutan"},{iso_3166_1:"BV",english_name:"Bouvet Island"},{iso_3166_1:"BW",english_name:"Botswana"},{iso_3166_1:"BZ",english_name:"Belize"},{iso_3166_1:"BY",english_name:"Belarus"},{iso_3166_1:"CA",english_name:"Canada"},{iso_3166_1:"CC",english_name:"Cocos  Islands"},{iso_3166_1:"CD",english_name:"Congo"},{iso_3166_1:"CF",english_name:"Central African Republic"},{iso_3166_1:"CG",english_name:"Congo"},{iso_3166_1:"CH",english_name:"Switzerland"},{iso_3166_1:"CI",english_name:"Cote D'Ivoire"},{iso_3166_1:"CK",english_name:"Cook Islands"},{iso_3166_1:"CL",english_name:"Chile"},{iso_3166_1:"CM",english_name:"Cameroon"},{iso_3166_1:"CN",english_name:"China"},{iso_3166_1:"CO",english_name:"Colombia"},{iso_3166_1:"CR",english_name:"Costa Rica"},{iso_3166_1:"CS",english_name:"Serbia and Montenegro"},{iso_3166_1:"CU",english_name:"Cuba"},{iso_3166_1:"CV",english_name:"Cape Verde"},{iso_3166_1:"CX",english_name:"Christmas Island"},{iso_3166_1:"CY",english_name:"Cyprus"},{iso_3166_1:"CZ",english_name:"Czech Republic"},{iso_3166_1:"DE",english_name:"Germany"},{iso_3166_1:"DJ",english_name:"Djibouti"},{iso_3166_1:"DK",english_name:"Denmark"},{iso_3166_1:"DM",english_name:"Dominica"},{iso_3166_1:"DO",english_name:"Dominican Republic"},{iso_3166_1:"DZ",english_name:"Algeria"},{iso_3166_1:"EC",english_name:"Ecuador"},{iso_3166_1:"EE",english_name:"Estonia"},{iso_3166_1:"EG",english_name:"Egypt"},{iso_3166_1:"EH",english_name:"Western Sahara"},{iso_3166_1:"ER",english_name:"Eritrea"},{iso_3166_1:"ES",english_name:"Spain"},{iso_3166_1:"ET",english_name:"Ethiopia"},{iso_3166_1:"FI",english_name:"Finland"},{iso_3166_1:"FJ",english_name:"Fiji"},{iso_3166_1:"FK",english_name:"Falkland Islands"},{iso_3166_1:"RS",english_name:"Serbia"},{iso_3166_1:"FM",english_name:"Micronesia"},{iso_3166_1:"FO",english_name:"Faeroe Islands"},{iso_3166_1:"FR",english_name:"France"},{iso_3166_1:"GA",english_name:"Gabon"},{iso_3166_1:"GB",english_name:"United Kingdom"},{iso_3166_1:"GD",english_name:"Grenada"},{iso_3166_1:"GE",english_name:"Georgia"},{iso_3166_1:"GF",english_name:"French Guiana"},{iso_3166_1:"GH",english_name:"Ghana"},{iso_3166_1:"GI",english_name:"Gibraltar"},{iso_3166_1:"GL",english_name:"Greenland"},{iso_3166_1:"GM",english_name:"Gambia"},{iso_3166_1:"GN",english_name:"Guinea"},{iso_3166_1:"GP",english_name:"Guadaloupe"},{iso_3166_1:"GQ",english_name:"Equatorial Guinea"},{iso_3166_1:"GR",english_name:"Greece"},{iso_3166_1:"GS",english_name:"South Georgia and the South Sandwich Islands"},{iso_3166_1:"GT",english_name:"Guatemala"},{iso_3166_1:"GU",english_name:"Guam"},{iso_3166_1:"GW",english_name:"Guinea-Bissau"},{iso_3166_1:"GY",english_name:"Guyana"},{iso_3166_1:"HK",english_name:"Hong Kong"},{iso_3166_1:"HM",english_name:"Heard and McDonald Islands"},{iso_3166_1:"HN",english_name:"Honduras"},{iso_3166_1:"HR",english_name:"Croatia"},{iso_3166_1:"HT",english_name:"Haiti"},{iso_3166_1:"HU",english_name:"Hungary"},{iso_3166_1:"ID",english_name:"Indonesia"},{iso_3166_1:"IE",english_name:"Ireland"},{iso_3166_1:"IL",english_name:"Israel"},{iso_3166_1:"IN",english_name:"India"},{iso_3166_1:"IO",english_name:"British Indian Ocean Territory"},{iso_3166_1:"IQ",english_name:"Iraq"},{iso_3166_1:"IR",english_name:"Iran"},{iso_3166_1:"IS",english_name:"Iceland"},{iso_3166_1:"IT",english_name:"Italy"},{iso_3166_1:"JM",english_name:"Jamaica"},{iso_3166_1:"JO",english_name:"Jordan"},{iso_3166_1:"JP",english_name:"Japan"},{iso_3166_1:"KE",english_name:"Kenya"},{iso_3166_1:"KG",english_name:"Kyrgyz Republic"},{iso_3166_1:"KH",english_name:"Cambodia"},{iso_3166_1:"KI",english_name:"Kiribati"},{iso_3166_1:"KM",english_name:"Comoros"},{iso_3166_1:"KN",english_name:"St. Kitts and Nevis"},{iso_3166_1:"KP",english_name:"North Korea"},{iso_3166_1:"KW",english_name:"Kuwait"},{iso_3166_1:"KY",english_name:"Cayman Islands"},{iso_3166_1:"KZ",english_name:"Kazakhstan"},{iso_3166_1:"LA",english_name:"Lao People's Democratic Republic"},{iso_3166_1:"LB",english_name:"Lebanon"},{iso_3166_1:"LC",english_name:"St. Lucia"},{iso_3166_1:"LI",english_name:"Liechtenstein"},{iso_3166_1:"LK",english_name:"Sri Lanka"},{iso_3166_1:"LR",english_name:"Liberia"},{iso_3166_1:"LS",english_name:"Lesotho"},{iso_3166_1:"LT",english_name:"Lithuania"},{iso_3166_1:"LU",english_name:"Luxembourg"},{iso_3166_1:"LV",english_name:"Latvia"},{iso_3166_1:"LY",english_name:"Libyan Arab Jamahiriya"},{iso_3166_1:"MA",english_name:"Morocco"},{iso_3166_1:"MC",english_name:"Monaco"},{iso_3166_1:"MD",english_name:"Moldova"},{iso_3166_1:"MG",english_name:"Madagascar"},{iso_3166_1:"MH",english_name:"Marshall Islands"},{iso_3166_1:"MK",english_name:"Macedonia"},{iso_3166_1:"ML",english_name:"Mali"},{iso_3166_1:"MM",english_name:"Myanmar"},{iso_3166_1:"MN",english_name:"Mongolia"},{iso_3166_1:"MO",english_name:"Macao"},{iso_3166_1:"MP",english_name:"Northern Mariana Islands"},{iso_3166_1:"MQ",english_name:"Martinique"},{iso_3166_1:"MR",english_name:"Mauritania"},{iso_3166_1:"MS",english_name:"Montserrat"},{iso_3166_1:"MT",english_name:"Malta"},{iso_3166_1:"MU",english_name:"Mauritius"},{iso_3166_1:"MV",english_name:"Maldives"},{iso_3166_1:"MW",english_name:"Malawi"},{iso_3166_1:"MX",english_name:"Mexico"},{iso_3166_1:"MY",english_name:"Malaysia"},{iso_3166_1:"MZ",english_name:"Mozambique"},{iso_3166_1:"NA",english_name:"Namibia"},{iso_3166_1:"NC",english_name:"New Caledonia"},{iso_3166_1:"NE",english_name:"Niger"},{iso_3166_1:"NF",english_name:"Norfolk Island"},{iso_3166_1:"NG",english_name:"Nigeria"},{iso_3166_1:"ME",english_name:"Montenegro"},{iso_3166_1:"NI",english_name:"Nicaragua"},{iso_3166_1:"NL",english_name:"Netherlands"},{iso_3166_1:"NO",english_name:"Norway"},{iso_3166_1:"NP",english_name:"Nepal"},{iso_3166_1:"NR",english_name:"Nauru"},{iso_3166_1:"NU",english_name:"Niue"},{iso_3166_1:"NZ",english_name:"New Zealand"},{iso_3166_1:"OM",english_name:"Oman"},{iso_3166_1:"PA",english_name:"Panama"},{iso_3166_1:"PE",english_name:"Peru"},{iso_3166_1:"PF",english_name:"French Polynesia"},{iso_3166_1:"PG",english_name:"Papua New Guinea"},{iso_3166_1:"PH",english_name:"Philippines"},{iso_3166_1:"YU",english_name:"Yugoslavia"},{iso_3166_1:"XK",english_name:"Kosovo"},{iso_3166_1:"XC",english_name:"Czechoslovakia"},{iso_3166_1:"PK",english_name:"Pakistan"},{iso_3166_1:"PL",english_name:"Poland"},{iso_3166_1:"PM",english_name:"St. Pierre and Miquelon"},{iso_3166_1:"PN",english_name:"Pitcairn Island"},{iso_3166_1:"PR",english_name:"Puerto Rico"},{iso_3166_1:"PS",english_name:"Palestinian Territory"},{iso_3166_1:"PT",english_name:"Portugal"},{iso_3166_1:"PW",english_name:"Palau"},{iso_3166_1:"PY",english_name:"Paraguay"},{iso_3166_1:"QA",english_name:"Qatar"},{iso_3166_1:"RE",english_name:"Reunion"},{iso_3166_1:"RO",english_name:"Romania"},{iso_3166_1:"RU",english_name:"Russia"},{iso_3166_1:"RW",english_name:"Rwanda"},{iso_3166_1:"SA",english_name:"Saudi Arabia"},{iso_3166_1:"SB",english_name:"Solomon Islands"},{iso_3166_1:"SC",english_name:"Seychelles"},{iso_3166_1:"SD",english_name:"Sudan"},{iso_3166_1:"SE",english_name:"Sweden"},{iso_3166_1:"SG",english_name:"Singapore"},{iso_3166_1:"SH",english_name:"St. Helena"},{iso_3166_1:"SI",english_name:"Slovenia"},{iso_3166_1:"SJ",english_name:"Svalbard & Jan Mayen Islands"},{iso_3166_1:"SK",english_name:"Slovakia"},{iso_3166_1:"SL",english_name:"Sierra Leone"},{iso_3166_1:"SM",english_name:"San Marino"},{iso_3166_1:"SN",english_name:"Senegal"},{iso_3166_1:"SO",english_name:"Somalia"},{iso_3166_1:"SR",english_name:"Suriname"},{iso_3166_1:"ST",english_name:"Sao Tome and Principe"},{iso_3166_1:"SV",english_name:"El Salvador"},{iso_3166_1:"SY",english_name:"Syrian Arab Republic"},{iso_3166_1:"SZ",english_name:"Swaziland"},{iso_3166_1:"TC",english_name:"Turks and Caicos Islands"},{iso_3166_1:"TD",english_name:"Chad"},{iso_3166_1:"TF",english_name:"French Southern Territories"},{iso_3166_1:"TG",english_name:"Togo"},{iso_3166_1:"TH",english_name:"Thailand"},{iso_3166_1:"TJ",english_name:"Tajikistan"},{iso_3166_1:"TK",english_name:"Tokelau"},{iso_3166_1:"TL",english_name:"Timor-Leste"},{iso_3166_1:"TM",english_name:"Turkmenistan"},{iso_3166_1:"TN",english_name:"Tunisia"},{iso_3166_1:"TO",english_name:"Tonga"},{iso_3166_1:"TR",english_name:"Turkey"},{iso_3166_1:"TT",english_name:"Trinidad and Tobago"},{iso_3166_1:"TV",english_name:"Tuvalu"},{iso_3166_1:"TW",english_name:"Taiwan"},{iso_3166_1:"TZ",english_name:"Tanzania"},{iso_3166_1:"UA",english_name:"Ukraine"},{iso_3166_1:"UG",english_name:"Uganda"},{iso_3166_1:"UM",english_name:"United States Minor Outlying Islands"},{iso_3166_1:"US",english_name:"United States of America"},{iso_3166_1:"UY",english_name:"Uruguay"},{iso_3166_1:"UZ",english_name:"Uzbekistan"},{iso_3166_1:"VA",english_name:"Holy See"},{iso_3166_1:"VC",english_name:"St. Vincent and the Grenadines"},{iso_3166_1:"VE",english_name:"Venezuela"},{iso_3166_1:"VG",english_name:"British Virgin Islands"},{iso_3166_1:"VI",english_name:"US Virgin Islands"},{iso_3166_1:"VN",english_name:"Vietnam"},{iso_3166_1:"VU",english_name:"Vanuatu"},{iso_3166_1:"WF",english_name:"Wallis and Futuna Islands"},{iso_3166_1:"WS",english_name:"Samoa"},{iso_3166_1:"YE",english_name:"Yemen"},{iso_3166_1:"YT",english_name:"Mayotte"},{iso_3166_1:"ZA",english_name:"South Africa"},{iso_3166_1:"ZM",english_name:"Zambia"},{iso_3166_1:"ZW",english_name:"Zimbabwe"},{iso_3166_1:"KR",english_name:"South Korea"},{iso_3166_1:"XG",english_name:"East Germany"},{iso_3166_1:"SU",english_name:"Soviet Union"},{iso_3166_1:"SS",english_name:"South Sudan"}],v=function(e){var a=e.singleMovieData,n=a.poster_path,i=a.title,t=a.vote_average,_=a.original_language,l=a.runtime,o=a.genres,r=a.production_companies,m=a.overview,c=a.release_date,g=e.movieCast;return s.a.createElement("div",{className:"details",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w400".concat(n,")")}},s.a.createElement("div",{className:"empty"}),s.a.createElement("div",{className:"content-flex"},s.a.createElement("div",{className:"poster-img"},s.a.createElement("img",{alt:"poster img",src:"https://image.tmdb.org/t/p/w400".concat(n)})),s.a.createElement("div",{className:"content"},s.a.createElement("h2",{className:"item-title"}," ",i," "),s.a.createElement("div",{className:"info"},s.a.createElement("span",null,r?"".concat(r[0].name," / "):null),s.a.createElement("span",null," ",function(e){if(e)return p.filter((function(a){return a.iso_3166_1===e.toUpperCase()}))[0].english_name+" /"}(_)),s.a.createElement("span",null,c?"".concat(c.slice(0,4)," / "):null),s.a.createElement("span",null," ",l+" min"," ")),s.a.createElement("div",{className:"rating-genre"},s.a.createElement("div",{className:"rating"},t," ",s.a.createElement("i",{className:"fa fa-star"})),s.a.createElement("div",{className:"genere"},o?o.map((function(e){return s.a.createElement("span",{key:e.id},e.name+" ")})):null)),s.a.createElement("div",{className:"overview"},s.a.createElement("h3",null,"OVERVIEW"),s.a.createElement("p",null,m)),s.a.createElement("div",{className:"cast"},s.a.createElement("h3",{className:"cast"},"TOP CASTS"),s.a.createElement("div",{className:"cast-grid"},g?g.map((function(e){return e.profile_path?s.a.createElement("div",{className:"cast-item",key:e.id},s.a.createElement("img",{alt:"poster img",src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path)}),s.a.createElement("div",null," ",e.name," ")):null})):null)))))},S=function(e){var a=e.match,n=Object(i.useContext)(o),t=n.getMovieDetails,_=n.movieDetails,l=n.loading,r=n.movieCast,m=n.err,g=n.clearMovieDetails;return Object(i.useEffect)((function(){g(),t(a.params.id)}),[]),s.a.createElement("div",{style:{width:"100%",minHeight:"699px",zIndex:"99",position:"relative",backgroundColor:"red",background:"-webkit-linear-gradient(left, #3146bb -30%, #ff5050 104%)"}},m?s.a.createElement(d,null):null,l||!r?s.a.createElement("div",{style:{paddingTop:"200px"}},s.a.createElement(c,null)):s.a.createElement(v,{showSpinner:l,singleMovieData:_,movieCast:r}))},f=function(){var e=Object(i.useContext)(o),a=e.getMovies,n=e.moviesList,t=e.loading,_=e.err,l=e.currentPage,r=e.setCurrentPagePath,m=e.totalPages,c=e.currentPagePath,g=e.searchKey,h=e.setCurrentPage,E=e.searchKeyHund;return Object(i.useEffect)((function(){h(1),E("")}),[]),Object(i.useEffect)((function(){a("top_rated"),r("Top Movies")}),[l,g]),s.a.createElement("div",{className:"content-body"},_?s.a.createElement(d,null):s.a.createElement(u,{totalPages:m,showSpineer:t,moviesList:n,pageTitle:c}))},b=function(){var e=Object(i.useContext)(o),a=e.currentPage,n=e.moviesList,t=e.totalPages,_=e.loading,l=e.err,r=e.getMovies,m=e.searchKey,c=e.setCurrentPagePath,g=e.currentPagePath,h=e.setCurrentPage,E=e.searchKeyHund;return Object(i.useEffect)((function(){h(1),E("")}),[]),Object(i.useEffect)((function(){c("Upcoming"),r("upcoming")}),[a,m]),s.a.createElement("div",{className:"content-body"},l?s.a.createElement(d,null):s.a.createElement(u,{totalPages:t,showSpineer:_,moviesList:n,pageTitle:g}))},M=Object(l.f)((function(e){var a=e.movieData,n=a.id,i=a.title,t=a.poster_path,_=a.vote_average,l=a.release_date,o=a.genres,r=e.showSpinner,m=e.history;return s.a.createElement("div",{className:"random"},r?s.a.createElement(c,null):s.a.createElement("div",{className:"movies-item",onClick:function(){return m.push("/details/".concat(n))}},s.a.createElement("span",{className:"rating"},_),s.a.createElement("img",{alt:"poster img",src:"https://image.tmdb.org/t/p/w200".concat(t)}),s.a.createElement("h2",{className:"title"},i,s.a.createElement("span",null," ",l?"(".concat(l.slice(0,4),") "):null)),s.a.createElement("div",{className:"genre"},o?o.slice(0,2).map((function(e){return s.a.createElement("span",{key:e.id}," ",e.name," ")})):null)))})),y=function(){var e=Object(i.useContext)(o),a=e.getRandomMovie,n=e.err,t=e.randomMovie,_=e.loading,l=e.setCurrentPagePath;return Object(i.useEffect)((function(){l("Random"),a()}),[]),s.a.createElement("div",{className:"content-body",style:{textAlign:"center"}},n?s.a.createElement(d,null):s.a.createElement(i.Fragment,null,s.a.createElement(M,{showSpinner:_,movieData:t}),_?null:s.a.createElement("button",{className:"random-btn",onClick:function(){return a()}},"generate")))},T=Object(l.f)((function(e){var a=e.history,n=Object(i.useContext)(o),t=n.searchKeyHund,_=n.searchKey;return s.a.createElement("div",{className:"search-sec"},s.a.createElement("div",{className:"logo",onClick:function(){return a.push("/")}},"Movies Land"),s.a.createElement("div",{className:"search"},s.a.createElement("i",{className:"fa fa-search"}),s.a.createElement("input",{onChange:function(e){return t(e.target.value)},value:_,name:"search",type:"search",placeholder:"Search Movies..."})))})),C=n(8),P=function(){var e=Object(i.useContext)(o),a=e.setCurrentPagePath,n=e.currentPagePath;return s.a.createElement("div",{className:"navigation"},s.a.createElement("ul",{className:"nav-ul"},[{name:"Home",path:"/"},{name:"Top Movies",path:"/top_movies"},{name:"Upcoming",path:"/upcoming"},{name:"Random",path:"/random"}].map((function(e){return s.a.createElement("li",{onClick:function(){return a(e.name)},className:n===e.name?"active":null,key:e.name},s.a.createElement(C.b,{to:e.path}," ",e.name," ")," ")}))))},N=function(){return s.a.createElement(i.Fragment,null,s.a.createElement(P,null),s.a.createElement(T,null),s.a.createElement(l.c,null,s.a.createElement(l.a,{exact:!0,path:"/",component:E}),s.a.createElement(l.a,{exact:!0,path:"/details/:id",component:S}),s.a.createElement(l.a,{exact:!0,path:"/top_movies",component:f}),s.a.createElement(l.a,{exact:!0,path:"/upcoming",component:b}),s.a.createElement(l.a,{exact:!0,path:"/random",component:y})))},A=n(28),O=n(10),I=n.n(O),R=n(1),L=function(e,a){switch(a.type){case"SET_SEARCH_KEY_TO_STATE":return Object(R.a)(Object(R.a)({},e),{},{searchKey:a.payload});case"SET_MOVIES_DATA":return Object(R.a)(Object(R.a)({},e),{},{moviesList:a.payload,loading:!1});case"SET_MOVIE_DETAILS":return Object(R.a)(Object(R.a)({},e),{},{movieDetails:a.payload,loading:!1});case"SET_MOVIE_CAST":return Object(R.a)(Object(R.a)({},e),{},{movieCast:a.payload,loading:!1});case"SET_LOADING":return Object(R.a)(Object(R.a)({},e),{},{loading:a.payload});case"SET_ERROR":return Object(R.a)(Object(R.a)({},e),{},{err:a.payload});case"CLEAR_MOVIES":return Object(R.a)(Object(R.a)({},e),{},{moviesList:[]});case"CLEAR_MOVIE_DETAILS":return Object(R.a)(Object(R.a)({},e),{},{movieDetails:[],tes:null});case"SET_TOTAL_PAGES":return Object(R.a)(Object(R.a)({},e),{},{totalPages:a.payload});case"SET_CURRENT_PAGE":return Object(R.a)(Object(R.a)({},e),{},{currentPage:a.payload});case"SET_CURRENT_PAGE_PATH":return Object(R.a)(Object(R.a)({},e),{},{currentPagePath:a.payload});case"SET_RANDOM_MOVIE_TO_STATE":return Object(R.a)(Object(R.a)({},e),{},{randomMovie:a.payload,loading:!1});default:return Object(R.a)({},e)}},G=function(e){var a=Object(i.useReducer)(L,{currentPagePath:"Home",moviesList:[],seriesList:[],movieDetails:[],movieCast:[],randomMovie:[],searchKey:"",currentPage:1,totalPages:null,loading:!1,err:null}),n=Object(A.a)(a,2),t=n[0],_=n[1],l=function(e){return _({type:"SET_LOADING",payload:e})},r=function(e){return _({type:"SET_ERROR",payload:e})},m=function(){return _({type:"CLEAR_MOVIE_DETAILS"})},c=function(e){return _({type:"SET_TOTAL_PAGES",payload:e})};return s.a.createElement(o.Provider,{value:{moviesList:t.moviesList,movieDetails:t.movieDetails,searchKey:t.searchKey,currentPagePath:t.currentPagePath,loading:t.loading,err:t.err,movieCast:t.movieCast,totalPages:t.totalPages,currentPage:t.currentPage,seriesList:t.seriesList,randomMovie:t.randomMovie,searchKeyHund:function(e){return _({type:"SET_SEARCH_KEY_TO_STATE",payload:e})},getMovies:function(e){l(!0),r(null),t.searchKey.length>0?I.a.get("/api/movies/?key_word=".concat(t.searchKey,"&page=").concat(t.currentPage)).then((function(e){_({type:"SET_MOVIES_DATA",payload:e.data.results}),c(e.data.total_pages),l(!1),r(null)})).catch((function(e){l(!1),r(1)})):I.a.get("api/movies/genres/?serach_by=".concat(e||"","&page=").concat(t.currentPage)).then((function(e){l(!1),_({type:"SET_MOVIES_DATA",payload:e.data.results}),c(e.data.total_pages)})).catch((function(a){l(!1),r(e?3:1)}))},getMovieDetails:function(e){l(!0),r(null),m(),I.a.get("/api/movie/details/".concat(e)).then((function(a){_({type:"SET_MOVIE_DETAILS",payload:a.data}),I.a.get("/api/movie/cast/".concat(e)).then((function(e){_({type:"SET_MOVIE_CAST",payload:e.data.cast}),r(null),l(!1)})),r(null)})).catch((function(e){r(2),l(!1)}))},clearMovies:function(){return _({type:"CLEAR_MOVIES"})},setCurrentPage:function(e){return _({type:"SET_CURRENT_PAGE",payload:e})},getRandomMovie:function(){var e=Math.floor(1e4*Math.random());l(!0),r(null),I.a.get("/api/movie/details/".concat(e)).then((function(e){l(!1),e.data.poster_path?_({type:"SET_RANDOM_MOVIE_TO_STATE",payload:e.data}):r(6)})).catch((function(e){l(!1),e.response?r(6):r(5)}))},clearMovieDetails:m,setCurrentPagePath:function(e){return _({type:"SET_CURRENT_PAGE_PATH",payload:e})}}},e.children)},D=s.a.createElement(G,null,s.a.createElement(C.a,null,s.a.createElement(N,null)));_.a.render(D,document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.d358d65f.chunk.js.map