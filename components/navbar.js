const navbar = () => {
  return `<div id="row1">
    <p>Up to Rs.500 Off on Prepaid Purchases - Use Coupon </p>
    <p>"PREPAID"</p>
    <img class="navbarlogo" src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" alt="">
    <img class="navbarlogo" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="">
    <img class="navbarlogo" src="https://cdn-icons-png.flaticon.com/128/6033/6033716.png" alt="">
    <img class="navbarlogo" src="https://cdn-icons-png.flaticon.com/512/2736/2736014.png" alt="">
    <p>Newsletter</p>
</div>
<div id="row2">
    <div id="row2left">
        <a href="index.html"><img id="imgLogo"
                src="https://meanbuyassets.s3.ap-south-1.amazonaws.com/baselogo.png" alt=""></a>
        <div id="searchbox">
            <form class="searchB" action="">
                <input id="inputsearch" type="search" placeholder="Search" />
                <!-- <div class="searchImg"><img id="glass" src="search.png" alt=""></div> -->
                <img id="searchlogo" src="https://d64lkarmo2mrq.cloudfront.net/icons/search.png" alt="">
            </form>
        </div>
    </div>
    <div id="row2mid">
        <div id="links">
            <p>Seller's Corner | </p>
            <p>Feedback | </p>
            <p>Delivery Info</p>
        </div>
        <div id="log">
            <div id="smalllogin">
                <!-- <i class="fa fa-user-o" aria-hidden="true"></i> -->
                <img id="loginLogo" src="https://cdn-icons-png.flaticon.com/128/2321/2321232.png" alt="">
                <a href="login.html" class="navlogin">LOGIN <span> / </span></a><a class="navlogin"
                    href="signup.html"> SIGN UP</a>
            </div>
            <p id="log2">WELCOME GUEST</p>
        </div>
        <div id="cart">
            <div id="carIm">
                <img class="cartimg" src="http://www.clker.com/cliparts/O/N/s/Q/P/Y/shopping-cart-orange-th.png"
                    alt="">
                <p id="cartcount"></p>
            </div>
        </div>
    </div>
</div>
<div id="row3">
    <li id="categories1"><a href="">Categories</a>
        <div>
            <div id="dropdown_list">
                <ul>
                    <li><a href="">
                            <h4>MEN</h4>
                        </a></li>

                    <li><a href="">Watches</a></li>
                    <li><a href="">
                            <h3>WOMEN</h3>
                        </a></li>
                    <li><a href="">Makeup Accessories</a></li>
                    <li><a href="">clothing</a></li>
                    <li><a href="">Handbags & Cluthes</a></li>
                    <li><a href="">Watches</a></li>
                    <li><a href="">Ballet Flats</a></li>
                    <li><a href="">Sandals</a></li>
                </ul>

                <ul>
                    <li><a href="">
                            <h4>ELECTRONICS</h4>
                        </a></li>

                    <li><a href="">Gaming Accessories</a></li>
                    <li><a href="">Keyboards & Mouse</a></li>
                    <li><a href="">Small Appliances</a></li>

                </ul>

                <ul>
                    <li><a href="">
                            <h4>ESSENTIALS</h4>
                        </a></li>
                    <li><a href="">Home Essentials</a></li>
                    <li><a href="">Mens's Essentials</a></li>
                    <li><a href="">Women Essentials</a></li>
                </ul>

                <ul>
                    <li><a href="">
                            <h4>FLASH SALE</h4>
                        </a></li>

                    <li><a href="">Flash Sale</a></li>
                </ul>

                <ul>
                    <li><a href="">
                            <h4>HOME & LIVING</h4>
                        </a></li>
                    <li><a href="">Bath & Storage</a></li>
                    <li><a href="">Fitness Merchandise</a></li>
                    <li><a href="">Gardening</a></li>
                    <li><a href="">Home Decor</a></li>
                    <li><a href="">Home Improvement</a></li>
                    <li><a href="">Kitchen Wares</a></li>
                    <li><a href="">Nordic Ceiling Lights</a></li>
                    <li><a href="">Pet Products</a></li>
                </ul>

                <ul>
                    <li><a href="">
                            <h4>KIDS & MOM</h4>
                        </a></li>

                    <li><a href="">Action Figures</a></li>
                    <li><a href="">Discovery Adventure</a></li>
                    <li><a href="">Disney</a></li>
                    <li><a href="">Hello Kitty</a></li>
                    <li><a href="">Kid's Shoes</a></li>
                    <li><a href="">Marvel</a></li>
                    <li><a href="">Minions</a></li>
                    <li><a href="">School Backpacks</a></li>
                    <li><a href="">Toys</a></li>
                </ul>
                <ul>
                    <li><a href="">
                            <h4>MEANBUY DEALS</h4>
                        </a></li>

                    <li><a href="">Gifts</a></li>
                    <li><a href="">Electronics</a></li>
                    <li><a href="">Men's Watches</a></li>
                    <li><a href="">Top Selling Smart Watches</a></li>

                </ul>
                <ul>
                    <li><a href="">
                            <h4>MOBILES & TABS</h4>
                        </a></li>

                    <li><a href="">Bluethooth Earphone</a></li>
                    <li><a href="">Mobile Accessories</a></li>
                    <li><a href="">Sporting Bluetooth</a></li>
                    <li><a href="">Wired Headphones</a></li>
                    <li><a href="">Wireless Chargers</a></li>
                    <li><a href="">Wireless Speakers</a></li>
                </ul>
            </div>
        </div>
    </li>

    <li><a href="flashsale.html">Flash Sale</a></li>
    <li><a href="bestdeals.html">Best deals</a></li>
    <li><a href="shopbybrand.html">Shop by brand</a></li>
    <li><a href="flashsale.html">Trending</a></li>
    <li><a href="bestdeals.html">New Arrival</a></li>

</div>`;
};

export { navbar };
