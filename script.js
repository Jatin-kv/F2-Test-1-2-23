let signup = document.getElementById("signupbtn");
let verify = document.getElementById("verifybtn");
let playnow = document.getElementById("playnowbtn");
let resultbtn = document.getElementById("resultbtn");
let form = document.getElementById("myform");
let submitbtn = document.getElementById("submitbtn");
let dice = document.getElementById("dice");
let coupon = document.getElementById("coupon");
let message = document.getElementById("message");
let userinfo = document.getElementById("userinfo");
let result = document.getElementById("result");
let total = document.getElementById("total");
let chancesleft = document.getElementById("chancesleft");
//

let clicks = 0;
let sum = 0;
let times = 0;
let chances = 3;

signup.addEventListener("click", () => {
    if (clicks == 0) {
        form.style.display = "block";
        userinfo.style.display = "none";
        clicks++;
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (clicks == 1) 
    message.style.display = "block";

    clicks++;
});

verify.addEventListener("click", () => {
    if (clicks == 2) {
        form.style.display = "none";
        userinfo.style.display = "block";
        const fname = document.getElementById("name").value;
        const username = document.getElementById("username").value;
        userinfo.innerHTML = `Name:  ${fname}<br><br>Username: ${username}`;
        clicks++;
    }
});

let diceContainer = document.getElementById("dice-container");
playnow.addEventListener("click", function () {
    if (clicks == 3) {
        userinfo.style.display = "none";
        diceContainer.style.display = "block";
        clicks++;
    }
});

dice.addEventListener("click", () => {
    if (clicks == 4) {
        let randomNum = Math.floor(Math.random() * 6) + 1;
        sum = sum + randomNum;
        chancesleft.innerHTML = "Chances left = " + --chances;
        result.innerHTML = "You Got = " + randomNum;
        total.innerHTML = "Total sum of 3 chances = " + sum;
        times++;
        if (times == 3) {
            if (sum > 10) {
                clicks++;
            } else {
                times = 0;
                chances = 3;
                sum = 0;
                if (times == 0) {
                    result.innerText = "Please try again and score more than 10.";
                } else {
                    result.innerText = "Bad luck";
                }
            }
        }
    }
});

let couponContainer = document.getElementById("couponContainer");
resultbtn.addEventListener("click", () => {
    if (clicks === 5) {
        diceContainer.style.display = "none";
        let couponNum = () => {
            const characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let result = " ";
            const charactersLength = characters.length;
            for (let i = 0; i < 10; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }

            return result;
        };
        coupon.innerHTML = couponNum();
        couponContainer.style.display = "block";
        clicks++;
    }
});
