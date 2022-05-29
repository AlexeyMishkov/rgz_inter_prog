let products = [
    {href: 'Ferrari488.html', text: 'Ferrari 488', images: ['Ferrari488.jpg'], price: '30 000 000 &#8381', info: 'Ferrari 488 GTB- среднемоторное спортивное двухместное купе. Его габаритные размеры составляют: длина 4568 мм, ширина 1952 мм, высота 1213 мм, а величина колесной базы равняется 2650 миллиметрам. Автомобиль построен на пространственной раме, выполненной из алюминия, из которого также выполнена подвеска.'},
    {href: 'FerrariF8.html', text: 'Ferrari F8', images: ['Ferrari_F8.jpg'], price: '35 000 000 &#8381', info: 'Ferrari F8 Tributo построен на платформе 488 GTB и оснащен 3,9-литровым двигателем V8 с двумя турбинами, который выдает 720 л. с. при 8 000 об/мин и 770 Нм, доступных с 3 250 об/мин. Таким же мотором комплектуется 488 Pista, правда там максимальный крутящий момент доступен несколько раньше (с 3 000 об/мин).'},
    {href: 'lamborghini_aventador.html', text: 'Lamborghini Aventador', images: ['lamborghini_aventador.jpg'], price: '50 000 000 &#8381', info: 'Lamborghini Aventador (код кузова — LP700-4) — суперкар, выпускавшийся компанией Lamborghini с 2011 по 2021 год. Aventador пришёл на смену Lamborghini Murciélago и оснащался 6,5-литровым V-образным 12-цилиндровым двигателем мощностью от 700 до 780 л. с. в зависимости от модификации.'},
    {href: 'lamborghini_huracan.html', text: 'Lamborghini Huracan', images: ['lamborghini_huracan.jpg'], price: '45 000 000 &#8381', info: 'Lamborghini Huracán LP 610-4 оборудован 5,2-литровым 10-цилиндровым бензиновым атмосферным двигателем мощностью 610 л. с. (450 кВт) при 8,250 оборотах и 560 Нм крутящего момента при 6,500 оборотах. Сухой вес модели составляет 1,422 кг и соотношение массы к мощности равно 2.33 кг/л.'},
    {href: 'Ferrari_812.html', text: 'Ferrari 812', images: ['Ferrari_812.jpg'], price: '37 500 000 &#8381', info: 'Под капотом этого эксклюзивного суперкара находится высокоэффективный двигатель V12 мощностью 800 лошадиных сил, устанавливающий новые стандарты для моделей своего класса. Разгон с 0 до 100 км/ч 812 Superfast осуществляет всего за 2,9 секунды, а его максимальная скорость составляет 340 км/ч.'},
    {href: 'Buggati_chiron.html', text: 'Bugatti Chiron', images: ['Buggati_chiron.jpg'], price: '90 000 000 &#8381', info: 'Bugatti Chiron- спортивное двухместное купе, его габаритные характеристики составляют: длина 4544 мм, ширина 2038 мм, высота 1212 мм, а величина дорожного просвета будет зависеть от выбранного режима управляющей электроники.'},
    {href: 'Bugatti_divo.html', text: 'Bugatti Divo', images: ['Bugatii_divo.jpg'], price: '80 000 000 &#8381', info: 'Bugatti Divo — спортивный автомобиль автопроизводителя Bugatti. Автомобиль назван в честь французского гонщика Альберта Диво, который участвовал в гонках за команду Bugatti в 1920-х годах и выиграл гонку Targa Florio дважды.'},
    {href: 'Bugatii_La_Voiture_Noire.html', text: 'Bugatti La Voiture Noire', images: ['Bugatti_La_Voiture_Noire.jpg'], price: '1 000 000 000 &#8381', info: ' Atlantic, а точнее, одному из четырех построенных экземпляров, который принадлежал лично Жану Бугатти, сыну владельца компании. То купе, окрашенное в черный цвет, было известно под прозвищем La Voiture Noire, то есть по-французски просто «черный автомобиль».'},
    {href: 'Tesla_modelx.html', text: 'Tesla Model X', images: ['Tesla_modelx.jpg'], price: '5 000 000 &#8381', info: 'Тесла Модель Х- это полноразмерный кроссовер с тремя рядами сидений. Его габаритные размеры составляют: длина 5004 мм, ширина 2083 мм, высота 1626 мм, а колесная база- 3061 мм. Что касается дорожного просвета, то он напрямую зависит от положения пневматической подвески.'},
    {href: 'Tesla_model_Y.html', text: 'Tesla Model Y', images: ['Tesla_model_Y.jpg'], price: '6 000 000 &#8381', info: 'Tesla Model Y — электрический кроссовер производства компании Tesla. Модель была представлена в марте 2019 года, серийное производство начато на фабрике во Фримонте в январе 2020, а поставки потребителям с 13 марта 2020. Машина представлена как кроссовер среднего класса, аналогичная таким машинам как VW Touareg, Nissan Murano, Lexus RX и её электрическому конкуренту под названием Audi E-tron. Model Y предлагается с опциональным третьим рядом сидений в семиместной конфигурации'},
    {href: 'Tesla_model_3.html', text: 'Tesla Model 3', images: ['Tesla_model_3.jpg'], price: '4 500 000 &#8381', info: 'По своим размерам Tesla Model 3 сопоставима с седаном Mercedes-Benz C-Class: длина 4694 мм, ширина 1933 мм (с учетом боковых зеркал), высота 1443 мм, колесная база 2875 мм. Стандартная модель снаряженной массой 1609 кг обладает запасом хода 354 км, разгоном до 97 км/ч за 5,6 секунды и максимальной скоростью 209 км/ч.'},
    {href: 'Audi_A3.html', text: 'Audi A3', images: ['Audi_A3.jpg'], price: '7 000 000 &#8381', info: 'Audi A3 — хэтчбэк малого семейного класса, производимый концерном Volkswagen с 1996 года. В 1996—2003 годах выпускалось первое поколение, с 2003 по 2012 — второе, а в 2012 появилось 3 поколение популярного в Европе компактного автомобиля.'},
    {href: 'Audi_A8.html', text: 'Audi A8', images: ['Audi_A8.jpg'], price: '8 000 000 &#8381', info: 'В топовой версии устанавливался W-образный 12 цилиндровый мотор. Большинство покупателей сделали выбор в пользу 8 цилиндрового двигателя рабочим объёмом 4,2 л, на базе которого позднее была создана подчёркнуто спортивная модель — Audi S8. Первым дизельным двигателем для Audi A8 стал 2.5 TDI 150 л.'},
    {href: 'Audi_A6.html', text: 'Audi A6', images: ['Audi_A6.jpg'], price: '6 500 000 &#8381', info: 'Audi 100, с 1994 года Audi A6, — семейство автомобилей бизнес-класса, выпускающихся под маркой Audi, внутреннее обозначение — «тип C». Премьера Audi 100 состоялась в 1968 году, с августа 1994 года этот модельный ряд носит название А6. 4дв. седан (5мест.)'},
    {href: 'Audi_A5.html', text: 'Audi A5', images: ['Audi_A5.jpg'], price: '6 000 000 &#8381', info: 'Audi A5 — спортивный автомобиль (двухдверное купе на платформе Audi A4), производимый немецким aвтопроизводителем Audi с 2007 года на заводе в Ингольштадте. Audi A5 была одновременно представлена на Женевском автосалоне и Мельбурнском международном автосалоне 6 марта 2007 года.'},
    {href: 'BMW_X1.html', text: 'BMW X1', images: ['BMW_X1.jpg'], price: '4 200 000 &#8381', info: 'BMW X1 — компактный пятиместный кроссовер. Производство автомобиля началось на заводе в Лейпциге, Германия, в октябре 2009 года. Первое поколение было создано на платформе универсала BMW 3-й серии, отличалось шасси и электрогидравлическим усилителем руля.'},
    {href: 'BMW_X3.html', text: 'BMW X3', images: ['BMW_X3.jpg'], price: '4 900 000 &#8381', info: 'BMW X3 — люксовый компактный кроссовер немецкой компании BMW. X3 первого поколения разработан и выпускался совместно с компанией Magna Steyr на заводе в Граце, Австрия. Второе поколение кроссовера было представлено в июле 2010 года, производство автомобиля началось 1 сентября 2010 года.'},
    {href: 'BMW_X6.html', text: 'BMW X6', images: ['BMW_X6.jpg'], price: '6 000 000 &#8381', info: 'BMW X6 — среднеразмерный кроссовер, выпускаемый компанией BMW. Он сочетает в себе как признаки внедорожника (полный привод, большой дорожный просвет, большие колёса, тяговитый двигатель), так и признаки купе (сильный скос крыши в задней части автомобиля).'},
    {href: 'Bronevik.html', text: 'Bronevik', images: ['Bronevik.jpg'], price: '100 000 000 &#8381', info: 'На этой машине катается сам Путин'},
    {href: 'jigul.html', text: 'Жигули', images: ['jigul.jpg'], price: '50 000 &#8381', info: 'Лучшая в мире в машине'},

];
function showModal(messageText, buttonText) {
    //alert('Извините, еще не готово...');
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.top = '50px';
    modal.style.left = '40%';
    modal.style.transform = 'scale(01)';

    let message = modal.getElementsByClassName('message')[0];
    message.innerHTML = messageText;
    let button = modal.getElementsByTagName('button')[0];
    button.innerHTML = buttonText;
 
    document.body.style.overflow = 'hidden';
    let = overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    overlay.style.backgroundcolor = 'rgba(0, 100, 200, 0.3)';
 
    return false;
 
 
 }
 function hideModal() {
     let modal = document.getElementsByClassName('modal')[0];
     setTimeout(function(){
         modal.style.visibility = 'hidden'
     }, 350);
     modal.style.opacity = '0';
     modal.style.top = '100%';
     modal.style.transform = 'scale(0)';
 
     document.body.style.overflow = 'auto';
     let = overlay = document.getElementsByClassName('overlay')[0];
     setTimeout(function(){
         overlay.style.visibility = 'hidden';
     }, 200);
     overlay.style.opacity = '0';
     overlay.style.backgroundcolor = 'rgba(255, 0, 0, 0.3)';
 
     
 }

