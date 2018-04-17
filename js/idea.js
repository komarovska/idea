function changeRight1() {
	document.getElementById("lefttitle").innerHTML = "Продакшн";
	document.getElementById("middletitle").innerHTML = "Піар";
	document.getElementById("righttitle").innerHTML = "Реклама";
	document.getElementById("description").innerHTML = "Створення контенту у соціальних мережах, засобах масової інформації; допомога в організація івентів.";
	document.getElementById("arrowright").onclick = function(){ changeRight2(); };
	document.getElementById("arrowleft").onclick = function(){ changeRight5(); };

}


function changeRight2() {
	document.getElementById("lefttitle").innerHTML = "Дизайн";
	document.getElementById("middletitle").innerHTML = "Продакшн";
	document.getElementById("righttitle").innerHTML = "Піар";
	document.getElementById("description").innerHTML = "Відео-, фотопродакшн та реалізація креативної рекламної ідеї студентами профільної спеціальності.";
	document.getElementById("arrowright").onclick = function(){ changeRight3(); };
	document.getElementById("arrowleft").onclick = function(){ changeRight1(); };
}

function changeRight3() {
	document.getElementById("lefttitle").innerHTML = "Брендинг";
	document.getElementById("middletitle").innerHTML = "Дизайн";
	document.getElementById("righttitle").innerHTML = "Продакшн";
	document.getElementById("description").innerHTML = "Створення айдентики, дизайн упаковки, постерів, банерів та реалізація креативної рекламної ідеї.";
	document.getElementById("arrowright").onclick = function(){ changeRight4(); };
	document.getElementById("arrowleft").onclick = function(){ changeRight2(); };
}

function changeRight4() {
	document.getElementById("lefttitle").innerHTML = "Реклама";
	document.getElementById("middletitle").innerHTML = "Брендинг";
	document.getElementById("righttitle").innerHTML = "Дизайн";
	document.getElementById("description").innerHTML = "Ми створимо систему, яка буде втілена у візуальній айдентиці, та віднайдемо особливі ціннісні характеристики, асоціації, емоції, які потрібно закріпити у свідомості людини.";
	document.getElementById("arrowright").onclick = function(){ changeRight5(); };
	document.getElementById("arrowleft").onclick = function(){ changeRight3(); };
}

function changeRight5() {
	document.getElementById("lefttitle").innerHTML = "Піар";
	document.getElementById("middletitle").innerHTML = "Реклама";
	document.getElementById("righttitle").innerHTML = "Брендинг";
	document.getElementById("description").innerHTML = "Створення креативної рекламної кампанії у будь-якому форматі і медіа: від класичної до експериментальної, від ТБ-реклами до діджитал проекту. За необхідності робота над рекламною стратегією";
	document.getElementById("arrowright").onclick = function(){ changeRight1(); };
	document.getElementById("arrowleft").onclick = function(){ changeRight4(); };
}


