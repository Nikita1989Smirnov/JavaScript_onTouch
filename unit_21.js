
// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/

let a12 = [
    ["1.png", "Череп"],
    ["2.png", "Тыква"],
    ["3.png", "Паук"],
    ["4.png", "Яд"],
    ["5.png", "Котел"],
    ["6.png", "Рука"]
];


let mass_img = document.querySelectorAll(".img-12-min");
let big_img = document.querySelector(".div-12-max img");
let img_text = document.querySelector(".img-12-text");
let reset = document.querySelector(".reset");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
img_text.textContent = "Череп";

for (let i = 0; i < mass_img.length; i++) {

    mass_img[i].ontouchstart = function () {

        for (let k = 0; k < a12.length; k++) {

            for (let j = 0; j < a12[k].length; j++) {

                for (let z = 0; z < mass_img.length; z++) {

                    mass_img[z].classList.remove("active-img");

                }

                this.classList.add("active-img");

                if (mass_img[i].dataset.text == a12[k][j]) {

                    img_text.textContent = a12[k][j];


                }

                if (mass_img[i].dataset.num == a12[k][j]) {

                    big_img.setAttribute("src", `img/${a12[k][j]}`);

                }

            }

        }

    }
}

reset.onclick = function () {

    for (let i = 0; i < mass_img.length; i++) {

        if (i != 0) {

            mass_img[i].classList.remove("active-img");

        } else {

            mass_img[i].classList.add("active-img");
            img_text.textContent = mass_img[i].dataset.text;
            big_img.setAttribute("src", `img/${mass_img[i].dataset.num}`);

        }

    }

}

prev.onclick = function () {

    for (let i = 0; i < mass_img.length; i++) {

        if (mass_img[i].classList.contains("active-img")) {

            if ((i - 1) < 0) {

                mass_img[i].classList.remove("active-img");
                mass_img[mass_img.length - 1].classList.add("active-img");
                big_img.setAttribute("src", `img/${mass_img[mass_img.length - 1].dataset.num}`);
                img_text.textContent = mass_img[mass_img.length - 1].dataset.text;
                break;


            } else {

                mass_img[i].classList.remove("active-img");
                mass_img[i - 1].classList.add("active-img");
                big_img.setAttribute("src", `img/${mass_img[i - 1].dataset.num}`);
                img_text.textContent = mass_img[i - 1].dataset.text;
                break;

            }

        }

    }

}

next.onclick = function () {

    for (let i = 0; i < mass_img.length; i++) {

        if (mass_img[i].classList.contains("active-img")) {

            if ((i + 1) == mass_img.length) {

                mass_img[i].classList.remove("active-img");
                mass_img[0].classList.add("active-img");
                big_img.setAttribute("src", `img/${mass_img[0].dataset.num}`);
                img_text.textContent = mass_img[0].dataset.text;
                break;

            } else {

                mass_img[i].classList.remove("active-img");
                mass_img[i + 1].classList.add("active-img");
                big_img.setAttribute("src", `img/${mass_img[i + 1].dataset.num}`);
                img_text.textContent = mass_img[i + 1].dataset.text;
                break;

            }

        }

    }

}