function notReadyAlert() {
    alert('Извините, еще не готово!');
    return false;
}
 
function search() {
    let cards = document.getElementsByClassName('card');
    let name = document.getElementById('search').value;
    let nameRegExp = new RegExp(name, 'i');
    for (let i = 0; i<products.length; i++) {
       let product = products[i];
       if(nameRegExp.test(product.text)) {
          let card = cards[i];
          card.style.border = '5px dashed red';
          card.style.display = 'inline-block';
          card.style.backgroundcolor = 'DarkSeaGreen';
 
          setTimeout(function(){
             card.style.border = 'none';
             card.style.backgroundcolor = '';
          }, 2000);
       }
    }
 }

 

function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML='';
 
    let items = [
        {href: 'rgr.html', text: 'Товары'},
        {href: 'contacts.html', text: 'Контакты'},
        {href: 'promotions.html', text: 'Акции'},
    ];
 
    for(let i=0; i<items.length; i++) {
        let link = document.createElement('a');
        link.innerText = items[i].text;
        link.href = items[i].href;
        if(items[i].href == '') {
            link.addEventListener('click', notReadyAlert);
        }
 
        let menuItem = document.createElement('li');
        menuItem.appendChild(link);
 
        menu.appendChild(menuItem);
    }
}
function showProductInfo(product) {
    let imagesList = '';
    for(let i=0; i<product.images.length; i++){
        imagesList = imagesList + `<div><img src="${product.images[i]}"></div>`
    }
        showModal(`
            ${imagesList}
            <div>${product.text}</div>
            <div>${product.price}</div>
            <div><i>${product.info}</i></div>
            `, 'ОК');
        }
        function generateCard() {
            let main = document.querySelector('main');
            for(let i = 0; i<products.length; i++){
               let product = document.createElement('div');
               product.className= 'card';
               product.innerHTML = `
               <a href="#">
                  <div class="image"><img src="${products[i].images[0]}" class="scale"></div>
                  <div class="product-name">"${products[i].text}"</div>
                  <div class="price" onmouseover="ColorPrice(this)" onmouseout="ColorPrice1(this)">${products[i].price}</div>
                  </a>
                  `;
               product.querySelector('a').addEventListener('click', function(){
                  showProductInfo(products[i]);
               });
         
               main.appendChild(product);
            }
         }


function loaded() {
 let searchbox = document.getElementById('search');
 searchbox.addEventListener('keydown', function (key) {
     if(key.key == 'Enter')
     search();
 });
 
    generateMenu();
    generateCard();
 
}
