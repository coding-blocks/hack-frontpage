<template>

    <div>

    <div class="a-hb p-0">
        <div class="d-flex px-5 py-4 justify-content-between align-items-center">
            <div class="d-md-none">
                <div class="hamburger-menu mr-3">
                    <div class="ham-toggle">
                        <div class="hamburger">
                            <span></span> <span></span> <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-10 col-12">
                <div class="row align-items-center">
                    <div class="col-xl-2 col-3 px-lg-4 px-0">
                        <img src="../images/hb_logo.png" alt="Logo">
                    </div>
                    <div class="col-xl-10 col-9 dsp-none-md">
                        <div class="d-flex align-items-center h-100">
                            <div class="font-sm light px-3"><a href=""> Dashboard </a>
                            </div>
                            <div class="font-sm light px-3"><a href=""> Daily Code Bytes</a>
                            </div>
                            <div class="font-sm light px-3"><a href="">Practice Problems</a>
                            </div>
                            <div class="font-sm light px-3"><a href="">Contests</a>
                            </div>
                            <div class="font-sm light px-3"><a href="">Competitions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <a class="button-solid button-orange dsp-none-sm white" href="">Get Started</a>
        </div>
    </div>


        <div class="d-flex justify-content-end py-3 pr-5">
            <span class="px-3 pointer">Courses <i class="ml-1 fas fa-chevron-down"></i></span>
            <div class="px-3">
                <a href="https://codingblocks.com/about.html" target="_blank">About Us</a>
            </div>
            <div class="px-3">
                <a href="https://codingblocks.com/resources" target="_blank">Resources</a>
            </div>
            <div class="px-3">
                <a href="https://codingblocks.com/campus-ambassador-program.html" target="_blank">Campus Ambassadors</a>
            </div>
            <div class="px-3">
                <a href="https://codingblocks.com/centres/" target="_blank">Contact Us</a>
            </div> <slot name="header"></slot>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'Navbar'
    }
</script>

<style>


    element.style {
    }
    .pl-5, .px-5 {
        padding-left: 3rem !important;
    }
    .pr-5, .px-5 {
        padding-right: 3rem !important;
    }
    .pb-4, .py-4 {
        padding-bottom: 1.5rem !important;
    }
    .pt-4, .py-4 {
        padding-top: 1.5rem !important;
    }

    .align-items-center {
        align-items: center !important;
    }
    .justify-content-between {
        justify-content: space-between !important;
    }
    .d-flex {
        display: flex !important;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    * {
        outline: none;
    }
    user agent stylesheet
    div {
        display: block;
    }
    body {
        font-family: "Gilroy","Nunito Sans",sans-serif;
        font-size: inherit;
        font-weight: normal;
        padding-top: 70px;
    }
    html {
        font-family: "Gilroy","Nunito Sans",sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font-size: 14px;
        color: #333;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }

</style>
