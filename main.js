let
    password = document.getElementById('password'),
    btnOK = document.querySelector(".ok"),
    input = document.getElementsByTagName("input"),

    disabledBtn = Array.from(input).slice(2),
    btnLaunch = disabledBtn.pop();

    btnLaunch.setAttribute("disabled", "true");
    disabledBtn.forEach((item) => item.disabled = true);

console.log(password);
console.log(btnOK);
console.log(btnLaunch);
console.log(disabledBtn);

btnOK.addEventListener("click", () => {
    console.log(password.value);
    if (password.value === "" || password.value == null) {
        alert("password is required");
    } else if (password.value === "TrustNo1") {
        disabledBtn.forEach((item) => item.disabled = false);
        console.log(disabledBtn, "able");
        console.log(password.disabled);
        console.log(btnLaunch);
        password.setAttribute("disabled", "true");
        btnOK.setAttribute("disabled", "true");

    } else {
        console.log("disable panel, wrong password");
    }
    password.value = "";
});


let checkBoxes = disabledBtn.filter(el => el.type.toLowerCase() === "checkbox");
console.log(checkBoxes);
let rangeBtns = disabledBtn.filter(el => el.type.toLowerCase() === "range");
console.log(rangeBtns);



    check = () => {
    console.log("checking");
            let checkedCount = 0,
                rangedCount = 0;
            for(let i = 0; i < checkBoxes.length; i++) {
                if(checkBoxes[i].checked) {
                    checkedCount++;
                }
                for(let j = 0; j < rangeBtns.length; j++) {
                    let rangeItem = +rangeBtns[j].value;

                   if(rangeItem === 100) {
                        rangedCount += 1;
                        console.log("range-length", rangeBtns.length, "rangeItem:", rangeItem, "rangedCount:", rangedCount);
                    }
                   if(checkedCount === checkBoxes.length && rangedCount === rangeBtns.length*6) {
               btnLaunch.setAttribute('disabled', 'false');
                       console.log('ready all', btnLaunch);
                       btnLaunch.addEventListener('click', start);
               }  else {
                console.log('checkedCount, rangedCount');
            }
            }}};

function start() {
    console.log(btnLaunch, "3.. 2... 1.. liftoff!");
    document.querySelector('.rocket').animate([
        // keyframes
        {
            left: '18%',
            bottom: '18%'
        },
        {
            left: '22%',
            bottom: '30%'
        },
        {
            left: '28%',
            bottom: '35%',
            transform: 'rotateZ(90deg)'
        },
        {
            left: '68%',
            bottom: '20%'            
        },
        {
            left: '48%',
            bottom: '35%',
            transform: 'rotateZ(180deg)'
        },
        {
            left: '58%',
            bottom: '40%'
        },
        {
            left: '80%',
            bottom: '45%',
        },
    ], {
        // timing options
        duration: 10000,
        iterations: 1
    });}