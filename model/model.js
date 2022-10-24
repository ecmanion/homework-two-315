var MODEL = (function (){
    var homeContent = `<div class="home">
    <div class="home-background">
        <img src="images/home.jpg" alt="">
    </div>
    <div class="home-title">
        <h1>Become a professional baker at home</h1>
        <div class="home-paragraph">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In distinctio iure saepe unde eligendi nulla nihil quod. Totam alias eveniet possimus asperiores necessitatibus officia est dolorum ipsa, inventore velit! Nisi?</p>
        </div>
    </div>
</div>`;
    var browseContent = `<div class="browse-page">
    <div class="browse-area">
        <div class="browse-individual">
            <div class="browse-image">
                <img src="images/baking10.jpg" alt="">
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, eveniet aliquam corrupti incidunt modi, est ut dolore cum excepturi deserunt impedit deleniti dolor enim voluptates in, blanditiis vel error doloremque.</p>
            </div>
        </div>
        <div class="browse-individual">
            <div class="browse-image">
                <img src="images/baking1.jpg" alt="">
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, minus! Deleniti, molestias nihil! Incidunt facilis optio tempore officia explicabo fugiat corrupti suscipit nemo. Suscipit doloribus obcaecati illo necessitatibus quasi vel.</p>
            </div>
        </div>
        <div class="browse-individual">
            <div class="browse-image">
                <img src="images/baking2.jpg" alt="">
            </div>
            <div class="browse-caption">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat, doloremque voluptate, error eius aut earum accusamus culpa tempora maxime delectus, vel libero quae expedita eveniet sed fugiat dolorem molestiae.</p>
            </div>
        </div>
        <div class="browse-individual">
            <div class="browse-image">
                <img src="images/baking3.jpg" alt="">
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officia non porro quidem architecto nostrum aspernatur similique eaque quas qui ullam esse recusandae fugit sint rem ipsam nam, earum tempore.</p>
            </div>
        </div>
        <div class="browse-individual">
            <div class="browse-image">
                <img src="images/baking4.jpg" alt="">
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ducimus deleniti consectetur eos iste perspiciatis sequi quibusdam, assumenda at quaerat corporis tenetur tempore! Obcaecati facere tempora officiis molestiae voluptates dolore!</p>
            </div>
        </div>
        <div class="browse-individual">
            <div class="browse-image">
                <img src="images/baking5.jpg" alt="">
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ullam quae maxime. Non eligendi ipsa saepe quam sapiente deserunt unde voluptatum ullam aliquid rerum, voluptate cum sed distinctio, aut excepturi.</p>
            </div>
        </div>
        <div class="browse-individual">
            <div class="browse-image">
                <img src="images/baking6.jpg" alt="">
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, tenetur laborum? Ullam eum natus ut illum sequi, accusantium distinctio laboriosam modi repudiandae doloribus quae dolorem at eos consequuntur quisquam ea?</p>
            </div>
        </div>
        <div class="browse-individual">
            <div class="browse-image">
                <img src="images/baking7.jpg" alt="">
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eveniet rerum reiciendis eligendi, laboriosam, numquam tempore repudiandae illo quis veniam amet voluptatibus pariatur? Dolorum, id! Nulla ducimus necessitatibus est neque?</p>
            </div>
        </div>
        <div class="browse-individual">
            <div class="browse-image">
                <img src="images/baking8.jpg" alt="">
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, iure odio voluptate tempore natus architecto inventore sit ipsam repellendus atque, quas voluptas hic nemo rem ipsa, eaque commodi velit non.</p>
            </div>
        </div>
        <div class="browse-individual">
            <div class="browse-image">
                <img src="images/baking9.jpg" alt="">
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quisquam ratione debitis ipsam explicabo porro obcaecati. Autem odio nam blanditiis vero officiis, hic doloribus dolore veritatis laudantium? Fuga, cumque velit.</p>
            </div>
        </div>
    </div>
</div>`;
    var aboutContent = `<div class="about-entire">
    <div class="about-smaller">
        <div class="about-title">
            <h1>About Us</h1>
        </div>
        <div class="about-image">
            <img src="images/about.jpg" alt="about">
        </div>
        <div class="about-information">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In repellat reiciendis, aliquid exercitationem earum laborum autem! Deserunt, quos tenetur? Est laborum quod vitae iste quam excepturi adipisci qui, sunt blanditiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reprehenderit odio culpa, consectetur dolorem iure, cumque itaque quibusdam soluta velit cupiditate officiis aspernatur iusto, tempore eum vitae sapiente nemo labore.</p>
        </div>
    </div>
</div>`;
    var contactContent = `<div class="contact-entire">
    <div class="contact-smaller">
    <div class="contact-heading">
        <h1>Contact Us</h1>
    </div>
    <div class="contact-image">
        <img src="" alt="">
    </div>
    <div class="form">
        <input type="text" class="basic" placeholder="Your name...">
        <input type="text" class="basic" placeholder="Email...">
        <input type="text" class="basic" placeholder="Phone number...">
        <input type="text" class="basic" placeholder="Reason for contact...">
    </div>
    </div>
</div>`;

    function initOtherListeners() {

        $("a").click(function(e) {
            let btnId = e.currentTarget.id;
            console.log("Current page is " + btnId);
            MODEL.changePageContent(btnId);
        })
    }
    var _changePageContent = function(pageName) {
        let contentName = pageName + "Content";
        console.log('Pagename is ' + pageName)
        $("#app").html(eval(contentName));

initOtherListeners();
    }

return{
    changePageContent: _changePageContent,
}
})();