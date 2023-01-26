<template>
  <div id="app">
<header>
		<nav class="local-nav">
			<div class="local-nav-links">
				<router-link to="/kthbasket/index.html" class="product-name"><h1>KTH Basket</h1></router-link>
                <router-link class="open" to="#none"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"/></svg></router-link>
                <router-link class="close" to="#none"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></router-link>
			</div>
		</nav>
        <div class="gnb">
			<ul>
				<li><router-link to="/athlete">Athlete Center</router-link></li>
				<li><router-link to="/kthbasket/parent/index.html">For Parents</router-link></li>
				<li><router-link to="">Facility</router-link></li>
				<li><router-link to="">Instructor</router-link></li>
				<li><router-link to="">Contact</router-link></li>
				<li><router-link to="">Log-In</router-link></li>
				<li><router-link to="">Sign-Up</router-link></li>
			</ul>
		</div>
    </header>
    <router-view/>
        <footer class="footer">
        <div class="box">
            <router-link to="/athlete"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64C384 28.65 355.3 0 320 0zM336 448c0 8.836-7.164 16-16 16H64c-8.836 0-16-7.164-16-16V64c0-8.838 7.164-16 16-16h64V64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V48h64c8.836 0 16 7.162 16 16V448zM192 288c35.35 0 64-28.65 64-64s-28.65-64-64-64C156.7 160 128 188.7 128 224S156.7 288 192 288zM224 320H160c-44.18 0-80 35.82-80 80C80 408.8 87.16 416 96 416h192c8.836 0 16-7.164 16-16C304 355.8 268.2 320 224 320z"/></svg><span>info</span></router-link>
            <router-link to="../parent/index.html"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 160c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM468.8 382.8L405.5 462c-16.6 20.7-46.8 24.1-67.5 7.5c-17.6-14.1-22.7-38.1-13.5-57.7l-.7-.1c-38.9-5.6-74.3-25.1-99.7-54.8V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 .8 0 1.6 .1 2.4l101.4 50.7c23.7 11.9 33.3 40.7 21.5 64.4s-40.7 33.3-64.4 21.5L59.2 427.3c-1.1-.5-2.2-1.1-3.3-1.7c-4.9-2.8-9.2-6.4-12.6-10.6c-4.6-5.4-7.8-11.7-9.6-18.4c-3.3-12-1.9-25.2 4.8-36.6c.6-1.1 1.3-2.2 2-3.2l67.1-100.6c26.7-40.1 71.7-64.1 119.8-64.1h75.2c46.5 0 90.1 22.5 117.2 60.3l50.7 70.9c2.2 3 4 6.1 5.5 9.4c2.9 6.7 4.3 13.8 4 20.8c-.3 10.6-4.2 21-11.2 29.4zM352 332c0-24.3-19.7-44-44-44s-44 19.7-44 44s19.7 44 44 44s44-19.7 44-44z"/></svg><span>parents</span></router-link>
            <router-link to="../facility/index.html"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M112 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32V224v64V416c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32h48V96zm416 0v32h48c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H528v32c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"/></svg><span>facility</span></router-link>
            <router-link to="../match/index.html"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M86.6 64C119 35.5 158.6 15 202.3 5.6C206 19.1 208 33.3 208 48c0 38.4-13.5 73.7-36.1 101.3L86.6 64zM64 86.6l85.2 85.2C121.7 194.5 86.4 208 48 208c-14.7 0-28.9-2-42.4-5.7C15 158.6 35.5 119 64 86.6zM256 0c64.9 0 124.2 24.2 169.4 64L256 233.4 194.6 172C222.9 138.5 240 95.3 240 48c0-16.2-2-32-5.8-47.1C241.4 .3 248.7 0 256 0zM48 240c47.3 0 90.5-17.1 124-45.4L233.4 256 64 425.4C24.2 380.2 0 320.9 0 256c0-7.3 .3-14.6 .9-21.8C16 238 31.8 240 48 240zm463.1 37.8C496 274 480.2 272 464 272c-47.3 0-90.5 17.1-124 45.4L278.6 256 448 86.6c39.8 45.1 64 104.4 64 169.4c0 7.3-.3 14.6-.9 21.8zm-4.7 31.9C497 353.4 476.5 393 448 425.4l-85.2-85.2C390.3 317.5 425.6 304 464 304c14.7 0 28.9 2 42.4 5.7zM340.1 362.7L425.4 448C393 476.5 353.4 497 309.7 506.4C306 492.9 304 478.7 304 464c0-38.4 13.5-73.7 36.1-101.3zM317.4 340C289.1 373.5 272 416.7 272 464c0 16.2 2 32 5.8 47.1c-7.2 .6-14.5 .9-21.8 .9c-64.9 0-124.2-24.2-169.4-64L256 278.6 317.4 340z"/></svg><span>match</span></router-link>
        </div>
    </footer>
  </div>
</template>

<style>
.local-nav-links{max-width:1000px;margin:0 auto;display:flex;height:100%;align-items:center}
.local-nav-links .product-name{margin-right:auto;font-size:1.2rem}
.local-nav-links a {font-size:0.8rem;color:rgba(29,29,31)}
.local-nav-links h1 {font-weight:bold}
.local-nav{height:52px;border-bottom:1px solid #ddd;padding: 0 1rem;width:100%;box-shadow: 0 1px 6px rgb(32 33 36 / 100%);position:fixed;top:0;left:0;background: #fff;}
.local-nav-links a:not(.product-name){margin-left:2em;}
.icon{width:30px;height:30px;vertical-align:middle}

.gnb{position: fixed;top:52px;width:100%;z-index:20;background: #fff;border-bottom:1px solid #ddd;padding:0 1rem;display:none}
.gnb ul li{line-height:2em;font-size:1.2rem;border-bottom:1px solid #ededed}
.gnb ul li a:hover{font-size:1.4rem}
.close{display:none;}

.footer{position:fixed;bottom:0;left:0;width:100%;height:100px;background: white;border-top:1px solid #ddd}
.footer .box{display:flex;justify-content: space-between;padding:0 1rem;box-sizing: border-box;align-items: center;height:100%;width:100%;max-width: 1000px;margin:auto}
.footer .box a{display:flex;flex-direction:column;align-items: center;}
.footer .box .icon{fill:rgb(29, 29, 31);width:30px;height:30px;margin-bottom:0.5rem}

html{font-size:14px;}
body{font-family:'noto sans kr',sans-serif;color:rgb(29, 29, 31);letter-spacing:-0.05em;background: white;line-height:1.5}
p{line-height:1.6;}
a{color: rgb(29, 29, 31);text-decoration: none;}
table{text-align:center}

</style>
